
import { HeaderMenu } from '@/components/HeaderMenu/HeaderMenu';
import { Footer } from '@/components/Footer/Footer';
import { Grid, Title, Text, Button, SimpleGrid, Image } from '@mantine/core';
import { Container } from '@mantine/core';
import { AbuutHero } from '@/components/AboutHero/AboutHero';
import image from './server-management.jpg';

import classes from "./digital-marketing.module.css"


export const metadata = {
  title: 'Chic IT - Digital Marketing and Search Engine Optimisation',
  description: 'We specialize in transforming your online presence and driving growth for your business with effective Digital Marketing and Search Engine Optimisation',
};

async function title() {
  "use server"

  return (
    <Title className={classes.title}><span className='highlight'> Chic IT</span>: Digital Marketing &amp; SEO Solutions</Title>
  )

}

async function subtitle() {
  "use server"

  return (
    <p>Empowering Your Business Through Digital Excellence</p>
  )
}


async function left() {
  "use server"
  return (<div className={classes.page}>

<div className="markdown prose w-full break-words dark:prose-invert light">
      <div className={classes.inner}>
        <div className={classes.content}>

          <h2>Professional Digital Marketting and Search Engine Optimiisation</h2>

<p>At <strong>Chic IT</strong>, we specialize in transforming your online presence and driving growth for your business with effective Digital Marketing and Search Engine Optimisation (SEO) strategies. As a <strong>female-owned and operated</strong> IT professional services company, we pride ourselves on bringing a fresh perspective, creative ideas, and exceptional results to the world of digital marketing.</p><p>Whether you're looking to improve your search rankings, expand your brand's reach, or increase your online sales, <strong>Chic IT</strong> offers tailored digital marketing solutions that are as unique as your business.</p>


</div>
          
          <Image src={image.src} className={classes.image} />
            </div>
            <hr />




<h3>Why Choose Chic IT?</h3><p><strong>1. Expertise and Experience in Digital Marketing &amp; SEO</strong></p><p>With years of experience in the ever-evolving world of digital marketing and SEO, we understand what works. Our team of certified professionals are dedicated to keeping up-to-date with the latest trends and best practices to ensure your business achieves the success it deserves. From search engine optimisation to social media marketing, we have the knowledge and tools to take your business to the next level.</p><p><strong>2. Women in Tech Empowerment</strong></p><p>As a female-led business, <strong>Chic IT</strong> is committed to breaking down barriers in the tech industry. We are passionate about empowering other women and diverse groups in the tech space, and we bring that passion into every project we work on. We are not just a company; we are a movement to help you succeed in the digital world while supporting equality and inclusivity in the tech industry.</p><p><strong>3. Customized Solutions for Every Client</strong></p><p>We believe that one size doesn’t fit all. Our approach to digital marketing and SEO is always customized to meet the unique goals and needs of your business. Whether you are a small startup, an established enterprise, or a growing e-commerce platform, we create data-driven strategies that are aligned with your objectives. From keyword research to on-page optimisation and link-building, we have you covered at every step.</p><p><strong>4. Proven Track Record of Success</strong></p><p>Our client portfolio speaks for itself. We have helped numerous businesses across various industries increase their website traffic, enhance their brand visibility, and achieve higher search rankings. Our track record of delivering results has made us a trusted partner for businesses seeking impactful digital marketing and SEO services.</p><hr /><h3>Our Digital Marketing &amp; SEO Services</h3><p>At <strong>Chic IT</strong>, we offer a full spectrum of digital marketing and SEO services to help your business shine online:</p><p><strong>1. Search Engine Optimisation (SEO)</strong><br />SEO is the foundation of any successful digital marketing strategy. We optimize your website to make it search engine-friendly, ensuring it ranks high on search engine results pages (SERPs). Our SEO services include:</p><ul><li><strong>Keyword Research</strong>: Identifying the best keywords that drive traffic to your website.</li><li><strong>On-Page SEO</strong>: Optimizing your website’s content, meta tags, images, and more.</li><li><strong>Technical SEO</strong>: Improving your site’s speed, mobile responsiveness, and structure.</li><li><strong>Link Building</strong>: Creating quality backlinks to increase authority and rank higher.</li></ul><p><strong>2. Content Marketing</strong><br />High-quality, engaging content is crucial for attracting and retaining customers. We create customized content that speaks directly to your audience while ensuring it’s optimized for SEO. From blogs and social media posts to infographics and videos, we deliver content that converts.</p><p><strong>3. Social Media Marketing</strong><br />Social media is a powerful tool for building your brand and connecting with your target audience. We craft social media strategies that align with your brand's voice and objectives, whether it’s on Instagram, Facebook, LinkedIn, Twitter, or other platforms. Our goal is to drive engagement and increase your followers while improving brand recognition.</p><p><strong>4. Paid Advertising (PPC)</strong><br />Sometimes, you need immediate results. Our pay-per-click (PPC) advertising services can bring instant visibility and traffic to your website. We create targeted campaigns on Google Ads, Bing, and social media platforms, ensuring that you get the best return on investment (ROI).</p><p><strong>5. Email Marketing</strong><br />We design email marketing campaigns that nurture relationships with your customers and prospects. From personalized newsletters to promotional offers, our email strategies are crafted to increase engagement and drive sales.</p><hr /><h3>Our Process</h3><p><strong>1. Discovery &amp; Strategy</strong><br />We start by understanding your business, goals, and audience. Our team conducts a comprehensive audit of your current digital presence to identify opportunities for improvement. Based on this, we craft a personalized strategy that aligns with your objectives.</p><p><strong>2. Implementation</strong><br />Once the strategy is approved, we dive into the execution phase. Our team works efficiently to implement on-page SEO, content optimisation, social media strategies, and more, ensuring that everything is in line with your brand and marketing goals.</p><p><strong>3. Monitoring &amp; Reporting</strong><br />We believe in transparency. Throughout the campaign, we continuously monitor performance and adjust strategies to ensure maximum results. You’ll receive detailed reports that show the impact of our efforts, including insights into website traffic, search rankings, conversions, and more.</p><hr /><h3>Let’s Elevate Your Digital Presence Together</h3><p>At <strong>Chic IT</strong>, we are committed to driving measurable results for your business. Whether you're starting from scratch or looking to enhance your current digital marketing efforts, we have the expertise and dedication to help you grow. We work alongside you to ensure your success in the digital world.</p><p>If you’re ready to take your digital marketing and SEO to the next level, <strong>contact Chic IT</strong> today for a consultation. Let’s make your business the next success story!</p><hr /><p><strong>Get in Touch:</strong></p><hr /><p><strong>Chic IT</strong> – Empowering Your Brand. Empowering You.</p>



 

     




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

