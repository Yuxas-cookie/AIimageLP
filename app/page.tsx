import Header from './components/Header';
import ProgressBar from './components/ProgressBar';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Empathy from './components/Empathy';
import Stats from './components/Stats';
import Transition from './components/Transition';
import Solution from './components/Solution';
import Testimonials from './components/Testimonials';
import CourseContent from './components/CourseContent';
import Strengths from './components/Strengths';
import Reviews from './components/Reviews';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function Home() {
  return (
    <>
      <Header />
      <ProgressBar />
      <main>
        <Hero />
        <Problems />
        <Empathy />
        <Stats />
        <Transition />
        <Solution />
        <Testimonials />
        <CourseContent />
        <Strengths />
        <Reviews />
        <CTA />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
