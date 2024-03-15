import { createWalletClient,createPublicClient, custom } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { bscTestnet } from 'viem/chains'
import { http, createConfig } from '@wagmi/core'
 
export const publicClient = createPublicClient({
  chain: bscTestnet,
  transport: http()
})
 
export const walletClient = createWalletClient({
  chain: bscTestnet,
  transport: custom(window.ethereum)
})
 
// JSON-RPC Account
// export const [account] = await walletClient.getAddresses()
// console.log(account);
// Local Account
export const account = privateKeyToAccount('0x7ce8ebce2c2b67dc5e7813e8849f76e2af1f864a0765c1f7ccd7443158404fec')