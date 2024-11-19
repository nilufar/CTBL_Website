'use client'

import styles from './gallery.module.css';
import ImageGallery from './image-gallery/ImageGallery';

const page = () => {
    return (
        <div className={`${styles.responsive_container}`}>
            <ImageGallery></ImageGallery> 
        </div>
    );
}

export default page;