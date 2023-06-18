"use client";
import React, { useState, useEffect } from "react";
import {
    Alert,
    Box,
    Container,
    Stack,
    Button,
    Typography,
} from "@mui/material";
import { useAccount, useNetwork, useSwitchNetwork } from "wagmi";
import { fvmChain } from "@/util/chain";
import toast from "react-hot-toast";
import Connect from "@/components/Connect";

export default function DappLayout({ children }) {
    const [hydrated, setHydrated] = useState(false);
    useEffect(() => {
        setHydrated(true);
    }, []);
    const { isConnected } = useAccount();
    const { chain } = useNetwork();
    const { chains, error, isLoading, pendingChainId, switchNetwork } =
        useSwitchNetwork({
            chainId: fvmChain.id,
            onSuccess: () => {
                toast.success("Network Switch Successful!");
            },
            onError: () => {
                toast.error("Network Switch Failed!");
            },
        });
    let wrongChain = false;
    if (isConnected && chain?.id !== fvmChain.id) {
        wrongChain = true;
    }
    return (
        <Container sx={{ marginTop: 8 }}>
            {(!isConnected || !hydrated) && (
                <Stack
                    direction="column"
                    spacing={8}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Alert sx={{ flexGrow: 1 }} severity="info">
                        Connect MetaMask To Continue
                    </Alert>
                    <Connect />
                </Stack>
            )}
            {wrongChain && (
                <Stack
                    direction="column"
                    spacing={8}
                    justifyContent="center"
                    alignItems="center"
                    sx={{ minWidth: "md" }}
                >
                    <Alert sx={{ flexGrow: 1 }} severity="info">
                        Switch To{" "}
                        <Box component="span" sx={{ fontWeight: "bold" }}>
                            {fvmChain.name}
                        </Box>{" "}
                        To Continue
                    </Alert>
                    <Button
                        onClick={() => {
                            switchNetwork?.(fvmChain.id);
                        }}
                    >
                        Switch Network
                    </Button>
                </Stack>
            )}
            {isConnected && !wrongChain && hydrated && <>{children}</>}
        </Container>
    );
}
