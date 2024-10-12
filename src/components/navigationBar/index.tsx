import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../assets/encoteki-logo.png'
import NavbarConnectBtn from '../button/navbarConnectBtn'
import { useAccount } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import {
  Avatar,
  Identity,
  Name,
  Badge,
  Address,
} from '@coinbase/onchainkit/identity'

export default function Navbar() {
  const { isConnected, address } = useAccount()
  return (
    <header className="z-50 flex items-center justify-between">
      <Link href="/">
        <Image src={Logo} alt="Encoteki Logo" className="w-12 tablet:w-24" />
      </Link>

      <div className="flex gap-6">
        <Link href="/dao">
          <button className="w-[160px] rounded-[32px] border border-primary-green bg-white py-4 hover:bg-green-90">
            <span className="font-medium text-primary-green">DAO</span>
          </button>
        </Link>
        {isConnected ? (
          <div className="flex gap-2">
            <Identity
              address={address}
              schemaId="0xf8b05c79f090979bf4a80270aba232dff11a10d9ca55c4f88de95317970f0de9"
              className="w-[200px] rounded-2xl bg-white font-medium"
            >
              <Avatar className="mr-1">
                <Badge className="bg-error" />
              </Avatar>
              <Name />
              <Address />
            </Identity>
            <ConnectButton />
          </div>
        ) : (
          <NavbarConnectBtn />
        )}
      </div>
    </header>
  )
}
