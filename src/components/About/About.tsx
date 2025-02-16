import Style from '@styles/componentsStyles/About.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
    return (
        <div className={Style.AboutContainer} id="about">
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
                            グエン ドゥック フィン（Nguyễn Đức
                            Huỳnh）と申します。ベトナム出身で、ECCコンピュータ専門学校の2年次を修了し、2026年3月に卒業見込みです。将来はフルスタックエンジニアとして活躍したいと考えています。
                        </p>
                        <p>
                            学校のチームプロジェクトでは、メンバーの行動や興味、将来の目標などを観察・分析し、
                            チーム全体の状況を常に把握するよう意識しています。
                            メンバーの一員としては、得た情報を活用して柔軟に動き、
                            リーダーを任された際には、一人ひとりに合ったタスクを割り振るよう心がけています。
                        </p>

                        <p>
                            将来、企業での仕事にスムーズに馴染むため、
                            学生のうちからできる限り実際の職場環境を再現することを目標に、
                            「報・連・相」の徹底や感謝・謝罪の言葉の大切さを常に意識しています。
                            リードエンジニアを担当する際には、コードの方針やプロジェクト構成、
                            PR・コードレビューの進め方などを明確化し、チーム全体と共有できるように取り組んでいます。
                        </p>

                        <p>
                            現在はバックエンド開発スキルの強化を目指し、
                            時間があるときにJavaやSpringフレームワークを学習中です。
                            また、実務経験を積むため、エンジニアとして働けるアルバイトを探しています。
                        </p>

                        <p>
                            もし私にご興味をお持ちいただけましたら、
                            <Link href="/#works">こちら</Link> から作品をご覧いただき、
                            私の考え方やスキルをより深く知っていただけると幸いです。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
