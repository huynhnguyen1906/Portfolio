import { Inter } from 'next/font/google';
import '@styles/GlobalStyles.scss';
import ClarityAnalytics from '@/components/Microsoft/ClarityAnalytics';

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
        <html lang="ja">
            <head />
            <body className={inter.className}>
                {children}
                <ClarityAnalytics />
            </body>
        </html>
    );
}
