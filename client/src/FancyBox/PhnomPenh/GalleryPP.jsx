import { useState, useCallback } from "react"
import Gallery from "react-photo-gallery"
import Carousel, {Modal, ModalGateway} from "react-images"
import {photos} from "../Image/ImagePP"
export default function GalleryPP() {
    const [currentImage, setCurrentImage] = useState (0)
    const [viewIsOpen, setViewIsOpen] = useState (false)
    const openLightBox = useCallback ((event, {photo, index}) => {
        setCurrentImage(index)
        setViewIsOpen(true)
    },[])

    const closeLightBox = () => {
        setCurrentImage(0)
        setViewIsOpen(false)
    }
    return(
        <>
            <Gallery 
            photos={photos}
            onClick={openLightBox} />
            <ModalGateway>
                {viewIsOpen ? (
                    <Modal onClose={closeLightBox}>
                        <Carousel 
                        currentIndex={currentImage}
                        views = {photos.map(item => ({
                            ...item,
                            srcset: item.srcSet,
                            caption: item.title
                        }))}
                        />
                    </Modal>
                ): null}
            </ModalGateway>
        </>
    )
}