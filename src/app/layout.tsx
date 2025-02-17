import { Inter } from 'next/font/google';
import '@styles/GlobalStyles.scss';

import { Metadata } from 'next';

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: 'HUYNHs Portfolio',
        description:
            'こんにちは、グエン ドゥック フィン（Nguyễn Đức Huỳnh）と申します。ECCコンピュータ専門学校の2年次を修了しました。コンピューターに興味があり、特にWeb開発に関心を持っています。将来はフルスタックエンジニアとして活躍したいと考えています。',
        applicationName: '旅ナビ',
        openGraph: {
            type: 'website',
            url: `https://nguyenduchuynh.com/`,
            title: 'HUYNHs Portfolio',
            description:
                'こんにちは、グエン ドゥック フィン（Nguyễn Đức Huỳnh）と申します。ECCコンピュータ専門学校の2年次を修了しました。コンピューターに興味があり、特にWeb開発に関心を持っています。将来はフルスタックエンジニアとして活躍したいと考えています。',
            images: [
                {
                    url: 'https://raw.githubusercontent.com/huynhnguyen1906/Portfolio/refs/heads/main/public/images/HeroImage.webp',
                    width: 50,
                    height: 50,
                    alt: 'こんにちは、グエン ドゥック フィン（Nguyễn Đức Huỳnh）と申します。ECCコンピュータ専門学校の2年次を修了しました。コンピューターに興味があり、特にWeb開発に関心を持っています。将来はフルスタックエンジニアとして活躍したいと考えています。',
                },
            ],
            siteName: '歴てく',
            locale: 'ja_JP',
        },
        twitter: {
            card: 'summary_large_image',
            site: '',
            creator: '@Huynhnguyen1906',
            title: 'HUYNHs Portfolio',
            description:
                'こんにちは、グエン ドゥック フィン（Nguyễn Đức Huỳnh）と申します。ECCコンピュータ専門学校の2年次を修了しました。コンピューターに興味があり、特にWeb開発に関心を持っています。将来はフルスタックエンジニアとして活躍したいと考えています。',
            images: 'https://raw.githubusercontent.com/huynhnguyen1906/Portfolio/refs/heads/main/public/images/HeroImage.webp',
        },
        appleWebApp: {
            capable: true,
            title: 'HUYNHs Portfolio',
            statusBarStyle: 'default',
        },
    };
};

const inter = Inter({
    subsets: ['latin'],
    weight: ['100', '300', '400', '500', '600', '700', '800', '900'],
    display: 'swap',
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
