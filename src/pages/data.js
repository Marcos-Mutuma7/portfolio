import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';

import DataBanner from 'services/data-banner'
import DataService from 'services/data-service';
import DataProcess from 'services/data-process';
import HireData from 'services/hire-data';
import DataIndustries from 'services/data-industries'
import Blog from 'services/data-blog'
import Count from 'sections/count';


export default function dataPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Top software development company" />
          <DataBanner/>
          <DataService/>
          <HireData/>
          <DataProcess/>
          <DataIndustries/>
          <HireData/>
          <Blog/>
          
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}