import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEditionDrop, useClaimNFT } from "@thirdweb-dev/react";
import { useAccount } from "wagmi";
import { Button, Heading, Image, Avatar } from "@chakra-ui/react";
import { GiSailboat } from "react-icons/gi";
import Topbuttons from "./Components/topbuttons";

const Home: NextPage = () => {
  const { address } = useAccount();
  const editionDrop = useEditionDrop(
    "0xe5e351BC6f55d74B85B2360E8342cE6E446b97B1"
  );
  const { mutate: claimNft, isLoading, error } = useClaimNFT(editionDrop);
  if (error) {
    console.error("failed to claim nft", error);
  }
  return (
    <div className={styles.container}>
      <Head>
        {/* META */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />

        {/* TITLES */}
        <title>R3SUM3 by joshcs.eth</title>
        <meta name="apple-mobile-web-app-title" content="R3SUM3" />
        <meta name="twitter:title" content="R3SUM3 by joshcs.eth" />
        <meta property="og:title" content="R3SUM3 by joshcs.eth" />
        <meta property="og:site_name" content="R3SUM3 by joshcs.eth" />

        {/* LINKS */}
        <link rel="canonical" href="https://r3sum3.xyz" />
        <meta name="twitter:url" content="https://r3sum3.xyz" />
        <meta property="og:url" content="https://r3sum3.xyz" />
        <meta name="twitter:site:domain" content="r3sum3.xyz" />

        {/* FAVICONS */}
        <meta name="favicon" content="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />

        {/* THEME */}
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />

        {/* DESCRIPTION */}
        <meta
          property="og:description"
          content="Mint joshcs.eth's R3SUM3 here!"
        />
        <meta
          name="twitter:description"
          content="Mint joshcs.eth's R3SUM3 here!"
        />
        <meta name="description" content="Mint joshcs.eth's R3SUM3 here!" />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@JoshCStein" />

        {/* IMAGE */}
        <meta
          property="og:image:url"
          content="https://raw.githubusercontent.com/jcstein/jpegs/main/r3sum3.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://raw.githubusercontent.com/jcstein/jpegs/main/r3sum3.png"
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/jcstein/jpegs/main/r3sum3.png"
        />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/jcstein/jpegs/main/r3sum3.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="R3SUM3" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* PLAUSIBLE ANALYTICS */}
        <script
          defer
          data-domain="r3sum3.xyz"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </Head>
      <Topbuttons />
      <main className={styles.main}>
        <Heading size="xl" textAlign="center" pb="3">
          joshcs.eth résumé minting dApp
        </Heading>
        <Heading size="md" textAlign="center">
          After minting, my résumé will appear in your wallet 🧙‍♂️
          <br />
          No more losing PDFs 😎
        </Heading>
        {!address ? (
          <Image
            src="./r3sum3.png"
            rounded="full"
            width="69%"
            mt="5"
            maxW="500px"
            alt="R3SUM3"
          />
        ) : null}
        <br />
        {!address ? (
          <Heading pb="5" size="lg">
            gm
          </Heading>
        ) : null}
        <ConnectButton />
        {address ? (
          <>
            <Image
              src="./r3sum3.png"
              rounded="2xl"
              width="69%"
              maxW="500px"
              mt="5"
              mb="3"
              alt="R3SUM3"
            />
            {isLoading ? (
              <Button
                colorScheme="purple"
                disabled={isLoading}
                isLoading
                loadingText="Minting..."
                spinnerPlacement="start"
                _hover={{ transform: "scale(1.1)" }}
                size="lg"
                my="3"
              />
            ) : (
              <Button
                colorScheme="purple"
                disabled={isLoading}
                onClick={() =>
                  claimNft({ to: address as any, tokenId: 0, quantity: 1 })
                }
                _hover={{ transform: "scale(1.1)" }}
                size="lg"
                my="3"
              >
                Claim R3SUM3!
              </Button>
            )}
            <Button
              colorScheme="blue"
              rightIcon={<GiSailboat />}
              onClick={() =>
                window.open(
                  "https://testnets.opensea.io/assets/rinkeby/0xe5e351bc6f55d74b85b2360e8342ce6e446b97b1/0",
                  "_blank"
                )
              }
            >
              View on OpenSea
            </Button>
          </>
        ) : null}
      </main>
      <footer className={styles.footer}>
        <a href="https://joshcs.lol" target="_blank" rel="noopener noreferrer">
          <Avatar src="/jcs.png" mx="auto" size="full" width="5%" maxW="50px" />
        </a>
      </footer>
    </div>
  );
};

export default Home;
