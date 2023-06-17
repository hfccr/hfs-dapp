"use client";

import { useState, useEffect } from "react";
import { Button, Stack } from "@mui/material";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import toast from "react-hot-toast";
import { fvmChain } from "@/util/chain";
import { newDelegatedEthAddress } from "@glif/filecoin-address";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const connector = new MetaMaskConnector();

export default function Connect({ }) {
    const [hydrated, setHydrated] = useState(false);
    useEffect(() => {
        setHydrated(true);
    }, []);
    const { address, isConnected } = useAccount();
    const { disconnect } = useDisconnect({
        onSuccess() {
            toast("Account disconnected!", {
                style: {
                    border: "2px solid #000",
                },
            });
        },
        onError() {
            toast.error("Failed to disconnect account!", {
                style: {
                    border: "2px solid #000",
                },
            });
        },
    });
    const { connect } = useConnect({
        chainId: fvmChain.id,
        connector,
        onSuccess() {
            toast.success("Account connected!", {
                style: {
                    border: "2px solid #000",
                },
            });
        },
        onError() {
            toast.error("Error connecting account!", {
                style: {
                    border: "2px solid #000",
                },
            });
        },
    });
    const handleConnect = () => {
        if (isConnected) {
            disconnect();
        } else {
            connect();
        }
    };
    let message = "Connect MetaMask";
    let showConnect = true;
    let t4Message = "Connect MetaMask";
    let f4Address;
    if (isConnected && hydrated) {
        showConnect = false;
        message = address.slice(0, 6) + "..." + address.slice(-4);
        f4Address = newDelegatedEthAddress(address).toString();
        t4Message = f4Address.slice(0, 6) + "..." + f4Address.slice(-4);
    }
    const copyf4AddressToClipboard = () => {
        navigator.clipboard.writeText(f4Address);
        toast.success("Copied to clipboard", {
            style: {
                border: "2px solid #000",
            },
        });
    };
    return (
        <Stack direction="column">
            <ConnectButton chainStatus="icon" />
            {!showConnect && (
                <Button onClick={copyf4AddressToClipboard}>{t4Message}</Button>
            )}
        </Stack>
    );
}
