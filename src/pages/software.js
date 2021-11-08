import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';

import SoftwareBanner from 'services/software-banner'
import SoftwareService from 'services/software-service';
import SoftwareProcess from 'services/software-process';
import SoftwareIndustries from 'services/software-industries'
import Blog from 'services/software-blog'
import HireSoftware from 'services/hire-software';


export default function softwarePage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Top website and app development company" />
          <SoftwareBanner/>
          <SoftwareService/>
          <HireSoftware/>
          <SoftwareIndustries/>
          <HireSoftware/>
          
          
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}