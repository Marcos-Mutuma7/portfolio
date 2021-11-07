import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';

import Banner from 'sections/banner';
import Services from 'sections/services';
import Testimonials from 'sections/testimonials';
import CustomerSupport from 'sections/customer-support';
import Feature from 'sections/feature';
import FeatureOne from 'sections/feature-one'
import VideoOne from 'sections/video-one';
import CallToAction from 'sections/call-to-action';
import BoostAgencies from 'sections/boost-agencies';
import Count from 'sections/count';
import Blog from 'sections/blog'
import BoostAgencies1 from 'sections/boost-agencies1'
import BoostAgencies2 from 'sections/boost-agencies2'

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Top software development company" />
          <Banner />
          <Count/>
          <Feature/>
          <FeatureOne/>
          <BoostAgencies/>
          <BoostAgencies1/>
          <CallToAction/>
          <Services />
          <VideoOne/>
          <BoostAgencies2/>
          <CallToAction />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}

