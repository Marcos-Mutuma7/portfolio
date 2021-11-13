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

         




          <MessengerCustomerChat
    pageId="<112713557885532>"
    appId="<324362079060669>"
    htmlRef="<REF_STRING>"
  />
  

  <script
          dangerouslySetInnerHTML={{
            __html: `
            window.fbAsyncInit = function() {
              FB.init({
                xfbml            : true,
                version          : 'v10.0'
              });
            };
            (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
            `,
          }}
        />

        



        <div className="fb-customerchat"
          attribution="page_inbox"
          page_id="1127135578855432">
        </div>
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
