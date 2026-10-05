import contactImage from '@/assets/images/contact-us-image.jpg';
import { Link, Typography } from '@mui/material';
import type { Metadata } from 'next';
import Image from 'next-image-export-optimizer';
import styles from './contact.module.css';

export const metadata: Metadata = {
    title: 'Contact | B. Parker Interiors',
    description: 'Get in touch with B. Parker Interiors about your home and interior design project.',
};

const email = 'bailey@bparkerinteriors.com';

export default function Contact() {
    return (
        <section className={styles.page} aria-labelledby="contact-title">
            <div className={styles.introduction}>
                <Typography variant="h1" id="contact-title" sx={{ mb: 2 }}>
                    CONTACT US
                </Typography>
                <Typography className={styles.description}>
                    Whether you’re building, remodeling, or making a space your own,
                    we’d love to hear what you have in mind.
                </Typography>
                <Link
                    className={styles.email}
                    href={`mailto:${email}`}
                    variant="body1"
                    sx={{ fontWeight: 500, mt: 4, maxWidth: '100%', overflowWrap: 'anywhere' }}
                >
                    {email}
                </Link>
            </div>
            <div className={styles.photograph}>
                <Image
                    preload
                    src={contactImage}
                    alt="A light-filled bedroom with natural wood beams and layered neutral linens"
                    sizes="100vw"
                    fill
                    placeholder="blur"
                    style={{ objectFit: 'cover', objectPosition: '65% center' }}
                />
            </div>
        </section>
    );
}
