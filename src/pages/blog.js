import BannerBlog from 'sections/banner-blog';
import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import LayoutBlog from 'components/layout-blog';

export default function blog() {
    return (
        <ThemeProvider theme={theme}>
        <StickyProvider>
          <LayoutBlog>
            <SEO title="Macc app" />
            <BannerBlog />
            
          </LayoutBlog>
        </StickyProvider>
      </ThemeProvider>
    )
}
