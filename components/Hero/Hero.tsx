"use client"

import { IconCheck } from '@tabler/icons-react';
import { Button, Container, Group, Image, List, Text, ThemeIcon, Title } from '@mantine/core';
import image from './hero-main2.png';
import classes from './HeroBullets.module.css';
import Link from 'next/link';


export function Hero() {
  return (
    <>
    <div className={classes.hero}>
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
          <span className={classes.highlight}> Chic IT</span> Empowering Women in Tech
            
          </Title>
          <Text  mt="md">
          Welcome to <b>Chic IT</b>, a dynamic and female-owned IT professional services company committed to delivering high-quality solutions across a wide range of digital services.</Text>
           <Text mt="md"> 
          </Text>

      

          <Group mt={30}>
            <Link href= "/about">
            <Button radius="xl" size="md" className={classes.control}>
              About Us
            </Button>
            </Link>
            <Link href= "/contact">
            <Button variant="default" radius="xl" size="md" className={classes.control}>
              Contact Us
            </Button>
            </Link>
          </Group>
        </div>
        <Image src={image.src} className={classes.image} />
      </div>
    </Container>
    </div>
    </>
  );
}