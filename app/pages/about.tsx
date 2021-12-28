import Head from 'next/head'
import Link from 'next/link'
import { Layout } from '../components/Layout'

export default () => (
  <Layout>
    <Head>
      <title>About me</title>
    </Head>
    <h1>About me</h1>
    <Link href="/">
      <a>Back to home</a>
    </Link>
  </Layout>
)