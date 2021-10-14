import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
        <link href="https://fonts.googleapis.com/css2?family=Cinzel&display=swap" rel="stylesheet"/> 

          <link
          href="https://fonts.googleapis.com/css2?family=Scheherazade+New&display=swap" 
          rel="stylesheet"
          />

<link href="https://fonts.googleapis.com/css2?family=Cinzel&family=Playfair+Display&display=swap" rel="stylesheet"/> 
<link href="https://fonts.googleapis.com/css2?family=Explora&display=swap" rel="stylesheet"/> 
<link href="https://fonts.googleapis.com/css2?family=Andada+Pro&family=Cinzel&family=Playfair+Display&display=swap" rel="stylesheet"/> 
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
