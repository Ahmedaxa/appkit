# @reown/appkit-cli

## 1.7.16

### Patch Changes

- [#4497](https://github.com/reown-com/appkit/pull/4497) [`cce9775`](https://github.com/reown-com/appkit/commit/cce97754c2c13411df65826adf99550bc5ad0f8c) Thanks [@venturars](https://github.com/venturars)! - Exports type definitions of Base class for better TS support when using hooks

## 1.7.15

## 1.7.14

### Patch Changes

- [#4622](https://github.com/reown-com/appkit/pull/4622) [`b1555b2`](https://github.com/reown-com/appkit/commit/b1555b2e838f8b2a614ed048c28edc7298911917) Thanks [@enesozturk](https://github.com/enesozturk)! - Fixes issue on network logics where some networks doesn't have required fields and causing issues

- [#4609](https://github.com/reown-com/appkit/pull/4609) [`c3e42fa`](https://github.com/reown-com/appkit/commit/c3e42fae24b059711c5094ca8f327ca8b6857041) Thanks [@tomiir](https://github.com/tomiir)! - Adds chainId parameter to CONNECT_SUCCESS and CONNECT_SOCIAL_SUCCESS events

- [#4560](https://github.com/reown-com/appkit/pull/4560) [`cfe8784`](https://github.com/reown-com/appkit/commit/cfe878474c8c58f856c117ca59ee702a5c1380c4) Thanks [@devin-ai-integration](https://github.com/apps/devin-ai-integration)! - Removes Coinbase OnRamp option as it's available under Meld's options

- [#4615](https://github.com/reown-com/appkit/pull/4615) [`127c7fe`](https://github.com/reown-com/appkit/commit/127c7fec63c2e4590dc74c369861b5efdda9cec4) Thanks [@enesozturk](https://github.com/enesozturk)! - Upgrades `@solana/web3.js` to latest for high severity dependency issue

- [#4610](https://github.com/reown-com/appkit/pull/4610) [`9c73366`](https://github.com/reown-com/appkit/commit/9c73366f3650c1b368c4029f47e40163d14a83c3) Thanks [@enesozturk](https://github.com/enesozturk)! - Fixes unsyncing issue on initialization if enableReconnect is false

- [#4609](https://github.com/reown-com/appkit/pull/4609) [`c3e42fa`](https://github.com/reown-com/appkit/commit/c3e42fae24b059711c5094ca8f327ca8b6857041) Thanks [@tomiir](https://github.com/tomiir)! - Always fires INITIALIZE event regardless of analytics config

- [#4625](https://github.com/reown-com/appkit/pull/4625) [`a8212a7`](https://github.com/reown-com/appkit/commit/a8212a73ac3b323b4344a682133f87280b1ec4c2) Thanks [@tomiir](https://github.com/tomiir)! - Fixes issue where approving ERC20 token spending with embedded wallet resulted in infinite spinner'

- [#4642](https://github.com/reown-com/appkit/pull/4642) [`bbc8193`](https://github.com/reown-com/appkit/commit/bbc81937ff6721e9339f76504cff95065a5c3dbe) Thanks [@enesozturk](https://github.com/enesozturk)! - Improves error messages with better clarity and phrasing

- [#4641](https://github.com/reown-com/appkit/pull/4641) [`9b7c7d0`](https://github.com/reown-com/appkit/commit/9b7c7d0cb812a9ccb9091fbb2c37604076c7f2bd) Thanks [@enesozturk](https://github.com/enesozturk)! - Fixes issue on defaultAccountTypes where after disconnection it takes priority of whatever the last active account type is

## 1.7.13

### Patch Changes

- [#4581](https://github.com/reown-com/appkit/pull/4581) [`37aa39c`](https://github.com/reown-com/appkit/commit/37aa39c03f4a67253ff9cf7517408293a512c941) Thanks [@devin-ai-integration](https://github.com/apps/devin-ai-integration)! - Add 127.0.0.1 to the allowlist for localhost IP address support

- [#4600](https://github.com/reown-com/appkit/pull/4600) [`2d96652`](https://github.com/reown-com/appkit/commit/2d966523bb7d08218df00b9f333f00460f4c15a9) Thanks [@enesozturk](https://github.com/enesozturk)! - Removes type castings and handles errors instead

- [#4358](https://github.com/reown-com/appkit/pull/4358) [`f76135f`](https://github.com/reown-com/appkit/commit/f76135fe25588faf610def5f0c5a2a9af9c25b45) Thanks [@enesozturk](https://github.com/enesozturk)! - Upgrades Valtio to v2

- [#4602](https://github.com/reown-com/appkit/pull/4602) [`ac76c05`](https://github.com/reown-com/appkit/commit/ac76c0545bab7ab2457e5d27889abfe7472115e2) Thanks [@tomiir](https://github.com/tomiir)! - Updates Smart Sessions validator with audited OwnableValidator contract by Rhinestone

- [#4492](https://github.com/reown-com/appkit/pull/4492) [`19d986f`](https://github.com/reown-com/appkit/commit/19d986fb0dbd15b14c5402c1e7aefdf364a3c908) Thanks [@zoruka](https://github.com/zoruka)! - Rename CloudAuthSIWX to ReownAuthentication keeping backwards compatibility.

## 1.7.12

### Patch Changes

- [#4525](https://github.com/reown-com/appkit/pull/4525) [`f17c13a`](https://github.com/reown-com/appkit/commit/f17c13a584ca121416d73eb65f8e02bf6f2a34b1) Thanks [@enesozturk](https://github.com/enesozturk)! - Updates Bitcoin adapter's WalletStandardConnector to have switch network functionality from wallet's features

- [#4595](https://github.com/reown-com/appkit/pull/4595) [`6ff6759`](https://github.com/reown-com/appkit/commit/6ff675996c52a46280370227165c532047f0fd63) Thanks [@enesozturk](https://github.com/enesozturk)! - Updates balance fetch on Ethers and Ethers5 adapters to make sure to resolve promise to not block initialization

- [#4551](https://github.com/reown-com/appkit/pull/4551) [`6c0a28b`](https://github.com/reown-com/appkit/commit/6c0a28b5c548d4524cba06e2048233d8d96982c3) Thanks [@magiziz](https://github.com/magiziz)! - Fixed an issue where declining a SIWX signature showed an incorrect error message

- [#4575](https://github.com/reown-com/appkit/pull/4575) [`3eae9b3`](https://github.com/reown-com/appkit/commit/3eae9b34dbe58760ee5d0bf585743f2f880e4392) Thanks [@svenvoskamp](https://github.com/svenvoskamp)! - Adds supports for 1CA in Embedded Wallet flows

- [#4570](https://github.com/reown-com/appkit/pull/4570) [`df78462`](https://github.com/reown-com/appkit/commit/df78462e0e72ca23459b8fdaa31406906a99d153) Thanks [@tomiir](https://github.com/tomiir)! - Add forwarding of custom RPC urls to be used in embedded wallet requests

- [#4569](https://github.com/reown-com/appkit/pull/4569) [`a5870fa`](https://github.com/reown-com/appkit/commit/a5870fa6c87c9ce76bf1683543ddc325b04f0331) Thanks [@zoruka](https://github.com/zoruka)! - Introduce signOutOnDisconnect SIWXConfig flag and fix the same flag on SIWE that was not working properly.

- [#4577](https://github.com/reown-com/appkit/pull/4577) [`2b5c17c`](https://github.com/reown-com/appkit/commit/2b5c17cc4dc938543371208994acba56e15dba6a) Thanks [@magiziz](https://github.com/magiziz)! - Fixed an issue where switching network using wagmi used the walletconnect rpc instead of wagmi rpc

## 1.7.11

### Patch Changes

- [#4509](https://github.com/reown-com/appkit/pull/4509) [`c0e7b37`](https://github.com/reown-com/appkit/commit/c0e7b370f6eaa7503a4e9eb68b3677084e5e7483) Thanks [@enesozturk](https://github.com/enesozturk)! - Fixes issue on Bitcoin adapter where getActiveNetwork function get's network of other namespaces

- [#4518](https://github.com/reown-com/appkit/pull/4518) [`4c517ac`](https://github.com/reown-com/appkit/commit/4c517ac9ee245fa299db5c8f3956148e0d87fdd6) Thanks [@svenvoskamp](https://github.com/svenvoskamp)! - Fix an issue where if a wallet doesnt have rdns it could show up as a duplicate connector in connect screen

- [#4530](https://github.com/reown-com/appkit/pull/4530) [`269f621`](https://github.com/reown-com/appkit/commit/269f621b08d9cedd9176796df39499f196f8a23f) Thanks [@tomiir](https://github.com/tomiir)! - Fixes issue where closing modal instead of cancelling the request would cause desync with embedded wallet modal state

- [#4523](https://github.com/reown-com/appkit/pull/4523) [`7272728`](https://github.com/reown-com/appkit/commit/72727285c398cae29d3848c937a1c5c9d9ec5496) Thanks [@enesozturk](https://github.com/enesozturk)! - Fixes issue for the embedded wallet use case where switching network doesn't redirect AppKit back to previous screen

- [#4526](https://github.com/reown-com/appkit/pull/4526) [`1bef587`](https://github.com/reown-com/appkit/commit/1bef5871476467662d499747fa828583c3d0b52c) Thanks [@svenvoskamp](https://github.com/svenvoskamp)! - Fix an issue where AppKit would open sign message screen after it falls back to previous SIWE session

- [#4529](https://github.com/reown-com/appkit/pull/4529) [`96d8b3f`](https://github.com/reown-com/appkit/commit/96d8b3f6bc30380e350f4e2c62cd6b3504ca753b) Thanks [@enesozturk](https://github.com/enesozturk)! - Fixes issue on swap transaction order on UI for image and descriptions

- [#4537](https://github.com/reown-com/appkit/pull/4537) [`e82d88b`](https://github.com/reown-com/appkit/commit/e82d88b88d5a5212c792d07063fad10dd5435c1b) Thanks [@enesozturk](https://github.com/enesozturk)! - Upgrades Viem and Wagmi dependencies

- [#4471](https://github.com/reown-com/appkit/pull/4471) [`ab4b093`](https://github.com/reown-com/appkit/commit/ab4b093d226aca7c5053001f1fdd3e13f7d68cc0) Thanks [@svenvoskamp](https://github.com/svenvoskamp)! - Fixes an issue on the embedded wallet where rpc requests didn't target the correct chainId

- [#4501](https://github.com/reown-com/appkit/pull/4501) [`c7d293b`](https://github.com/reown-com/appkit/commit/c7d293b41c18a40c76e9cff793138e5adf53ff7e) Thanks [@tomiir](https://github.com/tomiir)! - Adds registerWalletStandard flag to allow automatic registration of WalletConnect relay connector as a Wallet Standard wallet

- [#4547](https://github.com/reown-com/appkit/pull/4547) [`52677fb`](https://github.com/reown-com/appkit/commit/52677fb5784c4f0da6454c2b4f0be6bc20330276) Thanks [@svenvoskamp](https://github.com/svenvoskamp)! - Fix an issue where enableEIP6963 didn't result into the expected behaviour on wagmi adapter

- [#4553](https://github.com/reown-com/appkit/pull/4553) [`7b64297`](https://github.com/reown-com/appkit/commit/7b64297a47e1d8c9fa86490e01ba800825987512) Thanks [@enesozturk](https://github.com/enesozturk)! - Adds `enableReconnect` flag to prevent automatic reconnection on initialization and page load.

  ### Example usage:

  ```jsx
  createAppKit({
    networks: [...],
    metadata: {...},
    enableReconnect: false // disables reconnection
  })
  ```

- [#4544](https://github.com/reown-com/appkit/pull/4544) [`47663ce`](https://github.com/reown-com/appkit/commit/47663ce7e7f7b1fcd26ba52b1d21f73b7048a27c) Thanks [@svenvoskamp](https://github.com/svenvoskamp)! - Fixes a case where AppKit would stay in the wrong network when enableNetworkSwitch is disabled

- [#4552](https://github.com/reown-com/appkit/pull/4552) [`c5e0650`](https://github.com/reown-com/appkit/commit/c5e065028ce8ca3e88b3cd66962c5a19cf1808e9) Thanks [@magiziz](https://github.com/magiziz)! - Fixes issue where appkit.disconnect would not disconnect all namespaces when no parameter was provided

- [#4519](https://github.com/reown-com/appkit/pull/4519) [`4416586`](https://github.com/reown-com/appkit/commit/4416586acc1439ebdfdc29ff24c2426627dca5ed) Thanks [@svenvoskamp](https://github.com/svenvoskamp)! - Add version check script so devs get a warning if there is a mismatch between used appkit version

- [#4545](https://github.com/reown-com/appkit/pull/4545) [`b9fd168`](https://github.com/reown-com/appkit/commit/b9fd168a16733fbe5434e8aa8ab815430a45aff6) Thanks [@magiziz](https://github.com/magiziz)! - Fixed an issue where Sats Connect connectors (e.g Leather and Xverse) didn't appear in the connect modal after page load

- [#4554](https://github.com/reown-com/appkit/pull/4554) [`f3717ce`](https://github.com/reown-com/appkit/commit/f3717ce9d8acef53dba3794e386cb3f7695d2a72) Thanks [@tomiir](https://github.com/tomiir)! - Makes `chainId` optional in RPC requests

## 1.7.10

### Patch Changes

- [#4510](https://github.com/reown-com/appkit/pull/4510) [`7227468`](https://github.com/reown-com/appkit/commit/7227468e72acff12fcfb281c83941bec4ec06b03) Thanks [@magiziz](https://github.com/magiziz)! - Fixed an issue where the universal provider would hang forever if JWT verification failed during initialization

- [#4491](https://github.com/reown-com/appkit/pull/4491) [`0646651`](https://github.com/reown-com/appkit/commit/064665169d48c4c3456edf48f67ff25b3d07f678) Thanks [@svenvoskamp](https://github.com/svenvoskamp)! - Fix an issue where SIWX sign message view was opening in One-Click-Auth flows

- [#4498](https://github.com/reown-com/appkit/pull/4498) [`0dfe08b`](https://github.com/reown-com/appkit/commit/0dfe08b3d4b9addb675445d22adb350fb5d18fc3) Thanks [@svenvoskamp](https://github.com/svenvoskamp)! - Fix an issue where Global JSX namespace gets polluted, instead extend it

- [#4442](https://github.com/reown-com/appkit/pull/4442) [`255b3ac`](https://github.com/reown-com/appkit/commit/255b3ac1bbd649b05af310146f84ad3fd7b6898b) Thanks [@svenvoskamp](https://github.com/svenvoskamp)! - Add logic to fallback to previous SIWE session if request is canceled for current network

## 1.7.9

### Patch Changes

- [#4479](https://github.com/reown-com/appkit/pull/4479) [`c6eb67f`](https://github.com/reown-com/appkit/commit/c6eb67fe9f43fe889452f4f13030239bc23e1540) Thanks [@enesozturk](https://github.com/enesozturk)! - Fixes an issue on auth provider where it doesn't respect the last connected network and default to first available network of EVM adapter on page load

- [#4472](https://github.com/reown-com/appkit/pull/4472) [`8bff121`](https://github.com/reown-com/appkit/commit/8bff12156788762e56d5aaa3cefd19f3c06db937) Thanks [@devin-ai-integration](https://github.com/apps/devin-ai-integration)! - increase wallet button coverage

- [#4466](https://github.com/reown-com/appkit/pull/4466) [`024a99d`](https://github.com/reown-com/appkit/commit/024a99dc650d950156378e77ec423d711a8f0004) Thanks [@tomiir](https://github.com/tomiir)! - Changes `wallet_addEthereumChain` behavior in wagmi to use the chain's original rpc url instead of blockchain API url

- [#4452](https://github.com/reown-com/appkit/pull/4452) [`dd3a7dd`](https://github.com/reown-com/appkit/commit/dd3a7ddb87eaf295f453c13ccba753897cccfbce) Thanks [@svenvoskamp](https://github.com/svenvoskamp)! - Fix OKX Wallet Bitcoin issue where it was not able to connect properly in Bitcoin environments

- [#4455](https://github.com/reown-com/appkit/pull/4455) [`c2c1d78`](https://github.com/reown-com/appkit/commit/c2c1d78894283cf4d58fcdfc66c0f69a07fc9e91) Thanks [@devin-ai-integration](https://github.com/apps/devin-ai-integration)! - Updates Onramp provider sort

- [#4464](https://github.com/reown-com/appkit/pull/4464) [`a8fa4fb`](https://github.com/reown-com/appkit/commit/a8fa4fbdfb54cc185f656276929ea9635b07a4c0) Thanks [@enesozturk](https://github.com/enesozturk)! - Fixes issue on WalletConnect connector is not reconnecting on page load

- [#4453](https://github.com/reown-com/appkit/pull/4453) [`87959b5`](https://github.com/reown-com/appkit/commit/87959b5990c15703854fe33f8123b73e5d61fe59) Thanks [@enesozturk](https://github.com/enesozturk)! - Fixes issue on AppKit buttons with namespace where the correct account state is not being shown to the user on page load

- [#4478](https://github.com/reown-com/appkit/pull/4478) [`5201905`](https://github.com/reown-com/appkit/commit/52019051165de70aa5ce300f5ca51c189408f4f7) Thanks [@enesozturk](https://github.com/enesozturk)! - Fixes issue on multichain where we are disconnecting namespaces if they are not in the WC connection's available namespaces

- [#4441](https://github.com/reown-com/appkit/pull/4441) [`00b2975`](https://github.com/reown-com/appkit/commit/00b2975fb57e67ab54c97b4154a90cc4715723b2) Thanks [@enesozturk](https://github.com/enesozturk)! - Refactors token balance util to use getAssets call only when using Auth provider

- [#4494](https://github.com/reown-com/appkit/pull/4494) [`352f41b`](https://github.com/reown-com/appkit/commit/352f41bfc53c257362efbe6067ac03dc8dd92ec4) Thanks [@zoruka](https://github.com/zoruka)! - Cloud Auth SIWX skip get sessions if token is not set

## 1.7.8

### Patch Changes

- [#4394](https://github.com/reown-com/appkit/pull/4394) [`2171cb4`](https://github.com/reown-com/appkit/commit/2171cb4d2f36cc0203a6f42d7c7c7d9773f7656c) Thanks [@tomiir](https://github.com/tomiir)! - Makes CaipNetwork generic so that arbitrary namespaces can be used to create networks

- [#4433](https://github.com/reown-com/appkit/pull/4433) [`c8292f8`](https://github.com/reown-com/appkit/commit/c8292f89b6e607eb1ddaa8047ed32aa175bff70c) Thanks [@tomiir](https://github.com/tomiir)! - Adds automatic safe connector support to ethers and ethers5 clients

- [#4417](https://github.com/reown-com/appkit/pull/4417) [`c71afc1`](https://github.com/reown-com/appkit/commit/c71afc13362badd2d0c5eb9fa7453f2e1faffee4) Thanks [@svenvoskamp](https://github.com/svenvoskamp)! - Fixes issue where wagmi had a different chain state than AppKit

- [#4438](https://github.com/reown-com/appkit/pull/4438) [`d1fb3c8`](https://github.com/reown-com/appkit/commit/d1fb3c8c1a9c1cf7818806a725403838aec4a7c6) Thanks [@svenvoskamp](https://github.com/svenvoskamp)! - Fix an issue where getAccount doesn't return the embeddedWalletInfo

- [#4380](https://github.com/reown-com/appkit/pull/4380) [`30dbd46`](https://github.com/reown-com/appkit/commit/30dbd46897e69ccdd71e8722ff711aa0c1f28055) Thanks [@tomiir](https://github.com/tomiir)! - Adds Safe Apps SDK support by default on wagmi

- [#4410](https://github.com/reown-com/appkit/pull/4410) [`76c2ed6`](https://github.com/reown-com/appkit/commit/76c2ed68239f30b801de2d5ff05ced9b1442226a) Thanks [@enesozturk](https://github.com/enesozturk)! - Refactors network switching logics on modal open where we shouldn't properly make AppKit switch network

- [#4413](https://github.com/reown-com/appkit/pull/4413) [`62fe412`](https://github.com/reown-com/appkit/commit/62fe412a6c618fca24826ab77b927bc6fdefde1a) Thanks [@enesozturk](https://github.com/enesozturk)! - Fixes issue where we are adding wagmi connectors to our controllers double time which causes connection sync issues at some environments like Vue and causes performance issues

- [#4395](https://github.com/reown-com/appkit/pull/4395) [`38d44e7`](https://github.com/reown-com/appkit/commit/38d44e79cc753adf01becd64a39aa20cbe1504fa) Thanks [@tomiir](https://github.com/tomiir)! - Fixes issue where some extension wallets would not be properly disconnected when requested via a hook.

- [#4432](https://github.com/reown-com/appkit/pull/4432) [`aa23b67`](https://github.com/reown-com/appkit/commit/aa23b671df3a0f30fb3ff11ff7deab2408144049) Thanks [@enesozturk](https://github.com/enesozturk)! - Fixes remote configs util getting email and social enabled for AppKit Basic

- [#4436](https://github.com/reown-com/appkit/pull/4436) [`2aa4ba2`](https://github.com/reown-com/appkit/commit/2aa4ba26cfc2c44f606f83ca24119887bc71c816) Thanks [@tomiir](https://github.com/tomiir)! - Adds support for Solflare wallet deeplinking in mobile environments

## 1.7.7

### Patch Changes

- [#4396](https://github.com/reown-com/appkit/pull/4396) [`e215835`](https://github.com/reown-com/appkit/commit/e215835e83375f06a1bcbb4d863fb67d70981dda) Thanks [@enesozturk](https://github.com/enesozturk)! - Fixes W3mFrameProvider initialization without current chain id which causes network sync issues betwen AppKit and Secure site

- [#4386](https://github.com/reown-com/appkit/pull/4386) [`a64d13c`](https://github.com/reown-com/appkit/commit/a64d13c737003d83fc9bc0b2ee1ebfab6f0469be) Thanks [@tomiir](https://github.com/tomiir)! - Fixes issue where Solflare instead of Coinbase would be excepted from not having a mobile_link to be displayed in All Wallets

- [#4384](https://github.com/reown-com/appkit/pull/4384) [`bf2570d`](https://github.com/reown-com/appkit/commit/bf2570daa33a79b3994d53529780086017cce218) Thanks [@svenvoskamp](https://github.com/svenvoskamp)! - Add `chainId` to connectSocial app event to solve cases where user is connecting to the wrong network

- [#4361](https://github.com/reown-com/appkit/pull/4361) [`5b26c53`](https://github.com/reown-com/appkit/commit/5b26c53f186d5ddf8d45fb8bf709fe3aa0adc8c2) Thanks [@enesozturk](https://github.com/enesozturk)! - Fixes issue where auth provider's switch network is not getting called when switching to different namespace if that namespace is already connected before

- [#4408](https://github.com/reown-com/appkit/pull/4408) [`50bcf53`](https://github.com/reown-com/appkit/commit/50bcf53725a14baaf3445ddb7a5340564c821be4) Thanks [@tomiir](https://github.com/tomiir)! - fix: issue where wagmi would not clear connections properly in vue mobile contexts

- [#4404](https://github.com/reown-com/appkit/pull/4404) [`08f4981`](https://github.com/reown-com/appkit/commit/08f49817d6d74dec10f3cb1d0f21a74e85a5f026) Thanks [@enesozturk](https://github.com/enesozturk)! - Fixes an issue that can be seen on embedded mode where we are redirecting user to connect page instead of account page after connection

- [#4374](https://github.com/reown-com/appkit/pull/4374) [`d0d0c05`](https://github.com/reown-com/appkit/commit/d0d0c053c0178da81be7e55ab8d11125f8ca3f9a) Thanks [@devin-ai-integration](https://github.com/apps/devin-ai-integration)! - Updates SIWX message text to handle network name from CAIP network id

- [#4389](https://github.com/reown-com/appkit/pull/4389) [`974db88`](https://github.com/reown-com/appkit/commit/974db88133df3f98a38eaeeaab8eecd512c32ef9) Thanks [@lukaisailovic](https://github.com/lukaisailovic)! - Fix modal closing on unsupported chain selection

- [#4392](https://github.com/reown-com/appkit/pull/4392) [`5f2065b`](https://github.com/reown-com/appkit/commit/5f2065b1a9b655fdf48d71ae7087753231d62f37) Thanks [@tomiir](https://github.com/tomiir)! - Simplifies routing logic to replace multiple parameters with callbacks for error success and cancel

- [#4318](https://github.com/reown-com/appkit/pull/4318) [`43e5a9d`](https://github.com/reown-com/appkit/commit/43e5a9d4f9e38f2b7da2c5bfe6166f62d18cc51c) Thanks [@svenvoskamp](https://github.com/svenvoskamp)! - Add remote features configuration handling

- [#4392](https://github.com/reown-com/appkit/pull/4392) [`5f2065b`](https://github.com/reown-com/appkit/commit/5f2065b1a9b655fdf48d71ae7087753231d62f37) Thanks [@tomiir](https://github.com/tomiir)! - Fixes issue where ENS registration due to signature expiration error would result in modal closing without error message.

- [#4381](https://github.com/reown-com/appkit/pull/4381) [`6c12c21`](https://github.com/reown-com/appkit/commit/6c12c217eed139e2468d8d13f99dbc6af0f80947) Thanks [@tomiir](https://github.com/tomiir)! - Modified the fetchFeaturedWallets() function in ApiController.ts to create a new sorted array instead of sorting the array in place, ensuring the wallet order is preserved.

- [#4385](https://github.com/reown-com/appkit/pull/4385) [`e33b28f`](https://github.com/reown-com/appkit/commit/e33b28fc64401471f6a2fe908ea365409122af18) Thanks [@tomiir](https://github.com/tomiir)! - Adds externalCustomerId to meld url

## 1.7.6

### Patch Changes

- [#4353](https://github.com/reown-com/appkit/pull/4353) [`3b74f1f`](https://github.com/reown-com/appkit/commit/3b74f1fef5a4498634cc744c37e05dbb7f2e2075) Thanks [@lukaisailovic](https://github.com/lukaisailovic)! - Enaple Solana in AppKit Pay

- [#4347](https://github.com/reown-com/appkit/pull/4347) [`442b1fa`](https://github.com/reown-com/appkit/commit/442b1fa5211af3aaf8c3dfa4f0c2b39ffd740a60) Thanks [@enesozturk](https://github.com/enesozturk)! - Removes chain parameter from the excluded wallets fetch request to not filter wallets by supported networks

## 1.7.5

### Patch Changes

- [#4300](https://github.com/reown-com/appkit/pull/4300) [`b932466`](https://github.com/reown-com/appkit/commit/b9324661001d8aae205d151a4c7040a4832804ff) Thanks [@tomiir](https://github.com/tomiir)! - Fixes issue where wallets without a valid mobile_link were listed on mobile devices

- [#4320](https://github.com/reown-com/appkit/pull/4320) [`997b6fc`](https://github.com/reown-com/appkit/commit/997b6fc20f73ba68f8815c659f3cae03de90d3c8) Thanks [@lukaisailovic](https://github.com/lukaisailovic)! - Enable analytics for Pay feature

- [#4324](https://github.com/reown-com/appkit/pull/4324) [`a26ea94`](https://github.com/reown-com/appkit/commit/a26ea9498f21d5419e9c7fa0cc567bc5d04a5173) Thanks [@devin-ai-integration](https://github.com/apps/devin-ai-integration)! - Fixes wui-ux-by-reown to make it always displayed

- [#4313](https://github.com/reown-com/appkit/pull/4313) [`45025fc`](https://github.com/reown-com/appkit/commit/45025fc0d88444adad422ef219bea19ff8f98596) Thanks [@enesozturk](https://github.com/enesozturk)! - Upgrade all dependencies with minor and patch updates

- [#4300](https://github.com/reown-com/appkit/pull/4300) [`b932466`](https://github.com/reown-com/appkit/commit/b9324661001d8aae205d151a4c7040a4832804ff) Thanks [@tomiir](https://github.com/tomiir)! - Fixes issue where excludeWalletIds would not be properly set on api requests.

- [#4311](https://github.com/reown-com/appkit/pull/4311) [`a3c2f6c`](https://github.com/reown-com/appkit/commit/a3c2f6c9630ae1166383d850b79626a994b84821) Thanks [@svenvoskamp](https://github.com/svenvoskamp)! - This PR fixes an issue where the auth connector would override the previous account state when switching network (switching on auth connector in stead of using the already existing account state (with different provider)

- [#4312](https://github.com/reown-com/appkit/pull/4312) [`320fe23`](https://github.com/reown-com/appkit/commit/320fe2300481da1b5b0aeff74d88fa44b5bff03a) Thanks [@enesozturk](https://github.com/enesozturk)! - Upgrades WalletConnect dependencies to latest

- [#4107](https://github.com/reown-com/appkit/pull/4107) [`5018edf`](https://github.com/reown-com/appkit/commit/5018edfea07ac55e143215182a07cdd84901306f) Thanks [@svenvoskamp](https://github.com/svenvoskamp)! - This change includes social login improvments. We will remove an abudant call that we make to our backend to receive the users data. Also changed the wallet schema according to the new data that we receive.

- [#4315](https://github.com/reown-com/appkit/pull/4315) [`1d6fa26`](https://github.com/reown-com/appkit/commit/1d6fa26731a5a47bea1d242cfdb59a17a4de42d0) Thanks [@ganchoradkov](https://github.com/ganchoradkov)! - Fixed a bug where wagmi adapter wasn't using the dedicated `.getProvider()` api but a custom `.provider` prop which is unreliable in getting the provider

- [#4337](https://github.com/reown-com/appkit/pull/4337) [`e206f97`](https://github.com/reown-com/appkit/commit/e206f97ac30fafc507ffcfc765b2fca4f617e965) Thanks [@tomiir](https://github.com/tomiir)! - Fixes issue where walletInfo would be wrongly synced in wagmi on refresh

- [#4341](https://github.com/reown-com/appkit/pull/4341) [`2feefeb`](https://github.com/reown-com/appkit/commit/2feefebeaab3e47baf2f3b3b189ed90d9f6e7ddd) Thanks [@tomiir](https://github.com/tomiir)! - Fixes issue where defaultAccountTypes would not be respected

- [#4301](https://github.com/reown-com/appkit/pull/4301) [`2fb24ad`](https://github.com/reown-com/appkit/commit/2fb24ad36544ba9ca51d1504d10ea60a5abfd2e1) Thanks [@tomiir](https://github.com/tomiir)! - Fixes issue where balance would not be properly updated after a send flow transaction'

- [#4340](https://github.com/reown-com/appkit/pull/4340) [`0405ab5`](https://github.com/reown-com/appkit/commit/0405ab5949092be4bcf9fb08190e15cdbb74460e) Thanks [@enesozturk](https://github.com/enesozturk)! - Fixes Phantom mobile wallet redirection for EVM/Bitcoin chains

- [#4344](https://github.com/reown-com/appkit/pull/4344) [`d4dc6c8`](https://github.com/reown-com/appkit/commit/d4dc6c89cd6abf8e355fc0f7fb7063df6b32d592) Thanks [@lukaisailovic](https://github.com/lukaisailovic)! - Add asset metadata to exchange fetching so the data can be preemptively filtered based on the supported asset

- [#4246](https://github.com/reown-com/appkit/pull/4246) [`0379974`](https://github.com/reown-com/appkit/commit/0379974137cb0a28f75220bd3c77d0ae35fd43c2) Thanks [@enesozturk](https://github.com/enesozturk)! - Upgrade Solana packages to latest

- [#4348](https://github.com/reown-com/appkit/pull/4348) [`72f4658`](https://github.com/reown-com/appkit/commit/72f4658597bb9c15b94836cc3be4fa2078b1e163) Thanks [@enesozturk](https://github.com/enesozturk)! - Fixes send flow address input logic where it's not responding the given input as expected

- [#3598](https://github.com/reown-com/appkit/pull/3598) [`e7d3e71`](https://github.com/reown-com/appkit/commit/e7d3e71d72625e057d94b3768438b29a8b6f530e) Thanks [@svenvoskamp](https://github.com/svenvoskamp)! - Expose fetchBalance method so apps can call this function after a transaction has happened on their side

- [#4342](https://github.com/reown-com/appkit/pull/4342) [`c0a6ae8`](https://github.com/reown-com/appkit/commit/c0a6ae8ec385748f1b6f376ab80be12bd12e6810) Thanks [@enesozturk](https://github.com/enesozturk)! - Fixes connected wallet info state where it's using connector id when connector or provider is not found

- [#4303](https://github.com/reown-com/appkit/pull/4303) [`33b3693`](https://github.com/reown-com/appkit/commit/33b36933ab36f03bf060e5d9a1ad8f036ccfdee5) Thanks [@tomiir](https://github.com/tomiir)! - Adds try catch preventing error from bubbling up if fetching supported networks for Blockchain API fails'

- [#4294](https://github.com/reown-com/appkit/pull/4294) [`d23248f`](https://github.com/reown-com/appkit/commit/d23248fd68eaf6641bd3f1251e1e5a6df1e2e9c5) Thanks [@enesozturk](https://github.com/enesozturk)! - Calls Universal Link if the deeplink call is not worked as expected and UL is exist

## 1.7.4

### Patch Changes

- [#4296](https://github.com/reown-com/appkit/pull/4296) [`70e0da4`](https://github.com/reown-com/appkit/commit/70e0da4889822b74fb81fc94fa48c5bd1340cbef) Thanks [@svenvoskamp](https://github.com/svenvoskamp)! - Fixes an issue where social login was not working in PWA environments

- [#4220](https://github.com/reown-com/appkit/pull/4220) [`f2f1b72`](https://github.com/reown-com/appkit/commit/f2f1b72387a7658abd6e8c3061c51e9811e8ce69) Thanks [@zoruka](https://github.com/zoruka)! - Update `CloudAuthSIWX` adding `data` allowing Cloud Auth to parse data from Solana and allowing user data to be displayed in Cloud dashboard.

- [#4087](https://github.com/reown-com/appkit/pull/4087) [`ce17d19`](https://github.com/reown-com/appkit/commit/ce17d19a7e26eb3bc1de7ecd4928dedef6b99c66) Thanks [@zoruka](https://github.com/zoruka)! - - Enable easier and more consistent use of cloud-side authentication features on the client side

  - Support app-specific extensions to SIWX through custom methods, exposed via generic getters or hooks, enabling flexible enhancements without altering core behavior

- [#4253](https://github.com/reown-com/appkit/pull/4253) [`00caf22`](https://github.com/reown-com/appkit/commit/00caf227b84476ab45e317b48f8a31bd14e48e78) Thanks [@enesozturk](https://github.com/enesozturk)! - Fixes connectors listing business logic when initializing AppKit, for dynamic customization use cases like Demo app specificially

- [#4281](https://github.com/reown-com/appkit/pull/4281) [`30a9e1b`](https://github.com/reown-com/appkit/commit/30a9e1bbc5978a2cac63cf46af89aa3c34ad24c7) Thanks [@magiziz](https://github.com/magiziz)! - Added cosmos namespace

- [#4221](https://github.com/reown-com/appkit/pull/4221) [`f91ec17`](https://github.com/reown-com/appkit/commit/f91ec1770fdada058a658b62bd3f8f7bea00322e) Thanks [@zoruka](https://github.com/zoruka)! - Export BIP122Verifier and SIWX types in @reown/appkit-siwx package

- [#4287](https://github.com/reown-com/appkit/pull/4287) [`84a2cff`](https://github.com/reown-com/appkit/commit/84a2cff2e671ada649ef3902c9da90bad09a65e2) Thanks [@tomiir](https://github.com/tomiir)! - Fixes issue where embeddedWalletInfo would be populated even when connected to non-embedded wallets

- [#4224](https://github.com/reown-com/appkit/pull/4224) [`f6bddff`](https://github.com/reown-com/appkit/commit/f6bddffe8cea2d6696a6dd98ec8a57c17c6a02ac) Thanks [@enesozturk](https://github.com/enesozturk)! - Fixes synchronizing for all account types after account change

- [#4228](https://github.com/reown-com/appkit/pull/4228) [`bc0f260`](https://github.com/reown-com/appkit/commit/bc0f260beac036571c6e820953e69d14e087048b) Thanks [@enesozturk](https://github.com/enesozturk)! - Fixes network enable/disable logics on Demo app

- [#4248](https://github.com/reown-com/appkit/pull/4248) [`4aeb703`](https://github.com/reown-com/appkit/commit/4aeb703fc5bc44cfc6cb34b43758eb3fbb8ab005) Thanks [@tomiir](https://github.com/tomiir)! - Fixes issue where sending an asset from a non-embedded wallet resulted in blank send view'

- [#4260](https://github.com/reown-com/appkit/pull/4260) [`f8c8f7f`](https://github.com/reown-com/appkit/commit/f8c8f7f234b57afdc9d93ca6b36f366ebf704b85) Thanks [@tomiir](https://github.com/tomiir)! - Fixes issue where Receive screen would show networks from other namespaces

- [#4279](https://github.com/reown-com/appkit/pull/4279) [`04b770d`](https://github.com/reown-com/appkit/commit/04b770dae74af95638edd280d725228df4280efa) Thanks [@enesozturk](https://github.com/enesozturk)! - Upgrades sats-connect for network switching while connecting

- [#4299](https://github.com/reown-com/appkit/pull/4299) [`246d9c4`](https://github.com/reown-com/appkit/commit/246d9c49e1c7b5ae6db5fd9a537ff9cd508cafca) Thanks [@magiziz](https://github.com/magiziz)! - Fixed an issue where deep links on mobile were not working properly

- [#4288](https://github.com/reown-com/appkit/pull/4288) [`b3a0b05`](https://github.com/reown-com/appkit/commit/b3a0b05c73b12a24685dd3c9b1b0a86b59c54c27) Thanks [@tomiir](https://github.com/tomiir)! - Fixes issue where walletInfo would not be set on initial connection

- [#4291](https://github.com/reown-com/appkit/pull/4291) [`59e0034`](https://github.com/reown-com/appkit/commit/59e00347fb3a431a0a7c2eb59850469e47e93440) Thanks [@svenvoskamp](https://github.com/svenvoskamp)! - Open loading screen from the secure site for better UX in stead of opening blank screen

- [#4242](https://github.com/reown-com/appkit/pull/4242) [`a775335`](https://github.com/reown-com/appkit/commit/a775335b37e2080b3a181e57ccafda3dd196b836) Thanks [@magiziz](https://github.com/magiziz)! - Fixed an issue causing a broken modal layout when using the embedded wallet

- [#4297](https://github.com/reown-com/appkit/pull/4297) [`4e4879e`](https://github.com/reown-com/appkit/commit/4e4879e12285c84050e2441f323534be5883c542) Thanks [@svenvoskamp](https://github.com/svenvoskamp)! - Solely use the BlockChain API to make ENS calls. Removed all the adapter specific logic to retrieve the ENS name, address and avatar

- [#4283](https://github.com/reown-com/appkit/pull/4283) [`f073d75`](https://github.com/reown-com/appkit/commit/f073d75adf726a4c137052f16d71b19389fcc3ce) Thanks [@magiziz](https://github.com/magiziz)! - Fixed an issue where the "Get Started" button appeared in the connect view when both email and socials were disabled

- [#4292](https://github.com/reown-com/appkit/pull/4292) [`f220a62`](https://github.com/reown-com/appkit/commit/f220a62751137168af47b0a55e8a7579beb12e93) Thanks [@enesozturk](https://github.com/enesozturk)! - Upgrades WalletConnect dependencies to 2.20.x

- [#4226](https://github.com/reown-com/appkit/pull/4226) [`fae99c0`](https://github.com/reown-com/appkit/commit/fae99c0c160d62ca4e87716dedc91de2c4fdbd4e) Thanks [@magiziz](https://github.com/magiziz)! - Fixed an issue where custom connectors weren't showing on mobile

- [#4290](https://github.com/reown-com/appkit/pull/4290) [`c205d9f`](https://github.com/reown-com/appkit/commit/c205d9fb3b21ac1673d594634add54fb7cff888b) Thanks [@enesozturk](https://github.com/enesozturk)! - Removes gas estimations from swap inputs and calculations

## 1.7.3

### Patch Changes

- [#4168](https://github.com/reown-com/appkit/pull/4168) [`ef34442`](https://github.com/reown-com/appkit/commit/ef344422ed50ce4b57b51858d477cd9a35513240) Thanks [@magiziz](https://github.com/magiziz)! - Enabled the activity button only for eip155 namespace

- [#4195](https://github.com/reown-com/appkit/pull/4195) [`318171e`](https://github.com/reown-com/appkit/commit/318171e7bcba74befb097e07d85ea83bf28982c0) Thanks [@tomiir](https://github.com/tomiir)! - Fixes issue where failing to get balance would result in unhandled error thrown

- [#4203](https://github.com/reown-com/appkit/pull/4203) [`cd48c5c`](https://github.com/reown-com/appkit/commit/cd48c5cc0878d4744a2021f96678b87726ad91c7) Thanks [@tomiir](https://github.com/tomiir)! - Fixes issue where preferred account types would not be respected.
  Adds support for multi-chain account types, respecting default account types format.

- [#4172](https://github.com/reown-com/appkit/pull/4172) [`e73b101`](https://github.com/reown-com/appkit/commit/e73b101431197c72bd02101d767a4e0befecb47a) Thanks [@zoruka](https://github.com/zoruka)! - Add `arguments` param for `appkit.open` function and attach swap initial arguments when opening Swap view.

- [#4199](https://github.com/reown-com/appkit/pull/4199) [`9864836`](https://github.com/reown-com/appkit/commit/986483689adeb9d4c173f12f0ab67559db4f3a0b) Thanks [@magiziz](https://github.com/magiziz)! - Fixed an issue where the wallet connection would remain in a pending state after a user rejected the connection request

- [#4194](https://github.com/reown-com/appkit/pull/4194) [`de6daa7`](https://github.com/reown-com/appkit/commit/de6daa7ca6f8ef950be7008dc606415dd2843055) Thanks [@enesozturk](https://github.com/enesozturk)! - Fixes XVerse wallet doesn't emitting accountChanged event on connection

- [#4126](https://github.com/reown-com/appkit/pull/4126) [`116b854`](https://github.com/reown-com/appkit/commit/116b854b9d94192fad1d6a6f1b9b7e511ff118fe) Thanks [@KannuSingh](https://github.com/KannuSingh)! - Fixes swap balance recent on network and account change

- [#4164](https://github.com/reown-com/appkit/pull/4164) [`c538a60`](https://github.com/reown-com/appkit/commit/c538a60c49c27ba32a8bb8362fe398811e624b47) Thanks [@magiziz](https://github.com/magiziz)! - Added required polyfills to `@reown/appkit-adapter-bitcoin` adapter package

- [#4205](https://github.com/reown-com/appkit/pull/4205) [`9a07836`](https://github.com/reown-com/appkit/commit/9a0783699bdb5d8cb211eef391227acd0ac2f1b6) Thanks [@magiziz](https://github.com/magiziz)! - Fixed issue where `safe` wagmi connector was not hidden when excluded

- [#4157](https://github.com/reown-com/appkit/pull/4157) [`8b29cab`](https://github.com/reown-com/appkit/commit/8b29cab1b560351479f343e815f66e31fef184b3) Thanks [@magiziz](https://github.com/magiziz)! - Removed activity and nft tabs from account modal when using solana

- [#4186](https://github.com/reown-com/appkit/pull/4186) [`36c8b88`](https://github.com/reown-com/appkit/commit/36c8b88fd354503d2a4ca659870ca68f99a71248) Thanks [@magiziz](https://github.com/magiziz)! - Fixed an issue where a random swap error occurred when switching networks

- [#4195](https://github.com/reown-com/appkit/pull/4195) [`318171e`](https://github.com/reown-com/appkit/commit/318171e7bcba74befb097e07d85ea83bf28982c0) Thanks [@tomiir](https://github.com/tomiir)! - Fixes issue where networks not supported by Blockchain API would fail to execute requests in wagmi

- [#4151](https://github.com/reown-com/appkit/pull/4151) [`24f46dc`](https://github.com/reown-com/appkit/commit/24f46dcf1431f24a58e5fbd2d5e390e3e7a8cf0d) Thanks [@enesozturk](https://github.com/enesozturk)! - Refactors CAIP networks state read logics in connectors and adapters

- [#4177](https://github.com/reown-com/appkit/pull/4177) [`7c37818`](https://github.com/reown-com/appkit/commit/7c37818eaefe729c13c321a2e939df2a3c3242a1) Thanks [@enesozturk](https://github.com/enesozturk)! - Maps the sats-connect address type to AppKit's Bitcoin address purpose

- [#4143](https://github.com/reown-com/appkit/pull/4143) [`37b8f58`](https://github.com/reown-com/appkit/commit/37b8f581e6617678cec18578c280d4a002dba5d7) Thanks [@enesozturk](https://github.com/enesozturk)! - Upgrades WalletConnect dependencies

- [#4187](https://github.com/reown-com/appkit/pull/4187) [`fd380eb`](https://github.com/reown-com/appkit/commit/fd380eb099c043db8c203f943692af94e8b00f5b) Thanks [@tomiir](https://github.com/tomiir)! - Adds `protocol` parameter to Bitcoin connectors' `signMessage`

- [#4197](https://github.com/reown-com/appkit/pull/4197) [`90d0f62`](https://github.com/reown-com/appkit/commit/90d0f626868258022cba7ab1ba04ac3abb759722) Thanks [@tomiir](https://github.com/tomiir)! - Fixes issue where passing universalProvider parameter would cause INITIALIZE to not be fired

- [#4206](https://github.com/reown-com/appkit/pull/4206) [`e6cb6d1`](https://github.com/reown-com/appkit/commit/e6cb6d17276fbf66f3285e29b3a7507cd2a8b8cb) Thanks [@magiziz](https://github.com/magiziz)! - Fixed an issue where recent wallets were not hidden when included in `excludeWalletIds`

- [#4207](https://github.com/reown-com/appkit/pull/4207) [`55af442`](https://github.com/reown-com/appkit/commit/55af442d4d5d8ea6c8034309d759a6bb45128709) Thanks [@magiziz](https://github.com/magiziz)! - Fixed an issue where the username from the embedded wallet info wasn’t properly synchronized

- [#4152](https://github.com/reown-com/appkit/pull/4152) [`08746a4`](https://github.com/reown-com/appkit/commit/08746a45d11ae994ede74c4309722a01c68e4c6c) Thanks [@magiziz](https://github.com/magiziz)! - Updated recent wallet list to only show wallets that match the current chain namespace

- [#4158](https://github.com/reown-com/appkit/pull/4158) [`12c3c3e`](https://github.com/reown-com/appkit/commit/12c3c3e15b162353666ca012cce51378dbc1aa40) Thanks [@enesozturk](https://github.com/enesozturk)! - Removes add/remove chain adapter functionality for the Demo app use case and use CAIP networks by getCaipNetworks function in Base client

- [#4195](https://github.com/reown-com/appkit/pull/4195) [`318171e`](https://github.com/reown-com/appkit/commit/318171e7bcba74befb097e07d85ea83bf28982c0) Thanks [@tomiir](https://github.com/tomiir)! - Fixes issue where `initialized` would not be set if an issue occurred during account sync.

## 1.7.2

### Patch Changes

- [#4100](https://github.com/reown-com/appkit/pull/4100) [`848ad47`](https://github.com/reown-com/appkit/commit/848ad47d64ddbea4cbe4768f7374f63f2fcdf8a5) Thanks [@KannuSingh](https://github.com/KannuSingh)! - adds support for customizing universal provider configuration via a new universalProviderConfigOverride option

- [#4104](https://github.com/reown-com/appkit/pull/4104) [`b18d2a9`](https://github.com/reown-com/appkit/commit/b18d2a958d5f9d60e6e88f35e6f2c99d8f9291d6) Thanks [@magiziz](https://github.com/magiziz)! - Fixed an issue where `createAppKit` would throw an error if the universal provider failed to initialize

- [#4127](https://github.com/reown-com/appkit/pull/4127) [`542985c`](https://github.com/reown-com/appkit/commit/542985c79888e9753a51466b098aff65898eeb00) Thanks [@magiziz](https://github.com/magiziz)! - Fixed an issue where swaps were not working properly when using the ethers/ethers5 adapter

- [#4091](https://github.com/reown-com/appkit/pull/4091) [`1fc664d`](https://github.com/reown-com/appkit/commit/1fc664db6b109ac2ce9c66aec31a3ae2d6419589) Thanks [@magiziz](https://github.com/magiziz)! - Fixed an issue where the WalletConnect wallet button wasn't opening the "All Wallets" modal view on mobile devices

- [#4102](https://github.com/reown-com/appkit/pull/4102) [`ae79b16`](https://github.com/reown-com/appkit/commit/ae79b164833193c363abfc42d9dd9ce0864d81ca) Thanks [@magiziz](https://github.com/magiziz)! - Fixed an issue where the swap screen froze if allowance approval failed

- [#3883](https://github.com/reown-com/appkit/pull/3883) [`4b951b1`](https://github.com/reown-com/appkit/commit/4b951b14faea38b465295f53ed0c70820ebea63c) Thanks [@tomiir](https://github.com/tomiir)! - Adds `enableNetworkSwitcher` prop to allow disabling of network switching in the modal

- [#4094](https://github.com/reown-com/appkit/pull/4094) [`af1e79a`](https://github.com/reown-com/appkit/commit/af1e79a76d32def90c9605dc8e53a2ade002033c) Thanks [@magiziz](https://github.com/magiziz)! - Fixed an issue where users were required to re-check the legal checkbox after navigating away and returning to the connect view

- [#4109](https://github.com/reown-com/appkit/pull/4109) [`07e8b4e`](https://github.com/reown-com/appkit/commit/07e8b4e373181eb74af75c7a758998c5f129921e) Thanks [@magiziz](https://github.com/magiziz)! - Fixed an issue where `useAppKitProvider` hook from vue wasn't reflecting state changes in real-time

- [#4118](https://github.com/reown-com/appkit/pull/4118) [`b9871dc`](https://github.com/reown-com/appkit/commit/b9871dcea4f7e7aefa412f8a19318e7b60eda8a3) Thanks [@magiziz](https://github.com/magiziz)! - Fixed an issue where preferred account type wasn't properly switching on initial connection when using email/social login

- [#4103](https://github.com/reown-com/appkit/pull/4103) [`afc0739`](https://github.com/reown-com/appkit/commit/afc073935348bc90414fda0c26134938383d9fcc) Thanks [@enesozturk](https://github.com/enesozturk)! - Fixes issue where switchin between appkit instances result network to be not detected as expected.

  When AppKit initialized, if local storage active CAIP network value is something AppKit doesn't support, AppKit will redirect to first available network.

- [#4120](https://github.com/reown-com/appkit/pull/4120) [`ab75760`](https://github.com/reown-com/appkit/commit/ab757609cd28340d2bffb8ef718a4bb3df9d85ad) Thanks [@magiziz](https://github.com/magiziz)! - Fixed an issue where `excludeWalletIds` option wasn't properly filtering Bitcoin wallets

## 1.7.1

### Patch Changes

- [#4014](https://github.com/reown-com/appkit/pull/4014) [`a945a10`](https://github.com/reown-com/appkit/commit/a945a10bb1a3b2beb33d6d4015714c9d623b1c84) Thanks [@magiziz](https://github.com/magiziz)! - Fixed an issue where network and wallet images weren't prefetched after connection

- [#4045](https://github.com/reown-com/appkit/pull/4045) [`681557f`](https://github.com/reown-com/appkit/commit/681557fe5d29c7bf13c2e2d9c81d0d72b68bd509) Thanks [@tomiir](https://github.com/tomiir)! - Updates solana dependencies to latest stable version

- [#4052](https://github.com/reown-com/appkit/pull/4052) [`e7480ec`](https://github.com/reown-com/appkit/commit/e7480ec82af910d795e15a01222852f44e517d45) Thanks [@arein](https://github.com/arein)! - Disable `open` button until connection established

- [#4042](https://github.com/reown-com/appkit/pull/4042) [`0f21f5f`](https://github.com/reown-com/appkit/commit/0f21f5faaf1e8d51adcfe3e7a686792c5a8a4bf9) Thanks [@enesozturk](https://github.com/enesozturk)! - Fixes recommended wallets listing when opening modal with namespace filter

- [#4077](https://github.com/reown-com/appkit/pull/4077) [`2f4bdc2`](https://github.com/reown-com/appkit/commit/2f4bdc2bf4bd0820ea3c9d070295905f5cb30032) Thanks [@enesozturk](https://github.com/enesozturk)! - Adds `customRpcUrls` prop to override default RPC URLs of the networks for native RPC calls.

  **Example**

  Define your map of chain ID / URL objects:

  ```jsx
  const customRpcUrls = {
    'eip155:1': [{ url: 'https://your-custom-mainnet-url.com' }],
    'eip155:137': [{ url: 'https://your-custom-polygon-url.com' }]
  }
  ```

  Pass it to the AppKit's `createAppKit` function.

  Additionally, if you are using Wagmi adapter you need to pass same `customRpcUrls` prop to `WagmiAdapter`.

  ```jsx
  const wagmiAdapter = new WagmiAdapter({
    networks: [...],
    projectId: "project-id",
    customRpcUrls
  })

  const modal = createAppKit({
    adapters: [...],
    networks: [...],
    projectId: "project-id",
    customRpcUrls
  })
  ```

  **Passing network props**

  If you need to pass fetch configs for your transport, you can use `config` property:

  ```jsx
  const customRpcUrls = {
    'eip155:1': [
      {
        url: 'https://your-custom-mainnet-url.com',
        config: {
          fetchOptions: {
            headers: {
              'Content-Type': 'text/plain'
            }
          }
        }
      }
    ]
  }
  ```

- [#4037](https://github.com/reown-com/appkit/pull/4037) [`478bd96`](https://github.com/reown-com/appkit/commit/478bd96106508fe89756d9f4f782679294a3a62a) Thanks [@enesozturk](https://github.com/enesozturk)! - Fixed connector listing when filtering by namespace

- [#4049](https://github.com/reown-com/appkit/pull/4049) [`c7994ea`](https://github.com/reown-com/appkit/commit/c7994ea5afea893304449d52ef67e9f3037c913a) Thanks [@enesozturk](https://github.com/enesozturk)! - Updates Bitcoin networks image ids

- [#4054](https://github.com/reown-com/appkit/pull/4054) [`8665987`](https://github.com/reown-com/appkit/commit/8665987d958df1c5e98c773ee92c26e7c8b68e24) Thanks [@enesozturk](https://github.com/enesozturk)! - Fixes redundant namespace filter while switching between networks

- [#4041](https://github.com/reown-com/appkit/pull/4041) [`5c14b6e`](https://github.com/reown-com/appkit/commit/5c14b6eac7bdabfa93223c5ada263903e5c60273) Thanks [@tomiir](https://github.com/tomiir)! - Declares appkit packages in ui dependencies

- [#4030](https://github.com/reown-com/appkit/pull/4030) [`eeb2c84`](https://github.com/reown-com/appkit/commit/eeb2c842018a4d6215716f64e53a045cfa206f6c) Thanks [@enesozturk](https://github.com/enesozturk)! - Allows disconnecting specific namespace. Users can pass `ChainNamespace` value to `disconnect()` function returned from `useDisconnect`, and disconnect only given namespace.

  If namespace is not passed, it'll disconnect all namespaces.

  **Example usage:**

  ```tsx
  const { disconnect } = useDisconnect()

  <Button onClick={() => disconnect({ namespace: 'solana' })}>
    Disconnect Solana
  </Button>
  ```

- [#4035](https://github.com/reown-com/appkit/pull/4035) [`02a2d53`](https://github.com/reown-com/appkit/commit/02a2d53a87922c22f32c70c2a73b6b7a809f237c) Thanks [@tomiir](https://github.com/tomiir)! - Updates dependencies and applies overrides for nested subdependenceis with high level vulnerabilities

- [#4045](https://github.com/reown-com/appkit/pull/4045) [`681557f`](https://github.com/reown-com/appkit/commit/681557fe5d29c7bf13c2e2d9c81d0d72b68bd509) Thanks [@tomiir](https://github.com/tomiir)! - Patches changesets action to allow for automatic canaries and GH Changelogs

- [#4046](https://github.com/reown-com/appkit/pull/4046) [`475e422`](https://github.com/reown-com/appkit/commit/475e422a1c02b85d5a314851aea56795e341ea7a) Thanks [@magiziz](https://github.com/magiziz)! - Fixed an issue where the CAIP address was not set for the namespace when using multichain

- [#4068](https://github.com/reown-com/appkit/pull/4068) [`7e6dfcd`](https://github.com/reown-com/appkit/commit/7e6dfcd77cded48cc3d1b004a37eba6464309d71) Thanks [@magiziz](https://github.com/magiziz)! - Fixed an issue where Coinbase Wallet wasn't working with multichain

- [#4055](https://github.com/reown-com/appkit/pull/4055) [`4f79747`](https://github.com/reown-com/appkit/commit/4f79747373b65c020dcca7c7ac671dc1d31aa5f1) Thanks [@enesozturk](https://github.com/enesozturk)! - Adds Bitcoin logo to wui-visual to use on chain switch screen

- [#3925](https://github.com/reown-com/appkit/pull/3925) [`093f24c`](https://github.com/reown-com/appkit/commit/093f24c69632aaeeb8ffe3120fadb6a65952ff3b) Thanks [@magiziz](https://github.com/magiziz)! - - Added email wallet button

  - Added email update functionality

  **TypeScript Example usage**

  ```ts
  import { createAppKitWalletButton } from '@reown/appkit-wallet-button'

  const appKitWalletButton = createAppKitWalletButton()

  const connectEmail = async () => {
    const { address, chainId, chainNamespace } = await appKitWalletButton.connect('email')

    return { address, chainId, chainNamespace }
  }

  const updateEmail = async () => {
    const { email } = await appKitWalletButton.updateEmail()

    return email // Return the new updated email
  }
  ```

  **React Hook Example usage**

  ```tsx
  import { useAppKitUpdateEmail, useAppKitWallet } from '@reown/appkit-wallet-button/react'

  export function ConnectEmail() {
    const { data, error, isPending, isSuccess, isError, connect } = useAppKitWallet({
      onError: err => {
        // ...
      },
      onSuccess: data => {
        // ...
      }
    })

    return <button onClick={() => connect('email')}>Connect Email</button>
  }

  export function UpdateEmail() {
    const { data, error, isPending, isSuccess, isError, updateEmail } = useAppKitUpdateEmail({
      onError: err => {
        // ...
      },
      onSuccess: data => {
        // ...
      }
    })

    return <button onClick={() => updateEmail()}>Update Email</button>
  }
  ```

- [#4048](https://github.com/reown-com/appkit/pull/4048) [`ffb8188`](https://github.com/reown-com/appkit/commit/ffb81887a0ce663ce55973118aeb2e7368ab284a) Thanks [@tomiir](https://github.com/tomiir)! - Interecepts Leather wallet image and injects the missing '+xml' declaration

- [#4074](https://github.com/reown-com/appkit/pull/4074) [`d59d1dc`](https://github.com/reown-com/appkit/commit/d59d1dcb0cec891dc20f531fbcd0b08eba77c9e2) Thanks [@magiziz](https://github.com/magiziz)! - Added support for customizing connector positions in connect modal.

  The array order determines the exact display order, in the example below the injected wallets will appear first, followed by WalletConnect and then recent wallets.

  **Example usage**

  ```tsx
  import { createAppKit } from '@reown/appkit'

  const modal = createAppKit({
    adapters: [], // Add your adapters here
    networks: [], // Add your networks here
    projectId: 'YOUR_PROJECT_ID',
    features: {
      connectorTypeOrder: ['injected', 'walletConnect', 'recent']
    }
  })
  ```

## 1.7.0

### Minor Changes

- [#3976](https://github.com/reown-com/appkit/pull/3976) [`cbd929f`](https://github.com/reown-com/appkit/commit/cbd929f839ad7ee4c7838fa980bcfd63b40b1415) Thanks [@tomiir](https://github.com/tomiir)! - Adds @reown/appkit-controllers. Proxies @reown/appkit-core to the new controllers package to maintain backwards compatibility.

### Patch Changes

- [#4002](https://github.com/reown-com/appkit/pull/4002) [`4fb30b0`](https://github.com/reown-com/appkit/commit/4fb30b06af2fcca0cffdae80f7ece7a9b498df4e) Thanks [@magiziz](https://github.com/magiziz)! - Updated the CDN package to identify as "cdn" instead of "html" in event tracking

- [#3952](https://github.com/reown-com/appkit/pull/3952) [`8b0f958`](https://github.com/reown-com/appkit/commit/8b0f958b8e4169564a1c77da33a1c9d15554094c) Thanks [@enesozturk](https://github.com/enesozturk)! - Fixes profile name syncing when switching to non EVM network or to a testnet

- [#3998](https://github.com/reown-com/appkit/pull/3998) [`0559ce5`](https://github.com/reown-com/appkit/commit/0559ce5ba7472926c6a3ec5bb890cb00d212a63a) Thanks [@tomiir](https://github.com/tomiir)! - Removes balance fetch on account sync for core

- [#3961](https://github.com/reown-com/appkit/pull/3961) [`7280345`](https://github.com/reown-com/appkit/commit/7280345ecb39359c9a5271f0ff9ebfb902379272) Thanks [@tomiir](https://github.com/tomiir)! - Adds UX by reown footer to connection screens

- [#3985](https://github.com/reown-com/appkit/pull/3985) [`569aa92`](https://github.com/reown-com/appkit/commit/569aa92cddfe51aa93c2ca201eeb500da28e8a1a) Thanks [@magiziz](https://github.com/magiziz)! - Fixed an issue where users could not use the embedded wallet if they denied access to their email address and/or username

- [#3860](https://github.com/reown-com/appkit/pull/3860) [`dc6c6ab`](https://github.com/reown-com/appkit/commit/dc6c6abb30fb4cbc9b7241cb8af6e6f970e71f62) Thanks [@tomiir](https://github.com/tomiir)! - Initializes Solana connection on adapter construction

- [#3969](https://github.com/reown-com/appkit/pull/3969) [`42e0f0e`](https://github.com/reown-com/appkit/commit/42e0f0ed9e0ef87cd5eae641dfb8bc8d267e1b44) Thanks [@magiziz](https://github.com/magiziz)! - Added `appKit.getAccount` public method

- [#3757](https://github.com/reown-com/appkit/pull/3757) [`95980b9`](https://github.com/reown-com/appkit/commit/95980b955955e9e50336e91789d9838a53534558) Thanks [@tomiir](https://github.com/tomiir)! - Splits code into basic and regular appkit. Re-exports ui and scaffold components so they can be tree-shaken. Dynamically import appropiate chunks according to feature flags'

- [#3998](https://github.com/reown-com/appkit/pull/3998) [`0559ce5`](https://github.com/reown-com/appkit/commit/0559ce5ba7472926c6a3ec5bb890cb00d212a63a) Thanks [@tomiir](https://github.com/tomiir)! - Removes identity calls from core account sync

- [#3916](https://github.com/reown-com/appkit/pull/3916) [`29779a4`](https://github.com/reown-com/appkit/commit/29779a491e2ef38e5e945afcf79601cede6d1219) Thanks [@magiziz](https://github.com/magiziz)! - Fixed an issue where connection status was incorrectly set on page refresh after attempting to connect with WalletConnect.

- [#3987](https://github.com/reown-com/appkit/pull/3987) [`ce9e3c1`](https://github.com/reown-com/appkit/commit/ce9e3c1baa0189c843359ab46aa3fa0ed8f18d14) Thanks [@enesozturk](https://github.com/enesozturk)! - Handles namespace switching when calling `open()` function. Passing `namespace` to `open()` function, AppKit will switch to that namespace. If namespace is connected, it'll open Account button, if not it'll open Connect screen.

  **Example:**

  ```jsx
  const { open } = useAppKit()

  open({ namespace: 'eip155' })
  ```

  This could be combined with `view` parameter as well. It'll switch to that namespace and open relevant page.

  **Example:**

  ```jsx
  const { open } = useAppKit()

  open({ view: 'Connect', namespace: 'eip155' })
  ```

- [#3936](https://github.com/reown-com/appkit/pull/3936) [`df403d9`](https://github.com/reown-com/appkit/commit/df403d9cce342c7b75864ec5fa841324a647434c) Thanks [@enesozturk](https://github.com/enesozturk)! - Adds namespace parameter to AppKit buttons.

  This allows users to render namespace specific connect & account buttons. When namespace has passed, connect button opens connect page with only that namespace's connectors and account button shows only that namespace's account info.

  **Example:**

  ```js
  <appkit-button namespace="eip155" />
  <appkit-button namespace="solana" />
  <appkit-button namespace="bip122" />
  ```

- [#3999](https://github.com/reown-com/appkit/pull/3999) [`503b34f`](https://github.com/reown-com/appkit/commit/503b34f904b246c78319307d6892a694d5d40c0f) Thanks [@tomiir](https://github.com/tomiir)! - Updates @walletconnect packages to 1.19.1

- [#3970](https://github.com/reown-com/appkit/pull/3970) [`b5273b6`](https://github.com/reown-com/appkit/commit/b5273b6ca5de673f74fff01f3a1c460a9869903d) Thanks [@magiziz](https://github.com/magiziz)! - Fixed an issue where wagmi triggered a disconnect on page refresh

## 1.6.9

### Patch Changes

- [#3878](https://github.com/reown-com/appkit/pull/3878) [`f9e66b9`](https://github.com/reown-com/appkit/commit/f9e66b94982cae004b9f2058eff1e845543a48c6) Thanks [@magiziz](https://github.com/magiziz)! - Fixed an issue where social popup window was blocked by safari

- [#3818](https://github.com/reown-com/appkit/pull/3818) [`bf90239`](https://github.com/reown-com/appkit/commit/bf90239f89090a63d7c7eefc762471978aeceaad) Thanks [@enesozturk](https://github.com/enesozturk)! - Allows getting chain specific account data with hooks and subscribe methods

  ### Example Usage

  ```tsx
  import { useAppKitAccount } from '@reown/appkit/react'

  const accountState = useAppKitAccount() // Returns active chain's account state
  const evmAccountState = useAppKitAccount({ chainNamespace: 'eip155' }) // Returns EVM chain's account state
  const solanaAccountState = useAppKitAccount({ chainNamespace: 'solana' }) // Returns Solana chain's account state
  const bitcoinAccountState = useAppKitAccount({ chainNamespace: 'bip122' }) // Returns Bitcoin chain's account state
  ```

- [#3764](https://github.com/reown-com/appkit/pull/3764) [`73fbd0f`](https://github.com/reown-com/appkit/commit/73fbd0fc11aaba80f5a5054659fe6eb3b3211400) Thanks [@magiziz](https://github.com/magiziz)! - Deprecated api headers to use query parameters

- [#3833](https://github.com/reown-com/appkit/pull/3833) [`ff75922`](https://github.com/reown-com/appkit/commit/ff75922b49169f24d58ed2e41238a8d1d6e9164e) Thanks [@svenvoskamp](https://github.com/svenvoskamp)! - Set wallet to undefined after unmount of QR view

- [#3832](https://github.com/reown-com/appkit/pull/3832) [`64a03e1`](https://github.com/reown-com/appkit/commit/64a03e147be917ffc630bdefb628ad303cce7b20) Thanks [@svenvoskamp](https://github.com/svenvoskamp)! - Add error message to SEND_ERROR event

- [#3864](https://github.com/reown-com/appkit/pull/3864) [`aeae09c`](https://github.com/reown-com/appkit/commit/aeae09cb4a01451cb59c639dbc50e9de13086e87) Thanks [@svenvoskamp](https://github.com/svenvoskamp)! - Applied a fix where we correctly clear the wallet state

- [#3895](https://github.com/reown-com/appkit/pull/3895) [`8d2a81f`](https://github.com/reown-com/appkit/commit/8d2a81f48875c2810c5e341ce4822635696c7b2b) Thanks [@magiziz](https://github.com/magiziz)! - Add await in switchNetwork

- [#3869](https://github.com/reown-com/appkit/pull/3869) [`b264e3b`](https://github.com/reown-com/appkit/commit/b264e3b940d28f903d0f83292b00f4fb66423118) Thanks [@enesozturk](https://github.com/enesozturk)! - Fixes defaultNetwork prop that is not being used on initialization

- [#3785](https://github.com/reown-com/appkit/pull/3785) [`faf3f25`](https://github.com/reown-com/appkit/commit/faf3f253541ba82da47da5b7f285da6400a0ab58) Thanks [@magiziz](https://github.com/magiziz)! - Added support for react version 19

- [#3847](https://github.com/reown-com/appkit/pull/3847) [`675d863`](https://github.com/reown-com/appkit/commit/675d86364d38e88e069d1b739683d16e4ff2ee71) Thanks [@tomiir](https://github.com/tomiir)! - Fixes issue where switching to an unrecognized chain in MM mobile resulted in INVALID_CHAIN error which was not parsed for wallet_addEthereumChain request

- [#3870](https://github.com/reown-com/appkit/pull/3870) [`eb510b0`](https://github.com/reown-com/appkit/commit/eb510b0901f0a115b48a555d2839a14c92eaccf4) Thanks [@zoruka](https://github.com/zoruka)! - Add extra metadata about connected wallet sent to cloud auth siwx

- [#3917](https://github.com/reown-com/appkit/pull/3917) [`bebdea0`](https://github.com/reown-com/appkit/commit/bebdea0fe73872ab8bfd9549bb1275b598c85821) Thanks [@svenvoskamp](https://github.com/svenvoskamp)! - Fix a case where wagmi is not getting the correct session state

- [#3910](https://github.com/reown-com/appkit/pull/3910) [`62bb4da`](https://github.com/reown-com/appkit/commit/62bb4da13eefc1059bfc5b060f0f51b2b8892cca) Thanks [@tomiir](https://github.com/tomiir)! - Adds st and sv params to identity call on Blockchain Api

- [#3881](https://github.com/reown-com/appkit/pull/3881) [`1f319cd`](https://github.com/reown-com/appkit/commit/1f319cd5e5fb014d66725d2f9b975ec2ed08f21e) Thanks [@enesozturk](https://github.com/enesozturk)! - Fixes fetch identity call where if the network is not supported by wallet and if switched to another network

- [#3876](https://github.com/reown-com/appkit/pull/3876) [`c2a833b`](https://github.com/reown-com/appkit/commit/c2a833b83e647bda357b6338913df42a3336fdf3) Thanks [@magiziz](https://github.com/magiziz)! - Added bitcoin support for wallet buttons

- [#3868](https://github.com/reown-com/appkit/pull/3868) [`8e11300`](https://github.com/reown-com/appkit/commit/8e1130061ed5ad175093a8a1f4057646d30f049b) Thanks [@tomiir](https://github.com/tomiir)! - Sets default chain to current appkit chain on WC connections

## 1.6.8

### Patch Changes

- [#3828](https://github.com/reown-com/appkit/pull/3828) [`381b7f1`](https://github.com/reown-com/appkit/commit/381b7f16bd649556b3efe4f97368528b9296c794) Thanks [@enesozturk](https://github.com/enesozturk)! - Upgrades Wagmi, Viem and Coinbase Wallet SDK deps

## 1.6.7

### Patch Changes

- [#3820](https://github.com/reown-com/appkit/pull/3820) [`cc8efe9`](https://github.com/reown-com/appkit/commit/cc8efe967fa449b83e899afc23483effcc8adaf6) Thanks [@svenvoskamp](https://github.com/svenvoskamp)! - Fixes an issue where the modal doesn't recognize a difference between modal and wallet active network which causes issues when doing wallet actions"

## 1.6.6

### Patch Changes

- [#3789](https://github.com/reown-com/appkit/pull/3789) [`84bac69`](https://github.com/reown-com/appkit/commit/84bac69eaa7e3b5ef923f85e308f7aaa33b4f471) Thanks [@enesozturk](https://github.com/enesozturk)! - Refactors extendCaipNetwork util function to not override it if already extended

- [#3751](https://github.com/reown-com/appkit/pull/3751) [`59e8b17`](https://github.com/reown-com/appkit/commit/59e8b17248581e1ba1a5e67497c3354c1f0aaa0c) Thanks [@zoruka](https://github.com/zoruka)! - Upgrade `@walletconnect/*` packages to `2.18.x`

- [#3736](https://github.com/reown-com/appkit/pull/3736) [`146df81`](https://github.com/reown-com/appkit/commit/146df816174ced5dfc49c49624d25db7aa07faf5) Thanks [@tomiir](https://github.com/tomiir)! - Adds address field to analytics event

- [#3776](https://github.com/reown-com/appkit/pull/3776) [`78c0d56`](https://github.com/reown-com/appkit/commit/78c0d5640a8d3ecbdde5b5ca8db36c223614740e) Thanks [@enesozturk](https://github.com/enesozturk)! - Refactors get month by index method

- [#3787](https://github.com/reown-com/appkit/pull/3787) [`1027b27`](https://github.com/reown-com/appkit/commit/1027b274eb75df6cf807e735fa9e7a23f1f53c17) Thanks [@svenvoskamp](https://github.com/svenvoskamp)! - Don't render browser tabs on AppKit Core

- [#3760](https://github.com/reown-com/appkit/pull/3760) [`a7590da`](https://github.com/reown-com/appkit/commit/a7590da456ee0f51b7e6b50e24d36eda88cd86eb) Thanks [@magiziz](https://github.com/magiziz)! - Improved wallet image loading by fetching them only when the modal is opened instead of on page load.

- [#3754](https://github.com/reown-com/appkit/pull/3754) [`5875b22`](https://github.com/reown-com/appkit/commit/5875b226c6e20258c493f3430b1160b19d72640f) Thanks [@enesozturk](https://github.com/enesozturk)! - Removes SIWE package dependency from AppKit main package

- [#3782](https://github.com/reown-com/appkit/pull/3782) [`7f46c56`](https://github.com/reown-com/appkit/commit/7f46c56f1300aa0dc84e890639773b1ad80ce2ae) Thanks [@enesozturk](https://github.com/enesozturk)! - Upgrades third party dependencies

- [#3766](https://github.com/reown-com/appkit/pull/3766) [`4580387`](https://github.com/reown-com/appkit/commit/4580387122e740c4041c4c49ec752980e11dd5fa) Thanks [@enesozturk](https://github.com/enesozturk)! - Fixes subscribeAccount where it needs to listen ConnectorController changes while returning account state

- [#3746](https://github.com/reown-com/appkit/pull/3746) [`171b8ae`](https://github.com/reown-com/appkit/commit/171b8ae4888afb188177e5697f5f484536def90c) Thanks [@enesozturk](https://github.com/enesozturk)! - Remove ontouchstart events from buttons

- [#3768](https://github.com/reown-com/appkit/pull/3768) [`bc278cb`](https://github.com/reown-com/appkit/commit/bc278cb20ec1451484d10fb5f3403e7d47354f40) Thanks [@svenvoskamp](https://github.com/svenvoskamp)! - Replace bignumber for big.js

- [#3786](https://github.com/reown-com/appkit/pull/3786) [`d49404d`](https://github.com/reown-com/appkit/commit/d49404d210c2c1245b300c730009ad4e6770c984) Thanks [@svenvoskamp](https://github.com/svenvoskamp)! - Add logic to correctly switch chains in universalAdapter

- [#3727](https://github.com/reown-com/appkit/pull/3727) [`a6f0943`](https://github.com/reown-com/appkit/commit/a6f0943945ca7291fca44f4b524fc7c128df808d) Thanks [@magiziz](https://github.com/magiziz)! - Fixed an issue where signing was not working when switching chains using WalletConnect with ethers/ethers5 adapters.

- [#3752](https://github.com/reown-com/appkit/pull/3752) [`9ce44fe`](https://github.com/reown-com/appkit/commit/9ce44feb15f81b54b80c27b0390ad7e277e30f8e) Thanks [@enesozturk](https://github.com/enesozturk)! - Refactors syncConnectors to dynamically import Coinbase Wallet SDK

- [#3775](https://github.com/reown-com/appkit/pull/3775) [`e2c2d38`](https://github.com/reown-com/appkit/commit/e2c2d388dab1c2136cc998c1accebc1791eaa0ff) Thanks [@enesozturk](https://github.com/enesozturk)! - Refactors Universal Link handling for Solana wallets to use explicit user action

- [#3771](https://github.com/reown-com/appkit/pull/3771) [`bf04326`](https://github.com/reown-com/appkit/commit/bf04326cbde01b04ea9284c168960b1337d3d435) Thanks [@enesozturk](https://github.com/enesozturk)! - Filters connectors when switching to another namespace after connecting to one

- [#3724](https://github.com/reown-com/appkit/pull/3724) [`5054449`](https://github.com/reown-com/appkit/commit/50544491c855d6b21cbbb162b4fc0cf5637a395c) Thanks [@enesozturk](https://github.com/enesozturk)! - Adds network add/remove methods for dynamically setting networks

- [#3789](https://github.com/reown-com/appkit/pull/3789) [`84bac69`](https://github.com/reown-com/appkit/commit/84bac69eaa7e3b5ef923f85e308f7aaa33b4f471) Thanks [@enesozturk](https://github.com/enesozturk)! - Refactors AppKit initialize function to separate initializing Pulse event and uses anonymous function for display_uri callback

- [#3798](https://github.com/reown-com/appkit/pull/3798) [`9099148`](https://github.com/reown-com/appkit/commit/90991481fc25987d0a3f07902979c2c9d4e399a9) Thanks [@tomiir](https://github.com/tomiir)! - Re-expose rotated meld key to prevent key mismatches on onramp flows

- [#3784](https://github.com/reown-com/appkit/pull/3784) [`b4e3dfd`](https://github.com/reown-com/appkit/commit/b4e3dfd6f541b107eedd7748d134f6bea348f176) Thanks [@enesozturk](https://github.com/enesozturk)! - Fixes add remove network function logics to prevent duplications

- [#3790](https://github.com/reown-com/appkit/pull/3790) [`cad4da7`](https://github.com/reown-com/appkit/commit/cad4da7a13f9b5d97c38348b593014486fb44829) Thanks [@tomiir](https://github.com/tomiir)! - Replaces blockchain api requests for balance with native balance requests

## 1.6.5

### Patch Changes

- [#3523](https://github.com/reown-com/appkit/pull/3523) [`427dde3`](https://github.com/reown-com/appkit/commit/427dde3cfb3bcb8a61d22b3732150c39958483e8) Thanks [@zoruka](https://github.com/zoruka)! - Abstracts Connectors management in Solana Adapter

- [#3648](https://github.com/reown-com/appkit/pull/3648) [`225aba4`](https://github.com/reown-com/appkit/commit/225aba4f3839f34f5a838650d594ed9ec23e2e3f) Thanks [@tomiir](https://github.com/tomiir)! - Fixes issue where mobile view would show auth login options without adapters

- [#3589](https://github.com/reown-com/appkit/pull/3589) [`6932fbf`](https://github.com/reown-com/appkit/commit/6932fbf81d5e3e8bfbc67476c9cc521bb014be6a) Thanks [@enesozturk](https://github.com/enesozturk)! - Refactors network switching when trying to use auth connector but active network is not supported by auth connector

- [#3589](https://github.com/reown-com/appkit/pull/3589) [`6932fbf`](https://github.com/reown-com/appkit/commit/6932fbf81d5e3e8bfbc67476c9cc521bb014be6a) Thanks [@enesozturk](https://github.com/enesozturk)! - Refactors connector rendering logics when add/remove adapters for email/social login

- [#3638](https://github.com/reown-com/appkit/pull/3638) [`86e7510`](https://github.com/reown-com/appkit/commit/86e75103084d6babdb0d0bb8afbbe30199fb3dde) Thanks [@zoruka](https://github.com/zoruka)! - Fix condition for unsupported chain for `chainChanged` event on wallet connect event

- [#3637](https://github.com/reown-com/appkit/pull/3637) [`40ef5c7`](https://github.com/reown-com/appkit/commit/40ef5c7b35e48a2271c27ae770b93061fa216d8a) Thanks [@zoruka](https://github.com/zoruka)! - Add default value if namespace is not available on upa getAccounts

- [#3721](https://github.com/reown-com/appkit/pull/3721) [`eade9f2`](https://github.com/reown-com/appkit/commit/eade9f28e41b608db0237be526d65742cf13e991) Thanks [@enesozturk](https://github.com/enesozturk)! - Fixes listening `ChainController.state.noAdapters` and `OptionsController.state.features` while enable/disable auth options dynamically

- [#3639](https://github.com/reown-com/appkit/pull/3639) [`489de7c`](https://github.com/reown-com/appkit/commit/489de7c77be40d8131b721d81cf89241fe5348b3) Thanks [@zoruka](https://github.com/zoruka)! - Fix BitcoinAdapter `switchNetwork` function execution

- [#3621](https://github.com/reown-com/appkit/pull/3621) [`7b4f03f`](https://github.com/reown-com/appkit/commit/7b4f03f24d853a514d26f5d6dcc1c2255c3573b3) Thanks [@tomiir](https://github.com/tomiir)! - Fetches native balance when on testnets

- [#3691](https://github.com/reown-com/appkit/pull/3691) [`4075214`](https://github.com/reown-com/appkit/commit/4075214027e183c04b29758628b2fca81a25b5dc) Thanks [@magiziz](https://github.com/magiziz)! - Expanded more views in the modal open function to include Swap, Send, Wallet Is a Wallet, Wallet Is a Network and All Wallets screens.

  **Example usage**

  ```tsx
  import { createAppKit } from '@reown/appkit'

  const VIEWS = [
    { label: 'Open "On-Ramp" modal view', view: 'Swap' },
    { label: 'Open "Send" modal view', view: 'WalletSend' },
    { label: 'Open "What Is a Wallet?" modal view', view: 'WhatIsAWallet' },
    { label: 'Open "What Is a Network?" modal view', view: 'WhatIsANetwork' },
    { label: 'Open "All Wallets" modal view', view: 'AllWallets' }
  ] as const

  const modal = createAppKit({
    adapters: [], // Add your adapters here
    networks: [], // Add your networks here
    projectId: 'YOUR_PROJECT_ID'
  })

  export function YourApp() {
    return (
      <>
        {VIEWS.map(({ label, view }) => (
          <button key={view} onClick={() => modal.open({ view })}>
            {label}
          </button>
        ))}
      </>
    )
  }
  ```

- [#3648](https://github.com/reown-com/appkit/pull/3648) [`225aba4`](https://github.com/reown-com/appkit/commit/225aba4f3839f34f5a838650d594ed9ec23e2e3f) Thanks [@tomiir](https://github.com/tomiir)! - Fixes issue where opening the modal without adapters would open regular connect WC screen

- [#3717](https://github.com/reown-com/appkit/pull/3717) [`72b14ce`](https://github.com/reown-com/appkit/commit/72b14ce20fdde3b0162e496756fdd96ac14ab901) Thanks [@zoruka](https://github.com/zoruka)! - Update @walletconnect packages to latest version.

- [#3640](https://github.com/reown-com/appkit/pull/3640) [`2935978`](https://github.com/reown-com/appkit/commit/293597872b31eecf7c4d04e0f875688f6c795af4) Thanks [@magiziz](https://github.com/magiziz)! - Added `createAppKitWalletButton` function to `@reown/appkit-wallet-button` package for easier implementation of the Wallet Button feature without relying solely on hooks.

  **Example usage**

  ```tsx
  import { useEffect, useState } from 'react'

  import { createAppKitWalletButton } from '@reown/appkit-wallet-button'

  const appKitWalletButton = createAppKitWalletButton()

  export function YourApp() {
    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
      // Check if Wallet Buttons are ready
      if (appKitWalletButton.isReady()) {
        setIsReady(true)
      } else {
        // Subscribe to ready state changes
        appKitWalletButton.subscribeIsReady(state => {
          setIsReady(state.isReady)
        })
      }
    }, [appKitWalletButton])

    return (
      <>
        <button onClick={() => appKitWalletButton.connect('walletConnect')} disabled={!isReady}>
          Open QR modal
        </button>
        <button onClick={() => appKitWalletButton.connect('metamask')} disabled={!isReady}>
          Connect to MetaMask
        </button>{' '}
        <button onClick={() => appKitWalletButton.connect('google')} disabled={!isReady}>
          Connect to Google
        </button>
      </>
    )
  }
  ```

- [#3681](https://github.com/reown-com/appkit/pull/3681) [`20c608f`](https://github.com/reown-com/appkit/commit/20c608f30aef7df58b4da1bfb9d57967bfd0e46c) Thanks [@enesozturk](https://github.com/enesozturk)! - Fixes redundant goBack call when switching to another namespace

- [#3611](https://github.com/reown-com/appkit/pull/3611) [`6431f0c`](https://github.com/reown-com/appkit/commit/6431f0cc99194c06eb93c3bc0ba7525b5b2c04ac) Thanks [@tomiir](https://github.com/tomiir)! - Fixes issue where appKit.getProvider() would not return correct provider.

- [#3716](https://github.com/reown-com/appkit/pull/3716) [`59f57f3`](https://github.com/reown-com/appkit/commit/59f57f356cd9887ce87e5877ec7561656eb32e43) Thanks [@tomiir](https://github.com/tomiir)! - Fetches native balance when API does not support it

- [#3679](https://github.com/reown-com/appkit/pull/3679) [`3305586`](https://github.com/reown-com/appkit/commit/3305586614d73fe9a3b71919c2b29c3b1568826b) Thanks [@enesozturk](https://github.com/enesozturk)! - Refactors AppKit client to handle syncBalance call for unsupported networks as expected

- [#3607](https://github.com/reown-com/appkit/pull/3607) [`a66de04`](https://github.com/reown-com/appkit/commit/a66de0442e6d421e8d0dcf875573ee49071bf891) Thanks [@zoruka](https://github.com/zoruka)! - Add defaultAccountTypes option for AppKit initialization.

- [#3682](https://github.com/reown-com/appkit/pull/3682) [`1ea9f7d`](https://github.com/reown-com/appkit/commit/1ea9f7d0b8a138376a10de7287cf0ed2254a7760) Thanks [@tomiir](https://github.com/tomiir)! - Prevents calls to Blockchain Api that would fail due to lack of support. Initialize supported list on AppKit initialization'

- [#3576](https://github.com/reown-com/appkit/pull/3576) [`68bdd14`](https://github.com/reown-com/appkit/commit/68bdd1476b85b0d47d70ef2fe35bf8c6eba3c74d) Thanks [@magiziz](https://github.com/magiziz)! - Added a loading indicator to the account button component when the balance has not been fetched.

- [#3635](https://github.com/reown-com/appkit/pull/3635) [`190fdb9`](https://github.com/reown-com/appkit/commit/190fdb9c6f5563df2095e808bbdffac1ae73aed6) Thanks [@enesozturk](https://github.com/enesozturk)! - Refactors connectExternal to call switch network if wallet's active chain is not in requested networks list

- [#3663](https://github.com/reown-com/appkit/pull/3663) [`018c6f1`](https://github.com/reown-com/appkit/commit/018c6f1e87f4b5e0c14aff8c45b5713809defcc9) Thanks [@zoruka](https://github.com/zoruka)! - Remove all onUri callback drilling for all walletConnectConnect methods in favor of a single call when initializing the UniversalProvider

- [#3672](https://github.com/reown-com/appkit/pull/3672) [`98ad777`](https://github.com/reown-com/appkit/commit/98ad777c5de798ae549ad4bac10b6ced7cda18b1) Thanks [@magiziz](https://github.com/magiziz)! - Fixed an issue where `walletProvider` from the `useAppKitProvider` hook was `undefined` when the wallet was connected. This issue occurred only when using wagmi adapter.

- [#3670](https://github.com/reown-com/appkit/pull/3670) [`25a97c6`](https://github.com/reown-com/appkit/commit/25a97c66fe47c2c1d19cf8bbf5c5474612cd6e7b) Thanks [@tomiir](https://github.com/tomiir)! - Fixes issue where 1CA session would not be found because of non-cased addresses mismatching.'

- [#3715](https://github.com/reown-com/appkit/pull/3715) [`3accd43`](https://github.com/reown-com/appkit/commit/3accd437e21dcb9316cbe83e0bf9a8a3268ab7ce) Thanks [@magiziz](https://github.com/magiziz)! - Fixed an issue where wagmi connectors were not appearing in the connect modal

- [#3619](https://github.com/reown-com/appkit/pull/3619) [`7296a32`](https://github.com/reown-com/appkit/commit/7296a32b99bac546ab84555ca6a71b8838b61842) Thanks [@zoruka](https://github.com/zoruka)! - Refactor to add WalletConnectConnector as extensible class and remove replicated code around adapters

- [#3678](https://github.com/reown-com/appkit/pull/3678) [`1614ff6`](https://github.com/reown-com/appkit/commit/1614ff603d09fbfc9c2d70fc9a7c8cff33b98b46) Thanks [@tomiir](https://github.com/tomiir)! - Removes duplicated all wallets button on AppKit Core

- [#3680](https://github.com/reown-com/appkit/pull/3680) [`62b4369`](https://github.com/reown-com/appkit/commit/62b4369ade281bdd5bcb90791817283e20c678cc) Thanks [@tomiir](https://github.com/tomiir)! - Fixes issue where onramp and activity were enabled in non-supported networks'

- [#3692](https://github.com/reown-com/appkit/pull/3692) [`5472c34`](https://github.com/reown-com/appkit/commit/5472c34fd3ad4328d8de347c65801718ff970d3b) Thanks [@magiziz](https://github.com/magiziz)! - Added an alert error if the analytics event fails with a forbidden status.

- [#3611](https://github.com/reown-com/appkit/pull/3611) [`6431f0c`](https://github.com/reown-com/appkit/commit/6431f0cc99194c06eb93c3bc0ba7525b5b2c04ac) Thanks [@tomiir](https://github.com/tomiir)! - Adds authProvider to embeddedWalletInfo in useAppKitAccount

- [#3714](https://github.com/reown-com/appkit/pull/3714) [`83d62d9`](https://github.com/reown-com/appkit/commit/83d62d98148fb5130a1698fdfa974db26cea66dc) Thanks [@magiziz](https://github.com/magiziz)! - Fixed an issue where wagmi adapter would emit disconnect event when user was not connected causing SIWE to break.

- [#3723](https://github.com/reown-com/appkit/pull/3723) [`a90474b`](https://github.com/reown-com/appkit/commit/a90474bec8d791d27dc0bec542f57193945b9e63) Thanks [@magiziz](https://github.com/magiziz)! - Fixed an issue where multichain social/email login was not working

## 1.6.4

### Patch Changes

- [#3579](https://github.com/reown-com/appkit/pull/3579) [`8ddfbf2`](https://github.com/reown-com/appkit/commit/8ddfbf227ba8bc39c7b4071c328568e9ab365b87) Thanks [@magiziz](https://github.com/magiziz)! - Added an error message for when the user provides an invalid project id.

- [#3562](https://github.com/reown-com/appkit/pull/3562) [`fbafcea`](https://github.com/reown-com/appkit/commit/fbafcea4038d0644fd9c84e05a15990b11707b9a) Thanks [@tomiir](https://github.com/tomiir)! - Sets secure site version to 3.
  Handles case where Magic SDK connection fizzled, causing magic to connected while AppKit believed it was not connected

- [#3564](https://github.com/reown-com/appkit/pull/3564) [`6284eb1`](https://github.com/reown-com/appkit/commit/6284eb190de3eda2fcf04848f0fb10aee7921b13) Thanks [@magiziz](https://github.com/magiziz)! - Fixed an issue where the balance endpoint was being called every 30 seconds for unsupported networks.

- [#3575](https://github.com/reown-com/appkit/pull/3575) [`37901c6`](https://github.com/reown-com/appkit/commit/37901c6d6fa64108a8c40a99fc7973e8b8f0d4b2) Thanks [@enesozturk](https://github.com/enesozturk)! - Exposes publicKey and path for bitcoin connectors in allAccounts

- [#3596](https://github.com/reown-com/appkit/pull/3596) [`150cdb6`](https://github.com/reown-com/appkit/commit/150cdb6ebc7f4befd56fc6438ce57f09a887096f) Thanks [@enesozturk](https://github.com/enesozturk)! - Adds client check for the methods in bitcoin connectors for ssr issues

- [#3560](https://github.com/reown-com/appkit/pull/3560) [`83635a4`](https://github.com/reown-com/appkit/commit/83635a42c57896580ba69aeffd527481868047b0) Thanks [@tomiir](https://github.com/tomiir)! - Fixes issue where closing the modal mid embedded wallet request would not abort the request

- [#3568](https://github.com/reown-com/appkit/pull/3568) [`87029c0`](https://github.com/reown-com/appkit/commit/87029c0662567dd658f0e204a07eb67f08e3c813) Thanks [@tomiir](https://github.com/tomiir)! - Fixes issue where only wallets from the initially active chain ID would be fetched. Re-fetches wallets from API when network changes.

- [#3563](https://github.com/reown-com/appkit/pull/3563) [`35a4f56`](https://github.com/reown-com/appkit/commit/35a4f564ef273b7840e8148d286755a587bb04b8) Thanks [@magiziz](https://github.com/magiziz)! - Fixed an issue where the modal didn't close after completing login if users navigated between different social login options.

- [#3583](https://github.com/reown-com/appkit/pull/3583) [`34ed47e`](https://github.com/reown-com/appkit/commit/34ed47e9542b183463777caf096fd44ea8eb0816) Thanks [@svenvoskamp](https://github.com/svenvoskamp)! - Fix an issue where swap button shows an infinite spinner

- [#3573](https://github.com/reown-com/appkit/pull/3573) [`d9a96a5`](https://github.com/reown-com/appkit/commit/d9a96a5bfd8e358e73c8b4cfb9efb09efcbe8f1b) Thanks [@magiziz](https://github.com/magiziz)! - Added a new `required` option to SIWE/SIWX. This option determines whether the wallet stays connected when the user denies the signature request. If set to `true` it will disconnect the wallet and close the modal. If set to `false` it will close the modal without disconnecting the wallet.

  **Example usage**

  ```ts
  import { createSIWEConfig } from '@reown/appkit-siwe'
  import type { SIWECreateMessageArgs, SIWEVerifyMessageArgs } from '@reown/appkit-siwe'

  export const siweConfig = createSIWEConfig({
    required: false, // Optional - defaults to true
    getMessageParams: async () => {
      // Return message parameters
    },
    createMessage: ({ address, ...args }: SIWECreateMessageArgs) => {
      // Return formatted message
    },
    getNonce: async () => {
      // Return nonce
    },
    getSession: async () => {
      // Return session
    },
    verifyMessage: async ({ message, signature }: SIWEVerifyMessageArgs) => {
      // Verify message
    },
    signOut: async () => {
      // Sign out
    }
  })
  ```

- [#3586](https://github.com/reown-com/appkit/pull/3586) [`d5b811c`](https://github.com/reown-com/appkit/commit/d5b811c666e41846fd5798116e7c93606b4b992f) Thanks [@enesozturk](https://github.com/enesozturk)! - Adds add/remove adapter methods to appkit client, moves active connector state to connected connector

- [#3565](https://github.com/reown-com/appkit/pull/3565) [`93cee5c`](https://github.com/reown-com/appkit/commit/93cee5c44e6f30f3594bc7c5a4029dc1f05503f1) Thanks [@svenvoskamp](https://github.com/svenvoskamp)! - Fix an issue where users with an ENS couldn't copy their address.

- [#3590](https://github.com/reown-com/appkit/pull/3590) [`56d82e8`](https://github.com/reown-com/appkit/commit/56d82e8b04fb49d586f65f6e20fdd788e83000d5) Thanks [@magiziz](https://github.com/magiziz)! - Fixed an issue where wagmi did not reconnect on page reload

- [#3584](https://github.com/reown-com/appkit/pull/3584) [`7703d40`](https://github.com/reown-com/appkit/commit/7703d409b6107c7fd61228fc1f1576d1b8503ce5) Thanks [@tomiir](https://github.com/tomiir)! - Fixes issue where status would not be set for non-connected namespaces. Make syncExistingConnection call syncNamespaceConnection for non-connected namespaces as well, resulting in status being set correctly'

- [#3554](https://github.com/reown-com/appkit/pull/3554) [`7a7df99`](https://github.com/reown-com/appkit/commit/7a7df99625721759f2b426e6d8c3d1b13749a2cb) Thanks [@svenvoskamp](https://github.com/svenvoskamp)! - Fix farcaster issue, so user can see their correct username in account view

- [#3555](https://github.com/reown-com/appkit/pull/3555) [`3ee19a2`](https://github.com/reown-com/appkit/commit/3ee19a227540bb496aa1b319d64f0306a82ce5dd) Thanks [@lukaisailovic](https://github.com/lukaisailovic)! - add create subscription method

- [#3558](https://github.com/reown-com/appkit/pull/3558) [`a48e2f9`](https://github.com/reown-com/appkit/commit/a48e2f9067bdbe85b87ff1d720cb898dbc0ed3cd) Thanks [@magiziz](https://github.com/magiziz)! - Added embedded wallet info to `useAppKitAccount` hook.

  **Example usage**

  ```tsx
  import { useAppKitAccount } from '@reown/appkit/react'

  export function YourApp() {
    const { embeddedWalletInfo } = useAppKitAccount()

    const email = embeddedWalletInfo.user?.email

    return email && <p>Email address: {email}</p>
  }
  ```

- [#3592](https://github.com/reown-com/appkit/pull/3592) [`14d6281`](https://github.com/reown-com/appkit/commit/14d62819e178e8ccf9f76c3a0c5fb16e21db52e3) Thanks [@tomiir](https://github.com/tomiir)! - Fixed issue where balance would not be properly synced due to not finding correct chainId or pointing to other tokens in portfolio instead of native token

## 1.6.3

### Patch Changes

- [`3db8487`](https://github.com/reown-com/appkit/commit/295f320b133b5bd605f9c9a89441935a2471f1ec) Thanks [@magiziz](https://github.com/magiziz)! - Updated account modal to redirect to the settings view instead of the profile view when only one social/email account is connected

- [`3db8487`](https://github.com/reown-com/appkit/commit/a3dae620d7f5209ca496ada6491eced3f0e5391c) Thanks [@magiziz](https://github.com/magiziz)! - Added a new option to enable or disable logs from email/social login.

  **Example usage**

  ```ts
  import { createAppKit } from '@reown/appkit/react'

  const modal = createAppKit({
    adapters: [
      /* Adapters */
    ],
    networks: [
      /* Networks */
    ],
    projectId: 'YOUR_PROJECT_ID',
    enableAuthLogger: false // Optional - defaults to true
  })
  ```

- [`3db8487`](https://github.com/reown-com/appkit/commit/8569d56a3c6ab41833c7ef6a21712afee4bbcec0) Thanks [@tomiir](https://github.com/tomiir)! - Fixes issue where non-embedded wallets would show an empty list on send flow

- [`3db8487`](https://github.com/reown-com/appkit/commit/39616f5efb6f5af17ef716aca2383597cd98fdde) Thanks [@enesozturk](https://github.com/enesozturk)! - Fixes `signOutOnNetworkChange` and `signOutOnAccountChange` flags on SIWX mapper function to work as expected

- [`3db8487`](https://github.com/reown-com/appkit/commit/fc80119c3c709288d231603c5157b8078151520d) Thanks [@tomiir](https://github.com/tomiir)! - Fixes issue with WC connections on wallets that do not support a requested network. Sets default network to first one supported by wallet

- [`3db8487`](https://github.com/reown-com/appkit/commit/0735f15c65b5de397dd856004f197f2ec07538f9) Thanks [@tomiir](https://github.com/tomiir)! - Fixes issue where walletInfo would be undefined or empty

- [`3db8487`](https://github.com/reown-com/appkit/commit/fc80119c3c709288d231603c5157b8078151520d) Thanks [@tomiir](https://github.com/tomiir)! - Improves existing connection error handling'

- [`3db8487`](https://github.com/reown-com/appkit/commit/e946c977fcc6e1282f05d35955004fc391f3f354) Thanks [@magiziz](https://github.com/magiziz)! - Fixed an issue where disconnecting the injected wallet did not update the state as disconnected for ethers/ethers5 adapters

- [`3db8487`](https://github.com/reown-com/appkit/commit/aa24c918f7c3f285b20d44c81a5d224743bcb4ed) Thanks [@tomiir](https://github.com/tomiir)! - Adds loading while disconnecting

- [`3db8487`](https://github.com/reown-com/appkit/commit/e6fc9800039984e3150c38a4c4cbd7214d07742c) Thanks [@tomiir](https://github.com/tomiir)! - Fixes issue where refreshing the page when connected to multiple namespaces would only reconnect the last active one

- [`3db8487`](https://github.com/reown-com/appkit/commit/d3ecccbbde0d40a27f2b261a3d99b15ab83149da) Thanks [@tomiir](https://github.com/tomiir)! - Prevents blockchain api calls on testnets

- [`3db8487`](https://github.com/reown-com/appkit/commit/7e19daeaf93c48338f1f7b5dc5de5a271ae8f643) Thanks [@enesozturk](https://github.com/enesozturk)! - Fixes Vue hooks to return reactive values

- [`f045fb5`](https://github.com/reown-com/appkit/commit/f045fb5c4703f1661d1701ce898945acd73a97f9) Thanks [@svenvoskamp](https://github.com/svenvoskamp)! - fix reload iframe after aborting farcaster

- [`3db8487`](https://github.com/reown-com/appkit/commit/af58b49dda0ebdbdc76a5859692e5df46f6ca86a) Thanks [@magiziz](https://github.com/magiziz)! - Fixed an issue where an incorrect EOA label and icon were displayed in the profile view after reconnecting through social/email login

- [`3db8487`](https://github.com/reown-com/appkit/commit/3db8487122ab6b52e14db8ce639cd7ea92ac4f5c) Thanks [@zoruka](https://github.com/zoruka)! - Set connected wallet info when going to authenticate flow.

- [`3db8487`](https://github.com/reown-com/appkit/commit/4d25c1d7986a2b9b0128d3c250e750c60b619cc0) Thanks [@tomiir](https://github.com/tomiir)! - Updates @solana/web3.js dependency to latest

- [`3db8487`](https://github.com/reown-com/appkit/commit/7459461eed6786a17c251c40aab153572ecda45f) Thanks [@magiziz](https://github.com/magiziz)! - Fixed an issue where profile name and profile image was not displayed after connecting via social or email login

## 1.6.2

### Patch Changes

- [#3491](https://github.com/reown-com/appkit/pull/3491) [`0a8ead2`](https://github.com/reown-com/appkit/commit/0a8ead262ee0a2e0c116b1eaeb80fd5086d0298f) Thanks [@magiziz](https://github.com/magiziz)! - Fixed an issue where browser tab option was showing for all wallets

- [#3509](https://github.com/reown-com/appkit/pull/3509) [`0926b4d`](https://github.com/reown-com/appkit/commit/0926b4d7286ce82d58e2acd85b108f69c8823867) Thanks [@svenvoskamp](https://github.com/svenvoskamp)! - Fix issue where accounts were not correctly set

- [#3516](https://github.com/reown-com/appkit/pull/3516) [`04208c8`](https://github.com/reown-com/appkit/commit/04208c86b4b2ce6621561b121a8a620687a58728) Thanks [@zoruka](https://github.com/zoruka)! - Add unit testing for Bitcoin adapter and fix unused default values

- [#3514](https://github.com/reown-com/appkit/pull/3514) [`15bfe49`](https://github.com/reown-com/appkit/commit/15bfe4963087e3002df989f497a18a7d126c8c72) Thanks [@magiziz](https://github.com/magiziz)! - Fixed an issue where the `pendingTransactions` event was being emitted infinitely in wagmi adapter.

  Additionally another option was added to wagmi adapter called `pendingTransactionsFilter`.

  **Example usage**

  ```ts
  const wagmiAdapter = new WagmiAdapter({
    networks: [
      /* Your Networks */
    ],
    projectId: 'YOUR_PROJECT_ID',
    pendingTransactionsFilter: {
      enable: true,
      pollingInterval: 15_000
    }
  })

  createAppKit({
    adapters: [wagmiAdapter],
    networks: [
      /* Your Networks */
    ],
    projectId: 'YOUR_PROJECT_ID'
  })
  ```

## 1.6.1

### Patch Changes

- [#3503](https://github.com/reown-com/appkit/pull/3503) [`ee9b40e`](https://github.com/reown-com/appkit/commit/ee9b40e0bc7018a6c76199a3285a418356d90759) Thanks [@zoruka](https://github.com/zoruka)! - Set active chain as first chain when calling authenticate on universal provider

- [#3465](https://github.com/reown-com/appkit/pull/3465) [`f83d09c`](https://github.com/reown-com/appkit/commit/f83d09c94e810d4abe830c6065f905b9237ef120) Thanks [@enesozturk](https://github.com/enesozturk)! - refactor: adds background transition

- [#3456](https://github.com/reown-com/appkit/pull/3456) [`edc7a17`](https://github.com/reown-com/appkit/commit/edc7a17879fa54c1257aa985c833ce48af9c2144) Thanks [@zoruka](https://github.com/zoruka)! - Add Bitcoin network image id

- [#3455](https://github.com/reown-com/appkit/pull/3455) [`e5a09bc`](https://github.com/reown-com/appkit/commit/e5a09bc20844b0e010a273eff12c3a31ca74c220) Thanks [@zoruka](https://github.com/zoruka)! - Add icon with copy function on Bitcoin account view

- [#3484](https://github.com/reown-com/appkit/pull/3484) [`6cc4cdd`](https://github.com/reown-com/appkit/commit/6cc4cdd91749693d83c5da90e19fe34979834925) Thanks [@magiziz](https://github.com/magiziz)! - Fixed an issue where connectors did not remain connected after page refresh despite being connected previously

- [#3447](https://github.com/reown-com/appkit/pull/3447) [`85c858f`](https://github.com/reown-com/appkit/commit/85c858f7191d6210b0ef900fb4fb1112b09f466c) Thanks [@svenvoskamp](https://github.com/svenvoskamp)! - Fix allowUnsupportedChain param to work correctly

- [#3177](https://github.com/reown-com/appkit/pull/3177) [`3cf3bc5`](https://github.com/reown-com/appkit/commit/3cf3bc5501f64eb7f569716398d45fc8fa89a771) Thanks [@ganchoradkov](https://github.com/ganchoradkov)! - Adds walletConnectProvider flag to inject a UniversalProvider instance to be used by AppKit'

- [#3501](https://github.com/reown-com/appkit/pull/3501) [`92ef6c4`](https://github.com/reown-com/appkit/commit/92ef6c4bfe56c67eedfcf6060ccbf87891ce3468) Thanks [@Cali93](https://github.com/Cali93)! - Fix logic for authentication header on CloudAuthSIWX

- [#3461](https://github.com/reown-com/appkit/pull/3461) [`e18eefe`](https://github.com/reown-com/appkit/commit/e18eefe339aab5d02743faee26b0aac0f624b678) Thanks [@svenvoskamp](https://github.com/svenvoskamp)! - Fix an issue where approving with Smart Account didn't work

- [#3449](https://github.com/reown-com/appkit/pull/3449) [`7b91225`](https://github.com/reown-com/appkit/commit/7b9122520b2ed0cf5d7a4fb0b160bfa4c23c2b58) Thanks [@enesozturk](https://github.com/enesozturk)! - Upgrade dependency versions

- [#3460](https://github.com/reown-com/appkit/pull/3460) [`444d1dd`](https://github.com/reown-com/appkit/commit/444d1dd2c6216f47bcf32c98551e5c4338d872c5) Thanks [@enesozturk](https://github.com/enesozturk)! - Refactors disconnect business logic for multiple adapter use cases

- [#3485](https://github.com/reown-com/appkit/pull/3485) [`0f55885`](https://github.com/reown-com/appkit/commit/0f55885520775652ae7bc42b83e20b03d3b4ad31) Thanks [@enesozturk](https://github.com/enesozturk)! - Refactors connect view's mask image styling with resize observer for dynamic masking

- [#3476](https://github.com/reown-com/appkit/pull/3476) [`ce5207f`](https://github.com/reown-com/appkit/commit/ce5207f902d3257d0780e6ae78dfe25e5a870a01) Thanks [@zoruka](https://github.com/zoruka)! - Add jsdocs comments explaining params and functions from SIWX and Bitcoin packages.

- [#3505](https://github.com/reown-com/appkit/pull/3505) [`31b87fc`](https://github.com/reown-com/appkit/commit/31b87fcc5c252f69dc35de9b1fb2ddab5b7b208d) Thanks [@tomiir](https://github.com/tomiir)! - Makes bitcoin adapter public

- [#3484](https://github.com/reown-com/appkit/pull/3484) [`6cc4cdd`](https://github.com/reown-com/appkit/commit/6cc4cdd91749693d83c5da90e19fe34979834925) Thanks [@magiziz](https://github.com/magiziz)! - Fixed an issue where Coinbase Wallet wasn't working on iOS safari

- [#3471](https://github.com/reown-com/appkit/pull/3471) [`11b3e2e`](https://github.com/reown-com/appkit/commit/11b3e2ed386eb0fa4ccc203fb6b83459a188b5d2) Thanks [@zoruka](https://github.com/zoruka)! - Clear SIWX sessions when calling ConnectionController.disconnect

- [#3482](https://github.com/reown-com/appkit/pull/3482) [`8fa4632`](https://github.com/reown-com/appkit/commit/8fa46321ef6cb265423cc9b2dc9369de461cbbfc) Thanks [@enesozturk](https://github.com/enesozturk)! - Expose a public function to get connect method order with AppKit instance

- [#3499](https://github.com/reown-com/appkit/pull/3499) [`56b66f4`](https://github.com/reown-com/appkit/commit/56b66f4cb60dc7fd9b72c2cb85b434f7f2917871) Thanks [@svenvoskamp](https://github.com/svenvoskamp)! - Improve send flow UX with better error handling

- [#3466](https://github.com/reown-com/appkit/pull/3466) [`14af422`](https://github.com/reown-com/appkit/commit/14af422e7eee14a13601e903dee61655485babd9) Thanks [@enesozturk](https://github.com/enesozturk)! - refactor: make the wallet image listen state updates for embedded use case

- [#3454](https://github.com/reown-com/appkit/pull/3454) [`a737ca3`](https://github.com/reown-com/appkit/commit/a737ca3b20714a0c89fc6620ce1fed3602a02796) Thanks [@zoruka](https://github.com/zoruka)! - Filter out duplicated addresses from WalletStandardConnector on Bitcoin adapter

- [#3462](https://github.com/reown-com/appkit/pull/3462) [`69fcf27`](https://github.com/reown-com/appkit/commit/69fcf27c56db900554eacced0b1725c3060ed781) Thanks [@zoruka](https://github.com/zoruka)! - Adds parsing of Universal Provider session_event to get accountsChanged event

- [#3489](https://github.com/reown-com/appkit/pull/3489) [`fccbd31`](https://github.com/reown-com/appkit/commit/fccbd31be0a6ed550468f2049413ee7cdf0d64b8) Thanks [@magiziz](https://github.com/magiziz)! - Fixed an issue where connector id from Local Storage wasn't in sync

- [#3450](https://github.com/reown-com/appkit/pull/3450) [`a9d7686`](https://github.com/reown-com/appkit/commit/a9d7686eac8a95d8a1235504a302e8ae153ebf5d) Thanks [@zoruka](https://github.com/zoruka)! - Fix the chainId response when connecting to bitcoin with multichain adapters

- [#3502](https://github.com/reown-com/appkit/pull/3502) [`8249314`](https://github.com/reown-com/appkit/commit/824931426721b02e4cc7474066f54916aaf29dcf) Thanks [@tomiir](https://github.com/tomiir)! - Fixes issue where undefined address would throw an error polluting logs

- [#3484](https://github.com/reown-com/appkit/pull/3484) [`6cc4cdd`](https://github.com/reown-com/appkit/commit/6cc4cdd91749693d83c5da90e19fe34979834925) Thanks [@magiziz](https://github.com/magiziz)! - Fixed an issue where adapters and connectors were not synchronized

- [#3504](https://github.com/reown-com/appkit/pull/3504) [`ea1067a`](https://github.com/reown-com/appkit/commit/ea1067aff3086c68dfe5f4f33eac5fb6b882bbde) Thanks [@magiziz](https://github.com/magiziz)! - Fixed an issue where wagmi connector won't disconnect

- [#3446](https://github.com/reown-com/appkit/pull/3446) [`c1a641f`](https://github.com/reown-com/appkit/commit/c1a641fb5cc34f84d97535006d698efd3e563036) Thanks [@enesozturk](https://github.com/enesozturk)! - Filter out when there is duplicate wallet items in recents and injected wallets

## 1.6.0

### Minor Changes

- [#3425](https://github.com/reown-com/appkit/pull/3425) [`b5e2dfa`](https://github.com/reown-com/appkit/commit/b5e2dfab8a3cd96db3e30b5bcaf1478a3d55cb2d) Thanks [@zoruka](https://github.com/zoruka)! - Add CloudAuthSIWX configuration

### Patch Changes

- [#3429](https://github.com/reown-com/appkit/pull/3429) [`388e6d6`](https://github.com/reown-com/appkit/commit/388e6d676ffd0bd76d4973b7f3e2c90c459daafb) Thanks [@magiziz](https://github.com/magiziz)! - Debug mode is now set to true by default. Additionally fixed an issue where alerts and console errors were not working in debug mode.

- [#3404](https://github.com/reown-com/appkit/pull/3404) [`7747f6a`](https://github.com/reown-com/appkit/commit/7747f6ac59a95031dc211722d2d611fb63a183d9) Thanks [@svenvoskamp](https://github.com/svenvoskamp)! - Fix issue where setEIP6963Enabled is not getting called

- [#3437](https://github.com/reown-com/appkit/pull/3437) [`4d2ddad`](https://github.com/reown-com/appkit/commit/4d2ddad12979a1f79b3c28c9c69d44aad6c9b013) Thanks [@zoruka](https://github.com/zoruka)! - Fixes the Solana wallets not being recognized as installed in the all wallets list

- [#3371](https://github.com/reown-com/appkit/pull/3371) [`8147db9`](https://github.com/reown-com/appkit/commit/8147db90e59c8e9931019479d9584b445a27ce2c) Thanks [@enesozturk](https://github.com/enesozturk)! - Adds separate event for swap approval process

- [#3419](https://github.com/reown-com/appkit/pull/3419) [`192e4e0`](https://github.com/reown-com/appkit/commit/192e4e0b256021f97742520532907c2a7a6f30a5) Thanks [@enesozturk](https://github.com/enesozturk)! - Fixes state and storage syncronization and persisting on multiple adapter instances

- [#3408](https://github.com/reown-com/appkit/pull/3408) [`4f9a11b`](https://github.com/reown-com/appkit/commit/4f9a11b84aa31b2190e133701752c4d790e2e17b) Thanks [@zoruka](https://github.com/zoruka)! - Add Bitcoin OKX Wallet connector

- [#3432](https://github.com/reown-com/appkit/pull/3432) [`9fce094`](https://github.com/reown-com/appkit/commit/9fce0941613fa98896d3a0537f7f73b5763d3a07) Thanks [@enesozturk](https://github.com/enesozturk)! - Fixes phantom and coinbase deeplink url parameters to be encoded

- [#3417](https://github.com/reown-com/appkit/pull/3417) [`fc59868`](https://github.com/reown-com/appkit/commit/fc59868da9d5a0628b26ad6bc1e8266125e5289e) Thanks [@tomiir](https://github.com/tomiir)! - Fixes issue where Solana Connection was not being set on WC Relay wallets, causing transactions to fail.

- [#3401](https://github.com/reown-com/appkit/pull/3401) [`b795289`](https://github.com/reown-com/appkit/commit/b795289673a42d3e7109d98a14c7ef55bf33548d) Thanks [@zoruka](https://github.com/zoruka)! - Add BitcoinAdapter.getBalance implementation based on BitcoinApi

- [#3400](https://github.com/reown-com/appkit/pull/3400) [`26a9ff9`](https://github.com/reown-com/appkit/commit/26a9ff9cb55d7c9f96c2c600da91606247fb4389) Thanks [@enesozturk](https://github.com/enesozturk)! - Refactors some ui rendering logics and enables setting extra configurations via modal functions

- [#3420](https://github.com/reown-com/appkit/pull/3420) [`d07a72b`](https://github.com/reown-com/appkit/commit/d07a72bb6397bb4580b9999bdbe927817d5b015e) Thanks [@magiziz](https://github.com/magiziz)! - Added `enableWalletGuide` option to allow disabling the wallet guide footer when social or email logins are enabled.

  **Example usage**

  ```ts
  import { createAppKit } from '@reown/appkit'

  const modal = createAppKit({
    adapters: [
      /* Adapters */
    ],
    networks: [
      /* Networks */
    ],
    projectId: 'YOUR_RPOJECT_ID',
    enableWalletGuide: false // Optional - defaults to true
  })
  ```

- [#3434](https://github.com/reown-com/appkit/pull/3434) [`2a7a963`](https://github.com/reown-com/appkit/commit/2a7a963accb966a42c206fefebd1c9f78b358215) Thanks [@enesozturk](https://github.com/enesozturk)! - Hides the go back button on header when embedded mode is enabled

- [#3421](https://github.com/reown-com/appkit/pull/3421) [`50c619a`](https://github.com/reown-com/appkit/commit/50c619aacfbcf34952d78465a597bcbf59d9bdf8) Thanks [@svenvoskamp](https://github.com/svenvoskamp)! - Return custom RPC when configured in wagmi config

- [#3415](https://github.com/reown-com/appkit/pull/3415) [`9e1e4c9`](https://github.com/reown-com/appkit/commit/9e1e4c9ac565c2164750f178b6d896e57d3b68e5) Thanks [@magiziz](https://github.com/magiziz)! - Introduced wallet button component and custom hook for headless integration.

  Components example:

  ```tsx
  import '@reown/appkit-wallet-button'

  export function YourApp() {
    return (
      <>
        {/* QR Code (WalletConnect) */}
        <appkit-wallet-button wallet="walletConnect" />

        {/* Wallets */}
        <appkit-wallet-button wallet="metamask" />
        <appkit-wallet-button wallet="trust" />
        <appkit-wallet-button wallet="coinbase" />

        {/* Socials */}
        <appkit-wallet-button wallet="google" />
        <appkit-wallet-button wallet="x" />
        <appkit-wallet-button wallet="discord" />
        <appkit-wallet-button wallet="farcaster" />
      </>
    )
  }
  ```

  Hook example:

  ```tsx
  import { useAppKitWallet } from '@reown/appkit-wallet-button/react'

  export function YourApp() {
    const { data, error, isPending, isSuccess, isError, connect } = useAppKitWallet({
      onError: err => {
        // ...
      },
      onSuccess: data => {
        // ...
      }
    })

    return (
      <>
        <button onClick={() => connect('walletConnect')}>Open QR modal</button>
        <button onClick={() => connect('metamask')}>Connect to MetaMask</button>
        <button onClick={() => connect('google')}>Connect to Google</button>
      </>
    )
  }
  ```

  Additionally a new theme variable property called `--w3m-qr-color` was added where you can configure a custom color for the QR code.

  ```tsx
  import { createAppKit } from '@reown/appkit/react'

  const modal = createAppKit({
    /* Your Config */
    themeVariables: {
      '--w3m-qr-color': '...', // Optional
      '--w3m-color-mix': '...',
      '--w3m-color-mix-strength': 50
    }
  })
  ```

- [#3439](https://github.com/reown-com/appkit/pull/3439) [`3e9758e`](https://github.com/reown-com/appkit/commit/3e9758e18b1fb9d3b08546901bbd33fab4f40827) Thanks [@svenvoskamp](https://github.com/svenvoskamp)! - Fix an issue where wagmi connectors are unable to restore a session

- [#3443](https://github.com/reown-com/appkit/pull/3443) [`53ecc19`](https://github.com/reown-com/appkit/commit/53ecc19bb15f257dfd4afa34c855dd3a0620d4f9) Thanks [@magiziz](https://github.com/magiziz)! - Fixed an issue where pending transaction listener was causing infinite request.

- [#3412](https://github.com/reown-com/appkit/pull/3412) [`1ca257b`](https://github.com/reown-com/appkit/commit/1ca257be91e131ab140db58c99f979b21306919d) Thanks [@enesozturk](https://github.com/enesozturk)! - Fixes embedded mode route redirection issue and adds transition for border radius values
