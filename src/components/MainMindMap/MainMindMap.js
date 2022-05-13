import React, {useEffect, useState} from 'react';
import ItemMainMindMap from "./ItemMainMindMap";
import GuyBack from "./GuyBack";
import {Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from '/src/styles/MindMap.module.scss'
import {useRouter} from "next/router";
import en from "../../locales/en";
import ru from "../../locales/ru";
import cn from "../../locales/cn";
import news from '/public/image/News.png'
import textile from '/public/image/Textile.png'
import itCo from '/public/image/ITco.png'

const MainMindMap = ({text}) => {
    const router = useRouter();
    const {locale} = router;
    const lang = (locale === "en") ? en :
        locale === "ru" ? ru : cn
    useEffect(() => {
        setSwiperSlider([
            {
                src: news,
                text: lang.mindmap.text.text1,

            },
            {
                src: textile,
                text: lang.mindmap.text.text2,

            },
            {
                src: itCo,
                text: lang.mindmap.text.text3,

            },
        ])
    }, [lang])
    const [swiperSlider, setSwiperSlider] = useState([])
    const [modalWindow, setModalWindow] = useState(null)
    const [showModal, setShowModal] = useState(false)
    return (
        <div className={styles.imageWrapper}>
            <div className=" w-full h-full">
                <Swiper
                    tag="section"
                    wrapperTag="ul"
                    modules={[Navigation, Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{clickable: true}}
                    className={styles.swiperMindMap}
                    breakpoints={{
                        1024: {
                            slidesPerView: 3,
                        },
                    }}>
                    {swiperSlider.map((swiperSliderItem, index) =>
                        <SwiperSlide key={index}>
                            <ItemMainMindMap
                                swiperSliderItem={swiperSliderItem}
                                setShowModal={setShowModal}
                                setModalWindow={setModalWindow}
                            />
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
            <GuyBack/>
            {showModal && <div className={styles.modal} onClick={() => setShowModal(false)}>
                <div
                    className={" w-full max-w-2xl bg-blue-50 rounded-2xl p-5 text-black m-5 animate__animated animate__fadeInUp" + (!showModal ? ' animate__fadeInDown' : '')}
                    onClick={(event) => event.stopPropagation()}>
                     <span>
                    {modalWindow}
                </span>
                </div>
            </div>}
        </div>
    );
};

export default MainMindMap;
