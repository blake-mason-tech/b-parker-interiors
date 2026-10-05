'use client';

import { REMOVE_IMAGE_WHITESPACE } from '@/constants/image.constants';
import { FILL } from '@/constants/styles.constants';
import { Box } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import SingleImage from './SingleImage';
import { theme } from '@/theme/theme';

import image1 from '@/assets/images/home/home-page-1.jpg';
import image2 from '@/assets/images/home/home-page-2.jpg';
import image3 from '@/assets/images/home/home-page-3.jpg';
import image4 from '@/assets/images/home/home-page-4.jpg';

const images = [image1, image2, image3, image4];

export default function BackgroundImage() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const loadCounter = useRef(0);

    const lastIndex = images.length - 1;

    useEffect(() => {
        if (loaded) {
            const interval = setInterval(() => {
                setCurrentImageIndex((state) =>
                    state === lastIndex ? 0 : state + 1
                );
            }, 5000);

            return () => clearInterval(interval);
        }
    }, [loaded, lastIndex]);

    const onLoad = () => {
        loadCounter.current++;
        if (loadCounter.current === lastIndex + 1) {
            setLoaded(true);
        }
    };

    return (
        <Box
            sx={{
                ...REMOVE_IMAGE_WHITESPACE,
                ...FILL,
                position: 'absolute',
                backgroundColor: theme.palette.common.black,
            }}
        >
            {images.map((image, index) => (
                <SingleImage
                    key={`single-image-${index}`}
                    image={image}
                    index={index}
                    onLoad={onLoad}
                    loaded={loaded}
                    currentImageIndex={currentImageIndex}
                />
            ))}
        </Box>
    );
}
