import React, {useEffect} from 'react';
import Head from "next/head";
import Header from "./header/Header";

const MainComponent = ({children, keywords, title, headerStyle}) => {
    return (
        <div>
            <Head>
                <meta keywords={"nft, ghetto, baby, " + keywords}></meta>
                <meta httpEquiv="ScreenOrientation" content="autoRotate:disabled"/>
                <link rel="shortcut icon" href="favicon.ico"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
                <title>{title}</title>
            </Head>
            <Header headerStyle={headerStyle}/>
            <main className={'dark:bg-neutral-900 bg-white'}>
                {children}
            </main>
        </div>
    );
};

export default MainComponent;
