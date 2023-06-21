"use client";
import './globals.css'
import { Inter } from 'next/font/google'
import '@fontsource/michroma';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { Toaster } from "react-hot-toast";
import { client, chains } from "../util/chain";
import { WagmiConfig } from "wagmi";
import { brandingDarkTheme } from "./../util/theme";
import { ThemeProvider } from "@mui/material/styles";
import Header from "./../components/Header";

const inter = Inter({ subsets: ['latin'] })

const customRainbowKitProperties = {
  fonts: {
    body: '"Michroma"',
  },
};
const rainbowKitTheme = { ...darkTheme(), ...customRainbowKitProperties };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WagmiConfig config={client}>
          <ThemeProvider theme={brandingDarkTheme}>
            <RainbowKitProvider chains={chains} theme={rainbowKitTheme}>
              <Header />
              <div>{children}</div>
              <Toaster
                toastOptions={{
                  className: "",
                  style: {
                    fontFamily: "Michroma",
                  },
                }}
              />
            </RainbowKitProvider>
          </ThemeProvider>
        </WagmiConfig>
      </body>
    </html>
  )
}
