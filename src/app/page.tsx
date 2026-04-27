import About from '@/components/About';
import Hero from '@/components/Hero';
import Marque from '@/components/Marque';
import Service from '@/components/Service';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Marque />
      <Service />
      <Team />
      <Testimonials />
    </>
  );
}