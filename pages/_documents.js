import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
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



// //Code for Next 9.5.3 app
// import Document, { Head, Main, NextScript } from 'next/document'
// import flush from 'styled-jsx/server'
// export default class MyDocument extends Document {
//   static getInitialProps({ renderPage }) {
//    const { html, head, errorHtml, chunks } = renderPage()
//    const styles = flush()
//    return { html, head, errorHtml, chunks, styles }
//   }
//   render() {
//     return (
//       <html lang="fr">
//         <Head></Head>
//         <body> 
//           {this.props.customValue}
//           <Main />
//           <NextScript />
//         </body>
//       </html>
//     )
//   }
// }



//This is the code for next 9.5.4 canary app, published in Sept 2020
/*
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
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


*/

/* avec style sheet
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
*/