"use client"

import { IconCircleDotted, IconFileCode, IconFlame, IconReceiptOff } from '@tabler/icons-react';
import { Button, Grid, SimpleGrid, Text, ThemeIcon, Title, Container } from '@mantine/core';
import classes from './Features.module.css';
import Link from 'next/link';

const features = [
  {
    href: '/service/website-development',
    icon: IconReceiptOff,
    title: 'Web Design',
    description: 'Beautiful and functional custom websites in React, Javascript, HTML or PHP',
  },
  {
    href: '/service/desktop-support',
    icon: IconFileCode,
    title: 'Desktop/Laptop Support',
    description: 'Fast friendly, and professional repairs to any laptop or desktop',
  },
  {
    href: '/service/server-management',
    icon: IconCircleDotted,
    title: 'Server Management',
    description:
      'Our Technicions have over 25 years experience in managing both Windows and Linux - whetther they be on premise or in the cloud'
  },
  {
    href: '/service/digital-marketing-seo',
    icon: IconFlame,
    title: 'Digital Marketing / SEO',
    description:
      'We can help optimise your site for Search Engines, and help you market your site using other stragies',
  },
  {
    href: '/service/adult-services',
    icon: IconFlame,
    title: 'Adult Web Design',
    description:
      'We have had experience building adult websites for escort agencies, disectoeried and independent escorts.'
  },
];

export function Features() {
  const items = features.map((feature) => (

    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
      >
        <feature.icon size={26} stroke={1.5} />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}>
        {feature.title}
      </Text>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
      <div className={classes.buttonwrap}>
      <Link href={feature.href}>
      <Button variant="default" radius="xl" size="md" className={classes.control} >
              Read More
            </Button>
            </Link>
            </div>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
        <Container>
      <Grid gutter={60}>
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Title className={classes.title} order={2}>
           Fast, friendly and proffessional Service
          </Title>
          <Text c="dimmed">
          At Chic IT, we believe in empowering businesses to thrive in the modern digital world through technology, creativity, and innovation. Our team of highly skilled and passionate professionals works closely with you to ensure your business reaches its full potential.
      </Text>
      <br/>
      <Text c="dimmed">
          Chic IT offers a wide range of services to cater to the needs of businesses, entrepreneurs, and individuals. Here’s a look at what we can do for you:
          </Text>

          <div className={classes.bw}>

         <Link href="/about"> <Button
            variant="gradient"
            gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
            size="lg"
            radius="md"
            mt="xl"
          >
           Read More
          </Button></Link>
          </div>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 7 }}>
          <SimpleGrid cols={{ base: 2, md: 2 }} spacing={30}>
            {items}
          </SimpleGrid>
        </Grid.Col>
      </Grid>
      </Container>
    </div>
  );
}