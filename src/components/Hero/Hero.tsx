import Style from '@styles/componentsStyles/Hero.module.scss';
import EarthWhite from '../icons/EarthWhite';
import Vietnam from '../icons/Vietnam';
import GithubWhite from '../icons/GithubWhite';
import FacebookWhite from '../icons/FacebookWhite';
import InstagramWhite from '../icons/InstagramWhite';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <div className={Style.HeroContainer}>
            <div className={Style.Content}>
                <div className={Style.TextInfo}>
                    <div className={Style.Text}>
                        <h1>HELLO I’M HUYNH</h1>
                        <p>
                            こんにちは、私はフインと申します。現在、ECCコンピューター専門学校のWebデザインコース2年生です。コンピューターに興味があり、特にWeb開発に関心を持っています。将来はフルスタックエンジニアになることを目指しています。
                        </p>
                    </div>
                    <div className={Style.Activity}>
                        <div className={Style.Item}>
                            <div>
                                <EarthWhite />
                            </div>
                            <p>大阪市 、新今里</p>
                        </div>
                        <div className={Style.Item}>
                            <div>
                                <Vietnam />
                            </div>
                            <p>ベトナム出身</p>
                        </div>
                    </div>
                    <div className={Style.Action}>
                        <Link href="#">
                            <GithubWhite />
                        </Link>
                        <Link href="#">
                            <FacebookWhite />
                        </Link>
                        <Link href="#">
                            <InstagramWhite />
                        </Link>
                    </div>
                </div>
                <div className={Style.ImageBlock}>
                    <div className={Style.Image}>
                        <Image src="/images/heroImage.webp" alt="hero-image" width={320} height={320} />
                    </div>
                    <div className={Style.Shadow}></div>
                </div>
            </div>
        </div>
    );
}
