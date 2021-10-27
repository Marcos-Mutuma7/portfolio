import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';

import DataBanner from 'services/data-banner'
import DataService from 'services/data-service';
import DataProcess from 'services/data-process';


export default function dataPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Startup Landing 006" />
          <DataBanner/>
          <DataService/>
          <DataProcess/>
          
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
