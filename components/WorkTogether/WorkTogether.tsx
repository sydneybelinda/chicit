
"use client"

import { Button, Container, Group, Text, Title } from '@mantine/core';
import classes from './work.module.css'

import { GithubIcon } from '@mantinex/dev-icons';

export function WorkTogether() {

    return(
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
      <h2 className={classes.title}>Let's Work Together</h2>
      <Text size="sm" c="dimmed" lh={1.6}>
      Are you ready to take your business to the next level with Chic IT? Whether you're looking to create a stunning new website, need help with desktop or server support, or want to boost your online presence through digital marketing and SEO, we%apos;’ve got you covered.
</Text> <Text size="sm" c="dimmed" lh={1.6}>
    <br/>
Contact us today to learn more about how we can help your business grow, or to request a consultation with one of our experts. Join the many businesses that have already trusted Chic IT with their IT and digital needs, and let us show you how technology can empower your business!
</Text>
      </Container>
      </div>
    )
}
