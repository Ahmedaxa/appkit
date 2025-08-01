import { proxy, ref } from 'valtio/vanilla'

import type { CaipAddress, ChainNamespace } from '@reown/appkit-common'
import type { Balance } from '@reown/appkit-common'

import { BalanceUtil } from '../utils/BalanceUtil.js'
import { ConstantsUtil } from '../utils/ConstantsUtil.js'
import { CoreHelperUtil } from '../utils/CoreHelperUtil.js'
import type {
  ConnectedWalletInfo,
  NamespaceTypeMap,
  PreferredAccountTypes,
  SocialProvider,
  User
} from '../utils/TypeUtil.js'
import { withErrorBoundary } from '../utils/withErrorBoundary.js'
import { ChainController } from './ChainController.js'
import { SnackController } from './SnackController.js'

// -- Types --------------------------------------------- //
export interface AccountControllerState {
  currentTab: number
  caipAddress?: CaipAddress
  user?: User
  address?: string
  addressLabels: Map<string, string>
  balance?: string
  balanceSymbol?: string
  balanceLoading?: boolean
  profileName?: string | null
  profileImage?: string | null
  addressExplorerUrl?: string
  smartAccountDeployed?: boolean
  socialProvider?: SocialProvider
  tokenBalance?: Balance[]
  shouldUpdateToAddress?: string
  connectedWalletInfo?: ConnectedWalletInfo
  preferredAccountType?: NamespaceTypeMap[keyof NamespaceTypeMap]
  socialWindow?: Window
  farcasterUrl?: string
  status?: 'reconnecting' | 'connected' | 'disconnected' | 'connecting'
  lastRetry?: number
}

// -- State --------------------------------------------- //
const state = proxy<AccountControllerState>({
  currentTab: 0,
  tokenBalance: [],
  smartAccountDeployed: false,
  addressLabels: new Map()
})

// -- Controller ---------------------------------------- //
const controller = {
  state,

  replaceState(newState: AccountControllerState | undefined) {
    if (!newState) {
      return
    }

    Object.assign(state, ref(newState))
  },

  subscribe(callback: (val: AccountControllerState) => void) {
    return ChainController.subscribeChainProp('accountState', accountState => {
      if (accountState) {
        return callback(accountState)
      }

      return undefined
    })
  },

  subscribeKey<K extends keyof AccountControllerState>(
    property: K,
    callback: (val: AccountControllerState[K]) => void,
    chain?: ChainNamespace
  ) {
    let prev: AccountControllerState[K] | undefined = undefined

    return ChainController.subscribeChainProp(
      'accountState',
      accountState => {
        if (accountState) {
          const nextValue = accountState[
            property as keyof typeof accountState
          ] as AccountControllerState[K]
          if (prev !== nextValue) {
            prev = nextValue
            callback(nextValue)
          }
        }
      },
      chain
    )
  },

  setStatus(status: AccountControllerState['status'], chain: ChainNamespace | undefined) {
    ChainController.setAccountProp('status', status, chain)
  },

  getCaipAddress(chain: ChainNamespace | undefined) {
    if (!chain) {
      return undefined
    }

    return ChainController.state.chains.get(chain)?.accountState?.caipAddress
  },

  setCaipAddress(
    caipAddress: AccountControllerState['caipAddress'],
    chain: ChainNamespace | undefined
  ) {
    const newAddress = caipAddress ? CoreHelperUtil.getPlainAddress(caipAddress) : undefined

    if (chain === ChainController.state.activeChain) {
      ChainController.state.activeCaipAddress = caipAddress
    }

    ChainController.setAccountProp('caipAddress', caipAddress, chain)
    ChainController.setAccountProp('address', newAddress, chain)
  },

  setBalance(
    balance: AccountControllerState['balance'],
    balanceSymbol: AccountControllerState['balanceSymbol'],
    chain: ChainNamespace
  ) {
    ChainController.setAccountProp('balance', balance, chain)
    ChainController.setAccountProp('balanceSymbol', balanceSymbol, chain)
  },

  setProfileName(profileName: AccountControllerState['profileName'], chain: ChainNamespace) {
    ChainController.setAccountProp('profileName', profileName, chain)
  },

  setProfileImage(profileImage: AccountControllerState['profileImage'], chain?: ChainNamespace) {
    ChainController.setAccountProp('profileImage', profileImage, chain)
  },

  setUser(user: AccountControllerState['user'], chain: ChainNamespace | undefined) {
    ChainController.setAccountProp('user', user, chain)
  },

  setAddressExplorerUrl(
    explorerUrl: AccountControllerState['addressExplorerUrl'],
    chain: ChainNamespace | undefined
  ) {
    ChainController.setAccountProp('addressExplorerUrl', explorerUrl, chain)
  },

  setSmartAccountDeployed(isDeployed: boolean, chain: ChainNamespace | undefined) {
    ChainController.setAccountProp('smartAccountDeployed', isDeployed, chain)
  },

  setCurrentTab(currentTab: AccountControllerState['currentTab']) {
    ChainController.setAccountProp('currentTab', currentTab, ChainController.state.activeChain)
  },

  setTokenBalance(
    tokenBalance: AccountControllerState['tokenBalance'],
    chain: ChainNamespace | undefined
  ) {
    if (tokenBalance) {
      ChainController.setAccountProp('tokenBalance', tokenBalance, chain)
    }
  },
  setShouldUpdateToAddress(address: string, chain: ChainNamespace | undefined) {
    ChainController.setAccountProp('shouldUpdateToAddress', address, chain)
  },

  addAddressLabel(address: string, label: string, chain: ChainNamespace | undefined) {
    if (!chain) {
      return
    }

    const map = ChainController.state.chains.get(chain)?.accountState?.addressLabels || new Map()
    map.set(address, label)
    ChainController.setAccountProp('addressLabels', map, chain)
  },

  removeAddressLabel(address: string, chain: ChainNamespace | undefined) {
    if (!chain) {
      return
    }

    const map = ChainController.state.chains.get(chain)?.accountState?.addressLabels || new Map()
    map.delete(address)
    ChainController.setAccountProp('addressLabels', map, chain)
  },

  setConnectedWalletInfo(
    connectedWalletInfo: AccountControllerState['connectedWalletInfo'],
    chain: ChainNamespace
  ) {
    ChainController.setAccountProp('connectedWalletInfo', connectedWalletInfo, chain, false)
  },

  setPreferredAccountType(
    preferredAccountType: PreferredAccountTypes[ChainNamespace],
    chain: ChainNamespace
  ) {
    ChainController.setAccountProp('preferredAccountType', preferredAccountType, chain)
  },

  setSocialProvider(
    socialProvider: AccountControllerState['socialProvider'],
    chain: ChainNamespace | undefined
  ) {
    if (socialProvider) {
      ChainController.setAccountProp('socialProvider', socialProvider, chain)
    }
  },

  setSocialWindow(
    socialWindow: AccountControllerState['socialWindow'],
    chain: ChainNamespace | undefined
  ) {
    ChainController.setAccountProp(
      'socialWindow',
      socialWindow ? ref(socialWindow) : undefined,
      chain
    )
  },

  setFarcasterUrl(
    farcasterUrl: AccountControllerState['farcasterUrl'],
    chain: ChainNamespace | undefined
  ) {
    ChainController.setAccountProp('farcasterUrl', farcasterUrl, chain)
  },

  async fetchTokenBalance(onError?: (error: unknown) => void): Promise<Balance[]> {
    state.balanceLoading = true
    const chainId = ChainController.state.activeCaipNetwork?.caipNetworkId
    const chain = ChainController.state.activeCaipNetwork?.chainNamespace
    const caipAddress = ChainController.state.activeCaipAddress
    const address = caipAddress ? CoreHelperUtil.getPlainAddress(caipAddress) : undefined

    if (
      state.lastRetry &&
      !CoreHelperUtil.isAllowedRetry(state.lastRetry, 30 * ConstantsUtil.ONE_SEC_MS)
    ) {
      state.balanceLoading = false

      return []
    }

    try {
      if (address && chainId && chain) {
        const balance = await BalanceUtil.getMyTokensWithBalance()

        AccountController.setTokenBalance(balance, chain)
        state.lastRetry = undefined
        state.balanceLoading = false

        return balance
      }
    } catch (error) {
      state.lastRetry = Date.now()

      onError?.(error)
      SnackController.showError('Token Balance Unavailable')
    } finally {
      state.balanceLoading = false
    }

    return []
  },

  resetAccount(chain: ChainNamespace) {
    ChainController.resetAccount(chain)
  }
}

export const AccountController = withErrorBoundary(controller)
