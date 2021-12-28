import type { ReactElement } from 'react';

import Head from 'next/head'
import Link from 'next/link'
import { Layout } from '../components/Layout'

function about() {
    return <>
        <Layout>
        <Head>
          <title>About me</title>
        </Head>
        <div className="body">
            <h1>About me</h1>
            <Link href="/">
            <a id="back-link">Back to home</a>
            </Link>
        </div>
      </Layout>
      <style jsx>{`
      .body{
          height:100%;
          background:red;
      }
      #back-link {
        background: red;
      }
    `}</style>
    </>
  }
  
  export default about;