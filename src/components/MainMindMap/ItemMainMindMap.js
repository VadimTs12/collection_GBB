import React  from 'react';
import Image from "next/image";
import styles from '/src/styles/MindMap.module.scss'


const ItemMainMindMap = ({swiperSliderItem, setShowModal, setModalWindow}) => {
    const openModalWindow = () => {
        setShowModal(true)
        setModalWindow(swiperSliderItem.text)
    }
    return (
        <div
            className={styles.imageContainer + " relative cursor-pointer w-full m-auto  flex lg:hover:scale-110 duration-300"}
            onClick={openModalWindow}>
            <Image src={swiperSliderItem.src}
                   alt="img"
                   layout='fill'
                   className={'image'}
                   objectFit='contain'
                   priority
            />
        </div>
    );
};

export default ItemMainMindMap;
