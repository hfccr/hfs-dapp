"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { Box, Stack, Typography } from '@mui/material'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Typography variant="h4" sx={{ fontFamily: 'Michroma' }}>
          Notary+
        </Typography>
        <div>
          <a
            href="https://fvm.filecoin.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/fvm.svg"
              alt="FVM Logo"
              className={styles.vercelLogo}
              width={80}
              height={80}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Stack justifyContent="center" alignItems="center" spacing={2}>
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
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
