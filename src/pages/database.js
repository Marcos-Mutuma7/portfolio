import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';

import DatabaseBanner from 'services/database-banner'
import DatabaseService from 'services/database-service';
import DatabaseProcess from 'services/database-process';
import HireDatabase from 'services/hire-database';
import DatabaseIndustries from 'services/database-industries'
import Blog from 'services/data-blog'


export default function databasePage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Startup Landing 006" />
          <DatabaseBanner/>
          <DatabaseService/>
          <HireDatabase/>
          <DatabaseProcess/>
          <DatabaseIndustries/>
          <HireDatabase/>
          <Blog/>
          
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
