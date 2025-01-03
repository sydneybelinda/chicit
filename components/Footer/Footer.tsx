"use client"

import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import { ActionIcon, Container, Group, Text } from '@mantine/core';
import Logo from '../Logo';
import classes from './footer.module.css';
import { ServiceLinks } from '../ServiceLinks';
import { TechLinks } from '../TechLinks';
import Link from 'next/link';


const data = [
  {
    title: 'Services',
    links: ServiceLinks,
  },
  {
    title: 'Technologies',
    links: TechLinks,
  },
  {
    title: 'Pages',
    links: [
      { label: 'Home', link: '/' },
      { label: 'About Us', link: '/about' },
      { label: 'Contact Us', link: '/contact' },
    ],
  },
];

export function Footer() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <Link className={classes.logo} href="/" >
          <Logo  />
          <Text size="xs" c="dimmed" className={classes.description}>
           A female onwed and operated IT Services comppamy
          </Text>
        </Link>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2024 Chic IT. All rights reserved.
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}