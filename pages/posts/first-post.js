import React from "react";
import Link from 'next/link';
import Head from 'next/head';
import Layout from "../../components/layout";

export default function FirstPage() {
  return (
    <Layout>
      <Head>
        <title>Shrek Is Love</title>
        <link rel="icon" href="/shrek_favicon.ico" />
      </Head>
      <h1>Shrek is love, Shrek is life.</h1>
      <h2>
        <Link href="/">
          <a>Back to Home</a>
        </Link>
      </h2>
    </Layout>
  )
    
}