import useAxios from "axios-hooks";
import { useContractRead } from "wagmi";
import GovernanceTokenABI from "./../constants/abi/NotaryGovernanceToken.json";
import Contracts from "@/constants/contracts";

export function useTokenBalance(address) {
    console.log('Address: ', address);
    console.log('abi: ', GovernanceTokenABI.abi);
    console.log('contract address', Contracts.NotaryGovernanceToken);
    const {
        data: tokenBalance,
        isError,
        isLoading,
        error,
        isSuccess,
    } = useContractRead({
        address: Contracts.NotaryGovernanceToken,
        abi: GovernanceTokenABI.abi,
        functionName: "balanceOf",
        args: [address],
        watch: true,
    });
    console.log('Token Balance: ', tokenBalance);
    console.log('Is Error: ', isError);
    console.log('is Loading: ', isLoading);
    console.log('error: ', error);
    console.log('isSuccess: ', isSuccess);
    return { isSuccess, tokenBalance, isLoading, isError, error };
}
