
import { HeaderMenu } from '@/components/HeaderMenu/HeaderMenu';
import { Footer } from '@/components/Footer/Footer';
import { Grid, Title, Text, Button, SimpleGrid, Image } from '@mantine/core';
import { Container } from '@mantine/core';
import GridLayout from '@/components/GridLayout/GridLayout';
import { SideBar } from '@/components/SideBar/SideBar';
import { AbuutHero } from '@/components/AboutHero/AboutHero';
import image from './bel.png';
import { ContactUs } from '@/components/ContactUs/ContactUs';

import classes from "./contact.module.css"


export const metadata = {
  title: 'Chic IT - Fun, friendly and Professional IT Services by women',
  description: 'We aer a female owned and operated IT Servcies company.  Our technicians have over 25 years industry experience',
};

async function title() { 
  "use server"

  return (
  <Title className={classes.title}> <span className='highlight'> Chic IT</span>: Contact Us</Title>
  )

}

async function subtitle() { 
  "use server"

  return (
  <p>Contact Us for a free quote today</p>
  )
}


async function left () {
 "use server"
  return (
    <ContactUs />
  )

}

export default function AboutPage() {
  const leftView = left()
  const titleView = title()
  const subtitleView = subtitle()


  return (
    <>
      <HeaderMenu />
      <AbuutHero 
      title={titleView}
      subtitle={subtitleView}
      />
      <div className={classes.pageWrap}>
      <Container className='wrapper'>

{leftView}

</Container>
</div>
      <Footer />
    </>
  );
}

