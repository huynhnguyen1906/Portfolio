'use client';

import Style from '@styles/componentsStyles/About.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Accordion from 'react-bootstrap/Accordion';
import '@styles/componentsStyles/AboutAccordion.scss';

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
                        <h1>私のこと Q&A</h1>
                        <Accordion defaultActiveKey={['0']} alwaysOpen flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>簡単な自己紹介をどうぞ！</Accordion.Header>
                                <Accordion.Body>
                                    グエン ドゥック フィン（Nguyễn Đức
                                    Huỳnh）と申します。ベトナム出身で、ECCコンピュータ専門学校の2年次を修了し、2026年3月に卒業見込みです。将来はフルスタックエンジニアとして活躍したいと考えています。
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>自分がなりたい人間像はなんですか？</Accordion.Header>
                                <Accordion.Body>
                                    私は、身体的に強いだけでなく、専門技術 &#40;技&#41;、分析的思考
                                    &#40;知&#41;、人間関係 &#40;人&#41;、健康 &#40;体&#41;、そして精神面
                                    &#40;情&#41;など、あらゆる面で「強い」人間になりたいです。また、これらすべての面でさらに強くなるために、与えられたあらゆる機会を逃さず活用しようと考えています。
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>自分の信念を教えてください！</Accordion.Header>
                                <Accordion.Body>
                                    私の根本的な信念は「すべての人はそれぞれ強い存在である」ということです。私たちがすべきことは、他人と比べて落ち込むのではなく、自分自身の得意分野を見つけ、それを伸ばすことだと考えています。そうすることで、誰もが「自分は強い存在だ」と自信を持てるようになるはずです。
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>10年後のビジョンを教えてください！</Accordion.Header>
                                <Accordion.Body>
                                    将来的には、チームリーダーやプロジェクトマネージャーなどの管理職に就くことを目指しています。そのような立場であれば、自分の言葉を通じて周囲の人がより強くなるよう手助けがしやすいと考えています。具体的には、一人ひとりの視点に立って状況を分析し、それぞれの長所や弱点を見極めて、持っている力を最大限に引き出せるようサポートしていきたいです。
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
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
