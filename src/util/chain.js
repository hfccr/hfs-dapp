"use client";
import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig } from "wagmi";
import { filecoinCalibration } from "viem/chains";
import { publicProvider } from "wagmi/providers/public";

export const fvmChain = filecoinCalibration;

export const { chains, publicClient, webSocketPublicClient } = configureChains(
    [filecoinCalibration],
    [publicProvider()]
);

export const { connectors } = getDefaultWallets({
    appName: "Notary+",
    projectId: '19410162bf88eb2e1654284fc96274ce',
    chains,
});

export const client = createConfig({
    autoConnect: true,
    publicClient,
    connectors,
});
