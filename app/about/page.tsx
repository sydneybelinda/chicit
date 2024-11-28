import { HeaderMega } from '@/components/HeaderMega/HeaderMega';
import { Footer } from '@/components/Footer/Footer';
import {  Title, Image } from '@mantine/core';
import { Container } from '@mantine/core';
import { AbuutHero } from '@/components/AboutHero/AboutHero';
import image from './bel.png';


import classes from "./about.module.css"


export const metadata = {
  title: 'Chic IT - About us - Fun, friendly and Professional IT Services by women',
  description: 'We aer a female owned and operated IT Servcies company.  Our technicians have over 25 years industry experience',
};

async function title() { 
  "use server"

  return (
  <Title className={classes.title}>About <span className='highlight'> Chic IT</span>: Empowering Your Digital Success</Title>
  )

}

async function subtitle() { 
  "use server"

  return (
  <span>At Chic IT, we&apos;re passionate about helping businesses like yours succeed in the digital world.</span>
  )
}


async function left () {
 "use server"
  return ( 
  <Container>
  <div className={classes.page}>

      <div className="markdown prose w-full break-words dark:prose-invert light">
      <div className={classes.inner}>
        <div className={classes.content}>
      <h2>Welcome to <span className='highlight'>Chic IT</span></h2>     
  <p>
    Welcome to Chic IT, a female-owned and operated IT professional services
    company dedicated to providing exceptional technology solutions to
    businesses and individuals across various industries. At Chic IT, we blend
    creativity with technical expertise to deliver reliable, efficient, and
    innovative services. Our team of skilled professionals is committed to
    empowering our clients with the best digital tools and strategies, enabling
    them to grow, thrive, and succeed in the fast-paced digital world.
  </p>
  <h3>Who We Are</h3>
  <p>
    Chic IT is proud to be a female-led technology company breaking barriers in
    the traditionally male-dominated IT industry. Founded by a passionate
    entrepreneur, our mission is to create a space where technology meets
    creativity, providing comprehensive IT services that cater to both the
    technical and aesthetic needs of businesses. We believe in fostering
    diversity, supporting women in tech, and delivering top-tier services with a
    personal touch.
  </p>
  </div>
  
  <Image src={image.src} className={classes.image} />
  </div>
  <p>
    Our team consists of highly skilled and experienced professionals who
    specialize in web design, desktop support, server management, digital
    marketing, and search engine optimization (SEO). We understand that every
    business is unique, which is why we offer tailored solutions that align with
    your goals and objectives, ensuring your company stands out in today&apos;s
    competitive market.
  </p>
  <h3>Our Services</h3>
  <p>
    At Chic IT, we offer a comprehensive range of IT services designed to help
    businesses build and maintain a strong online presence, optimize their IT
    infrastructure, and grow their digital footprint. Our services include:
  </p>
  <h4>
    1. <strong>Web Design and Development</strong>
  </h4>
  <p>
    Your website is often the first point of contact between your business and
    potential clients, so it&apos;s important that it reflects your brand identity
    and delivers an exceptional user experience. Chic IT specializes in custom
    web design and development, creating visually appealing, responsive, and
    user-friendly websites that are both functional and aesthetically pleasing.
    Whether you need a sleek, modern website or a more intricate, feature-rich
    platform, our team is here to bring your vision to life.
  </p>
  <p>
    We utilize the latest technologies, design trends, and best practices to
    build websites that are not only visually stunning but also optimized for
    performance and scalability. Our websites are built with the user in mind,
    ensuring smooth navigation, fast loading speeds, and a seamless mobile
    experience.
  </p>
  <h4>
    2. <strong>Desktop and Server Support</strong>
  </h4>
  <p>
    At Chic IT, we understand the critical importance of keeping your IT
    infrastructure running smoothly. Our desktop and server support services are
    designed to provide ongoing maintenance, troubleshooting, and technical
    assistance for your devices and servers. We offer both remote and on-site
    support to ensure your systems are always operating efficiently and
    securely.
  </p>
  <p>
    Whether you&apos;re dealing with software issues, hardware malfunctions, or need
    server management, our team is here to help. We offer proactive solutions to
    prevent downtime, keep your data secure, and resolve technical problems
    quickly and effectively.
  </p>
  <h4>
    3. <strong>Digital Marketing</strong>
  </h4>
  <p>
    In today&apos;s digital age, an effective online marketing strategy is essential
    for business growth. Chic IT offers a full suite of digital marketing
    services to help your business reach its target audience and drive
    measurable results. Our digital marketing services include social media
    marketing, email campaigns, content marketing, and paid advertising. We work
    closely with you to develop customized marketing strategies that align with
    your business goals and deliver tangible results.
  </p>
  <p>
    We focus on creating engaging content, building your brand&apos;s presence on
    social media, and driving traffic to your website, all while optimizing your
    marketing budget for maximum ROI.
  </p>
  <h4>
    4. <strong>Search Engine Optimization (SEO)</strong>
  </h4>
  <p>
    No matter how great your website is, if it&apos;s not visible to potential
    customers, you&apos;re missing out on valuable opportunities. Our SEO services
    are designed to improve your website&apos;s search engine ranking, increase
    organic traffic, and enhance your online visibility. From on-page
    optimization to off-page strategies like link building, we employ proven
    techniques to ensure your website ranks higher in search engine results.
  </p>
  <p>
    Our SEO experts stay up-to-date with the latest algorithm changes and trends
    to provide you with cutting-edge strategies that drive results. We analyze
    your website, identify areas for improvement, and implement tailored SEO
    solutions to enhance your online presence.
  </p>
  <h4>
    5. <strong>Adult Web Design</strong>
  </h4>
  <p>
    Chic IT also specializes in adult web design, catering to the unique needs
    of businesses in the adult industry. We create visually stunning,
    user-friendly websites that prioritize security, privacy, and seamless
    functionality. Whether you&apos;re building an adult entertainment platform,
    e-commerce site, or membership-based website, we ensure your site is both
    compliant with industry regulations and optimized for the best user
    experience.
  </p>
  <p>
    Our team understands the specific challenges faced by adult websites and
    offers tailored solutions to ensure your website stands out while
    maintaining privacy and security for your customers.
  </p>
  <h3>Why Choose Chic IT?</h3>
  <ol>
    <li>
      <p>
        <strong>Female-Owned and Operated:</strong> As a woman-led company,
        we&apos;&apos;re committed to supporting and empowering women in the tech industry.
        Our diverse team brings fresh perspectives and innovative ideas to the
        table, ensuring your business benefits from creative and cutting-edge
        solutions.
      </p>
    </li>
    <li>
      <p>
        <strong>Tailored Solutions:</strong> We don&apos;t believe in a
        one-size-fits-all approach. We take the time to understand your business
        needs and goals, offering customized solutions that are right for you.
      </p>
    </li>
    <li>
      <p>
        <strong>Experienced Professionals:</strong> Our team consists of highly
        skilled professionals with years of experience across various IT
        domains. We pride ourselves on providing expert guidance and technical
        support to help your business grow.
      </p>
    </li>
    <li>
      <p>
        <strong>End-to-End Services:</strong> From web design and digital
        marketing to IT support and SEO, we offer a full range of services to
        help your business succeed in the digital space. We provide all the
        tools you need under one roof, saving you time and effort.
      </p>
    </li>
    <li>
      <p>
        <strong>Customer-Centric Approach:</strong> At Chic IT, our clients are
        our top priority. We strive to build long-lasting relationships and
        offer exceptional customer service that goes beyond just completing a
        project. We&apos;re here to support your business every step of the way.
      </p>
    </li>
  </ol>
  <h3>Let&apos;s Get Started</h3>
  <p>
    At Chic IT, we&apos;re passionate about helping businesses like yours succeed in
    the digital world. Whether you&apos;re looking to revamp your website, improve
    your SEO, or need reliable IT support, we&apos;ve got you covered. Reach out to
    us today, and let&apos;s discuss how we can help take your business to the next
    level.
  </p>
  <p>
    Welcome to Chic IT — where technology and creativity meet to empower your
    digital success!
  </p>
</div> 


    

  </div>
  </Container>
  )

}

export default function AboutPage() {
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

