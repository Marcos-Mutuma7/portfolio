import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';

import MachineBanner from 'services/machine-banner'

import Blog from 'services/data-blog'
import MachineService from 'services/machine-service';
import MachineProcess from 'services/machine-process';
import HireMachine from 'services/hire-machine';
import MachineIndustries from 'services/machine-industries';
import MachineLanguage from 'services/machine-language';


export default function MachinePage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Startup Landing 006" />
          <MachineBanner/>
          <MachineService/>
      
          <HireMachine/>
          
          <MachineIndustries/>
          <MachineLanguage/>
          <HireMachine/>
          
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
