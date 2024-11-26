
import { HeaderMega } from '@/components/HeaderMega/HeaderMega';
import { Footer } from '@/components/Footer/Footer';
import { Grid, Title, Text, Button, SimpleGrid, Image } from '@mantine/core';
import { Container } from '@mantine/core';
import { AbuutHero } from '@/components/AboutHero/AboutHero';
import image from "./website-development.jpg"

import classes from "./website-development.module.css"


export const metadata = {
  title: 'Chic IT - Website Development: React, JS, HTML, PHP ',
  description: 'We specialize in creating innovative, high-quality websites that drive success, using modern technologies such as React, HTML, JavaScript, and PHP.',
};

async function title() {
  "use server"

  return (
    <Title className={classes.title}><span className='highlight'> Chic IT</span>: Website Development - React, JS, HTML, PHP</Title>
  )

}

async function subtitle() {
  "use server"

  return (
    <span>creating innovative, high-quality websites that drive success, using modern technologies such as React, HTML, JavaScript, and PHP</span>
  )
}


async function left() {
  "use server"
  return (<div className={classes.page}>

<div className="markdown prose w-full break-words dark:prose-invert light">
      <div className={classes.inner}>
        <div className={classes.content}>
<h2>Custom Wesbite Development with React, JS, HTML or PHP</h2>

<p>At <strong>Chic IT</strong>, we believe in the power of technology to transform businesses. As a <strong>female-owned and operated IT professional services company</strong>, we bring a unique perspective to the world of web development. We specialize in creating <strong>innovative, high-quality websites</strong> that drive success, using modern technologies such as <strong>React</strong>, <strong>HTML</strong>, <strong>JavaScript</strong>, and <strong>PHP</strong>. Whether you are starting from scratch or looking to enhance your current online presence, Chic IT is here to turn your digital vision into reality.</p>
</div>
          
          <Image src={image.src} className={classes.image} />
            </div>


<hr /><h2>Why Choose Chic IT?</h2><h3>Passionate About Progress</h3><p>At Chic IT, we are not just another web development company. We are a team of highly skilled professionals dedicated to helping your business thrive in the digital space. As women in technology, we bring diverse ideas, perspectives, and approaches to every project, ensuring that your website stands out for all the right reasons.</p><h3>Expertise That Matters</h3><p>Our team excels in <strong>React</strong>, <strong>HTML</strong>, <strong>JavaScript</strong>, and <strong>PHP</strong>, ensuring that your website is built with the latest technologies that guarantee speed, security, and scalability. We’re here to guide you through every step of the development process and offer ongoing support to ensure that your site performs at its best.</p><h3>Custom Solutions for Every Need</h3><p>Every business is unique, and so is every website. At Chic IT, we take the time to understand your business goals, target audience, and brand values. We then craft custom solutions that reflect your vision and cater to your specific needs. Whether you’re an e-commerce brand, a local business, or a startup, we create websites that capture attention and drive engagement.</p><hr /><h2>Our Services</h2><h3><strong>React Development</strong></h3><p>React is one of the most popular frameworks for building dynamic, responsive user interfaces. At Chic IT, we use React to build fast, interactive websites that provide users with a seamless experience. Whether you're looking to build a single-page application (SPA) or a full-featured platform, we ensure your site is optimized for performance and user engagement.</p><h3><strong>HTML &amp; CSS Web Development</strong></h3><p>HTML and CSS are the backbone of any website. Our experts ensure that your site is structured to be both user-friendly and aesthetically pleasing. By using clean, semantic HTML and responsive CSS, we ensure your website looks great on any device and provides the best possible experience for visitors.</p><h3><strong>JavaScript Development</strong></h3><p>JavaScript is what brings your website to life, adding interactivity and dynamic content. Whether it's creating animations, forms, or complex data-driven interfaces, our JavaScript developers are here to build features that make your website more engaging and functional.</p><h3><strong>PHP Web Development</strong></h3><p>PHP powers millions of websites across the globe, and for good reason. It's a versatile, reliable server-side scripting language. At Chic IT, we use PHP to develop custom web applications, CMS (content management systems), and e-commerce platforms that are secure, fast, and easy to maintain.</p><hr /><h2>Our Process</h2><h3>Step 1: Discovery &amp; Consultation</h3><p>We start by understanding your goals and requirements. Through a series of consultations, we gather insights into your business, your audience, and your vision for your website. This allows us to craft a personalized roadmap for success.</p><h3>Step 2: Design &amp; Prototyping</h3><p>Once we have a clear understanding of your goals, our design team will create wireframes and prototypes for your approval. We focus on user-centric design that ensures an intuitive and engaging experience.</p><h3>Step 3: Development</h3><p>Next, we move to the development phase. Our developers build the site using <strong>React</strong>, <strong>HTML</strong>, <strong>JavaScript</strong>, and <strong>PHP</strong>, implementing the latest best practices to ensure high performance, security, and responsiveness. We test thoroughly to ensure every feature works flawlessly.</p><h3>Step 4: Launch &amp; Support</h3><p>Once your website is ready, we launch it with full confidence. But our job doesn’t stop there. We offer ongoing support and maintenance services, ensuring that your site remains up-to-date, secure, and fully functional as your business grows.</p><hr /><h2>Why Choose a Female-Owned IT Company?</h2><p>At Chic IT, we’re proud to be a <strong>female-owned business</strong> in the tech industry. We understand the unique challenges women face in tech and use that insight to create innovative solutions. We believe in fostering diversity and empowering other women in the field of IT. By choosing Chic IT, you're supporting not only a business that cares deeply about its clients but also one that is passionate about creating a more inclusive and diverse tech landscape.</p><hr /><h2>Get in Touch</h2><p>Ready to take your business to the next level? Let’s build something amazing together. Whether you’re looking for a complete website overhaul or a new project, <strong>Chic IT</strong> has the expertise to bring your digital ideas to life.</p><p><strong>Contact Us Today</strong> to schedule your consultation and start building your future online!</p><hr /><h3>Chic IT: Empowering Digital Innovation, One Website at a Time.</h3><p><strong>Phone:</strong> (XXX) XXX-XXXX<br /><strong>Email:</strong> <br /><strong>Social:</strong> @ChicITDev</p>




     




      </div>





    </div>)

}

    export default function ServiceServerManagementPage() {
  const leftView = left()
    const titleView = title()
    const subtitleView = subtitle()


    return (
    <>
      <HeaderMega />
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

