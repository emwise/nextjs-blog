// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="IE=edge">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Example React + Next.js App</title>
//   <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
// </head>
// <body>
//   <div id="app"></div>
//   <script type="text/jsx"> 
    //this code is an example of imperative programming. This is writing steps for how the UI should be updated, rather than what to update it to. 
    //declarative programming is writing what the UI should look like, in this case h1 with text, and letting the computer figure it out. 
    //const app = document.getElementById('app');
    // const header = document.createElement('h1');
    // const headerContent = document.createTextNode(
    //   'Develop. Preview. Ship. 🚀',
    // )
    // header.appendChild(headerContent);
    // app.appendChild(header);

    //this is written in JSX, which is HTML-like, but cannot be compiled successfully by the browser. 
    //we need Babel to compile it for us using the script tag above. Also we need to change the script type to text/jsx
    //this is declarative programming.

    //const app = document.getElementById('app');

    //in React components are functions which return UI elements
    //they must be capitalized to distinguish them from plain HTML and JS. 
    //further they have to be used with < /> notation

import { useState } from 'react';
import Link from 'next/link'; //allows us to create links client-side
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Date from '../components/date';

// function Header({ title }){

//   return <h1>{title? title : 'Default title'}</h1>; //these curly braces allows me to write regular js inside the jsx markup. Like entering JS land inside of JSX land.
//   //alternative include: {props.title}, {`cool ${title}`}, or the returned value of a function like {createTitle(title)}, or ternary operators like {title? title : 'Default title'}
//   //you could write the function createTitle() right here in this <script> tag
// }

// function PostMenu(){

//   return <h1 className='title'>
//     Read{' '}
//     <Link href="/posts/first-post">
//       <a>this page!</a>
//     </Link>
//   </h1>
// }
  
// function HomePage(){
//   const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

//   function handleClick() {
//     setLikes(likes + 1) //is this asych?
//     //console.log(likes) 
//   }

//   //useState returns an array and the first item in the array is the state "value", which can be named anything
//   //The second item in the array is a function to "update" the value. 
//   //You can also set the initial value of the likes state: zero.
//   const [likes, setLikes] = useState(0);

//   return (<div>
//     <Head>
//       <title>Create Next App</title>
//       <link rel="icon" href="/favicon.ico" />
//     </Head>
//     {/*nesting the Header component */}
//     <Header title="Develop. Preview. Ship. 🚀" />
//     <Header title="💖💖" />
//     <ul>
//       {names.map((name)=>(
//         <li key={name}>{name}</li> //react needs a key so it knows which elements to update in the future, now we can use the names because they are unique but that wont always work in the future. 
//       ))} 
//     </ul>

//     <button onClick={handleClick}>Like({likes})</button>

//     <PostMenu />
//   </div>);
// }

//this will import the parsed post data 

import { getSortedPostsData } from '../lib/posts';

//this will statically render the html and add the post data at build time.
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

//HomePage is never called here so it no longer exists in the rendered HTML!
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
      {/* <PostMenu /> */}
    </Layout>
  );
}

//     ReactDOM.render(<HomePage />, app)
//   </script>
//   <script type="text/javascript">
//     //in React data flows one way down the component tree (from parent to child)
//     //state (variables kept in one component) are passed to another component (in the proper direction of flow)
//     //via props
//     //props need to be accepted as the first function parameter
//     //props is an object so you can use object destructuring to explicitly name the values
  
//     //Props is read-only information that's passed to components. State is information that can change over time, usually triggered by user interaction.
  
//     //to move from here to next.js delete the react and react-dom cdn files
//     //delete the <html> and <body> tags because next will make them as well
//     //as delete the code that interacts with the app element and the reactDom.render() method. 
//     //Babel can also be deleted cause next comes with a compiler.
//     //finally delete the script type=text/jsx tag and the React. part of react.useState(0)
//     //add import { useState } from "react" to the top of the page.

      //then change the file type from .html to .jsx or .js
      //move the index.js(x) file to a new folder called "pages"
      //add export default to the HomePage function (which is the main React component) to help Next.js distinguish which component to render as the main component of the page
      //add "scripts": {
      //   "dev": "next dev"
      // }, to the package.json to run the next development environment when we develop. 
      //   </script>
      //then we can run the server by running 'npm run dev' in the terminal. Saves will automatically be updated in the browser, this is called a Fast Refresh.
// </body>
// </html> 