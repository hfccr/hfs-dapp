"use client";
import React from "react";
import { Tab, Box, Divider, Stack, Tabs, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ClientLayout({ children }) {
    const path = usePathname();
    let selected = "power";
    if (path.indexOf("verify") >= 0) {
        selected = "verify";
    } else if (path.indexOf("datacap") >= 0) {
        selected = "datacap";
    }
    return (
        <>
            <Box
                component="span"
                sx={{
                    marginBottom: 2,
                    fontFamily: "Michroma",
                    fontSize: "x-large",
                    cursor: "pointer",
                }}
            >
                Govern
            </Box>
            <Stack direction="row" sx={{ padding: 2, marginTop: 4 }} spacing={4}>
                <Tabs
                    orientation="vertical"
                    variant="standard"
                    aria-label="client menu vertical"
                    value={selected}
                    sx={{
                        borderRight: 1,
                        borderColor: "divider",
                        flexShrink: 0,
                        width: "220px",
                        alignContent: "flex-start",
                    }}
                >
                    <Tab
                        label="Power"
                        value="power"
                        href="/dapp/govern/power"
                        LinkComponent={Link}
                        sx={{ alignItems: "flex-start", fontSize: "large" }}
                    />
                    <Tab
                        label="Datacap"
                        value="datacap"
                        href="/dapp/govern/datacap"
                        LinkComponent={Link}
                        sx={{ alignItems: "flex-start", fontSize: "large" }}
                    />
                    <Tab
                        label="Verify"
                        value="verify"
                        href="/dapp/govern/verify"
                        LinkComponent={Link}
                        sx={{ alignItems: "flex-start", fontSize: "large" }}
                    />
                </Tabs>
                <>{children}</>
            </Stack>
        </>
    );
}
