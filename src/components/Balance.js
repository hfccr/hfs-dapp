"use client";

import { useContractRead } from "wagmi";
import GovernanceTokenABI from "./../constants/abi/NotaryGovernanceToken.json";
import Contracts from "@/constants/contracts";
import { useState, useEffect } from "react";
import {
    Skeleton,
    Typography,
    Box,
    Stack,
} from "@mui/material";
import {
    useAccount,
    useBalance,
} from "wagmi";
import { useTokenBalance } from "@/hooks/useGovernanceToken";

export default function Balance({ }) {
    const [hydrated, setHydrated] = useState(false);
    const { address } = useAccount();
    console.log('Address: ', address);
    const { data, isError, isLoading, isSuccess } = useBalance({
        address,
    });
    const {
        tokenBalance,
        isLoading: tokenBalanceLoading,
        isSuccess: tokenBalanceSuccess,
        isError: tokenBalanceError,
    } = useTokenBalance(address);
    // const {
    //     data: tokenBalance,
    //     error,
    //     isLoading: tokenBalanceLoading,
    //     isSuccess: tokenBalanceSuccess,
    //     isError: tokenBalanceError,
    // } = useContractRead({
    //     address: Contracts.GovernanceToken,
    //     abi: GovernanceTokenABI.abi,
    //     functionName: "balanceOf",
    //     args: [address],
    //     watch: true,
    // });
    console.log('Them token balance is');
    console.log(tokenBalance);






    useEffect(() => {
        setHydrated(true);
    }, []);
    return (
        <Box
            element="div"
            sx={{ border: "1px solid gray", borderRadius: 4, padding: 3 }}
        >
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant="h4">FIL Balance</Typography>
                {isLoading && <Skeleton variant="text" sx={{ fontSize: "1rem" }} />}
                {isSuccess && (
                    <Typography variant="subtitle1">{`${(+data.formatted).toFixed(4)} ${data.symbol
                        }`}</Typography>
                )}
            </Stack>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant="h4">Governance Tokens</Typography>
                {tokenBalanceLoading && (
                    <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                )}
                {tokenBalanceSuccess && (
                    <Typography variant="subtitle1">{`${(+tokenBalance.toString()).toFixed(
                        4
                    )} NGT`}</Typography>
                )}
            </Stack>
        </Box>
    );
}
