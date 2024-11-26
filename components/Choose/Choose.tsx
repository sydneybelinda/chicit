import { IconCookie, IconGauge, IconLock, IconMessage2, IconUser } from '@tabler/icons-react';
import { Container, SimpleGrid, Text, ThemeIcon, Title } from '@mantine/core';
import classes from './choose.module.css';

export const MOCKDATA = [
  {
    icon: IconGauge,
    title: 'Female-Owned & Operated',
    description:
      'Chic IT is proud to be a woman-owned business that brings fresh perspectives and creativity to every project. Our team understands the importance of diversity and strives to create solutions that are inclusive, innovative, and aligned with modern business needs.',
  },
  {
    icon: IconUser,
    title: 'Expert Team',
    description:
      'Our team consists of highly skilled professionals who are experts in their respective fields. We stay up to date with the latest industry trends and technologies to provide cutting-edge solutions.',
  },
  {
    icon: IconCookie,
    title: 'Customer Accentric Approach',
    description:
      'At Chic IT, your satisfaction is our top priority. We take the time to understand your business needs, challenges, and goals, ensuring we provide you with the right solutions that drive success.',
  },
  {
    icon: IconLock,
    title: 'Tailored Solutions',
    description:
      'We dont believe in one-size-fits-all approaches. Every business is unique, and we tailor our services to meet your specific goals, ensuring you get the best possible results.',
  },
  {
    icon: IconMessage2,
    title: 'Comprehensive Services',
    description:
      'From website design and digital marketing to technical support and SEO, Chic IT offers a full range of IT and digital services that can help your business grow and thrive in the digital world.',
  },
];

interface FeatureProps {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div>
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon size={18} stroke={1.5} />
      </ThemeIcon>
      <Text mt="sm" mb={7}>
        {title}
      </Text>
      <Text size="sm" c="dimmed" lh={1.6}>
        {description}
      </Text>
    </div>
  );
}

export function Choose() {
  const features = MOCKDATA.map((feature, index) => <Feature {...feature} key={index} />);

  return (
    <Container className={classes.wrapper}>
      <h2 className={classes.title}>Why Choose Chic IT?</h2>

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
          Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when
          hunger drives it to try biting a Steel-type Pokémon.
        </Text>
      </Container>

      <SimpleGrid
        mt={40}
        cols={{ base: 2, sm: 2, md: 3 }}
        spacing={{ base: 'xl', md: 50 }}
        verticalSpacing={{ base: 'xl', md: 50 }}
      >
        {features}
      </SimpleGrid>




    </Container>
  );
}