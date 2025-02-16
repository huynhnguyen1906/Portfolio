import Style from '@styles/appStyles/WorkDetail.module.scss';
import Link from 'next/link';
import GithubWhite from '@/components/icons/GithubWhite';
import EarthWhite from '@/components/icons/EarthWhite';
import ThumbnailSlider from '@/components/Work/ThumbnailSlider';
import Header from '@/components/Header/Header';
import Image from 'next/image';

export default function WorkDetailPage() {
    return (
        <>
            <Header />
            <main>
                <div className={Style.WorkContainer}>
                    <div className={Style.Content}>
                        <div className={Style.workDetail}>
                            <div className={Style.name}>
                                旅ナビ <span>2024年度後期</span>
                            </div>
                            <div className={Style.description}>
                                旅ナビは、旅行前の情報収集で疲れてしまう人をターゲットにした、旅行の計画を効率的にサポートするアプリです。
                                <br />
                                AIがユーザーの嗜好や移動時間を計算して、最適な観光スポットやルートを提案します。また、自分に合ったスケジュールにカスタマイズ可能で、旅行前の情報収集の負担を軽減します。
                            </div>
                            <div className={Style.info}>
                                <div className={Style.type}>種類：チーム制作</div>
                                <div className={Style.position}>役割：マネジメント・リードエンジニア</div>
                                <div className={Style.tools}>
                                    使用言語＆ツール：
                                    <span>TypeScript</span>
                                    <span>Next.js</span>
                                    <span>Node.js</span>
                                    <span>Express</span>
                                    <span>MySQL</span>
                                    <span>OpenAI</span>
                                    <span>Google Map Platform</span>
                                    <span>Firebase</span>
                                </div>
                            </div>
                            <div className={Style.action}>
                                <Link href="#">
                                    <EarthWhite />
                                    サイトを見る
                                </Link>
                                <Link href="#">
                                    <GithubWhite />
                                    ソースコードこちら
                                </Link>
                            </div>
                            <div className={Style.note}>
                                <div className={Style.accountNote}>
                                    ※
                                    新規アカウントを登録したくない方は、以下のアカウントでログインしていただくことも可能です。
                                    <div>
                                        <p>ID： testuser1</p>
                                        <p>PW: ecccomp1</p>
                                    </div>
                                </div>
                                <div className={Style.displayNote}>
                                    ※レスポンシブ未対応のため、 パソコンでの閲覧を推奨します。
                                </div>
                            </div>
                        </div>
                        <ThumbnailSlider />
                    </div>
                    <div className={Style.applyPoint}>
                        <div className={Style.textBlock}>
                            <div className={Style.title}>アンケートでAIがユーザーに寄り添ったスポっとをおすすめ</div>
                            <div className={Style.description}>
                                旅行前の情報収集で疲れてしまう人をターゲットにした、旅行の計画を効率的にサポートするアプリです。
                                <br />
                                AIがユーザーの嗜好や移動時間を計算して、最適な観光スポットやルートを提案します。また、自分に合ったスケジュールにカスタマイズ可能で、旅行前の情報収集の負担を軽減します。
                            </div>
                        </div>
                        <div className={Style.imageBlock}>
                            <Image src={'/images/tabinavi/1.webp'} alt="aaa" width={1000} height={1000} />
                            <Image src={'/images/tabinavi/2.webp'} alt="aaa" width={1000} height={1000} />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
