import React from 'react'
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';


import DataBanner from 'sections/data-banner';

export default function software() {
    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <Layout>
                    <SEO title="custom sofware development"/>
                    <DataBanner/>
                        
                    

                </Layout>
            </StickyProvider>
        </ThemeProvider>
    )
}
