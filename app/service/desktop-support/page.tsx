
import { HeaderMenu } from '@/components/HeaderMenu/HeaderMenu';
import { Footer } from '@/components/Footer/Footer';
import { Grid, Title, Text, Button, SimpleGrid, Image } from '@mantine/core';
import { Container } from '@mantine/core';
import { AbuutHero } from '@/components/AboutHero/AboutHero';
import image from './desktop-support.webp';

import classes from "./desktop-support.module.css"


export const metadata = {
  title: 'Chic IT - Professional Desktop Support Services<',
  description: 'Providing ongoing support for all of your desktop technology needs. We offer reliable, personalized Desktop support to ensure your systems are running smoothly',
};

async function title() {
  "use server"

  return (
    <Title className={classes.title}><span className='highlight'> Chic IT</span>: Professional Desktop Support Services.</Title>
  )

}

async function subtitle() {
  "use server"

  return (
    <p>Empowering Businesses with Exceptional Desktop Support Services</p>
  )
}


async function left() {
  "use server"
  return (<div className={classes.page}>

    <div className="markdown prose w-full break-words dark:prose-invert light">
      <div className={classes.inner}>
        <div className={classes.content}>

          <h2>Dektop Support Services</h2>

          <p>Welcome to Chic IT! We're a female-owned and operated IT services company dedicated to providing top-tier desktop support solutions for businesses of all sizes. At Chic IT, we understand the unique needs of today's fast-paced, technology-driven world. Whether you're a small startup or a large enterprise, we offer reliable, personalized IT support to ensure your systems are running smoothly.</p>
          <h2>Who We Are</h2>
          <p>Chic IT was founded with one clear goal in mind: to offer expert IT support with a personal touch. We are a passionate, professional team of IT experts who truly care about the success of our clients. What sets us apart is our commitment to customer service, combined with our extensive technical expertise. As a woman-owned business, we understand the importance of breaking barriers and paving the way for more diversity and innovation in the IT industry.</p>
          
          




        </div>

        <Image src={image.src} className={classes.image} />
      </div>
              <p>Our team is a diverse group of certified IT professionals who are dedicated to solving problems, improving efficiency, and providing ongoing support for all of your desktop technology needs. From troubleshooting and maintenance to system upgrades and network security, we are here to provide you with the best IT solutions tailored to your specific requirements.</p><h2>Our Services</h2><p>At Chic IT, we specialize in <strong>Desktop Support Services</strong>, ensuring that your employees and systems stay productive, secure, and optimized. Our services include:</p><h3>1. <strong>Remote Desktop Support</strong></h3><p>No matter where you are located, our remote desktop support allows us to diagnose and resolve issues quickly and efficiently. Whether it’s software troubleshooting, network connectivity problems, or performance issues, our team can solve problems remotely to get your systems up and running in no time.</p><h3>2. <strong>On-Site Desktop Support</strong></h3><p>For more complex issues or hands-on assistance, we offer on-site desktop support. Our technicians will visit your office to address problems that require physical intervention, such as hardware failures, system setups, and network configurations.</p><h3>3. <strong>Virus and Malware Removal</strong></h3><p>Protect your systems from malicious threats with our virus and malware removal services. We help you safeguard your data and ensure your desktop systems run without the fear of cyberattacks, providing you with peace of mind.</p><h3>4. <strong>System Upgrades and Installations</strong></h3><p>Whether you need to upgrade your operating systems, install new software, or set up new hardware, our technicians will ensure smooth installations and upgrades. We’ll also provide expert guidance on the best systems and configurations for your business.</p><h3>5. <strong>Data Backup and Recovery</strong></h3><p>We understand how crucial your business data is. Our backup and recovery services protect your valuable information from unexpected system failures. In case of an emergency, we can quickly recover lost data, so you don’t have to worry about downtime or loss of important files.</p><h3>6. <strong>Network Support and Security</strong></h3><p>We offer comprehensive network support to ensure your systems stay secure and connected. From managing firewalls to setting up secure Wi-Fi networks, we take every precaution to protect your business from potential vulnerabilities.</p><h2>Why Choose Chic IT?</h2><h3><strong>Female-Owned Leadership</strong></h3><p>At Chic IT, we pride ourselves on being a female-owned business that is shaking up the traditionally male-dominated IT industry. Our leadership is dedicated to creating a supportive environment that fosters innovation, inclusivity, and quality service. We believe in empowering women in tech, and our team reflects that ethos.</p><h3><strong>Personalized Customer Service</strong></h3><p>We treat every client as a valued partner. Our goal is not just to fix your IT issues but to understand your specific business needs and provide solutions that align with your objectives. We take the time to explain technical matters in simple terms, ensuring you always feel confident in the solutions we provide.</p><h3><strong>Certified and Experienced Technicians</strong></h3><p>Our team of IT professionals is certified, experienced, and continuously trained on the latest technologies and industry standards. We are always up-to-date on the most recent innovations and best practices to provide you with cutting-edge solutions.</p><h3><strong>Proactive Support</strong></h3><p>Instead of waiting for problems to arise, we take a proactive approach to IT support. We monitor your systems regularly to identify potential issues before they disrupt your operations. By identifying and solving issues early, we minimize downtime and increase efficiency across your business.</p><h3><strong>Flexible Solutions for Every Business</strong></h3><p>Whether you need a one-time fix or ongoing support, Chic IT offers flexible plans to meet your business needs. From small businesses to large enterprises, we are equipped to handle a wide range of IT challenges. Our customized service plans ensure you get the right support at the right time.</p><h2>Get Started Today</h2><p>At Chic IT, we are ready to be your trusted IT partner. We believe in delivering exceptional support with a focus on building long-term relationships. If you're tired of dealing with slow response times, unhelpful customer service, or IT issues that never seem to get fixed, it's time to partner with Chic IT.</p><p>We invite you to reach out today and discover how we can help your business run smoothly with reliable, professional desktop support services. Whether you need immediate assistance or are looking for ongoing support, Chic IT is here to help.</p><p><strong>Contact Us Today!</strong></p><p>We look forward to working with you!</p>

    </div>





  </div>)

}

export default function ServiceDesktopSupportPage() {
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

