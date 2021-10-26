import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';

import Banner from 'sections/banner';
import Count from 'sections/count'
import Services from 'sections/services';
import Testimonials from 'sections/testimonials';
import CustomerSupport from 'sections/customer-support';
import VideoOne from 'sections/video-one';
import Service from 'sections/service';
import BoostAgencies from 'sections/boost-agencies';
import CallToAction from 'sections/call-to-action';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="software development company" />
          <Banner />
          <Count/>
          <Services/>
          <Service/>
          
          <CustomerSupport/>
          <BoostAgencies />
          <Testimonials />
        

          <VideoOne />
          <CallToAction/>
          
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
