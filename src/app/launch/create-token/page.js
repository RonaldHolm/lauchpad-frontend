"use client";

import React, {useState, useEffect} from "react";

// ! import components
import DefaultCard from "@/components/Card/DefaultCard";
import Success from "@/components/Alert/Success";
import DefaultSelect from "@/components/Form/DefaultSelect";
import Input from "@/components/Form/Input";

// ! import Image
import BurnImage from "@/assets/image/burn-image.png";
import ExportedImage from "next-image-export-optimizer";

// Web3 Wagmi
import {useWriteContract, usePrepareTransactionRequest} from 'wagmi'
import {ethers} from "ethers";

import {parseEther} from 'viem'

// Contract ABIs
import abi from '@/app/abis/standardTokenAbi';

// Wagmi Config
// import { account, walletClient } from '@/app/config';

const CreateToken = () => {
    const [tokenType, setTokenType] = useState([
        {
            text: "Standard Token",
            value: 1
        }, {
            text: "Liquidity Generator Token",
            value: 2
        }, {
            text: "Baby Token",
            value: 3
        }, {
            text: "Buyback Baby Token",
            value: 4
        },
    ]);

    const [rounterType, setRounterType] = useState([
        {
            text: "Pancakeswap",
            value: "0x10ED43C718714eb63d5aA57B78B54704E256024E"
        },
        {
            text: "ApeSwap",
            value: "0xcF0feBd3f17CEf5b47b0cD257aCf6025c5BFf3b7"
        },
        {
            text: "MDex",
            value: "0xf400087A4c94c52C6540A325CB702DE3ee7CB37f"
        },
        {
            text: "BiSwap",
            value: "0x3a6d8cA21D1CF76F653A67577FA0D27453350dD8"
        }, {
            text: "KnightSwap",
            value: "0x05E61E0cDcD2170a76F9568a110CEe3AFdD6c46f"
        }, {
            text: "PinkSwap",
            value: "0x319EF69a98c8E8aAB36Aea561Daba0Bf3D0fa3ac"
        }, {
            text: "Babydogeswap",
            value: "0xC9a0F685F39d05D835c369036251ee3aEaaF3c47"
        },
    ])

    const initialState = {
        tokenType: 1,
        tokenName: '',
        tokenSymbol: '',
        tokenDecimals: 0,
        totalSupply: 0,
        transactionFeeToYield: 0,
        transactionFeeToLiquidity: 0,
        marketingAddress: '',
        marketingPercent: 0,
        rewardToken: '',
        minimumTokenBalance: 0,
        tokenRewardFee: 0,
        autoAddLiquidity: 0,
        marketingFee: 0,
        marketingWallet: '',
        liquidityFee: 0,
        buyBackFee: 0,
        reflectionFee: 0,
        router: 0
    };

    const [currentToken, setCurrentToken] = useState("1");
    const [formData, setFormData] = useState(initialState);

    const changeTokenType = (e) => {
        setFormData(initialState);
        setCurrentToken(e.target.value);
    }

    const ChangeVal = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const {config} = usePrepareTransactionRequest({
        // Calling a hook to prepare the contract write configuration
        address: '0x81eF15f3a45F0Ec7A6b97Ed5f3558831799b857A', // Address of the BSC contract
        abi: abi, // ABI (Application Binary Interface) of the contract
        functionName: "create", // Name of the function to call on the contract
        args: [
            "asfasdfas", "addff", 18, 10000000
        ], // Arguments to pass to the contract function
        value: parseEther("0.01"), // Value to send along with the contract call for gas fee
    });

    const {data: useContractWriteData, write} = useWriteContract(config);


    const CreateNewToken = async () => { // Standard Token
        if (initialState.tokenType === 1) {
            if (formData.tokenName !== "" && formData.tokenSymbol !== "" && formData.tokenDecimals !== "" && formData.totalSupply !== "") { // create new token
                // write();
                // const { request } = await publicClient.simulateContract({
                //     address: '0x81eF15f3a45F0Ec7A6b97Ed5f3558831799b857A',
                //     abi: abi,
                //     functionName: 'create',
                //     args: [formData.tokenName, formData.tokenSymbol, formData.tokenDecimals, formData.totalSupply,],
                //     value: parseEther('0.01')
                // })
                // await walletClient.writeContract(request)
            }
        } else if (initialState.tokenType === 2) { // Liquidity Generator Token
            if (formData.tokenName !== "" && formData.tokenSymbol !== "" && formData.totalSupply !== "" && transactionFeeToYield !== "" && formData.transactionFeeToLiquidity !== "" && formData.marketingAddress !== "" && formData.marketingPercent !== "") { // create new token

            }
        } else if (initialState.tokenType === 3) {
            if (formData.tokenName !== "" && formData.tokenSymbol !== "" && formData.totalSupply !== "" && formData.rewardToken !== "" && formData.minimumTokenBalance !== "" && formData.tokenRewardFee !== "" && formData.autoAddLiquidity !== "" && formData.marketingFee !== "" && formData.marketingWallet !== "") { // create new token

            }
        } else {
            if (formData.tokenName !== "" && formData.tokenSymbol !== "" && formData.totalSupply !== "" && formData.rewardToken !== "" && formData.liquidityFee !== "" && formData.buyBackFee !== "" && formData.reflectionFee !== "" && formData.marketingFee !== "") { // create new token

            }
        }

        //
    }

    return (
        <div className="relative min-h-[1500px] mt-8 lg:mt-0">
            <DefaultCard header="Create Token"
                footer={true}
                footerWrapper={
                    <div className="flex flex-row gap-6 justify-end max-sm:flex-row-reverse">
                <button className="px-8 py-4 border border-[#86888C] rounded-[8px] text-center text-[#86888C] text-[20px] max-sm:text-sm max-sm:px-6">Reset</button>
                <button className='px-8 py-4 border border-[#C03F4A] bg-[#C03F4A] rounded-[8px] text-center text-[#16171B] text-[20px] max-sm:text-sm max-sm:px-6'onClick={CreateNewToken}>
                Create Token</button></div>
            }>
                <div>
                    <Success>
                        <p className="text-white text-[14px]">
                            All created tokens include an Audit.
                            <br/>
                            Audits can be found
                            <span className="text-[#C03F4A]">here</span>.
                                                                                                                                                                              Created tokens also get Audit badge on TaikoPad presales
                                                                                                                                                                              automatically.
                        </p>
                    </Success>
                    <div className="flex flex-col pt-11 gap-8">
                        <div>
                            <DefaultSelect optons={tokenType}
                                onChange={changeTokenType}/>
                            <span className="text-[14px] text-[#C03F4A]">Fee: 0.1 BNB</span>
                        </div>

                        {
                        currentToken === "1" && <div className="flex flex-col gap-8">
                            <div className="flex flex-row gap-8 max-sm:flex-col">
                                <Input name="tokenName" label="TOKEN NAME" placeholder="Ex: Ethereum" type="text"
                                    onChange={ChangeVal}
                                    value={
                                        formData.tokenName
                                    }/>
                                <Input name="tokenSymbol" label="TOKEN SYMBOL" placeholder="Ex: ETH" type="text"
                                    onChange={ChangeVal}
                                    value={
                                        formData.tokenSymbol
                                    }/>
                            </div>

                            <div className="flex flex-row gap-8 max-sm:flex-col">
                                <Input name="tokenDecimals" label="TOKEN DECIMALS" placeholder="18" type="number"
                                    onChange={ChangeVal}
                                    value={
                                        formData.tokenDecimals
                                    }/>
                                <Input name="totalSupply" label="TOTAL SUPPLY" placeholder="Ex: 1000000000" type="number"
                                    onChange={ChangeVal}
                                    value={
                                        formData.totalSupply
                                    }/>
                            </div>
                        </div>
                    }
                        {
                        currentToken === "2" && <div className="flex flex-col gap-8">
                            <div className="flex flex-row gap-8 max-sm:flex-col">
                                <Input name="tokenName" label="TOKEN NAME" placeholder="Ex: Ethereum"
                                    onChange={ChangeVal}
                                    value={
                                        formData.tokenName
                                    }/>
                                <Input name="tokenSymbol" label="TOKEN SYMBOL" placeholder="Ex: ETH"
                                    onChange={ChangeVal}
                                    value={
                                        formData.tokenSymbol
                                    }/>
                            </div>

                            <div className="flex flex-row gap-8 max-sm:flex-col">
                                <Input name="totalSupply" label="TOTAL SUPPLY" placeholder="Ex: 1000000000" type="number"
                                    onChange={ChangeVal}
                                    value={
                                        formData.totalSupply
                                    }/>
                                <DefaultSelect name="router" label="ROUTER"
                                    optons={rounterType}
                                    defaul="Uniswap"
                                    defaultValue={1}
                                    onChange={ChangeVal}/>
                            </div>

                            <div className="flex flex-row gap-8 max-sm:flex-col">
                                <Input name="transactionFeeToYield" label="TRANSACTION FEE TO GENERATE YIELD (%)" placeholder="Ex: 1" type="number"
                                    onChange={ChangeVal}
                                    value={
                                        formData.transactionFeeToYield
                                    }/>
                                <Input name="transactionFeeToLiquidity" label="TRANSACTION FEE TO GENERATE LIQUIDITY (%)" placeholder="Ex: 1" type="number"
                                    onChange={ChangeVal}
                                    value={
                                        formData.transactionFeeToLiquidity
                                    }/>
                            </div>

                            <div className="flex flex-row gap-8 max-sm:flex-col">
                                <Input name="marketingAddress" label="CHARITY/MARKETING ADDRESS" placeholder="Ex: 0x....."
                                    onChange={ChangeVal}
                                    value={
                                        formData.marketingAddress
                                    }/>
                                <Input name="marketingPercent" label="CHARITY/MARKETING PERCENT (%)" placeholder="0 - 25" type="number"
                                    onChange={ChangeVal}
                                    value={
                                        formData.marketingPercent
                                    }/>
                            </div>
                        </div>
                    }
                        {
                        currentToken === "3" && <div className="flex flex-col gap-8">
                            <div className="flex flex-row gap-8 max-sm:flex-col">
                                <Input name="tokenName" label="TOKEN NAME" placeholder="Ex: Ethereum"
                                    onChange={ChangeVal}
                                    value={
                                        formData.tokenName
                                    }/>
                                <Input name="tokenSymbol" label="TOKEN SYMBOL" placeholder="Ex: ETH"
                                    onChange={ChangeVal}
                                    value={
                                        formData.tokenSymbol
                                    }/>
                            </div>

                            <div className="flex flex-row gap-8 max-sm:flex-col">
                                <Input name="totalSupply" label="TOTAL SUPPLY" placeholder="Ex: 1000000000" type="number"
                                    onChange={ChangeVal}
                                    value={
                                        formData.totalSupply
                                    }/>
                                <DefaultSelect name="router" label="ROUTER"
                                    optons={rounterType}
                                    defaul="Uniswap"
                                    defaultValue={1}/>
                            </div>

                            <div className="flex flex-row gap-8 max-sm:flex-col">
                                <Input name="rewardToken" label="REWARD TOKEN" placeholder="Ex: 0x...."
                                    onChange={ChangeVal}
                                    value={
                                        formData.rewardToken
                                    }/>
                                <Input name="minimumTokenBalance" label="MINIMUM TOKEN BALANCE FOR DIVIDENDS" placeholder="Ex: 100000" type="number"
                                    onChange={ChangeVal}
                                    value={
                                        formData.minimumTokenBalance
                                    }/>
                            </div>

                            <div className="flex flex-row gap-8 max-sm:flex-col">
                                <Input name="tokenRewardFee" label="TOKEN REWARD FEE (%)" placeholder="0 - 100" type="number"
                                    onChange={ChangeVal}
                                    value={
                                        formData.tokenRewardFee
                                    }/>
                                <Input name="autoAddLiquidity" label="AUTO ADD LIQUIDITY (%)" placeholder="0 - 25" type="number"
                                    onChange={ChangeVal}
                                    value={
                                        formData.autoAddLiquidity
                                    }/>
                            </div>

                            <div className="flex flex-row gap-8 max-sm:flex-col">
                                <Input name="marketingFee" label="MARKETING FEE (%)" placeholder="0 - 100" type="number"
                                    onChange={ChangeVal}
                                    value={
                                        formData.marketingFee
                                    }/>
                                <Input name="marketingWallet" label="MARKETING WALLET" placeholder="Ex: 0x....."
                                    onChange={ChangeVal}
                                    value={
                                        formData.marketingWallet
                                    }/>
                            </div>
                        </div>
                    }
                        {
                        currentToken === "4" && <div className="flex flex-col gap-8">
                            <div className="flex flex-row gap-8 max-sm:flex-col">
                                <Input name="tokenName" label="TOKEN NAME" placeholder="Ex: Ethereum"
                                    onChange={ChangeVal}
                                    value={
                                        formData.tokenName
                                    }/>
                                <Input name="tokenSymbol" label="TOKEN SYMBOL" placeholder="Ex: ETH"
                                    onChange={ChangeVal}
                                    value={
                                        formData.tokenSymbol
                                    }/>
                            </div>

                            <div className="flex flex-row gap-8 max-sm:flex-col">
                                <Input name="totalSupply" label="TOTAL SUPPLY" placeholder="Ex: 1000000000" type="number"
                                    onChange={ChangeVal}
                                    value={
                                        formData.totalSupply
                                    }/>
                                <DefaultSelect name="router" label="ROUTER"
                                    optons={rounterType}
                                    defaul="Uniswap"
                                    defaultValue={1}/>
                            </div>

                            <div className="flex flex-row gap-8 max-sm:flex-col">
                                <Input name="rewardToken" label="REWARD TOKEN" placeholder="Ex: 0x...."
                                    onChange={ChangeVal}
                                    value={
                                        formData.rewardToken
                                    }/>
                                <Input name="liquidityFee" label="LIQUIDITY FEE (%)" placeholder="0 - 100" type="number"
                                    onChange={ChangeVal}
                                    value={
                                        formData.liquidityFee
                                    }/>
                            </div>

                            <div className="flex flex-row gap-8 max-sm:flex-col">
                                <Input name="buyBackFee" label="BUYBACK FEE (%)" placeholder="3" type="number"
                                    onChange={ChangeVal}
                                    value={
                                        formData.buyBackFee
                                    }/>
                                <Input name="reflectionFee" label="REFLECTION FEE (%)" placeholder="8" type="number"
                                    onChange={ChangeVal}
                                    value={
                                        formData.reflectionFee
                                    }/>
                            </div>

                            <div className="flex flex-row gap-8 max-sm:flex-col">
                                <Input name="marketingFee" label="MARKETING FEE (%)" placeholder="0 - 100" type="number"
                                    onChange={ChangeVal}
                                    value={
                                        formData.marketingFee
                                    }/>
                            </div>
                        </div>
                    } </div>
                </div>
            </DefaultCard>

            <ExportedImage src={BurnImage}
                alt="image"
                className="absolute -bottom-16 -right-10 max-sm:hidden"/>
        </div>
    );
};

export default CreateToken;
