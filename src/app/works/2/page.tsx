import Style from '@styles/appStyles/WorkDetail.module.scss';
import Link from 'next/link';
import GithubWhite from '@/components/icons/GithubWhite';
import EarthWhite from '@/components/icons/EarthWhite';
import ThumbnailSlider from '@/components/Work/ThumbnailSlider2';
import Header from '@/components/Header/Header';
import Image from 'next/image';
import Footer from '@/components/Footer/Footer';
export default function WorkDetailPage() {
    return (
        <>
            <Header />
            <main>
                <div className={Style.WorkContainer}>
                    <div className={Style.Content}>
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
                            <div className={Style.note}>
                                <div className={Style.accountNote}>
                                    ※
                                    セキュリティ上、ウェブサイトの管理ページには直接公開アクセスできません。しかし、スクリーンショットを撮影する許可を得ましたので、詳細は画像をご覧ください。
                                    <br /> <br />※ 現在、一部の 約款などの法的情報
                                    を追加する準備を進めているため、本番環境のウェブサイトはプライベートモードになっています。
                                    現在のリンクは、開発中に使用していたテストデプロイ用のURLとなります。
                                </div>
                            </div>
                        </div>
                        <ThumbnailSlider />
                    </div>
                    <div className={Style.applyPointBlock}>
                        <div className={Style.applyPoint}>
                            <div className={Style.textBlock}>
                                <div className={Style.title}>サイドストーリー探求する「歴てく」</div>
                                <div className={Style.description}>
                                    <p>
                                        福岡県で歴史観光会社を立ち上げようとしているクライアントと連携して進めたプロジェクトです。私が初めて正式にチームリーダーを務めたうえ、企業との共同プロジェクトとしても初の試みでした。現在、ウェブサイト自体は一般公開されており、クライアント側が事業に必要な手続きを完了し次第、正式に稼働する予定です。
                                    </p>
                                </div>
                            </div>
                            <div className={Style.imageBlock}>
                                <div className={Style.image}>
                                    <Image src={'/images/rekiteku/1.webp'} alt="aaa" width={1000} height={1000} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={Style.applyPointBlock}>
                        <div className={Style.applyPoint}>
                            <div className={Style.textBlock}>
                                <div className={Style.title}>専門的な知識がなくても、簡単に使えるように！！</div>
                                <div className={Style.description}>
                                    <p>
                                        私たちのクライアントは、Web技術についてあまり詳しくない方でした。そのため、「誰でも手軽に使えるウェブサイトを作ってほしい」という要望があり、チームとして何度もクライアントと話し合いました。具体的には、担当教員が用意したGoogleシートに質問をまとめ、そこから適切な方向性を導き出しています。
                                    </p>
                                    <p>
                                        管理画面は私が担当し、できるだけシンプルなUIを心がけました。ボタン類を分かりやすく配置し、操作手順を補足する説明を加えて、クライアントが戸惑わないよう配慮しています。
                                    </p>
                                    <p>
                                        また、管理画面のマニュアルと各種アカウントをまとめた資料も用意し、いつでも疑問点を確認できるようにしました。
                                    </p>
                                </div>
                            </div>
                            <div className={Style.imageBlock}>
                                <div className={Style.image}>
                                    <Image src={'/images/rekiteku/2.webp'} alt="aaa" width={1000} height={1000} />
                                </div>
                                <p className={Style.imageDes}>Notionページで マニュアルを作成しました。</p>
                            </div>
                        </div>
                    </div>
                    <div className={Style.applyPointBlock}>
                        <div className={Style.applyPoint}>
                            <div className={Style.textBlock}>
                                <div className={Style.title}>お客様の要望を最優先にする</div>
                                <div className={Style.description}>
                                    <p>
                                        当初は、MySQLとExpressを使ったバックエンドを構築し、自分のスキルを磨きたいと思っていました。しかし、クライアントから「できるだけ維持費を抑えてほしい」という要望を受け、当初のプランを断念することに。
                                    </p>
                                    <p>
                                        その結果、費用を抑えるため、フロントエンドとバックエンドを分けるのではなく、Next.jsを使って統合し、データベースやストレージはFirebaseの無料枠を活用することにしました。これにより、月々のコストはサイトのサーバー代とドメイン代のみで済み、データベースやストレージ、その他クラウドサービスに関する費用は完全にゼロに抑えられています。
                                    </p>
                                </div>
                            </div>
                            <div className={Style.imageBlock}>
                                <div className={Style.image}>
                                    <Image src={'/images/rekiteku/3.webp'} alt="aaa" width={1000} height={1000} />
                                </div>
                                <p className={Style.imageDes}>
                                    管理者に関するデータは Firebaseを利用して保管しています。
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={Style.applyPointBlock}>
                        <div className={Style.applyPoint}>
                            <div className={Style.textBlock}>
                                <div className={Style.title}>コードもデザインも、チーム全員で作り上げる</div>
                                <div className={Style.description}>
                                    <p>
                                        今回のプロジェクトでは、「コードもデザインもメンバー全員の意見を取り入れる」という方針で取り組みました。次のステップに進む際は、自分の専門外の領域であっても、チーム全員で集まってデザインとコードの共通プロセスを話し合い、合意形成を行っています。また、授業以外の時間にもミーティングを行い、一緒に作業する時間を増やして進捗を確保しました。
                                    </p>
                                    <p>
                                        しかし一つミスがありました。時間が足りなかったこともあって、私が担当した高度な技術部分について、他のメンバーに説明文を残すのを忘れてしまったのです。そのため、メンバーが一部の機能を説明しづらい状況が生じました。今後は、情報共有を徹底し、同じミスを繰り返さないようにしたいと思います。
                                    </p>
                                </div>
                            </div>
                            <div className={Style.imageBlock}>
                                <div className={Style.image}>
                                    <Image src={'/images/rekiteku/5.webp'} alt="aaa" width={1000} height={1000} />
                                </div>
                                <p className={Style.imageDes}>
                                    基本のコミュニケーションと知らせはdiscordで実施しました
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
