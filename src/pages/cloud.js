import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';

import CloudBanner from 'services/cloud-banner'
import CloudService from 'services/cloud-service';
import DataProcess from 'services/data-process';
import HireCloud from 'services/hire-cloud';
import CloudIndustries from 'services/cloud-industries'
import Blog from 'services/data-blog'
import CloudLanguage from 'services/cloud-languag';


export default function cloudPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Top Cloud Consulting Company" />
          <CloudBanner/>
          <CloudService/>
          <HireCloud/>
        
          <CloudIndustries/>
          <CloudLanguage/>
          <HireCloud/>
          
          
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
