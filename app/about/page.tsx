import { PAGES } from '@/constants/pages.constants';
import image1 from '@/assets/images/home/home-page-3.jpg';
import image2 from '@/assets/images/TeamPhoto.jpg';
import { Link, Typography } from '@mui/material';
import Image from 'next-image-export-optimizer';
import NextLink from '../components/NextLink';
import Heading from '../components/Heading';
import PageContainer from '../components/PageContainer';
import ImageContainer from './ImageContainer';
import Sections from '../components/Sections';

export default function About() {
    return (
        <PageContainer>
            <Heading>{PAGES.about.title}</Heading>
            <Typography sx={{ mb: 2 }}>
                B. Parker Interiors is a comprehensive residential build and design firm dedicated to guiding clients through
                the process of custom home construction, remodeling, and the creation of aesthetically pleasing, functional
                living spaces adorned with carefully selected furniture, fabrics, and accessories.
            </Typography>
            <Typography>
                <Link href={PAGES.contact.route} component={NextLink} sx={{ fontWeight: 500 }}>
                    Contact Us
                </Link>
                &nbsp;to request a consultation!
            </Typography>
            <ImageContainer>
                <Image
                    placeholder="blur"
                    sizes="(max-width: 599px) calc(100vw - 32px), (max-width: 1199px) calc(100vw - 48px), 1152px"
                    style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'cover',
                        objectPosition: 'bottom',
                    }}
                    alt="home interior"
                    src={image1}
                />
            </ImageContainer>
            <Typography variant="h2" sx={{ mb: 2 }}>
                HOME INTERIOR SERVICES
            </Typography>
            <Typography sx={{ mb: 4 }}>
                At B. Parker Interiors, we are committed to meeting you at every stage of the creative process. As a cohesive
                build and design team, we offer a spectrum of services tailored to suit you. Our versatility enables us to serve
                as builders, designers, facilitators, or any combination thereof, ensuring that you receive personalized
                attention and solutions aligned with your vision and budget.
            </Typography>
            <Sections
                data={[
                    {
                        title: <>NEW CONSTRUCTION</>,
                        body: (
                            <>
                                From inception to completion, we provide comprehensive support throughout the new construction
                                process. Our collaborative approach fosters seamless communication and coordination, resulting
                                in a rewarding and stress-free experience.
                            </>
                        ),
                    },
                    {
                        title: <>REMODELS</>,
                        body: (
                            <>
                                We understand the importance of flexibility and cost-efficiency in remodeling projects. Our
                                remodel services are adaptable to various stages of the renovation process, accommodating
                                diverse project scopes, objectives, and budgetary considerations.
                            </>
                        ),
                    },
                    {
                        title: <>FURNITURE AND ACCESSORIES</>,
                        body: (
                            <>
                                Our offerings include bespoke furniture tailored to meet the unique needs of each household,
                                complementing the aesthetic of the home. Through our exclusive designer lines, we curate
                                distinctive looks at discounted rates, ensuring a one-of-a-kind ambiance.
                            </>
                        ),
                    },
                ]}
            />
            <ImageContainer>
                <Image
                    placeholder="blur"
                    src={image2}
                    sizes="(max-width: 599px) calc(100vw - 32px), (max-width: 1199px) calc(100vw - 48px), 1152px"
                    alt="team photo"
                    style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'cover',
                        objectPosition: 'center 70%',
                        maxHeight: 800,
                    }}
                />
            </ImageContainer>
            <Typography>
                Our journey began when we both realized our shared passion for transforming houses into homes, despite pursuing
                disparate careers.
            </Typography>
            <Typography sx={{ my: 3 }}>
                We consider ourselves fortunate to engage in work we love. With each project, we approach the inherent
                challenges with creativity and expertise, striving to exceed expectations and breathe life into every space.
            </Typography>
            <Typography>We look forward to the opportunity to collaborate with you!</Typography>
        </PageContainer>
    );
}
