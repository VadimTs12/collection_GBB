import React, {useEffect, useMemo, useState} from 'react';
import ItemCollection from "./ItemCollection";
import {useSelector} from "react-redux";
import CountUp from "react-countup";
import FilterCheck from "./FilterCheck";
import ShuffleButton from "./ShuffleButton";
import FilterButton from "./FilterButton";
import ClearFilter from "./ClearFilter";
import CollectionHeader from "./CollectionHeader";

export default function Collection({collectionGallery, filtersGallery}) {
    const [perPage, setPerPage] = useState(30)
    const checked = useSelector(state => state.checked)
    const textSearch = useSelector(state => state.textSearch)
    const [collectionLength, setCollectionLength] = useState(10000)
    const [collectionAll, setCollectionAll] = useState([])


    useEffect(() => {
        let data = []
        if (checked.length) {
            const selectedFilters = {};
            filtersGallery.forEach(elem => {
                selectedFilters[elem.id] = new Set()
            })
            checked.forEach(checkbox => {
                const [prop, value] = checkbox.value.split('-');
                selectedFilters[prop]['add']('' + value);
                const findServices = (filters) => {
                    let answer = [...collectionGallery];
                    for (const filter in filters) {
                        const filterSet = filters[filter];
                        answer = answer.filter(item => filterSet.size === 0 || filterSet.has(item[filter]));
                    }
                    data = answer
                    return answer;
                }
                findServices(selectedFilters);
            })
        } else {
            data = collectionGallery
        }

        if (textSearch) {
            data = data.filter(val => val.id === textSearch)
        }

        setCollectionLength(data.length)
        setCollectionAll(data.slice(0, perPage))
        // return data.slice(0, perPage)

    }, [checked, perPage, textSearch])

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 1) {
            setPerPage(perPage => perPage + 30)
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, []);


    const clickShuffle = () => {
        setCollectionAll([...collectionAll.sort(() => 0.5 - Math.random())]);
    }

    return (
        <div className="lg:w-3/4 w-full   relative h-full collection">
            <CollectionHeader clickShuffle={clickShuffle} collectionLength={collectionLength}/>
            {collectionAll.length > 0
                ? <div
                    className="collection-list grid lg:grid-cols-4 2xl:grid-cols-5 grid-cols-2 lg:gap-x-6 gap-x-4 lg:gap-y-2 gap-y-1  lg:col-span-3 mt-4 lg:mt-4 px-4">
                    {collectionAll.map(itemCollection =>
                        <ItemCollection key={itemCollection.id} itemCollection={itemCollection}> </ItemCollection>
                    )}
                </div>
                : <ClearFilter/>
            }
        </div>
    );
};


