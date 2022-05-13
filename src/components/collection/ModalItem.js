import React, {useState} from 'react';
import {useRouter} from "next/router";


const ModalItem = ({id, collection}) => {
    const [itemModal, setItemModal] = useState(
        collection.filter(elem => {
            if (id === elem.id) {
                return elem
            }
        })[0])

    const router = useRouter()

    const clickCloseModal = (e) => {
        e.target.children[0].classList.add('animate__fadeOutDown')
        setTimeout(() => {
            router.push('/gallery')
        }, 300)
    }

    return (
        <div
            className="modal__item font-bold  z-20 fixed w-full h-full top-0 left-0 right-0 bottom-0 bg-neutral-900/70 flex items-center justify-center"
            onClick={clickCloseModal}>
            <div
                className="modal__content lg:w-full m-10 lg:max-w-5xl md:w-1/2 bg-blue-50 rounded-2xl p-5  animate__animated animate__fadeInUp"
                onClick={(e) => e.stopPropagation()}>
                <div className="p-2 bg-gray-100 dark:bg-neutral-900 rounded-xl">
                    <div><h1 className="  font-bold w-full uppercase lg:text-4xl md:text-2xl  text-xl">
                        Ghetto Baby Boy
                        #{itemModal.id}</h1>
                    </div>
                    <div className="flex lg:flex-row flex-col w-full">
                        <div className="lg:w-1/2 w-full flex items-center aspect-square">
                            <div className="modal-collection__wrapper-image aspect-square">
                                <div className="modal-col-img aspect-square">
                                    <img src={itemModal.image} alt="" className="image_collection-item rounded-xl"/>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full flex flex-col md:flex-row flex-wrap lg:ml-2 items-center justify-start category">
                            {Object.entries(itemModal).map(([key, value]) => (
                                <div key={key} className="p-2   rounded-md w-full
                            lg:w-1/2 lg:h-1/3 md:h-20 h-12 flex items-center justify-center leading-3 lg:text-xl
                             " id={key}>
                                    <p className={'text-center lg:text-3xl border-2 border-gray-200 bg-purple-600 text-white w-full h-full flex items-center justify-center rounded-xl'}>{value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
              #id, #image, #Special, #Offhand, #Face, #Neck, #Eyes, #Ear {
                display: none;
              }

              .animate__animated.animate__fadeInUp {
                --animate-duration: 0.3s;
              }
              .animate__animated.animate__fadeInDown {
                --animate-duration: 0.3s;
              }
            `}</style>
        </div>
    )

};

export default ModalItem;


