import React, {useEffect, useState} from 'react';
import MainMindMap from "../src/components/MainMindMap/MainMindMap";
import MainComponent from "../src/components/MainComponent";
import Image from "next/image";
import {useRouter} from "next/router";
import en from "../src/locales/en";
import ru from "../src/locales/ru";
import cn from "../src/locales/cn";
import bgMindmap from '/public/image/Background-animate-house.png'

const MindMap = () => {
    const headerStyle = ['bg-transparent']
    const router = useRouter();
    const {locale} = router;
    const lang = (locale === "en") ? en :
        locale === "ru" ? ru : cn
    return (
        <div className={'wrapper_mind-map relative h-full'} id={'wrapper_mind-map'}>
            <Image src={bgMindmap}
                   alt="Picture of the author"
                   layout='fill'
                   className={'image'}
                   objectFit='cover'
                   priority
            />
            <div className="absolute w-screen lg:h-screen top-0 bottom-0 bg-white/10 dark:bg-neutral-900/20"></div>
            <MainComponent title={'MindMap'} textColor={'text-white'} headerStyle={headerStyle}>
                <div className="lg:px-8 pt-24   md:px-5 relative h-full">
                    <div className="w-full h-full flex items-end px-1 fade-in">
                        <div className="h-full pb-6 px-4 lg:px-0">
                            <h3 className="font-800 top-0 font-sans text-4xl lg:text-6xl uppercase pb-4  font-black tracking-tight">{lang.mindmap.title}</h3>
                        </div>
                    </div>

                    <MainMindMap/>
                </div>
            </MainComponent>
        </div>

    );
};

export default MindMap;
