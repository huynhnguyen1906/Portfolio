import Hero from '@/components/Hero/Hero';
import Header from '../components/Header/Header';
import About from '@/components/About/About';
import Skill from '../components/Skill/Skill';
import Experience from '@/components/Experience/Experience';
import Work from '@/components/Work/Work';
import Contact from '@/components/Contact/Contact';

export default function Page() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Skill />
                <Experience />
                <Work />
                <Contact />
            </main>
        </>
    );
}
