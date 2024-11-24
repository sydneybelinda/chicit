
import { HeaderMenu } from '@/components/HeaderMenu/HeaderMenu';
import { Hero } from '@/components/Hero/Hero';
import { Features } from '@/components/Features/Features';
import { Who } from '@/components/Who/Who';

export const metadata = {
  title: 'Chic IT - Fun, friendly and Professional IT Services by women',
  description: 'We aer a female owned and operated IT Servcies company.  Our technicians have over 25 years industry experience',
};


export default function HomePage() {
  return (
    <>
<HeaderMenu />
<Hero />


    </>
  );
}
