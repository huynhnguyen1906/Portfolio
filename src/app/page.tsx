import Hero from '@/components/Hero/Hero';
import Header from '@/components/Header/Header';
import About from '@/components/About/About';
import Skill from '@/components/Skill/Skill';
import Experience from '@/components/Experience/Experience';
import Work from '@/components/Work/Work';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'HUYNHs Portfolio | Nguyễn Đức Huỳnh',
    description:
        'こんにちは、グエン ドゥック フィン（Nguyễn Đức Huỳnh）と申します。ECCコンピュータ専門学校の2年次を修了し、フルスタックエンジニアとしてのキャリアを目指しています。React・Next.jsなどを活用した開発を得意とします。',
    keywords: [
        'Nguyễn Đức Huỳnh',
        'Nguyen Duc Huynh',
        'Nguyen Huynh',
        'グエンドゥックフィン',
        'グエン ドゥック フィン',
        'huynhnguyen1906',
        'ECCコンピュータ専門学校',
        'full-stack developer',
        'Next.js',
    ],
    openGraph: {
        title: 'HUYNHs Portfolio',
        description:
            'ECCコンピュータ専門学校の学生、Nguyễn Đức Huỳnhのポートフォリオサイト。Next.jsを使ったプロジェクトや経験を紹介しています。',
        url: 'https://nguyenduchuynh.com',
        siteName: 'HUYNHs Portfolio',
        locale: 'ja_JP',
        type: 'website',
        images: [
            {
                url: 'https://raw.githubusercontent.com/huynhnguyen1906/Portfolio/refs/heads/main/public/images/og-image.webp',
                width: 1200,
                height: 630,
                alt: 'HUYNHs Portfolio',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        creator: '@Huynhnguyen1906',
        title: 'HUYNHs Portfolio',
        description:
            'ECCコンピュータ専門学校の学生Nguyễn Đức HuỳnhのNext.jsポートフォリオ。開発実績とスキルをご紹介します。',
        images: [
            'https://raw.githubusercontent.com/huynhnguyen1906/Portfolio/refs/heads/main/public/images/og-image.webp',
        ],
    },
    applicationName: 'HUYNHs Portfolio',
    appleWebApp: {
        capable: true,
        title: 'HUYNHs Portfolio',
        statusBarStyle: 'default',
    },
};

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
            <Footer />
        </>
    );
}
