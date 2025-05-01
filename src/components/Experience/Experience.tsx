import Style from '@styles/componentsStyles/Experience.module.scss';

export default function Experience() {
    return (
        <div className={Style.ExperienceContainer} id="experience">
            <div className={Style.label}>
                <p className={Style.title}>経験</p>
                <p>こちらは、私の最近の経験</p>
            </div>
            <div className={Style.Content}>
                <div className={Style.experienceItem}>
                    <div className={Style.workPlace}>
                        <p>YTDoors株式会社</p>
                    </div>
                    <div className={Style.detail}>
                        <p className={Style.position}>CMSサイト開発</p>
                        <ul>
                            <li>塾の学生のために動画サイト作成。</li>
                            <li>原則リモート</li>
                            <li>
                                初めてWordPressを使って開発を行いました。開発を進めながら学習し、実践を通じてスキルを習得しました。
                            </li>
                            <li>
                                案件の内容や使用技術は、主に会社の技術責任者が準備していましたが、基本的な開発作業は私が一人で担当し、その後、技術責任者によるレビューを受ける形で進めました。
                            </li>
                            <li>
                                開発者として、プロジェクトに適した開発方針の調整・改善を提案することにも関わりました。
                            </li>
                        </ul>
                    </div>
                    <div className={Style.time}>
                        <p>2024年7月～2024年10月</p>
                    </div>
                </div>
                <div className={Style.experienceItem}>
                    <div className={Style.workPlace}>
                        <p>YTDoors株式会社</p>
                    </div>
                    <div className={Style.detail}>
                        <p className={Style.position}>Headless構成のCMS全面改修（フルスタック担当）</p>
                        <ul>
                            <li>
                                WordPress APIをバックエンドとし、Next.jsでフロントエンドを構築したHeadless
                                CMSサイトのリニューアル案件。
                            </li>
                            <li>原則リモート</li>
                            <li>
                                フロントエンドの構成設計については、基本的に私が一任されており、担当技術者の確認を受けながら実装を進めました。
                            </li>
                            <li>
                                開発だけでなく、サイト全体の改善方針や設計見直しにも積極的に意見を出し、方針決定にも関与しました。
                            </li>
                            <li>WordPress側のカスタム投稿やAPI設計も自ら行い、フルスタックの立場で対応しました。</li>
                        </ul>
                    </div>
                    <div className={Style.time}>
                        <p>2025年4月～現在</p>
                    </div>
                </div>
                <div className={Style.experienceItem}>
                    <div className={Style.workPlace}>
                        <p>ECCコンピュータ専門学校</p>
                    </div>
                    <div className={Style.detail}>
                        <p className={Style.position}>学生</p>
                    </div>
                    <div className={Style.time}>
                        <p>2023年4月～現在</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
