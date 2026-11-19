// client.ts
import { createWalletClient, createPublicClient, custom } from 'viem';
import { sepolia } from 'viem/chains';
import 'viem/window';

export function ConnectWalletClient() {
  // Check for window.ethereum
  const transport = _validateWallet();

  // Delcalre a Wallet Client
  const walletClient = createWalletClient({
    chain: sepolia,
    transport
  });

  return walletClient;
}

export function ConnectPublicClient() {
  // Check for window.ethereum
  const transport = _validateWallet();

  // Delcare a Public Client
  const publicClient = createPublicClient({
    chain: sepolia,
    transport
  });

  return publicClient;
}

//////////////////////////////////////////////
// helper functions
//////////////////////////////////////////////
function _validateWallet() {
  // Check for window.ethereum
  if (window.ethereum) {
    return custom(window.ethereum);
  } else {
    const errorMessage = 'MetaMask or another web3 wallet is not installed. Please install one to proceed.';
    throw new Error(errorMessage);
  }
}
