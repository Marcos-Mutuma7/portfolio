import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';

import ContactBanner from 'sections/contacts-banner'



export default function dataPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Top software development company" />
          <ContactBanner/>
        
          
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
