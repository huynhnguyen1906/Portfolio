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
                                <Link
                                    href="https://reki-teku-sooty.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
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
                        <h2>1. プロジェクト制作における意識したこと</h2>
                        <div className={Style.applyPoint}>
                            <div className={Style.textBlock}>
                                <div className={Style.title}>1.1 お客様の要望を最優先にする</div>
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
                                <div className={Style.title}>1.2 専門的な知識がなくても、簡単に使えるように！！</div>
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
                        <h2>2. チームリーダーとして意識したこと。</h2>
                        <div className={Style.applyPoint}>
                            <div className={Style.textBlock}>
                                <div className={Style.title}>2.1 「報・連・相」は最も重要！</div>
                                <div className={Style.description}>
                                    <p>
                                        チームでの作業において「報・連・相」の重要性を強く意識し、チーム内でのコミュニケーションを常に重視しました。メンバーには、自分の作業が進むたびに報告・連絡を徹底してもらうことで、業務内容のズレやミスを防ぐよう努めました。
                                    </p>
                                    <p>
                                        また、授業外の時間にも定期的にミーティングを行い、コミュニケーションの強化を図るとともに、プロジェクトの進行をスムーズにしました。これにより、プロジェクトの進捗を滞りなく維持し、大きなミスなく進めることができました。
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
                    <div className={Style.applyPointBlock}>
                        <div className={Style.applyPoint}>
                            <div className={Style.textBlock}>
                                <div className={Style.title}>2.2 メンバーのそれぞれの得意分野を活かす</div>
                                <div className={Style.description}>
                                    <p>
                                        今回のプロジェクトは 5人チーム で進めました。メンバーそれぞれに
                                        得意な分野と苦手な分野 があり、私の役割は
                                        各メンバーが持つ強みを最大限に発揮できるポジションを用意すること
                                        でした。適切な役割分担を行うことで、メンバー全員が
                                        自分のスキルを100%活かせる環境 を作ることを目指しました。
                                    </p>
                                    <p>
                                        例えば、デザイナーが2名いる中で、1人はUI/UXやレイアウト設計が得意、もう1人はグラフィックデザインに強みがあると判断しました。そのため、グラフィックデザインが得意なメンバーには装飾やビジュアル要素を担当してもらい、レイアウト設計が得意なメンバーにはコンテンツブロックの配置を中心に担当してもらいました。
                                    </p>
                                    <p>
                                        もちろん、デザインの進行は全員で意見を出し合い、フィードバックを共有しながら進めることで、より客観的でバランスの取れたアウトプットを目指しました。
                                    </p>
                                </div>
                            </div>
                            <div className={Style.imageBlock}>
                                <div className={Style.image}>
                                    <Image src={'/images/rekiteku/7.webp'} alt="aaa" width={1000} height={1000} />
                                </div>
                                <p className={Style.imageDes}>
                                    discordでそれぞれの分野のチャンネルを作成し、情報共有を行いました。
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={Style.applyPointBlock}>
                        <h2>3. 気づき・学び・反省点</h2>
                        <div className={Style.applyPoint}>
                            <div className={Style.textBlock}>
                                <div className={Style.title}>3.1 仕事ってこういうものなんだ！</div>
                                <div className={Style.description}>
                                    <p>
                                        今回が初めての企業連携プロジェクトだったため、実務に近い経験を通じて多くのことを学びました。
                                    </p>
                                    <p>
                                        例えば、デザイナーが2名いる中で、1人はUI/例えば、クライアントとコミュニケーションを取る際、専門用語を使いすぎず、分かりやすい言葉を選ぶ必要がありました。また、クライアントの要望をそのまま受け入れるだけでなく、より良い選択肢を提案することも求められました。
                                    </p>
                                    <p>
                                        そして何より、自分が「やりたい」と思ったことでも、クライアントの利益にならなければ優先すべきではないということを実感しました。このプロジェクトを通じて、実務における意思決定の難しさと重要性を学ぶことができ、今後の仕事に生かせる貴重な経験となりました。
                                    </p>
                                </div>
                            </div>
                            <div className={Style.imageBlock}>
                                <div className={Style.image}>
                                    <Image src={'/images/rekiteku/visual.webp'} alt="aaa" width={1000} height={1000} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={Style.applyPointBlock}>
                        <div className={Style.applyPoint}>
                            <div className={Style.textBlock}>
                                <div className={Style.title}>3.2 自分でデプロイもやりたかった！</div>
                                <div className={Style.description}>
                                    <p>
                                        プロジェクトの最終段階では、開発したシステムを
                                        本番環境のサーバーにデプロイし、正式に公開
                                        する必要がありました。しかし、その時点で私は
                                        サーバーの設定やデプロイの実務経験がなく、最終的にこの作業は
                                        担当の先生に任せることになってしまいました。
                                    </p>
                                    <p>
                                        最後の重要な工程を自分でできなかったのは、とても悔しい経験でした。そのため、プロジェクト終了後すぐに
                                        自分でVPSサーバーをレンタルし、ドメインの設定・サーバー構築・デプロイ作業
                                        などを試行錯誤しながら学びました。
                                    </p>
                                    <p>
                                        今では、自分でデプロイや本番環境への公開ができるようになり、自信を持って対応できるスキルが身についた
                                        と実感しています。次のプロジェクトでは、必ず自分でデプロイまで担当しようと思います。
                                    </p>
                                </div>
                            </div>
                            <div className={Style.imageBlock}>
                                <div className={Style.image}>
                                    <Image src={'/images/rekiteku/8.webp'} alt="aaa" width={1000} height={1000} />
                                </div>
                                <p className={Style.imageDes}>
                                    Xserverサビースで4GB－4コアのVPSサーバーをレンタルし、いろいろ試しました。
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
