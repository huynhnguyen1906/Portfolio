import Style from '@styles/appStyles/WorkDetail.module.scss';
import Link from 'next/link';
import GithubWhite from '@/components/icons/GithubWhite';
import EarthWhite from '@/components/icons/EarthWhite';
import ThumbnailSlider from '@/components/Work/ThumbnailSlider';
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
                            <div className={Style.textBlock}>
                                <div className={Style.title}>
                                    アンケートでAIがユーザーに寄り添ったスポっとをおすすめ
                                </div>
                                <div className={Style.description}>
                                    旅行前の情報収集で疲れてしまう人をターゲットにした、旅行の計画を効率的にサポートするアプリです。
                                    <br />
                                    AIがユーザーの嗜好や移動時間を計算して、最適な観光スポットやルートを提案します。また、自分に合ったスケジュールにカスタマイズ可能で、旅行前の情報収集の負担を軽減します。
                                </div>
                            </div>
                        </div>
                        <div className={Style.imageBlock}>
                            <div className={Style.image}>
                                <Image src={'/images/tabinavi/1.webp'} alt="aaa" width={1000} height={1000} />
                                <Image src={'/images/tabinavi/2.webp'} alt="aaa" width={1000} height={1000} />
                            </div>
                            <p className={Style.imageDes}>アンケート結果を基にAIがスポットを提案します。</p>
                        </div>
                    </div>
                    <div className={Style.applyPoint}>
                        <div className={Style.textBlock}>
                            <div className={Style.title}>そもそもどうやってAIを使ってスポットを提案するのか？</div>
                            <div className={Style.description}>
                                <p>
                                    最初の段階では、OpenAIのサービスをどのように使えばいいのかまったくわかりませんでした。
                                    通常のAI
                                    APIだと、スポットに関する十分な情報がないうえに、Googleマップと照らし合わせると誤情報が混ざる可能性があります。
                                </p>
                                <p>
                                    さらに、専用のAIをトレーニングしようにも、必要なデータ量とコストが膨大で、実用的ではありませんでした。
                                </p>
                                <p>
                                    そこで、何度も計画を練り直してユーザーフローを描き出した結果、まずアンケートを使ってユーザーの好みを把握し、AIには「スポットのタイプ」を推定させるだけに絞ることにしたんです。
                                    その後、AIが導き出したタイプをもとに、GoogleマップのAPIでスポットを検索する仕組みにしました。
                                </p>
                            </div>
                        </div>
                        <div className={Style.imageBlock}>
                            <div className={Style.image}>
                                <Image src={'/images/tabinavi/3.webp'} alt="aaa" width={1000} height={1000} />
                            </div>
                            <p className={Style.imageDes}>
                                最適な方法を見つけるため、ユーザーフローを何回もやり直しました。
                            </p>
                        </div>
                    </div>
                    <div className={Style.applyPoint}>
                        <div className={Style.textBlock}>
                            <div className={Style.title}>使えるサービスがないなら、自分で作ればいい！</div>
                            <div className={Style.description}>
                                <p>
                                    アプリでは乗り換え情報も提供する予定でした。最初はGoogle Maps
                                    APIを利用して実装しようと考えていたのですが、実際に調べてみると日本国内の鉄道乗り換えには対応していないことが判明。インターネット上にも有力な情報が少なく、かつ無料で使える代替サービスも見つからず、解決策を探すのにかなり苦労しました。
                                </p>
                                <p>
                                    そこで、独自に乗り換え機能を開発することに挑戦。アルゴリズムの調査やロジック設計を行い、駅データを提供する
                                    <Link href="https://ekidata.jp/">「ekidata」</Link>
                                    から全国の駅情報を取得して、乗り換え検索を実現しました。まだ運賃や所要時間など、正確さを高める部分は残っているものの、大量データを扱ったのは今回が初めてで、応答速度や70％ほどの精度（既存サービス比）を得られたのは大きな成果です。
                                </p>
                                <p>
                                    今後は、この機能をAPIとして学内のサーバーに残し、後輩たちにも活用してもらえるようにするつもりです。
                                </p>
                            </div>
                        </div>
                        <div className={Style.imageBlock}>
                            <div className={Style.image}>
                                <Image src={'/images/tabinavi/5.webp'} alt="aaa" width={1000} height={1000} />
                                <Image src={'/images/tabinavi/4.webp'} alt="aaa" width={1000} height={1000} />
                            </div>
                            <p className={Style.imageDes}>乗り換え情報を提供するため、独自の機能を開発しました。</p>
                        </div>
                    </div>
                    <div className={Style.applyPoint}>
                        <div className={Style.textBlock}>
                            <div className={Style.title}>チーム全体の進捗管理は本当に難しいと思いました。</div>
                            <div className={Style.description}>
                                <p>
                                    今回のプロジェクトでは、冬休みを挟んだことや、メンバーそれぞれが他の授業の課題に追われていたこともあり、タスクを減らして負担を軽くしようと判断しました。ところが、その結果コミュニケーションが不足し、進捗が滞ってしまいました。
                                </p>
                                <p>
                                    幸い、最終的には一人ひとりの計画を立て直してプロジェクトを再始動できましたが、この経験から「各授業の課題のバランスを取ること」や「メンバーの休養とプロジェクトの進捗を両立させること」の難しさを痛感しました。
                                </p>
                                <p>
                                    今はまだプロジェクトを終えたばかりなので、今後もこの失敗を振り返りつつ、同じミスを繰り返さないようにしていきたいと思います。
                                </p>
                            </div>
                        </div>
                        <div className={Style.imageBlock}>
                            <div className={Style.image}>
                                <Image src={'/images/tabinavi/6.webp'} alt="aaa" width={1000} height={1000} />
                            </div>
                            <p className={Style.imageDes}>
                                これからも、プロジェクトの進捗管理について学び続けていきたいです。
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
