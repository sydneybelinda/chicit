
import { HeaderMenu } from '@/components/HeaderMenu/HeaderMenu';
import { Footer } from '@/components/Footer/Footer';
import { Grid, Title, Text, Button, SimpleGrid, Image } from '@mantine/core';
import { Container } from '@mantine/core';
import { AbuutHero } from '@/components/AboutHero/AboutHero';
import image from './server-management.jpg';

import classes from "./website-development.module.css"


export const metadata = {
  title: 'Chic IT - Expert Server Management Solutions',
  description: 'committed to providing top-tier Windows and Linux server management solutions that keep your business running smoothly and efficiently',
};

async function title() {
  "use server"

  return (
    <Title className={classes.title}><span className='highlight'> Chic IT</span>: Server Management Solutions</Title>
  )

}

async function subtitle() {
  "use server"

  return (
    <p>Empowering Your Business with Expert Server
      Management Solutions</p>
  )
}


async function left() {
  "use server"
  return (<div className={classes.page}>

<div className="markdown prose w-full break-words dark:prose-invert light">
      <div className={classes.inner}>
        <div className={classes.content}>

          <h2>Expert Server Management Solutions</h2>

          <p>At Chic IT, we believe in empowering businesses through expert IT management. We are a proudly female-owned and operated IT professional services company, committed to providing top-tier Windows and Linux server management solutions that keep your business running smoothly and efficiently.</p><h3>Why Choose Chic IT?</h3><p>In today's fast-paced digital world, having a reliable IT infrastructure is key to maintaining a competitive edge. At Chic IT, we specialize in offering comprehensive server management services for both Windows and Linux environments. Our goal is to ensure your systems are secure, up-to-date, and running at optimal performance, so you can focus on what matters most—growing your business.</p><p>As a female-owned business, we bring a unique perspective to the IT industry, where we are driven by innovation, dedication, and a passion for excellence. We understand the challenges businesses face and work closely with you to tailor solutions that meet your specific needs.</p>
          </div>
          
        <Image src={image.src} className={classes.image} />
          </div>
          
          <h3>Our Services</h3><h4>Windows Server Management</h4><p>Windows Server is a cornerstone of many businesses’ IT infrastructure. At Chic IT, we offer full-service Windows Server management, ensuring your servers are always performing at their best. Our services include:</p><ul><li><strong>Server Installation and Configuration</strong>: We handle the installation and configuration of your Windows servers, ensuring that they are optimized for your needs from the start.</li><li><strong>System Updates and Patch Management</strong>: Stay secure with regular updates and patches for your Windows servers, minimizing vulnerabilities.</li><li><strong>Performance Monitoring and Optimization</strong>: We monitor your server’s health, performance, and uptime, providing proactive solutions to prevent issues before they arise.</li><li><strong>Backup and Disaster Recovery Solutions</strong>: We ensure your critical data is backed up and can be quickly recovered in case of an emergency.</li><li><strong>Security Audits and Risk Management</strong>: With Chic IT, your data and systems are secure. We conduct regular security audits and implement best practices for network security.</li></ul><h4>Linux Server Management</h4><p>Linux servers are known for their stability, security, and flexibility. Chic IT offers expert management for all types of Linux-based servers. Our services include:</p><ul><li><strong>Linux Server Setup and Configuration</strong>: Our team ensures that your Linux servers are configured correctly and securely to meet your business needs.</li><li><strong>Ongoing Server Monitoring</strong>: We monitor your servers 24/7 to ensure that everything is running smoothly. From CPU usage to disk space and memory, we proactively address potential issues.</li><li><strong>Security Management</strong>: We provide advanced security measures to safeguard your Linux environment against threats, including firewalls, intrusion detection systems, and regular vulnerability assessments.</li><li><strong>Custom Scripting and Automation</strong>: To increase efficiency, we create custom scripts and automate tasks that save you time and reduce manual errors.</li><li><strong>Data Backup and Recovery</strong>: Just like our Windows management services, we ensure that your Linux systems have secure backup solutions and disaster recovery plans in place.</li></ul><h3>Why We Stand Out</h3><p>At Chic IT, we understand that every business is unique. Whether you’re a small startup or a large enterprise, our IT services are designed to scale with your needs. We don’t just provide server management—we build long-lasting partnerships with our clients to ensure their IT infrastructure supports their business goals.</p><p>As a female-owned business, we are proud to represent diversity and inclusion in an industry that has traditionally been male-dominated. Our team is not just focused on delivering high-quality services, but also on making a difference by encouraging more women to take on roles in technology and IT.</p><h3>Our Commitment to Excellence</h3><p>We are passionate about what we do, and we always go the extra mile to ensure your servers are in expert hands. We value clear communication, transparency, and customer satisfaction above all else. When you choose Chic IT, you’re choosing a company that will treat your business with the same care and dedication as we would our own.</p><h3>Contact Us Today!</h3><p>Ready to take your IT infrastructure to the next level? Whether you need Windows or Linux server management services, Chic IT is here to help. Contact us today to schedule a consultation and learn how our solutions can help your business thrive.</p><p><strong>Get in Touch:</strong></p><p>Chic IT is here to support you with expert IT services designed for the modern business. Let us manage your servers so you can focus on what you do best!</p>


     




      </div>





    </div>)

}

    export default function ServiceServerManagementPage() {
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

