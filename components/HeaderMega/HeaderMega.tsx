"use client"

import { useState, useEffect } from 'react';

import {
    IconBook,
    IconChartPie3,
    IconChevronDown,
    IconCode,
    IconCoin,
    IconFingerprint,
    IconNotification,
  } from '@tabler/icons-react';
  import {
    Anchor,
    Box,
    Burger,
    Button,
    Center,
    Collapse,
    Divider,
    Drawer,
    Group,
    HoverCard,
    ScrollArea,
    SimpleGrid,
    Text,
    ThemeIcon,
    UnstyledButton,
    useMantineTheme,
  } from '@mantine/core';
  import { useDisclosure } from '@mantine/hooks';
  import Link from 'next/link';
  import { ServiceLinks } from '../ServiceLinks';
  import { TechLinks } from '../TechLinks';
  import Logo from '../Logo';
  import classes from './HeaderMega.module.css';
  import { TfiEmail } from "react-icons/tfi";;


  
  
  export function HeaderMega() {

    const [isVisible, setIsVisible] = useState('');
    const [countScoll, setCountScroll] = useState(0);
  
    const handleScroll = () => {
      const scroll = window.scrollY;
      // const shouldBeVisible = scroll <= 40;
      // const shouldBeVisible = scrol
      
  
  
  if (scroll <= countScoll){
    
  
  
  
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

    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const theme = useMantineTheme();
  
    const links = ServiceLinks.map((item) => (
        <Link className={classes.link} href={item.link}  key={item.link}>
      <UnstyledButton className={classes.subLink} >
        <Group wrap="nowrap" align="flex-start">
          <ThemeIcon size={34} variant="default" radius="md" className={classes.ti}>
            <item.icon size={22} color={theme.colors.blue[6]} />
          </ThemeIcon>
          <div>
            <Text size="sm" fw={500}>
              {item.label}
            </Text>
            <Text size="xs" c="dimmed">
              {item.description}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
      </Link>
    ));
  
    return (
      <Box>
        <header className={classes.header + " " + isVisible} >
          <Group justify="space-between" h="100%">
          <Link href="/"> <Logo /></Link>
  
            <Group h="100%" gap={0} visibleFrom="sm">
              <Link href="/" className={classes.link}>
                Home
              </Link>
              <Link href="/about" className={classes.link}>
                About
              </Link>
              <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                <HoverCard.Target>
                  <a href="#" className={classes.link}>
                    <Center inline>
                      <Box component="span" mr={5}>
                        Services
                      </Box>
                      <IconChevronDown size={16} color={theme.colors.blue[6]} />
                    </Center>
                  </a>
                </HoverCard.Target>
  
                <HoverCard.Dropdown style={{ overflow: 'hidden' }} className={classes.drawer}>
                  <Group justify="space-between" px="md">
                    <Text fw={500} className={classes.s}>Services</Text>
                    {/* <Anchor href="#" fz="xs">
                      View all
                    </Anchor> */}
                  </Group>
  
                  <Divider my="sm" className={classes.div} />
  
                  <SimpleGrid cols={2} spacing={0}>
                    {links}
                  </SimpleGrid>
  
                  <div className={classes.dropdownFooter}>
                    <Group justify="space-between">
                      <div>
                        <Text fw={500} fz="sm" className={classes.cb}>
                          Get started
                        </Text>
                        <Text size="xs" c="dimmed">
                          Contact Us for a free quote
                        </Text>
                      </div>
                      <Link href="/contact"> <Button
            variant="gradient"
            gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
            size="md"
            radius="md"
          >
           Contact Us
          </Button></Link>
                    </Group>
                  </div>
                </HoverCard.Dropdown>
              </HoverCard>

              <Link href="/contact" className={classes.link}>
              Contact
              </Link>
            </Group>
  
            <Group visibleFrom="sm">
<div className={classes.contact}>
<TfiEmail className={classes.ci}/><div className={classes.ed}>chic.it.sydney@gmail.com</div>
</div>
            </Group>
  
            <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm"  className={classes.white}/>
          </Group>
        </header>
  
        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="Chic IT"
          hiddenFrom="sm"
          zIndex={1000000}
          className={classes.drawer}
        >
          <ScrollArea h="calc(100vh - 80px" mx="-md">
            <Divider my="sm" />
  
            <Link href="/" className={classes.link}>
              Home
            </Link>
            <UnstyledButton className={classes.link} onClick={toggleLinks}>
              <Center inline>
                <Box component="span" mr={5}>
                  Services
                </Box>
                <IconChevronDown size={16} color={theme.colors.blue[6]} />
              </Center>
            </UnstyledButton>
            <Collapse in={linksOpened}>{links}</Collapse>
            <a href="/about" className={classes.link}>
              About
            </a>
            <a href="/contact" className={classes.link}>
              Contact
            </a>
  
            <Divider my="sm" />
  
            <Group justify="center" grow pb="xl" px="md">
              {/* <Button variant="default">Log in</Button>
              <Button>Sign up</Button> */}
            </Group>
          </ScrollArea>
        </Drawer>
      </Box>
    );
  }