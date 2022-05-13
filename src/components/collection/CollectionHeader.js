import React, {useState} from 'react';
import CountUp from "react-countup";
import ShuffleButton from "./ShuffleButton";
import FilterButton from "./FilterButton";
import FilterCheck from "./FilterCheck";

const CollectionHeader = ({clickShuffle, collectionLength}) => {
    return (
        <div className=' sticky top-0 pt-16 lg:pb-4 px-4 lg:pt-28 bg-white dark:bg-neutral-900 z-10'>
            <div className={'justify-between flex'}>
                    <span className="text-black lg:text-3xl text-md dark:text-white duration-300">Ghetto Baby Boy //
                <span className='font-bold'>
                    <CountUp
                        end={collectionLength}
                        duration={0.5}/>
                </span>
                </span>
                <div className="flex items-center">
                    <ShuffleButton clickShuffle={clickShuffle}/>
                    <FilterButton/>
                </div>
            </div>
            <FilterCheck/>
        </div>
    );
};

export default CollectionHeader;
