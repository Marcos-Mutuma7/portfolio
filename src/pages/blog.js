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
import Image from 'next/image'
import Link from 'next/link'

export default function Blog({ posts }) {
    return (

    <ThemeProvider theme={theme} id="blog">
      <StickyProvider>
      <Layout>
        <BlogBanner/>
        <Box sx={styles.blog}>
          {posts.map((post, index) => (
          <Link href={'/blog/' + post.slug} passHref key={index}>

           <Container>
            <Box sx={styles.blogWrapper}>
            
            <Image
                    src={post.frontMatter.thumbnailUrl}
                    className="img-fluid mt-1 rounded-start"
                    alt="thumbnail"
                    width={500}
                    height={400}
                    objectFit="cover"
                  />
                                
                    <Box>
                    <Heading>{post.frontMatter.title}</Heading>
                    <Text>{post.frontMatter.description}</Text>
                    <Text>{post.frontMatter.date}</Text>
                    </Box>
                    
            </Box>
         </Container>
          </Link>
        ))}
        </Box>
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

const styles ={

  blog:{
  
    overflow: 'hidden',
    gap: 25,
    display: ['grid', 'grid', 'grid', 'block', 'grid'],
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(2, 1fr)',
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
    m: [0, 0, 0, '0 -15px', 0],
 

  },
  blogWrapper: {
    cursor:'pointer',
  mt:'30px',
  transition: '500ms',
  borderRadius: '10px',
  '&:hover': {
    boxShadow: '0px 15px 50px rgba(69, 88, 157, 0.1)',
    transform: 'scale(0.95)'
  },
  
  },
 

  }