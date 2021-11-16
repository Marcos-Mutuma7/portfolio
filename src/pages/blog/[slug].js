import {Heading ,Text ,Container ,Image} from 'theme-ui'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs'


import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';


import { Nav, Button } from '../../components'

const components = { Nav, Button, SyntaxHighlighter }
const data = { docco }

const PostPage = ({ frontMatter: {}, mdxSource }) => {
  return (
    <ThemeProvider theme={theme}>
          <Container sx={styles.container}>
            
      
      <MDXRemote {...mdxSource} components={components} scope={data}/>
      
       </Container>
    
  
  </ThemeProvider>
  )

}

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.mdx', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(path.join('posts',
    slug + '.mdx'), 'utf-8')

  const { data: frontMatter, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content)

  return {
    props: {
      frontMatter,
      slug,
      mdxSource
    }
  }
}

export { getStaticProps, getStaticPaths }
export default PostPage


const styles ={
  container:{
    textAlign:'center',
    justifyContent:'',
    pt:'40px',
    fontSize:'20px',
    lineHeight:'40px',
    maxWidth:'1000px',
    fontFamily:'Raleway',
    color:'rgba(36, 37, 42, 1)',
    
  },

}