"use client";
import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig } from "wagmi";
import { filecoinCalibration } from "viem/chains";
import { publicProvider } from "wagmi/providers/public";
import { createPublicClient, http } from "viem";
import {
    injectedWallet,
    metaMaskWallet,
    walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { connectorsForWallets } from '@rainbow-me/rainbowkit';

export const fvmChain = filecoinCalibration;

export const { chains, publicClient, webSocketPublicClient } = configureChains(
    [filecoinCalibration],
    [publicProvider()]
);


const projectId = '19410162bf88eb2e1654284fc96274ce';

export const connectors = connectorsForWallets([
    {
        groupName: 'Recommended',
        wallets: [
            injectedWallet({ chains }),
            metaMaskWallet({ projectId, chains }),
        ],
    },
]);

export const client = createConfig({
    autoConnect: true,
    publicClient,
    webSocketPublicClient,
    connectors,
});
