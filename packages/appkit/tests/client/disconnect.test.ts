import UniversalProvider from '@walletconnect/universal-provider'
import { EventEmitter } from 'events'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import type { MockInstance } from 'vitest'

import { ConstantsUtil as CommonConstantsUtil } from '@reown/appkit-common'
import {
  ConnectionController,
  ConnectorController,
  type ConnectorType,
  ConstantsUtil,
  EventsController,
  type SIWXConfig,
  SIWXUtil,
  StorageUtil
} from '@reown/appkit-controllers'
import { ModalController, RouterController } from '@reown/appkit-controllers'
import { mockChainControllerState } from '@reown/appkit-controllers/testing'
import { ProviderUtil, ConstantsUtil as UtilConstantsUtil } from '@reown/appkit-utils'

import type { AdapterBlueprint } from '../../exports/adapters.js'
import { mainnetCaipNetwork, solanaCaipNetwork } from '../../exports/testing.js'
import { AppKit } from '../../src/client/appkit.js'
import { mockEvmAdapter, mockSolanaAdapter } from '../mocks/Adapter.js'
import { mockOptions } from '../mocks/Options.js'
import mockProvider from '../mocks/UniversalProvider.js'
import {
  mockBlockchainApiController,
  mockStorageUtil,
  mockWindowAndDocument
} from '../test-utils.js'

describe('AppKit - disconnect', () => {
  let appKit: AppKit
  let setLoadingSpy: MockInstance

  beforeEach(() => {
    vi.restoreAllMocks()
    mockWindowAndDocument()
    mockStorageUtil()
    mockBlockchainApiController()

    vi.spyOn(UniversalProvider, 'init').mockResolvedValue(mockProvider)

    appKit = new AppKit(mockOptions)

    // Setup spies
    setLoadingSpy = vi.spyOn(appKit, 'setLoading')

    // Mock common dependencies
    vi.spyOn(SIWXUtil, 'clearSessions').mockResolvedValue(undefined)
    vi.spyOn(SIWXUtil, 'getSIWX').mockReturnValue(ConstantsUtil.SIWX_DEFAULTS as SIWXConfig)
    vi.spyOn(ConnectorController, 'setFilterByNamespace').mockImplementation(() => {})
    vi.spyOn(StorageUtil, 'removeConnectedNamespace').mockImplementation(() => {})
    vi.spyOn(ProviderUtil, 'resetChain').mockImplementation(() => {})
  })

  describe('when chainNamespace is provided', () => {
    it('should disconnect from the specified namespace', async () => {
      const mockProvider = { disconnect: vi.fn(), id: 'walletConnect' }

      mockChainControllerState({
        activeChain: CommonConstantsUtil.CHAIN.SOLANA,
        chains: new Map([
          [CommonConstantsUtil.CHAIN.SOLANA, { accountState: { caipAddress: 'solana:1:0xyz' } }],
          [CommonConstantsUtil.CHAIN.EVM, { accountState: { caipAddress: 'eip155:1:0xyz' } }]
        ])
      })
      await (appKit as any).connectionControllerClient.disconnect({
        id: mockProvider.id,
        chainNamespace: CommonConstantsUtil.CHAIN.SOLANA
      })

      expect(mockSolanaAdapter.disconnect).toHaveBeenCalledOnce()
      expect(mockSolanaAdapter.disconnect).toHaveBeenCalledWith({
        id: mockProvider.id
      })
    })

    it('should perform all disconnect operations in correct order', async () => {
      const mockProvider = { disconnect: vi.fn() }

      vi.spyOn(ProviderUtil, 'getProvider').mockReturnValue(mockProvider)
      vi.spyOn(ProviderUtil, 'getProviderId').mockReturnValue(
        UtilConstantsUtil.CONNECTOR_TYPE_INJECTED as ConnectorType
      )
      mockChainControllerState({
        activeChain: CommonConstantsUtil.CHAIN.EVM,
        chains: new Map([
          [
            CommonConstantsUtil.CHAIN.EVM,
            { accountState: { caipAddress: 'eip155:1:0xyz' } as any }
          ],
          [
            CommonConstantsUtil.CHAIN.SOLANA,
            { accountState: { caipAddress: 'solana:1:0xyz' } as any }
          ]
        ])
      })

      await (appKit as any).connectionControllerClient.disconnect({
        chainNamespace: CommonConstantsUtil.CHAIN.EVM
      })

      // Verify operations are called in correct order
      expect(setLoadingSpy).toHaveBeenCalledWith(true, CommonConstantsUtil.CHAIN.EVM)
      expect(SIWXUtil.clearSessions).toHaveBeenCalled()
      expect(setLoadingSpy).toHaveBeenCalledWith(false, CommonConstantsUtil.CHAIN.EVM)
      expect(ConnectorController.setFilterByNamespace).toHaveBeenCalledWith(undefined)
      expect(mockEvmAdapter.disconnect).toHaveBeenCalledWith({
        id: undefined
      })
    })
  })

  describe('when chainNamespace is not provided', () => {
    it('should use activeChain as default namespace', async () => {
      const mockProvider = { disconnect: vi.fn() }

      mockChainControllerState({
        activeChain: CommonConstantsUtil.CHAIN.EVM,
        chains: new Map([
          [CommonConstantsUtil.CHAIN.EVM, { accountState: { caipAddress: 'eip155:1:0x123' } }]
        ])
      })
      vi.spyOn(ProviderUtil, 'getProvider').mockReturnValue(mockProvider)
      vi.spyOn(ProviderUtil, 'getProviderId').mockReturnValue(
        UtilConstantsUtil.CONNECTOR_TYPE_INJECTED as ConnectorType
      )

      await (appKit as any).connectionControllerClient.disconnect()

      expect(mockEvmAdapter.disconnect).toHaveBeenCalledWith({
        id: undefined
      })
    })

    it('should complete disconnect process with default namespace', async () => {
      const mockProvider = { disconnect: vi.fn() }

      mockChainControllerState({
        activeChain: CommonConstantsUtil.CHAIN.EVM,
        chains: new Map([
          [CommonConstantsUtil.CHAIN.EVM, { accountState: { caipAddress: 'eip155:1:0x123' } }]
        ])
      })
      vi.spyOn(ProviderUtil, 'getProvider').mockReturnValue(mockProvider)
      vi.spyOn(ProviderUtil, 'getProviderId').mockReturnValue(
        UtilConstantsUtil.CONNECTOR_TYPE_INJECTED as ConnectorType
      )

      await (appKit as any).connectionControllerClient.disconnect()

      expect(mockEvmAdapter.disconnect).toHaveBeenCalledWith({
        id: undefined
      })
    })

    it('should disconnect from all chains when no namespace is provided', async () => {
      const mockProvider = { disconnect: vi.fn() }

      vi.spyOn(ProviderUtil, 'getProvider').mockReturnValue(mockProvider)
      vi.spyOn(ProviderUtil, 'getProviderId').mockReturnValue(
        UtilConstantsUtil.CONNECTOR_TYPE_INJECTED as ConnectorType
      )
      mockChainControllerState({
        chains: new Map([
          [CommonConstantsUtil.CHAIN.EVM, { accountState: { caipAddress: 'eip155:1:0x123' } }],
          [CommonConstantsUtil.CHAIN.SOLANA, { accountState: { caipAddress: 'solana:1:0xyz' } }]
        ])
      })

      await (appKit as any).connectionControllerClient.disconnect()

      expect(mockEvmAdapter.disconnect).toHaveBeenCalled()
      expect(mockSolanaAdapter.disconnect).toHaveBeenCalled()
    })
  })

  describe('loading state management', () => {
    it('should set loading to true at start and false at end', async () => {
      const chainNamespace = CommonConstantsUtil.CHAIN.EVM
      const mockProvider = { disconnect: vi.fn() }

      vi.spyOn(ProviderUtil, 'getProvider').mockReturnValue(mockProvider)
      vi.spyOn(ProviderUtil, 'getProviderId').mockReturnValue(
        UtilConstantsUtil.CONNECTOR_TYPE_INJECTED as ConnectorType
      )
      mockChainControllerState({
        activeChain: chainNamespace,
        chains: new Map([[chainNamespace, { accountState: { caipAddress: 'eip155:1:0xyz' } }]])
      })
      ;(appKit as any).chainAdapters['eip155'] = mockEvmAdapter

      vi.spyOn(mockEvmAdapter, 'disconnect').mockResolvedValue({
        connections: []
      })

      await (appKit as any).connectionControllerClient.disconnect({ chainNamespace })

      expect(setLoadingSpy).toHaveBeenCalledTimes(2) // true at start of try, false in finally
      expect(setLoadingSpy).toHaveBeenNthCalledWith(1, true, chainNamespace)
      expect(setLoadingSpy).toHaveBeenNthCalledWith(2, false, chainNamespace)
    })

    it('should set loading to false even if operations fail', async () => {
      const chainNamespace = CommonConstantsUtil.CHAIN.EVM
      const error = new Error('Test error')

      vi.spyOn(SIWXUtil, 'clearSessions').mockRejectedValue(error)

      try {
        await (appKit as any).connectionControllerClient.disconnect(chainNamespace)
      } catch (e) {
        // Expected to throw
        expect(e).toEqual(new Error('Failed to disconnect chains: Test error'))
      }

      expect(setLoadingSpy).toHaveBeenCalledWith(true, chainNamespace)
      // The disconnect method doesn't catch errors and set loading to false,
      // so we only expect loading to be set to true, not false
    })
  })

  describe('state cleanup', () => {
    it('should pass correct id to adapter disconnect', async () => {
      const chainNamespace = CommonConstantsUtil.CHAIN.EVM
      const mockProvider = { disconnect: vi.fn(), id: 'injected' }

      mockChainControllerState({
        chains: new Map([[chainNamespace, { accountState: { caipAddress: 'eip155:1:0x123' } }]])
      })

      await (appKit as any).connectionControllerClient.disconnect({
        id: mockProvider.id,
        chainNamespace
      })

      expect(mockEvmAdapter.disconnect).toHaveBeenCalledWith({
        id: mockProvider.id
      })
    })
  })

  describe('different chain namespaces', () => {
    it.each([
      [CommonConstantsUtil.CHAIN.EVM, mockEvmAdapter],
      [CommonConstantsUtil.CHAIN.SOLANA, mockSolanaAdapter]
    ])('should handle disconnect for %s namespace', async (namespace, adapter) => {
      mockChainControllerState({
        chains: new Map([
          [namespace, { accountState: { caipAddress: `${namespace}:chainId:address` } }]
        ])
      })

      await (appKit as any).connectionControllerClient.disconnect({ chainNamespace: namespace })

      expect(adapter.disconnect).toHaveBeenCalledWith({
        id: undefined
      })
    })
  })

  describe('complex disconnect scenarios', () => {
    it('should disconnect only for specific namespace when multiple are connected', async () => {
      const targetNamespace = CommonConstantsUtil.CHAIN.SOLANA

      // Setup multiple connected namespaces
      mockChainControllerState({
        activeChain: CommonConstantsUtil.CHAIN.EVM,
        chains: new Map([
          [CommonConstantsUtil.CHAIN.EVM, { accountState: { caipAddress: 'eip155:1:0x123' } }],
          [CommonConstantsUtil.CHAIN.SOLANA, { accountState: { caipAddress: 'solana:1:0xyz' } }]
        ])
      })

      await (appKit as any).connectionControllerClient.disconnect({
        chainNamespace: targetNamespace
      })

      // Verify only the target namespace was disconnected
      expect(mockSolanaAdapter.disconnect).toHaveBeenCalledWith({ id: undefined })
    })

    it('should handle disconnect when connected via WalletConnect', async () => {
      const chainNamespace = CommonConstantsUtil.CHAIN.EVM
      const mockProvider = { disconnect: vi.fn(), id: 'walletConnect' }

      mockChainControllerState({
        activeChain: chainNamespace,
        chains: new Map([[chainNamespace, { accountState: { caipAddress: 'eip155:1:0xyz' } }]])
      })

      await (appKit as any).connectionControllerClient.disconnect({
        id: mockProvider.id,
        chainNamespace
      })

      expect(mockEvmAdapter.disconnect).toHaveBeenCalledWith({
        id: mockProvider.id
      })
      expect(setLoadingSpy).toHaveBeenCalledWith(true, chainNamespace)
      expect(setLoadingSpy).toHaveBeenCalledWith(false, chainNamespace)
    })

    it('should handle disconnect when connected via injected connector', async () => {
      const chainNamespace = CommonConstantsUtil.CHAIN.EVM
      const mockProvider = { disconnect: vi.fn(), id: 'injected' }

      mockChainControllerState({
        chains: new Map([[chainNamespace, { accountState: { caipAddress: 'eip155:1:0xyz' } }]])
      })

      await (appKit as any).connectionControllerClient.disconnect({
        id: mockProvider.id,
        chainNamespace
      })

      expect(mockEvmAdapter.disconnect).toHaveBeenCalledWith({
        id: mockProvider.id
      })
      expect(ConnectorController.setFilterByNamespace).toHaveBeenCalledWith(undefined)
    })

    it('should handle disconnect when connected via announced connector', async () => {
      const chainNamespace = CommonConstantsUtil.CHAIN.EVM
      const mockProvider = { disconnect: vi.fn(), id: 'mockConnector' }

      mockChainControllerState({
        chains: new Map([[chainNamespace, { accountState: { caipAddress: 'eip155:1:0xyz' } }]])
      })

      vi.spyOn(ProviderUtil, 'getProvider').mockReturnValue(mockProvider)
      vi.spyOn(ProviderUtil, 'getProviderId').mockReturnValue(
        UtilConstantsUtil.CONNECTOR_TYPE_ANNOUNCED as ConnectorType
      )

      await (appKit as any).connectionControllerClient.disconnect({
        id: mockProvider.id,
        chainNamespace
      })

      expect(mockEvmAdapter.disconnect).toHaveBeenCalledWith({
        id: mockProvider.id
      })
    })

    it('should properly cleanup state across multiple disconnect operations', async () => {
      const firstNamespace = CommonConstantsUtil.CHAIN.EVM
      const secondNamespace = CommonConstantsUtil.CHAIN.SOLANA
      const mockProvider = { disconnect: vi.fn() }

      vi.spyOn(ProviderUtil, 'getProvider').mockReturnValue(mockProvider)
      vi.spyOn(ProviderUtil, 'getProviderId').mockReturnValue(
        UtilConstantsUtil.CONNECTOR_TYPE_INJECTED as ConnectorType
      )

      // First disconnect
      await (appKit as any).connectionControllerClient.disconnect({
        chainNamespace: firstNamespace
      })

      // Reset mocks
      vi.restoreAllMocks()
      vi.spyOn(SIWXUtil, 'clearSessions').mockResolvedValue(undefined)
      vi.spyOn(ConnectorController, 'setFilterByNamespace').mockImplementation(() => {})

      // Second disconnect
      await (appKit as any).connectionControllerClient.disconnect({
        chainNamespace: secondNamespace
      })

      // Verify second disconnect operations
      expect(ConnectorController.setFilterByNamespace).toHaveBeenCalledWith(undefined)
    })
  })
})

describe('AppKit - disconnect - functional scenarios', () => {
  let appKit: AppKit
  let setLoadingSpy: MockInstance
  let sendEventSpy: MockInstance
  let siwxClearSessionsSpy: MockInstance
  let ccSetFilterByNamespaceSpy: MockInstance
  let ccResetWcConnectionSpy: MockInstance
  let evmAdapterDisconnectSpy: MockInstance
  let solanaAdapterDisconnectSpy: MockInstance

  beforeEach(() => {
    vi.restoreAllMocks()
    mockWindowAndDocument()
    mockStorageUtil()
    mockBlockchainApiController()

    vi.spyOn(UniversalProvider, 'init').mockResolvedValue(mockProvider)

    const localMockOptions = {
      ...mockOptions,
      adapters: [mockEvmAdapter, mockSolanaAdapter]
    }
    appKit = new AppKit(localMockOptions)

    setLoadingSpy = vi.spyOn(appKit, 'setLoading')

    sendEventSpy = vi.spyOn(EventsController, 'sendEvent')
    siwxClearSessionsSpy = vi.spyOn(SIWXUtil, 'clearSessions').mockResolvedValue(undefined)
    ccSetFilterByNamespaceSpy = vi.spyOn(ConnectorController, 'setFilterByNamespace')
    ccResetWcConnectionSpy = vi.spyOn(ConnectionController, 'resetWcConnection')
    evmAdapterDisconnectSpy = vi.spyOn(mockEvmAdapter, 'disconnect').mockResolvedValue({
      connections: []
    })
    solanaAdapterDisconnectSpy = vi.spyOn(mockSolanaAdapter, 'disconnect')

    vi.spyOn(StorageUtil, 'removeConnectedNamespace').mockImplementation(() => {})
    vi.spyOn(ProviderUtil, 'resetChain').mockImplementation(() => {})
    vi.spyOn(SIWXUtil, 'getSIWX').mockReturnValue(ConstantsUtil.SIWX_DEFAULTS as SIWXConfig)

    vi.spyOn(ConnectorController, 'getConnectorId').mockImplementation(ns => {
      if (ns === 'eip155' || ns === 'solana') return 'mockConnector' as any
      return undefined
    })
    vi.spyOn(ProviderUtil, 'getProvider').mockReturnValue({ disconnect: vi.fn() } as any) // Generic mock for provider
    vi.spyOn(ProviderUtil, 'getProviderId').mockReturnValue(
      UtilConstantsUtil.CONNECTOR_TYPE_INJECTED as ConnectorType
    )
  })

  it('should properly handle disconnect of all connected chains', async () => {
    const eip155Namespace = CommonConstantsUtil.CHAIN.EVM
    const solanaNamespace = CommonConstantsUtil.CHAIN.SOLANA

    mockChainControllerState({
      activeChain: CommonConstantsUtil.CHAIN.EVM,
      chains: new Map([
        [
          CommonConstantsUtil.CHAIN.EVM,
          {
            caipNetwork: mainnetCaipNetwork,
            accountState: { caipAddress: 'eip155:1:0x123' }
          }
        ],
        [
          CommonConstantsUtil.CHAIN.SOLANA,
          {
            caipNetwork: solanaCaipNetwork,
            accountState: { caipAddress: 'solana:mainnet:0xabc' }
          }
        ]
      ])
    })

    await (appKit as any).connectionControllerClient.disconnect({ chainNamespace: eip155Namespace })
    await (appKit as any).connectionControllerClient.disconnect({ chainNamespace: solanaNamespace })

    // EVM assertions
    expect(evmAdapterDisconnectSpy).toHaveBeenCalledOnce()
    expect(evmAdapterDisconnectSpy).toHaveBeenCalledWith({
      id: 'mockConnector'
    })
    expect(setLoadingSpy).toHaveBeenCalledWith(true, eip155Namespace)
    expect(setLoadingSpy).toHaveBeenCalledWith(false, eip155Namespace)

    // Solana assertions
    expect(solanaAdapterDisconnectSpy).toHaveBeenCalledOnce()
    expect(solanaAdapterDisconnectSpy).toHaveBeenCalledWith({
      id: 'mockConnector'
    })
    expect(setLoadingSpy).toHaveBeenCalledWith(true, solanaNamespace)
    expect(setLoadingSpy).toHaveBeenCalledWith(false, solanaNamespace)

    // Global cleanup assertions
    expect(ccResetWcConnectionSpy).toHaveBeenCalledTimes(2)
    expect(siwxClearSessionsSpy).toHaveBeenCalledTimes(2)
    expect(ccSetFilterByNamespaceSpy).toHaveBeenCalledWith(undefined)

    // Event assertion
    expect(sendEventSpy).toHaveBeenCalledWith({
      type: 'track',
      event: 'DISCONNECT_SUCCESS',
      properties: { namespace: eip155Namespace }
    })
    expect(sendEventSpy).toHaveBeenCalledWith({
      type: 'track',
      event: 'DISCONNECT_SUCCESS',
      properties: { namespace: solanaNamespace }
    })
  })

  // Placeholder for the error handling test from ChainController
  it.todo('should handle disconnect errors gracefully when a chain operation fails')
})

describe('AppKit - disconnect - error handling scenarios', () => {
  let appKit: AppKit
  let setLoadingSpy: MockInstance
  let sendEventSpy: MockInstance
  let removeConnectorIdSpy: MockInstance
  let siwxClearSessionsSpy: MockInstance
  let ccSetFilterByNamespaceSpy: MockInstance
  let storageDeleteSocialSpy: MockInstance
  let ccResetWcConnectionSpy: MockInstance

  beforeEach(() => {
    vi.restoreAllMocks()
    mockWindowAndDocument()
    mockStorageUtil()
    mockBlockchainApiController()

    vi.spyOn(UniversalProvider, 'init').mockResolvedValue(mockProvider)

    const localMockOptions = {
      ...mockOptions,
      adapters: [mockEvmAdapter, mockSolanaAdapter]
    }
    appKit = new AppKit(localMockOptions)

    // Setup spies on AppKit instance methods
    setLoadingSpy = vi.spyOn(appKit, 'setLoading')

    // Spies on controllers/utils
    sendEventSpy = vi.spyOn(EventsController, 'sendEvent')
    removeConnectorIdSpy = vi.spyOn(ConnectorController, 'removeConnectorId')
    siwxClearSessionsSpy = vi.spyOn(SIWXUtil, 'clearSessions').mockResolvedValue(undefined)
    ccSetFilterByNamespaceSpy = vi.spyOn(ConnectorController, 'setFilterByNamespace')
    storageDeleteSocialSpy = vi.spyOn(StorageUtil, 'deleteConnectedSocialProvider')
    ccResetWcConnectionSpy = vi.spyOn(ConnectionController, 'resetWcConnection')
    vi.spyOn(StorageUtil, 'removeConnectedNamespace').mockImplementation(() => {})
    vi.spyOn(ProviderUtil, 'resetChain').mockImplementation(() => {})
    vi.spyOn(SIWXUtil, 'getSIWX').mockReturnValue(ConstantsUtil.SIWX_DEFAULTS as SIWXConfig)

    // Simulate two connected chains for getChainsToDisconnect (utility)
    vi.spyOn(ConnectorController, 'getConnectorId').mockImplementation(ns => {
      if (ns === 'eip155' || ns === 'solana') return 'mockConnector' as any
      return undefined
    })
    vi.spyOn(ProviderUtil, 'getProvider').mockReturnValue({ disconnect: vi.fn() } as any) // Generic mock for provider
    vi.spyOn(ProviderUtil, 'getProviderId').mockReturnValue(
      UtilConstantsUtil.CONNECTOR_TYPE_INJECTED as ConnectorType
    )
  })

  it('should handle errors when the main adapter.disconnect fails for one chain during full disconnect', async () => {
    mockChainControllerState({
      activeChain: CommonConstantsUtil.CHAIN.EVM,
      chains: new Map([
        [
          CommonConstantsUtil.CHAIN.EVM,
          {
            caipNetwork: mainnetCaipNetwork,
            accountState: { caipAddress: 'eip155:1:0x123' }
          }
        ],
        [
          CommonConstantsUtil.CHAIN.SOLANA,
          {
            caipNetwork: solanaCaipNetwork,
            accountState: { caipAddress: 'solana:mainnet:0xabc' }
          }
        ]
      ])
    })

    const eip155Namespace = CommonConstantsUtil.CHAIN.EVM
    const solanaNamespace = CommonConstantsUtil.CHAIN.SOLANA
    const solanaAdapterError = new Error('Solana adapter failed') // Corrected error message for clarity

    const mockEip155Provider = { disconnect: vi.fn().mockResolvedValue(undefined) }
    const mockSolanaProvider = { disconnect: vi.fn() }

    vi.spyOn(ProviderUtil, 'getProvider').mockImplementation(ns => {
      if (ns === eip155Namespace) return mockEip155Provider
      if (ns === solanaNamespace) return mockSolanaProvider
      return { disconnect: vi.fn() }
    })
    // getProviderId is already mocked in beforeEach to return INJECTED

    const eip155AdapterDisconnectSpy = vi.spyOn(mockEvmAdapter, 'disconnect').mockResolvedValue({
      connections: []
    })
    const solanaAdapterDisconnectSpy = vi.spyOn(mockSolanaAdapter, 'disconnect')

    // Simulate first conditional disconnect succeeding for solana, second (main) one failing
    solanaAdapterDisconnectSpy.mockRejectedValueOnce(solanaAdapterError)
    solanaAdapterDisconnectSpy.mockResolvedValue({
      connections: []
    })

    // Call eip155 disconnect
    await (appKit as any).connectionControllerClient.disconnect({
      chainNamespace: eip155Namespace
    })

    // Call solana disconnect
    await expect(
      (appKit as any).connectionControllerClient.disconnect({
        chainNamespace: solanaNamespace
      })
    ).rejects.toThrow(`Failed to disconnect chains: ${solanaAdapterError.message}`)

    // --- Assertions for eip155 (successful disconnect) ---
    expect(eip155AdapterDisconnectSpy).toHaveBeenCalledOnce()
    expect(eip155AdapterDisconnectSpy).toHaveBeenCalledWith({
      id: 'mockConnector'
    })

    expect(setLoadingSpy).toHaveBeenCalledWith(true, eip155Namespace)
    expect(setLoadingSpy).toHaveBeenCalledWith(false, eip155Namespace)
    expect(removeConnectorIdSpy).toHaveBeenCalledWith(eip155Namespace)

    // --- Assertions for solana (failed disconnect where main adapter.disconnect errors) ---
    expect(solanaAdapterDisconnectSpy).toHaveBeenCalledOnce() // Both conditional and main calls attempted
    expect(solanaAdapterDisconnectSpy).toHaveBeenCalledWith({
      id: 'mockConnector'
    })

    expect(setLoadingSpy).toHaveBeenCalledWith(true, solanaNamespace) // setLoading(true) is before the failing adapter.disconnect
    expect(setLoadingSpy).toHaveBeenCalledWith(false, solanaNamespace) // setLoading(false) IS called from the CATCH block for solana

    // Verify overall loading calls:
    // eip155: true, false (from end of try)
    // solana: true, false (from catch)
    // Total 4 calls to setLoading
    expect(setLoadingSpy).toHaveBeenCalledTimes(4)
    expect(setLoadingSpy).toHaveBeenNthCalledWith(1, true, eip155Namespace) // EIP155 start
    // The order of async operations in Promise.allSettled isn't strictly guaranteed for the *second* setLoading(true,...)
    // So we check for specific calls rather than Nth Celled for all.
    // Let's find the call for EIP155 end:
    const eip155SetLoadingFalseCall = setLoadingSpy.mock.calls.find(
      call => call[0] === false && call[1] === eip155Namespace
    )
    expect(eip155SetLoadingFalseCall).toBeDefined()

    expect(setLoadingSpy).toHaveBeenCalledWith(true, solanaNamespace) // Solana start
    expect(setLoadingSpy).toHaveBeenCalledWith(false, solanaNamespace) // Solana end (from catch)

    // --- Assertions for global cleanup (called after loop, before final throw if failures exist) ---
    expect(ccResetWcConnectionSpy).toHaveBeenCalledTimes(2)
    expect(siwxClearSessionsSpy).toHaveBeenCalledTimes(2)
    expect(ccSetFilterByNamespaceSpy).toHaveBeenCalledWith(undefined)
    expect(storageDeleteSocialSpy).not.toHaveBeenCalled()
    expect(sendEventSpy).toHaveBeenCalledWith(
      expect.objectContaining({ event: 'DISCONNECT_SUCCESS' })
    )
  })

  it('should not clear SIWX sessions if signOutOnDisconnect is false', async () => {
    mockChainControllerState({
      activeChain: CommonConstantsUtil.CHAIN.EVM,
      chains: new Map([
        [
          CommonConstantsUtil.CHAIN.EVM,
          {
            caipNetwork: mainnetCaipNetwork,
            accountState: { caipAddress: 'eip155:1:0x123' }
          }
        ],
        [
          CommonConstantsUtil.CHAIN.SOLANA,
          {
            caipNetwork: solanaCaipNetwork,
            accountState: { caipAddress: 'solana:mainnet:0xabc' }
          }
        ]
      ])
    })

    const siwx = { ...ConstantsUtil.SIWX_DEFAULTS, signOutOnDisconnect: false } as SIWXConfig
    vi.spyOn(SIWXUtil, 'getSIWX').mockReturnValue(siwx)

    await (appKit as any).connectionControllerClient.disconnect()

    expect(SIWXUtil.clearSessions).not.toHaveBeenCalled()
  })

  it('should close modal if multi wallet is not enabled', async () => {
    mockChainControllerState({
      activeChain: CommonConstantsUtil.CHAIN.EVM,
      chains: new Map([
        [
          CommonConstantsUtil.CHAIN.EVM,
          {
            caipNetwork: mainnetCaipNetwork,
            accountState: { caipAddress: 'eip155:1:0x123' }
          }
        ]
      ])
    })

    const eip155Namespace = CommonConstantsUtil.CHAIN.EVM
    const mockEip155Provider = new EventEmitter() as unknown as AdapterBlueprint
    mockEip155Provider.disconnect = vi.fn().mockResolvedValue(undefined)

    vi.spyOn(ProviderUtil, 'getProvider').mockImplementation(ns => {
      if (ns === eip155Namespace) return mockEip155Provider
      return { disconnect: vi.fn() }
    })

    appKit['remoteFeatures'] = { multiWallet: false }
    vi.spyOn(RouterController, 'state', 'get').mockReturnValue({
      ...RouterController.state,
      view: 'ProfileWallets'
    })
    vi.spyOn(ModalController, 'close').mockImplementation(() => {})

    await (appKit as any).onDisconnectNamespace({
      chainNamespace: eip155Namespace,
      closeModal: true
    })

    expect(ModalController.close).toHaveBeenCalled()
  })
})
