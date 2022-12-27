import { FC, PropsWithChildren } from "react"

import Head from "next/head"
import { Navbar } from "../ui";


interface LayoutProps extends PropsWithChildren<{}>{
    title?:string;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout:FC<LayoutProps> = ({children,title}) => {
  return (
    <>
       <Head>
            <title>{title || 'Pokemon'}</title>
            <meta name="author" content="RusbelPM"/>
            <meta name="descaription" content={`Información sobre el pokemon ${title} `}/>
            <meta name="keywords" content={`${title},pokemon, pokedex`}/>

            <meta property="og:title" content={`Información sobre ${ title }`} />
            <meta property="og:description" content={`Esta es la página sobre ${ title }`} />
            <meta property="og:image" content={`${origin}/img/banner.png`} />

        </Head>
        <Navbar/>
        <main style={{
            padding:"0px 20px"
        }}>
            {children}
        </main>       
    </>
  )
}

