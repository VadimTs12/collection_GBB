import React from 'react';
import Image from "next/image";
import gbb from '/public/image/Gif-black-back.gif'

const GuyBack = () => {
    return (
        <div className="guy-back-content">
            <Image
                src={gbb}
                layout='fill'
                objectFit='contain'
                className='guy-back'
                priority
            />
            <style jsx>{`
              .guy-back-content {
                display: flex;
                height: 40vh;
                width: 100%;
                position: relative;
              }

              .guy-back {
                width: 100%;
                height: 100%;
                position: relative !important;
                object-fit: cover; // Optional
              }

            `}</style>
        </div>
    );
};

export default GuyBack;
