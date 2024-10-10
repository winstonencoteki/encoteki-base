import { abi } from './contract-abi'

const smartContractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS // BASE Smart Contract

const contractConfig = {
  abi,
  address: smartContractAddress ?? '',
} as const

export default contractConfig
