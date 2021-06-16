/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text } from 'theme-ui';
import Image from 'components/image';

import blogImage from 'assets/blog-2.jpg'
import { IoIosCheckmarkCircle } from 'react-icons/io';


export default function BannerBlogOne() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
        <Box sx={styles.image}>
            <Image src={blogImage} alt=""/>
          </Box>
          <br/>
          <Heading as="h1" >
            React Js basics for begginers.
          </Heading>
          <br/>
          <Text as="p" >
          React is a front-end library developed by Facebook. It is used for handling the view layer for web and mobile apps. ReactJS allows us to create reusable UI components. It is currently one of the most popular JavaScript libraries and has a strong foundation and large community behind it.

          </Text>
          <br/>
          <Heading as="h1" >
          Audience
          </Heading>
          <br/>
           <Text as="p" >
This blog will help JavaScript developers who look ahead to deal with ReactJS for the first time. I will try to introduce every concept by showing simple code examples that can be easily understood. After finishing all the chapters, you will feel confident working with ReactJS.

           </Text>
           <br/>
           <Heading as="h1">
           Prerequisites
           </Heading>
           <br/>
           <Text as="p">
           If you want to work with ReactJS, you need to have solid knowledge of JavaScript, HTML5, and CSS. Even though ReactJS doesn't use HTML, the JSX is similar so your HTML knowledge will be very helpful.
           </Text>
           <br/>
           <Heading as="h1">
           React Features
           </Heading>
           <br/>

   <Text as="li">
     <IoIosCheckmarkCircle/>
    JSX − JSX is JavaScript syntax extension. It isn't necessary to use JSX in React development, but it is recommended.
  </Text>
  <Text as="li">
    <IoIosCheckmarkCircle/>
Components − React is all about components. You need to think of everything as a component. This will help you maintain the code when working on larger scale projects.
  </Text>
  <Text as="li">
    <IoIosCheckmarkCircle/>
Unidirectional data flow and Flux − React implements one-way data flow which makes it easy to reason about your app. Flux is a pattern that helps keeping your data unidirectional.
 </Text>
 <Text as="li">
   <IoIosCheckmarkCircle/>
   License − React is licensed under the Facebook Inc. Documentation is licensed under CC BY 4.0.
</Text>
<br/>
<Heading as="h1">
React Advantages
</Heading>
<br/>
<Text as="li">
  <IoIosCheckmarkCircle/>
Uses virtual DOM which is a JavaScript object. This will improve apps performance, since JavaScript virtual DOM is faster than the regular DOM.
</Text>
<br/>
<Text as="li">
  <IoIosCheckmarkCircle/>
Can be used on client and server side as well as with other frameworks.
</Text>
<br/>
<Text as="li">
  <IoIosCheckmarkCircle/>
Component and data patterns improve readability, which helps to maintain larger apps.
</Text>
        </Box>

      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 6,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '36%',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '32%',
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    h1:{
      fontSize: [6, null, null, '36px', null, '49px', 9],
    },
    p:{
      fontSize: [1, null, null, 2, null, 3],
      fontFamily:'special',
      lineHeight: ['26px', null, null, null, 2.33],

    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto'],
      },
    },
  },
};

