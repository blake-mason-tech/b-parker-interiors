'use client';

import { CENTER } from '@/constants/styles.constants';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Container, IconButton, List, ListItem, ListItemButton, SwipeableDrawer, Toolbar } from '@mui/material';
import Image from 'next-image-export-optimizer';
import NextLink from 'next/link';
import { useState, type SyntheticEvent } from 'react';
import { COLORS } from '@/constants/colors.constants';
import drawerLogo from '@/assets/images/navigation-logo.png';
import { PAGES_ORDERED } from '@/constants/pages.constants';
import CloseIcon from '@mui/icons-material/Close';
import { useSmallScreen } from '../../hooks/useSmallScreen';
import { theme } from '@/theme/theme';

export default function Navigation() {
    const [drawer, setDrawer] = useState(false);

    const closeDrawer = () => setDrawer(false);
    const openDrawer = (event: SyntheticEvent) => {
        // Release focus before the modal hides the page from assistive technology.
        if (event.currentTarget instanceof HTMLElement) event.currentTarget.blur();
        setDrawer(true);
    };

    const smallScreenSize = useSmallScreen();

    return (
        <>
            <AppBar enableColorOnDark position="sticky" sx={{ backgroundColor: theme.palette.primary.dark }}>
                <Container maxWidth="xl" disableGutters>
                    <Toolbar sx={{ px: smallScreenSize ? 1 : 2 }} disableGutters variant="dense">
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ ml: 'auto' }} onClick={openDrawer}>
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
            <SwipeableDrawer anchor="right" open={drawer} onClose={closeDrawer} onOpen={openDrawer}>
                <Box
                    sx={{
                        minWidth: 320,
                        pb: 4,
                        backgroundColor: COLORS.smokeyGray,
                        flexGrow: 1,
                    }}
                >
                    <IconButton aria-label="Close menu" size="large" onClick={closeDrawer} sx={{ mt: 1, ml: 1 }}>
                        <CloseIcon sx={{ color: COLORS.oatmeal }} />
                    </IconButton>
                    <Box sx={{ ...CENTER, px: 2, py: 4 }}>
                        <Image
                            style={{
                                maxWidth: smallScreenSize ? 140 : 200,
                                height: 'auto',
                            }}
                            src={drawerLogo}
                            sizes="(max-width: 899px) 140px, 200px"
                            alt="logo"
                        />
                    </Box>
                    <List
                        sx={{
                            width: '100%',
                            px: 2,
                        }}
                    >
                        {PAGES_ORDERED.map((page, index) => (
                            <ListItem
                                disablePadding
                                divider
                                key={page.title}
                                sx={{
                                    borderTop: index === 0 ? 1 : 0,
                                    borderBottom: 1,
                                    borderColor: COLORS.oatmeal,
                                    color: COLORS.oatmeal,
                                }}
                            >
                                <ListItemButton
                                    onClick={closeDrawer}
                                    component={NextLink}
                                    href={page.route}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                    }}
                                >
                                    {page.title}
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </SwipeableDrawer>
        </>
    );
}
