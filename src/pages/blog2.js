import BannerBlogTwo from 'sections/banner-blog-two';


import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import LayoutBlog from 'components/layout-blog';




function blog2() {
    return (
        <ThemeProvider theme={theme}>
      <StickyProvider>
        <LayoutBlog>
          <SEO title="Macc blog" />
          <BannerBlogTwo/>
          
          
        </LayoutBlog>
      </StickyProvider>
    </ThemeProvider>
    )
}

export default blog2
