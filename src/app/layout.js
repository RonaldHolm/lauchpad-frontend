"use client";
import "./globals.css";
import "./style.css";
import {Inter} from "next/font/google";

import SideBar from "@/components/Layouts/SideBar";
import Header from "@/components/Layouts/Header";

import Background from "@/assets/image/background.png";
import {useState} from "react";

// connect wallet
import "@rainbow-me/rainbowkit/styles.css";

import {RainbowKitProvider, getDefaultConfig} from '@rainbow-me/rainbowkit';

import {WagmiProvider} from 'wagmi';

import {
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    zora,
    bscTestnet
} from 'wagmi/chains';
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
import {http} from '@wagmi/core'

const config = getDefaultConfig({
    appName: 'My RainbowKit App',
    projectId: '3cba1c661b5a8b71e40f1201e5a1d4e0',
    chains: [bscTestnet],
    transports: {
        [bscTestnet.id]: http()
    },
    ssr: true, // If your dApp uses server side rendering (SSR)
});

const inter = Inter({subsets: ["latin"]});
const queryClient = new QueryClient();

// export const metadata = {
// title: "Create Next App",
// description: "Generated by create next app",
// };

export default function RootLayout({children}) {
    const [sideBarShow, setSideBarShow] = useState(false);
    return (
        <html lang="en">
            <head> {/* <!-- Primary Meta Tags --> */}
                <title>TaikoPad</title>
                <link rel="icon" type="image/x-icon" href="/logo.svg"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/logo.svg"/>
                <link rel="icon" type="image/png" href="/logo.svg" sizes="32x32"/>
                <link rel="shortcut icon" href="/logo.svg"/>

                <meta name="title" content="TaikoPad"/>
                <meta name="description" content="Launchpad revolutionary decentralized"/> {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://flash-launch.com/"/>
                <meta property="og:title" content="TaikoPad"/>
                <meta property="og:description" content="Launchpad revolutionary decentralized"/>
                <meta property="og:image" content="/metadata.jpg"/> {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="/logo-big.png"/>
                <meta property="twitter:url" content="https://flash-launch.com/"/>
                <meta property="twitter:title" content="TaikoPad"/>
                <meta property="twitter:description" content="Launchpad revolutionary decentralized"/>
                <meta property="twitter:image" content="/metadata.jpg"/>
            </head>

            <body classname={
                inter.className
            }>
                            <div classname="flex max-lg:hidden">
                <WagmiProvider config={config}>
                    <QueryClientProvider client={queryClient}>
                        <RainbowKitProvider>
                                <SideBar mobileview={false}
                                    show={true}/>
                                    <Header/>
                                <div>
                                    <div classname="w-[calc(100vw-286px)] -ml-[1px] min-h-screen h-[calc(100%-80px)]"
                                        style={
                                            {
                                                background: `url('${
                                                    Background.src
                                                }') center center`
                                            }
                                    }>
                                        {/* <HeaderSection /> */}
                                        <div classname="px-10 pb-16 pt-8">
                                            {children}</div>
                                    </div>
                                </div>
                                    
                                    </RainbowKitProvider>
                                </QueryClientProvider>
                            </WagmiProvider>
                            </div>
                            {/* <div classname="lg:hidden">
                                <SideBar mobileview={true}
                                    show={sideBarShow}
                                    setshow={setSideBarShow}/>
                                <div>
                                    <div classname="w-[100%] h-full"
                                        style={
                                            {
                                                background: `url('${
                                                    Background.src
                                                }') center center`
                                            }
                                    }>
                                        <Header show={sideBarShow}
                                            setshow={setSideBarShow}/>
                                        <div classname="px-5">
                                            {children}</div>
                                    </div>
                                </div>
                            </div> */}
            </body>
        </html>
    );
}
