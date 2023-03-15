import Footer from '@/component/footer/Footer'
import NewsLetter from '@/component/footer/newsletter/NewsLetter'
import '@/styles/globals.css'
import Container from '@mui/material/Container';
import AppContext from '../hooks/context'
import axios from 'axios'

export default function App({ Component, pageProps, }) {
  return (
    <>
      <AppContext >
        <Container maxWidth="lg">
          <Component {...pageProps} />
        </Container>
        <NewsLetter />
        <Footer />
      </AppContext>
    </>
  )
}

export async function getStaticProps() {

}