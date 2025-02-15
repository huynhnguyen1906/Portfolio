import Hero from '@/components/Hero/Hero';
import Header from '../components/Header/Header';
import About from '@/components/About/About';
import Skill from '../components/Skill/Skill';
import Experience from '@/components/Experience/Experience';

export default function Page() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Skill />
                <Experience />
            </main>
        </>
    );
}
