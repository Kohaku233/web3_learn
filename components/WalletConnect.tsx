'use client'

import * as React from 'react'
import { useAccount, useConnect, useDisconnect, useBalance } from 'wagmi'
import { injected, metaMask } from 'wagmi/connectors'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function WalletConnect() {
  const { address, isConnected } = useAccount()
  const { connect } = useConnect()
  const { disconnect } = useDisconnect()
  const { data: balance } = useBalance({
    address: address,
  })

  React.useEffect(() => {
    disconnect()
    localStorage.removeItem('wagmi.connected')
    localStorage.removeItem('wagmi.injected.shimDisconnect')
  }, [disconnect])

  const handleDisconnect = async () => {
    try {
      await disconnect()
      localStorage.removeItem('wagmi.connected')
      localStorage.removeItem('wagmi.injected.shimDisconnect')
    } catch (error) {
      console.error('Disconnect failed:', error)
    }
  }

  const walletOptions = [
    {
      name: 'MetaMask',
      connector: metaMask,
    },
    {
      name: '其他浏览器钱包',
      connector: injected,
    }
  ]

  if (isConnected && address) {
    return (
      <div className="flex items-center gap-4">
        <div className="px-3 py-1.5 bg-secondary rounded-lg text-sm">
          {balance?.formatted.slice(0, 6)} {balance?.symbol}
        </div>
        <div className="flex gap-2">
          <div className="px-3 py-1.5 bg-secondary rounded-lg text-sm">
            {address?.slice(0, 6)}...{address?.slice(-4)}
          </div>
          <Button
            variant="destructive"
            onClick={handleDisconnect}
            size="sm"
          >
            断开连接
          </Button>
        </div>
      </div>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="default">连接钱包</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {walletOptions.map((wallet) => (
          <DropdownMenuItem
            key={wallet.name}
            onClick={() => {
              connect({ connector: wallet.connector() })
            }}
          >
            {wallet.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}