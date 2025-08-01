import { beforeEach, describe, expect, it, vi } from 'vitest'

import { type Balance } from '@reown/appkit-common'

import { CoreHelperUtil, SendController, SnackController } from '../../exports/index.js'
import { extendedMainnet, mockChainControllerState } from '../../exports/testing.js'
import { BalanceUtil } from '../../src/utils/BalanceUtil.js'

// -- Setup --------------------------------------------------------------------
const token = {
  name: 'Optimism',
  address: 'eip155:10:0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  symbol: 'OP',
  chainId: 'eip155:10',
  value: 6.05441523113072,
  price: 4.5340112,
  quantity: {
    decimals: '18',
    numeric: '1.335333100000000000'
  },
  iconUrl: 'https://token-icons.s3.amazonaws.com/0x4200000000000000000000000000000000000042.png'
}
const sendTokenAmount = 0.1
const receiverAddress = '0xd8da6bf26964af9d7eed9e03e53415d37aa96045'
const receiverProfileName = 'john.eth'
const receiverProfileImageUrl = 'https://ipfs.com/0x123.png'

// -- Tests --------------------------------------------------------------------
describe('SendController', () => {
  it('should have valid default state', () => {
    expect(SendController.state).toEqual({ tokenBalances: [], loading: false })
  })

  it('should update state correctly on setToken()', () => {
    SendController.setToken(token)
    expect(SendController.state.token).toEqual(token)
  })

  it('should update state correctly on setTokenAmount()', () => {
    SendController.setTokenAmount(sendTokenAmount)
    expect(SendController.state.sendTokenAmount).toEqual(sendTokenAmount)
  })

  it('should update state correctly on receiverAddress()', () => {
    SendController.setReceiverAddress(receiverAddress)
    expect(SendController.state.receiverAddress).toEqual(receiverAddress)
  })

  it('should update state correctly on receiverProfileName()', () => {
    SendController.setReceiverProfileName(receiverProfileName)
    expect(SendController.state.receiverProfileName).toEqual(receiverProfileName)
  })

  it('should update state correctly on receiverProfileName()', () => {
    SendController.setReceiverProfileImageUrl(receiverProfileImageUrl)
    expect(SendController.state.receiverProfileImageUrl).toEqual(receiverProfileImageUrl)
  })

  it('should update state correctly on resetSend()', () => {
    SendController.resetSend()
    expect(SendController.state).toEqual({ tokenBalances: [], loading: false })
  })

  describe('fetchTokenBalance()', () => {
    beforeEach(() => {
      mockChainControllerState({
        activeCaipNetwork: extendedMainnet,
        activeCaipAddress: 'eip155:1:0x123'
      })
      vi.spyOn(BalanceUtil, 'getMyTokensWithBalance').mockResolvedValue([])
      vi.spyOn(CoreHelperUtil, 'isAllowedRetry').mockReturnValue(true)
      vi.spyOn(SnackController, 'showError').mockImplementation(() => {})
    })

    it('should not fetch balance if its not allowed to retry', async () => {
      vi.spyOn(CoreHelperUtil, 'isAllowedRetry').mockReturnValue(false)
      SendController.state.lastRetry = Date.now()

      const result = await SendController.fetchTokenBalance()

      expect(result).toEqual([])
      expect(BalanceUtil.getMyTokensWithBalance).not.toHaveBeenCalled()
      expect(SendController.state.loading).toBe(false)
    })

    it('should not fetch balance if chainId is not defined', async () => {
      mockChainControllerState({
        activeCaipNetwork: {
          ...extendedMainnet,
          // @ts-expect-error - edge case
          caipNetworkId: undefined
        }
      })

      const result = await SendController.fetchTokenBalance()

      expect(result).toEqual([])
      expect(BalanceUtil.getMyTokensWithBalance).not.toHaveBeenCalled()
    })

    it('should not fetch balance if namespace is not defined', async () => {
      mockChainControllerState({
        // @ts-expect-error - edge case
        activeCaipNetwork: { ...extendedMainnet, chainNamespace: undefined },
        activeCaipAddress: 'eip155:1:0x123'
      })

      const result = await SendController.fetchTokenBalance()

      expect(result).toEqual([])
      expect(BalanceUtil.getMyTokensWithBalance).not.toHaveBeenCalled()
    })

    it('should not fetch balance if address is not defined', async () => {
      mockChainControllerState({
        activeCaipNetwork: extendedMainnet,
        activeCaipAddress: undefined
      })

      const result = await SendController.fetchTokenBalance()

      expect(result).toEqual([])
      expect(BalanceUtil.getMyTokensWithBalance).not.toHaveBeenCalled()
    })

    it('should set the retry if something fails', async () => {
      const mockError = new Error('API Error')
      vi.spyOn(BalanceUtil, 'getMyTokensWithBalance').mockRejectedValue(mockError)
      const onError = vi.fn()

      const now = Date.now()
      vi.setSystemTime(now)

      const result = await SendController.fetchTokenBalance(onError)

      expect(result).toEqual([])
      expect(SendController.state.lastRetry).toBe(now)
      expect(onError).toHaveBeenCalledWith(mockError)
      expect(SnackController.showError).toHaveBeenCalledWith('Token Balance Unavailable')
    })

    it('should fetch balance if everything is correct', async () => {
      const mockBalances = [
        {
          quantity: { decimals: '18' },
          symbol: 'ETH',
          address: '0x123'
        },
        { quantity: { decimals: '0' }, symbol: 'ZERO', address: '0x456' },
        { quantity: { decimals: '6' }, symbol: 'USDC', address: '0x789' }
      ]

      vi.spyOn(BalanceUtil, 'getMyTokensWithBalance').mockResolvedValue(mockBalances as Balance[])

      const result = await SendController.fetchTokenBalance()

      expect(result).toEqual(mockBalances)
      expect(SendController.state.tokenBalances).toEqual(mockBalances)
      expect(SendController.state.lastRetry).toBeUndefined()
      expect(SendController.state.loading).toBe(false)
    })
  })
})
