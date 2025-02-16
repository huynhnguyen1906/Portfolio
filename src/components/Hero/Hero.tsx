import Style from '@styles/componentsStyles/Hero.module.scss';
import EarthWhite from '../icons/EarthWhite';
import Vietnam from '../icons/Vietnam';
import GithubWhite from '../icons/GithubWhite';
import FacebookWhite from '../icons/FacebookWhite';
import InstagramWhite from '../icons/InstagramWhite';
import Link from 'next/link';
import Image from 'next/image';
import Graduation from '../icons/Graduation';

export default function Hero() {
    return (
        <div className={Style.HeroContainer}>
            <div className={Style.Content}>
                <div className={Style.TextInfo}>
                    <div className={Style.Text}>
                        <h1>HELLO I’M HUYNH</h1>
                        <p>
                            こんにちは、グエン ドゥック フィン（Nguyễn Đức
                            Huỳnh）と申します。ECCコンピュータ専門学校の2年次を修了しました。コンピューターに興味があり、特にWeb開発に関心を持っています。将来はフルスタックエンジニアとして活躍したいと考えています。
                        </p>
                    </div>
                    <div className={Style.Activity}>
                        <div className={Style.Item}>
                            <div>
                                <Graduation />
                            </div>
                            <p>2026年3月卒業見込み</p>
                        </div>
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
                        <Link href="https://github.com/huynhnguyen1906" target="_blank" rel="noopener noreferrer">
                            <GithubWhite />
                        </Link>
                        <Link href="https://www.facebook.com/Huynh.me123/" target="_blank" rel="noopener noreferrer">
                            <FacebookWhite />
                        </Link>
                        <Link href="https://www.instagram.com/n.d_.huynh/" target="_blank" rel="noopener noreferrer">
                            <InstagramWhite />
                        </Link>
                    </div>
                </div>
                <div className={Style.ImageBlock}>
                    <div className={Style.Image}>
                        <Image src="/images/HeroImage.webp" alt="hero-image" width={320} height={320} />
                    </div>
                    <div className={Style.Shadow}></div>
                </div>
            </div>
        </div>
    );
}
