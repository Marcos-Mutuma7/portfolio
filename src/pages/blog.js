import React from 'react';
import { ThemeProvider , Flex ,Box , Text ,Heading ,Container} from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import BlogBanner from 'sections/blog-banner'



import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Image from 'next/image'

const Home = ({ posts }) => {
  return (
<ThemeProvider theme={theme}>
  <StickyProvider>
  <Layout>
    <SEO title="Top technology blogs and articles "/>
      <BlogBanner/>
    
      <Container sx={styles.container}>
      {posts.map((post, index) => (
        <Link href={'/blog/' + post.slug} passHref key={index}>
         
         <Box sx={styles.card}>
                  
                  
                  
             
                
                <Image
                  src={post.frontMatter.thumbnailUrl}
                  alt="thumbnail"
                  width={800}
                  height={490}
                  objectFit="cover"
            />
            <Heading>{post.frontMatter.title}</Heading>
                  
            
            </Box>
              </Link>  
      
      ))}
   </Container>
    
  </Layout>
 </StickyProvider>
  </ThemeProvider>
  )

}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)

    return {
      frontMatter,
      slug: filename.split('.')[0]
    }
  })

  return {
    props: {
      posts
    }
  }
}

export default Home

const styles = {
    container:{
      gap: 30,
    display: ['grid', 'grid', 'grid', 'block', 'grid'],
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(2, 1fr)',
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
    m: [0, 0, 0, '0 -15px', 0],
    borderRadius:'30px'
    },
   card:{
     paddingTop:'30px',
     cursor:"pointer"
    
   }
}