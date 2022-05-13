import React from 'react';
import Link from "next/link";

const ALink = ({text, href}) => {
    return (
        <Link href={href}>
            <a className="w-full flex whitespace-nowrap">
                {text}
            </a>
        </Link>
    );
};

export default ALink;
