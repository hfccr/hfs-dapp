"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { Box, Stack, Typography } from '@mui/material'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Stack justifyContent="center" alignItems="center" spacing={4}>
          <Image
            className={styles.logo}
            src="/notary.svg"
            alt="Notary Logo"
            width={440}
            height={440}
            priority
          />
          <Typography variant="h4">An Open, Verifiable & Permissionless FVM Fil+ Notary</Typography>
        </Stack>
      </div>
      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Govern <span>-&gt;</span>
          </h2>
          <p>Verify clients and data cap requests</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Client <span>-&gt;</span>
          </h2>
          <p>Get verified and obtain data cap from the notary</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Providers <span>-&gt;</span>
          </h2>
          <p>Get verified deals from notary clients</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Watchdog <span>-&gt;</span>
          </h2>
          <p>
            Maintain the notary and its policies by monitoring the deal market for fradulent activity
          </p>
        </a>
      </div>
    </main>
  )
}
