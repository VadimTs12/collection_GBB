import ModalItem from "../../src/components/collection/ModalItem";
import {useRouter} from "next/router";

export default function CollectionID({collection}) {
    const router = useRouter()
    const { id } = router.query
    return  <ModalItem id={id} collection={collection}/>
}


export async function getServerSideProps({params}) {
    const res = await fetch(`https://raw.githubusercontent.com/VadimTs12/images-samurai/master/samurai.json`)
    const data = await res.json()
    const collection = data.collection

    return {
        props: {collection}, // will be passed to the page component as props
    }
}
