import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import {
  Captions,
  Download,
  Fullscreen,
  Thumbnails,
  Zoom,
} from 'yet-another-react-lightbox/plugins';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

import {slides} from './imageData';
import ImageCards from '../image-cards/ImageCards';


const ImageGallery = () => {

    const [index, setIndex] = useState<number>(-1);

    return (
        <>
            <ImageCards
                data={slides}
                onClick={(currentIndex) => setIndex(currentIndex)}
            ></ImageCards>

            <Lightbox
                plugins={[Captions, Download, Fullscreen, Zoom, Thumbnails]}
                captions={{
                showToggle: true,
                descriptionTextAlign: 'end',
                }}
                // open={open}
                // close={() => setOpen(false)}

                index={index}
                open={index >= 0}
                close={() => setIndex(-1)}
                slides={slides}
            />
        </>
    );
}

export default ImageGallery;