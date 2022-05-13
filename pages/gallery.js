import MainComponent from "../src/components/MainComponent";
import Collection from "../src/components/collection/Collection";
import Filters from "../src/components/filters/Filters";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import ModalItem from "../src/components/collection/ModalItem";

export default function Gallery({collection, filters}) {
    const [collectionGallery, setCollectionGallery] = useState(collection)
    const [filtersGallery, setFiltersGallery] = useState(filters)
    const [lang, setLang] = useState({})

    const {query} = useRouter()
    const headerStyle = ['bg-white', 'dark:bg-neutral-900']
    useEffect(() => {
        if (!!query.id) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'auto'
        }
    }, [query])
    return (
        <MainComponent keywords={'gallery'} title={'GALLERY'} headerStyle={headerStyle} setLang={setLang}>
            {!!query.id && <ModalItem id={query.id} collection={collection}/>}
            <div className=" duration-300 relative z-10 min-h-screen">
                <div className="max-w-11xl mx-auto lg:px-8 ">
                    <div className="flex relative top-0 lg:top-auto ">
                        <Filters filtersGallery={filtersGallery}/>
                        {collectionGallery
                            ? <Collection collectionGallery={collectionGallery} filtersGallery={filtersGallery}/>
                            : <div>loading....</div>
                        }
                    </div>
                </div>
            </div>
        </MainComponent>
    );
};


export async function getStaticProps() {
    const res = await fetch('https://raw.githubusercontent.com/VadimTs12/images-samurai/master/samurai.json')
    const data = await res.json()
    if (!data) {
        return {
            notFound: true,
        }
    }
    const collection = data.collection
    const filters = data.filters
    return {
        props: {collection, filters}, // will be passed to the page component as props
    }
}
