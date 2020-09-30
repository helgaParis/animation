//Code for Next 9.5.3 app
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'
export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
   const { html, head, errorHtml, chunks } = renderPage()
   const styles = flush()
   return { html, head, errorHtml, chunks, styles }
  }
  render() {
    return (
      <html lang="fr">
        <Head></Head>
        <body> 
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}



/* This is the code for next 9.5.4 canary app, published in Sept 2020

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
        <Html lang="fr">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
*/