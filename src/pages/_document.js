import Document, { Html, Head, Main, NextScript } from 'next/document';
import MessengerCustomerChat from 'react-messenger-customer-chat';
class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap" rel="stylesheet"/>   
        </Head>
        <body>

        <MessengerCustomerChat
    pageId="<112713557885532>"
    appId="<324362079060669>"
    htmlRef="<REF_STRING>"
  />

                 <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
