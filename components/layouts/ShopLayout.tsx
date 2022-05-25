import { FC } from 'react';
import Head from 'next/head';
import { Navbar ,SideMenu} from '../ui';
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";



interface Props {
    title:string;
    pageDescription:string;
    imageFullUrl?: string;
    children:ReactJSXElement | ReactJSXElement[]
    
}

export const ShopLayout :FC<Props>= ({ children, title, pageDescription, imageFullUrl}) => {
  return (
    <>
        <Head>
            <title>{title}</title>

            <meta name='description' content={pageDescription} />

            <meta name='og:title' content={title}/>
            <meta name ='og:description' content={pageDescription} />

                {
                    imageFullUrl ??  (
                        <meta name='og:image' content={imageFullUrl}/>
                    )
                }
        </Head>

        <nav>
                <Navbar/>
        </nav>
        <SideMenu/>
        <main style={{
            margin:'80px auto',
            maxWidth:'1440px',
            padding: '0px 30px'
        }}
        >
            {children}
        </main>

        <footer>

        </footer>
    </>
  )
}
