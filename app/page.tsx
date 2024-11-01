'use client'
import { WagmiProvider, createConfig, http } from 'wagmi'
import { mainnet} from 'viem/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import WalletConnect from '@/components/WalletConnect'

const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http()
  },
})

const queryClient = new QueryClient()

export default function Home() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
          <nav className="flex justify-between items-center p-4 border-b border-gray-800">
            <div className="text-xl font-bold">Web3 Wallet</div>
            <WalletConnect />
          </nav>
          
          <main className="container mx-auto px-4 py-8">
            {/* 其他内容可以在这里添加 */}
          </main>
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
