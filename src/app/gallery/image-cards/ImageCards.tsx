import Image from "next/image";
import { FC } from "react";
import styles from './imageCards.module.css';

interface ImagesProps {
    data: {
      src: string;
      title: string;
      description: string;
    }[];
    onClick: (index: number) => void;
}

const ImageCards : FC<ImagesProps> = (props) => {
    const { data, onClick } = props;

    const handleClickImage = (index: number) => {
        onClick(index);
    };

    return (
        <div className={`${styles.images_container}`}>
        {data.map((slide, index) => (
            <div
                onClick={() => handleClickImage(index)}
                key={index}
                className={`${styles.images}`}
            >
                <Image
                    src={slide.src}
                    alt={slide.description}
                    width={400}
                    height={300}
                    className={`${styles.img}`}
                ></Image>
            </div>
        ))}
        </div>
    );
}

export default ImageCards;