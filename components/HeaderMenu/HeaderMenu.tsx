"use client"

import { IconChevronDown } from '@tabler/icons-react';
import { Burger, Center, Container, Group, Menu } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import Logo from '../Logo';
import classes from './HeaderMenu.module.css';
import Link from 'next/link';
import { ServiceLinks } from '../ServiceLinks';
import { TechLinks } from '../TechLinks';


const links = [
  { link: '/', label: 'Home' },
  { link: '/about', label: 'About' },
  {
    link: '#1',
    label: 'Services',
    links: ServiceLinks
  },
  {
    link: '#2',
    label: 'Technologies',
    links: TechLinks,
  },
  { link: '/contact', label: 'Contact' },
];


export function HeaderMenu() {
  const [isVisible, setIsVisible] = useState('');
  const [countScoll, setCountScroll] = useState(0);

  const handleScroll = () => {
    const scroll = window.scrollY;
    // const shouldBeVisible = scroll <= 40;
    // const shouldBeVisible = scrol
    


if (scroll >= countScoll){
  



    if (scroll >= 100) {
    setIsVisible('sticky');
    } else {
      setIsVisible("");
    }

  } 
  else {
    setIsVisible("");
  }
  setCountScroll(scroll)
  };


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible, handleScroll]);


  const [opened, { toggle }] = useDisclosure(false);



  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}><a className={classes.link} href={item.link}>{item.label}</a></Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <Link
              href={link.link}
              className={classes.link}
             
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={14} stroke={1.5} />
              </Center>
            </Link>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
    
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
      >
        {link.label}
      </a>
    );
  });

  return (
    <header className={classes.header + " " + isVisible} >
  
      <Container size="md">
        <div className={classes.inner}>
          <Link href="/"><Logo /></Link>
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>

    </header>
  );
}