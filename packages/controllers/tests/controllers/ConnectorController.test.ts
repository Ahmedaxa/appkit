import { beforeEach, describe, expect, it, vi } from 'vitest'

import { ConstantsUtil, getW3mThemeVariables } from '@reown/appkit-common'

import {
  type AuthConnector,
  ChainController,
  ConnectorController,
  type Metadata,
  OptionsController,
  RouterController,
  type SdkVersion,
  type ThemeMode,
  type ThemeVariables
} from '../../exports/index.js'
import { mockChainControllerState } from '../../exports/testing.js'
import { CUSTOM_DEEPLINK_WALLETS, MobileWalletUtil } from '../../src/utils/MobileWallet.js'

// -- Setup --------------------------------------------------------------------
const ORIGINAL_HREF = 'https://example.com/path'

const authProvider = {
  syncDappData: (_args: { metadata: Metadata; sdkVersion: SdkVersion; projectId: string }) =>
    Promise.resolve(),
  syncTheme: (_args: { themeMode: ThemeMode; themeVariables: ThemeVariables }) => Promise.resolve()
}

const walletConnectConnector = {
  id: 'walletConnect',
  explorerId: 'walletConnectId',
  type: 'WALLET_CONNECT',
  chain: ConstantsUtil.CHAIN.EVM,
  name: 'WalletConnect'
} as const
const walletConnectSolanaConnector = {
  id: 'walletConnect-solana',
  explorerId: 'walletConnectId-slo',
  type: 'WALLET_CONNECT',
  chain: ConstantsUtil.CHAIN.SOLANA,
  name: 'WalletConnect'
} as const
const externalConnector = {
  id: 'external',
  type: 'EXTERNAL',
  chain: ConstantsUtil.CHAIN.EVM,
  name: 'External'
} as const
const evmAuthConnector = {
  id: 'ID_AUTH',
  type: 'AUTH',
  provider: authProvider,
  chain: ConstantsUtil.CHAIN.EVM,
  name: 'Auth'
} as const
const solanaAuthConnector = {
  id: 'ID_AUTH',
  type: 'AUTH',
  provider: authProvider,
  chain: ConstantsUtil.CHAIN.SOLANA,
  name: 'Auth'
} as const

const announcedConnector = {
  id: 'announced',
  type: 'ANNOUNCED',
  info: { rdns: 'announced.io' },
  chain: ConstantsUtil.CHAIN.EVM,
  name: 'Announced'
} as const

const announcedConnectorSolana = {
  id: 'announced',
  type: 'ANNOUNCED',
  info: { rdns: 'announced.solana.io' },
  chain: ConstantsUtil.CHAIN.SOLANA,
  name: 'Announced'
} as const

const syncDappDataSpy = vi.spyOn(authProvider, 'syncDappData')
const syncThemeSpy = vi.spyOn(authProvider, 'syncTheme')

const mockDappData = {
  metadata: {
    description: 'Desc',
    name: 'Name',
    url: 'url.com',
    icons: ['icon.png']
  },
  projectId: '1234',
  sdkVersion: 'react-wagmi-4.0.13' as SdkVersion,
  sdkType: 'appkit'
}
const metamaskConnector = {
  id: 'metamask',
  type: 'INJECTED',
  info: { rdns: 'io.metamask.com' },
  chain: ConstantsUtil.CHAIN.EVM,
  name: 'MetaMask'
} as const
const zerionConnector = {
  id: 'ecc4036f814562b41a5268adc86270fba1365471402006302e70169465b7ac18',
  type: 'INJECTED',
  chain: ConstantsUtil.CHAIN.EVM,
  name: 'Zerion'
} as const

// -- Tests --------------------------------------------------------------------
describe('ConnectorController', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    ChainController.state.activeChain = ConstantsUtil.CHAIN.EVM
    vi.stubGlobal('window', {
      location: {
        href: ORIGINAL_HREF
      }
    })
  })

  it('should have valid default state', () => {
    expect(ConnectorController.state.connectors).toEqual([])
  })

  it('should update state correctly on setConnectors() with multichain', () => {
    ConnectorController.setConnectors([walletConnectConnector, walletConnectSolanaConnector])
    expect(ConnectorController.state.connectors).toStrictEqual([
      {
        id: 'walletConnect',
        name: 'WalletConnect',
        chain: 'eip155',
        imageId: undefined,
        imageUrl: undefined,
        type: 'MULTI_CHAIN',
        connectors: [walletConnectConnector, walletConnectSolanaConnector]
      }
    ])
  })

  it('should find connector by active namespace only', () => {
    const EVM_EXPLORER_ID = 'evm-explorer-id'
    const SOLANA_EXPLORER_ID = 'solana-explorer-id'

    const evmConnector = {
      id: 'evm-connector',
      explorerId: EVM_EXPLORER_ID,
      type: 'INJECTED',
      chain: ConstantsUtil.CHAIN.EVM,
      name: 'EVM Connector'
    } as const

    const solanaConnector = {
      id: 'solana-connector',
      explorerId: SOLANA_EXPLORER_ID,
      type: 'INJECTED',
      chain: ConstantsUtil.CHAIN.SOLANA,
      name: 'Solana Connector'
    } as const

    ConnectorController.setConnectors([evmConnector, solanaConnector])
    ChainController.state.activeChain = ConstantsUtil.CHAIN.EVM

    expect(ConnectorController.getConnector({ id: EVM_EXPLORER_ID, rdns: '' })).toEqual(
      evmConnector
    )
    expect(ConnectorController.getConnector({ id: SOLANA_EXPLORER_ID, rdns: '' })).toBeUndefined()

    ChainController.setActiveNamespace(ConstantsUtil.CHAIN.SOLANA)

    expect(ConnectorController.getConnector({ id: SOLANA_EXPLORER_ID, rdns: '' })).toEqual(
      solanaConnector
    )
    expect(ConnectorController.getConnector({ id: EVM_EXPLORER_ID, rdns: '' })).toBeUndefined()
  })

  it('should update state correctly on setConnectors()', () => {
    ConnectorController.state.allConnectors = []
    ConnectorController.setConnectors([walletConnectConnector])
    expect(ConnectorController.state.connectors).toEqual([walletConnectConnector])
  })

  it('should update state correctly on addConnector()', () => {
    ConnectorController.addConnector(externalConnector)
    expect(ConnectorController.state.connectors).toEqual([
      walletConnectConnector,
      externalConnector
    ])

    ConnectorController.addConnector(metamaskConnector)
    expect(ConnectorController.state.connectors).toEqual([
      walletConnectConnector,
      externalConnector,
      metamaskConnector
    ])
  })

  it('should return the correct connector on getConnector', () => {
    ConnectorController.addConnector(zerionConnector)
    expect(ConnectorController.getConnector({ id: 'walletConnectId', rdns: '' })).toStrictEqual(
      walletConnectConnector
    )
    expect(ConnectorController.getConnector({ id: '', rdns: 'io.metamask.com' })).toStrictEqual(
      metamaskConnector
    )
    expect(ConnectorController.getConnector({ id: zerionConnector.id, rdns: '' })).toBeUndefined()
    expect(ConnectorController.getConnector({ id: 'unknown', rdns: '' })).toBeUndefined()
  })

  it('getAuthConnector() should not throw when auth connector is not set', () => {
    const connector = ConnectorController.getAuthConnector()
    expect(connector).toEqual(undefined)
  })

  it('should trigger corresponding sync methods when adding auth connector', () => {
    OptionsController.setMetadata(mockDappData.metadata)
    OptionsController.setSdkVersion(mockDappData.sdkVersion)
    OptionsController.setProjectId(mockDappData.projectId)

    ConnectorController.addConnector(evmAuthConnector as unknown as AuthConnector)

    expect(ConnectorController.state.connectors).toEqual([
      walletConnectConnector,
      externalConnector,
      metamaskConnector,
      zerionConnector,
      evmAuthConnector
    ])

    expect(syncDappDataSpy).toHaveBeenCalledWith(mockDappData)
    expect(syncThemeSpy).toHaveBeenCalledWith({
      themeMode: 'dark',
      themeVariables: {},
      w3mThemeVariables: getW3mThemeVariables({}, 'dark')
    })
  })

  it('getAuthConnector() should return appropiate authconnector when already added', () => {
    const connector = ConnectorController.getAuthConnector()
    expect(connector).toEqual(evmAuthConnector)
  })

  it('getAuthConnector() should return merged connector when already added on different network', () => {
    ConnectorController.addConnector(solanaAuthConnector as unknown as AuthConnector)
    const connector = ConnectorController.getAuthConnector()
    expect(connector).toEqual(evmAuthConnector)
  })

  it('getAnnouncedConnectorRdns() should not throw when no announced connector is not set', () => {
    expect(ConnectorController.getAnnouncedConnectorRdns()).toEqual([])
  })

  it('getAnnouncedConnectorRdns() should return corresponding info array', () => {
    ConnectorController.addConnector(announcedConnector)
    expect(ConnectorController.getAnnouncedConnectorRdns()).toEqual(['announced.io'])
  })

  it('getConnnectors() should return all connectors', () => {
    expect(ConnectorController.getConnectors()).toEqual([
      walletConnectConnector,
      externalConnector,
      metamaskConnector,
      zerionConnector,
      // Need to define inline to reference the spies
      {
        id: 'ID_AUTH',
        imageId: undefined,
        imageUrl: undefined,
        name: 'Auth',
        type: 'AUTH',
        chain: 'eip155',
        connectors: [
          {
            chain: 'eip155',
            id: 'ID_AUTH',
            name: 'Auth',
            provider: {
              syncDappData: syncDappDataSpy,
              syncTheme: syncThemeSpy
            },
            type: 'AUTH'
          },
          {
            chain: 'solana',
            id: 'ID_AUTH',
            name: 'Auth',
            provider: {
              syncDappData: syncDappDataSpy,
              syncTheme: syncThemeSpy
            },
            type: 'AUTH'
          }
        ]
      },
      announcedConnector
    ])
  })

  it('should merge connectors with the same chain', () => {
    const mergedAnnouncedConnector = {
      id: 'announced',
      imageId: undefined,
      imageUrl: undefined,
      name: 'Announced',
      type: 'MULTI_CHAIN',
      chain: 'eip155',
      connectors: [announcedConnector, announcedConnectorSolana]
    }

    const mergedAuthConnector = {
      id: 'ID_AUTH',
      imageId: undefined,
      imageUrl: undefined,
      name: 'Auth',
      type: 'AUTH',
      chain: 'eip155',
      connectors: [
        {
          chain: 'eip155',
          id: 'ID_AUTH',
          name: 'Auth',
          provider: {
            syncDappData: syncDappDataSpy,
            syncTheme: syncThemeSpy
          },
          type: 'AUTH'
        },
        {
          chain: 'solana',
          id: 'ID_AUTH',
          name: 'Auth',
          provider: {
            syncDappData: syncDappDataSpy,
            syncTheme: syncThemeSpy
          },
          type: 'AUTH'
        }
      ]
    }
    ConnectorController.addConnector(announcedConnectorSolana)
    expect(ConnectorController.getConnectors()).toEqual([
      walletConnectConnector,
      externalConnector,
      metamaskConnector,
      zerionConnector,
      mergedAuthConnector,
      mergedAnnouncedConnector
    ])
  })

  it('should route to ConnectingExternal when selecting wallet if there is a connector', () => {
    const mockConnector = {
      id: 'connector',
      name: 'Connector',
      type: 'INJECTED' as const,
      chain: ConstantsUtil.CHAIN.SOLANA
    }
    vi.spyOn(ConnectorController, 'getConnector').mockReturnValue(mockConnector)
    vi.spyOn(RouterController, 'push')

    const wallet = {
      name: 'Connector',
      id: 'connector',
      display_index: 0
    }
    ConnectorController.selectWalletConnector(wallet)

    expect(RouterController.push).toHaveBeenCalledWith('ConnectingExternal', {
      connector: mockConnector,
      wallet
    })
  })

  it('should call mobile wallet util when selecting wallet is Phantom ', () => {
    const mockConnector = {
      id: CUSTOM_DEEPLINK_WALLETS.PHANTOM.id,
      name: 'Phantom',
      type: 'INJECTED' as const,
      chain: ConstantsUtil.CHAIN.SOLANA
    }
    const handleMobileDeeplinkRedirectSpy = vi.spyOn(
      MobileWalletUtil,
      'handleMobileDeeplinkRedirect'
    )
    vi.spyOn(ConnectorController, 'getConnector').mockReturnValue(mockConnector)
    vi.spyOn(RouterController, 'push')

    ConnectorController.selectWalletConnector({ name: mockConnector.name, id: mockConnector.id })

    const encodedHref = encodeURIComponent(ORIGINAL_HREF)
    const encodedRef = encodeURIComponent('https://example.com')
    const expectedUrl = `${CUSTOM_DEEPLINK_WALLETS.PHANTOM.url}/ul/browse/${encodedHref}?ref=${encodedRef}`

    expect(window.location.href).toBe(expectedUrl)
    expect(handleMobileDeeplinkRedirectSpy).toHaveBeenCalledWith(
      mockConnector.id,
      ConstantsUtil.CHAIN.EVM
    )
  })

  it('should call mobile wallet util when selecting wallet is Coinbase only on Solana ', () => {
    const mockConnector = {
      id: CUSTOM_DEEPLINK_WALLETS.COINBASE.id,
      name: 'Coinbase Wallet',
      type: 'INJECTED' as const,
      chain: ConstantsUtil.CHAIN.EVM
    }
    mockChainControllerState({ activeChain: ConstantsUtil.CHAIN.SOLANA })
    const handleMobileDeeplinkRedirectSpy = vi.spyOn(
      MobileWalletUtil,
      'handleMobileDeeplinkRedirect'
    )
    vi.spyOn(ConnectorController, 'getConnector').mockReturnValue(mockConnector)
    vi.spyOn(RouterController, 'push')

    ConnectorController.selectWalletConnector({ name: mockConnector.name, id: mockConnector.id })

    const encodedHref = encodeURIComponent(ORIGINAL_HREF)
    const expectedUrl = `${CUSTOM_DEEPLINK_WALLETS.COINBASE.url}/dapp?cb_url=${encodedHref}`

    expect(window.location.href).toBe(expectedUrl)
    expect(handleMobileDeeplinkRedirectSpy).toHaveBeenCalledWith(
      mockConnector.id,
      ConstantsUtil.CHAIN.SOLANA
    )
  })

  it('should not call redirect when selected wallet is Coinbase and active chain is not Solana ', () => {
    const mockConnector = {
      id: CUSTOM_DEEPLINK_WALLETS.COINBASE.id,
      name: 'Coinbase Wallet',
      type: 'INJECTED' as const,
      chain: ConstantsUtil.CHAIN.EVM
    }
    mockChainControllerState({ activeChain: ConstantsUtil.CHAIN.EVM })
    const handleMobileDeeplinkRedirectSpy = vi.spyOn(
      MobileWalletUtil,
      'handleMobileDeeplinkRedirect'
    )
    vi.spyOn(ConnectorController, 'getConnector').mockReturnValue(mockConnector)
    vi.spyOn(RouterController, 'push')

    ConnectorController.selectWalletConnector({ name: mockConnector.name, id: mockConnector.id })

    expect(window.location.href).toBe(ORIGINAL_HREF)
    expect(handleMobileDeeplinkRedirectSpy).toHaveBeenCalledWith(
      mockConnector.id,
      ConstantsUtil.CHAIN.EVM
    )
  })

  it('should route to ConnectingWalletConnect when selecting wallet if there is not a connector', () => {
    vi.spyOn(ConnectorController, 'getConnector').mockReturnValue(undefined)
    vi.spyOn(RouterController, 'push')

    ConnectorController.selectWalletConnector({ name: 'WalletConnect', id: 'wc' })

    expect(RouterController.push).toHaveBeenCalledWith('ConnectingWalletConnect', {
      wallet: { name: 'WalletConnect', id: 'wc' }
    })
  })
})
