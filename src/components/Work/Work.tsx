import Style from '@styles/componentsStyles/Work.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import GithubWhite from '../icons/GithubWhite';
import EarthWhite from '../icons/EarthWhite';
import BlankLink from '../icons/BlankLink';

export default function Work() {
    return (
        <div className={Style.WorkContainer} id="works">
            <div className={Style.label}>
                <p className={Style.title}>作品</p>
                <p>これまでに手がけた一部の作品</p>
            </div>
            <div className={Style.Content}>
                <div className={Style.workItem}>
                    <div className={Style.imageBlock}>
                        <Image src="/images/tabinavi/visual.webp" alt="work" width={842} height={595} />
                    </div>
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
                            <Link href="https://tabinavi.nguyenduchuynh.com/" target="_blank" rel="noopener noreferrer">
                                <EarthWhite />
                                サイトを見る
                            </Link>
                            <Link
                                href="https://github.com/2024-H-team/Tabinavi"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <GithubWhite />
                                ソースコードこちら
                            </Link>
                        </div>
                        <div className={Style.viewMoreBtn}>
                            <Link href="/works/1">
                                作品詳細を見る
                                <BlankLink />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={Style.workItem}>
                    <div className={Style.imageBlock}>
                        <Image src="/images/rekiteku/visual.webp" alt="work" width={842} height={595} />
                    </div>
                    <div className={Style.workDetail}>
                        <div className={Style.name}>
                            歴てく<span>2024年度前期</span>
                        </div>
                        <div className={Style.description}>
                            福岡県で歴史観光会社の立ち上げを準備しているクライアントと連携して進めたプロジェクトです。
                            あまり知られていない地域の歴史をたどることで、旅行者が新たな気づきやより深い体験を得られるようにデザインした観光サービスサイトになります。
                            <br />
                            また、技術的な知識がなくてもサイト内の情報を更新できる仕組みを導入し、運用面にも配慮しました。
                        </div>
                        <div className={Style.info}>
                            <div className={Style.type}>種類：チーム制作</div>
                            <div className={Style.position}>役割：リーダー・リードエンジニア</div>
                            <div className={Style.tools}>
                                使用言語＆ツール：
                                <span>TypeScript</span>
                                <span>Next.js</span>
                                <span>Node.js</span>
                                <span>Firebase</span>
                            </div>
                        </div>
                        <div className={Style.action}>
                            <Link href="https://reki-teku.com/" target="_blank" rel="noopener noreferrer">
                                <EarthWhite />
                                サイトを見る
                            </Link>
                            <Link
                                href="https://github.com/huynhnguyen1906/Reki-Teku"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <GithubWhite />
                                ソースコードこちら
                            </Link>
                        </div>
                        <div className={Style.viewMoreBtn}>
                            <Link href="/works/2">
                                作品詳細を見る
                                <BlankLink />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={Style.workItem}>
                    <div className={Style.imageBlock}>
                        <Image src="/images/funhub/visual.webp" alt="work" width={842} height={595} />
                    </div>
                    <div className={Style.workDetail}>
                        <div className={Style.name}>
                            Funhub<span>2023年度後期</span>
                        </div>
                        <div className={Style.description}>
                            他のSNSとは異なり、時には他人の悩みを見ることで自分の気分が悪くなる。私たちはあなたに自由で創造的な空間を提供し、笑いの興味深いコンテンツが満載です。
                        </div>
                        <div className={Style.info}>
                            <div className={Style.type}>種類：個人制作</div>
                            <div className={Style.position}>役割：＊</div>
                            <div className={Style.tools}>
                                使用ツール：
                                <span>JavaScript</span>
                                <span>React</span>
                                <span>Node.js</span>
                                <span>Express</span>
                                <span>MySQL</span>
                                <span>Firebase</span>
                            </div>
                        </div>
                        <div className={Style.action}>
                            <Link
                                href="https://funhub.nguyenduchuynh.com/home"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <EarthWhite />
                                サイトを見る
                            </Link>
                            <Link
                                href="https://github.com/huynhnguyen1906/FunHub"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <GithubWhite />
                                ソースコードこちら
                            </Link>
                        </div>
                        <div className={Style.viewMoreBtn}>
                            <Link href="/works/3">
                                作品詳細を見る
                                <BlankLink />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
