
"use client"

import { Button, Container, Group, Text } from '@mantine/core';
import classes from './Who.module.css';

import { GithubIcon } from '@mantinex/dev-icons';

export function Who() {
  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <h2 className={classes.title}>
          Who is {' '}
          <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
            Chic IT
          </Text>
          ?
        </h2>

        <Text className={classes.description} color="dimmed">
        At Chic IT, we are driven by the belief that technology should work for you, not the other way around. Our team of skilled professionals is committed to offering innovative solutions that help businesses streamline operations, enhance their online presence, and grow their customer base. We pride ourselves on delivering exceptional service that is not only technical but also strategic, ensuring that our clients stay ahead of the competition.
</Text>
<Text className={classes.description} color="dimmed">
Our founders, a team of experienced women in tech, started Chic IT with a mission to bring a fresh perspective to the IT industry. We understand the challenges that many businesses face when trying to navigate the complexities of modern technology, and we are here to provide the support and expertise needed to overcome these hurdles.
        </Text>

        <Group className={classes.controls}>
          <Button
            component="a"
            href="/about"
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: 'blue', to: 'cyan' }}
          >
            Read More
          </Button>

          <Button
            component="a"
            href="/contact"
            size="xl"
            variant="default"
            className={classes.control}
            leftSection={<GithubIcon size={20} />}
          >
            Contact Us
          </Button>
        </Group>
      </Container>
    </div>
  );
}