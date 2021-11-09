import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';

import BlockchainBanner from 'services/blockchain-banner'
import BlockchainService from 'services/blockchain-service';
import BlockchainProcess from 'services/blockchain-process';
import BlockchainIndustries from 'services/blockchain-industries'
import Blog from 'services/blockchain-blog'
import HireBlockchain from 'services/hire-blockchain';


export default function blockchainPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Startup Landing 006" />
          <BlockchainBanner/>
          <BlockchainService/>
          <HireBlockchain/>
          <BlockchainIndustries/>
          
          <HireBlockchain/>
          
          
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
