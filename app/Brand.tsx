import { CENTER } from '@/constants/styles.constants';
import { Box } from '@mui/material';
import Image from 'next-image-export-optimizer';
import homeLogo from '@/assets/images/home-page-logo.png';
import { RESPONSIVE_IMAGE } from '@/constants/image.constants';

export default function Brand() {
    return (
        <Box
            sx={{
                ...CENTER,
                p: 4,
                position: 'relative',
                flexGrow: 1,
            }}
        >
            <Image
                preload
                alt="home logo"
                src={homeLogo}
                sizes="(max-width: 702px) calc(100vw - 64px), 638px"
                style={{ ...RESPONSIVE_IMAGE, maxWidth: 638 }}
            />
        </Box>
    );
}
