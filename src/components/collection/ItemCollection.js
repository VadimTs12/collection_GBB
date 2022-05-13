import React from 'react';
import Link from "next/link";
import Image from "next/image";
const ItemCollection = ({itemCollection}) => {
    return (
        <div className="animate__animated animate__fadeIn">
            <Link href={`/gallery/?id=${itemCollection.id}`}>
                <a>
                    <div className="w-full fade-in lg:hover:shadow-lg lg:hover:scale-105 duration-300 rounded-xl overflow-hidden aspect-square">
                        {/*<Image src={itemCollection.image}*/}
                        {/*       layout='fill'*/}
                        {/*       objectFit='contain'*/}
                        {/*       className=" w-full h-full object-center object-cover "*/}
                        {/*/>*/}

                        <img src={itemCollection.image}  alt="image"
                        className=" w-full h-full object-center object-cover " />
                    </div>
                    <p className="mt-3 uppercase tracking-widest text-3xs text-center text-black dark:text-white duration-300">
                        <span> N:{itemCollection.id}</span>
                    </p>
                </a>
            </Link>
        </div>
    );
};

export default ItemCollection;
