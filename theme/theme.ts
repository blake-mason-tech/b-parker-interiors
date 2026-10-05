'use client';

import { Cinzel, Outfit } from 'next/font/google';
import { Theme, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { COLORS } from '@/constants/colors.constants';
import type { CSSProperties } from 'react';

export const outfit = Outfit({ subsets: ['latin'] });

export const cinzel = Cinzel({ weight: ['400'], subsets: ['latin'] });

enum Tag {
    h1 = 'h1',
    h2 = 'h2',
    h3 = 'h3',
}

interface HeaderFonts extends CSSProperties {
    tag: Tag;
    fontSizes: {
        main: string;
        small: string;
    };
}

class ThemeUtils {
    static theme: Theme;
    static headerFonts: HeaderFonts[] = [
        {
            tag: Tag.h1,
            fontSizes: {
                main: '2rem',
                small: '1.5rem',
            },
            fontFamily: cinzel.style.fontFamily,
        },
        {
            tag: Tag.h2,
            fontSizes: {
                main: '1.75rem',
                small: '1.4rem',
            },
            fontFamily: cinzel.style.fontFamily,
        },
        {
            tag: Tag.h3,
            fontSizes: {
                main: '1.4rem',
                small: '1.2rem',
            },
            fontWeight: 300,
        },
    ];

    private constructor() {}

    static setupTheme() {
        this.theme = createTheme({
            typography: {
                fontFamily: outfit.style.fontFamily,
                body1: {
                    fontSize: '1.1rem',
                    fontWeight: 300,
                },
            },
            palette: {
                mode: 'dark',
                background: { default: COLORS.granularLimestone },
                primary: { main: COLORS.smokeyGray },
                secondary: { main: COLORS.granularLimestone },
            },
        });

        this.theme = responsiveFontSizes(this.theme);
    }

    static createFonts() {
        for (const font of this.headerFonts) {
            const { fontSizes, tag, ...cssProperties } = font;
            this.theme.typography[tag] = {
                ...cssProperties,
                [this.theme.breakpoints.down('md')]: {
                    fontSize: fontSizes.small,
                },
            };
        }
    }

    static createTheme() {
        this.setupTheme();
        this.createFonts();

        return this.theme;
    }
}

export const theme = ThemeUtils.createTheme();
