//this page is no longer needed because we will dynamically create the blog posts. 
// import Link from 'next/link';
// import Head from 'next/head';
// import Script from 'next/script'; //next/script is an extension of the HTML <script> element and optimizes when additional scripts are fetched and executed.
// import Layout from '../../components/layout'

// export default function FirstPost() {
//   return (
//     <>
//       <Head>
//         <title>First Post</title>
//         { /* <script src="https://connect.facebook.net/en_US/sdk.js" /> { /* In addition to metadata, scripts that need to load and execute as soon as possible are usually added within the <head> of a page.  */}
//       </Head>
//         {/* <Script
//           src="https://connect.facebook.net/en_US/sdk.js"
//           strategy="lazyOnload" //controls when the third-party script should load. A value of lazyOnload tells Next.js to load this particular script lazily during browser idle time
//           onLoad={() => // is used to run any JavaScript code immediately after the script has finished loading. In this example, we log a message to the console that mentions that the script has loaded correctly
//             console.log(`script loaded correctly, window.FB has been populated`)
//           }
//         /> */}
//         <Layout> {/* applies the component-level styles to whatever is nested within */}
//           <h1>First Post</h1>
//           <h2>Content here
//             {/* <Link href="/">
//               <a>Back to home</a>
//             </Link>  //Layout already has a back to home link*/}
//           </h2>
//       </Layout>
//     </>
//   );
// }
// The Link component enables client-side navigation between two pages in the same Next.js app.
// Client-side navigation means that the page transition happens using JavaScript, which is faster than the default navigation done by the browser.
//for example if i changed the background color using chrome dev tools it would persist! 
//in production builds, whenever Link components appear in the browser’s viewport, Next.js automatically prefetches the code for the linked page in the background. By the time you click the link, the code for the destination page will already be loaded in the background, and the page transition will be near-instant!
// Note: If you need to link to an external page outside the Next.js app, just use an <a> tag without Link.
// If you need to add attributes like, for example, className, add it to the a tag, not to the Link tag.