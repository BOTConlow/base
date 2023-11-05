/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
// eslint-disable-next-line camelcase
import { Sora } from 'next/font/google'

import { MainContainer, MainContent } from '@/styles/index.styles'

const Vietnam = Sora({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Monitorar Whatsapp</title>
        <meta name="description" content="Terapeuta Transforma" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/whatsapp2.webp" />
      </Head>

      <>
        <MainContainer className={Vietnam.className}>
          <MainContent>
            <h1>Hello World!</h1>
          </MainContent>
        </MainContainer>
      </>
    </>
  )
}
