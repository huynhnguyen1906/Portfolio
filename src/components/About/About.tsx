import Style from '@styles/componentsStyles/About.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
    return (
        <div className={Style.AboutContainer}>
            <div className={Style.label}>私について</div>
            <div className={Style.Content}>
                <div className={Style.ImageBlock}>
                    <div className={Style.Image}>
                        <Image src="/images/AboutImage.webp" alt="about-image" width={370} height={500} />
                    </div>
                    <div className={Style.Shadow}></div>
                </div>
                <div className={Style.TextInfo}>
                    <div className={Style.Text}>
                        <h1>ちょっとした私のこと</h1>
                        <p>
                            学校のチームプロジェクトでは、メンバーの行動や興味、将来の目標などを観察・分析し、チーム全体の状況をしっかり把握するよう心がけています。メンバーの一員としては、得た情報を活かして最適な行動をとり、リーダーを任された際には、メンバーから把握した情報で一人ひとりに合ったタスクを割り振れるようにしています。
                        </p>
                        <p>
                            将来、企業での仕事にスムーズに馴染むために、学生のうちからできる限り会社での働く環境を再現するよう取り組んでいます。「報・連・相」の徹底や、感謝・謝罪の言葉を大切にするなど、基本的なコミュニケーションを常に意識しています。リードエンジニアを担当する場合は、コードの方針やプロジェクト構成、PR・コードレビューの進め方を明確にし、チーム全体で共有できるように努めています。
                        </p>
                        <p>
                            現在はバックエンド開発スキルの強化を目指し、時間があるときにJavaやSpringフレームワークの学習を進めています。また、実務経験を積むため、エンジニアとして働けるアルバイトの機会も探しています。
                        </p>
                        <p>
                            もし私にご興味をお持ちいただけましたら、<Link href={'#'}>こちら</Link>
                            から作品をご覧いただき、私の考え方やスキルをより知っていただければ幸いです。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
