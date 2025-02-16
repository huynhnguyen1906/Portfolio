import Style from '@styles/componentsStyles/Skill.module.scss';
import ESlint from '../icons/skillIcon/ESlint';
import JavaScript from '../icons/skillIcon/JavaScript';
import TypeScript from '../icons/skillIcon/TypeScript';
import React from '../icons/skillIcon/React';
import Next from '../icons/skillIcon/Next';
import Node from '../icons/skillIcon/Node';
import Express from '../icons/skillIcon/Express';
import SocketIo from '../icons/skillIcon/SocketIo';
import MySQL from '../icons/skillIcon/MySQL';
import HTML from '../icons/skillIcon/HTML';
import Prettier from '../icons/skillIcon/Prettier';
import Git from '../icons/skillIcon/Git';

export default function Skill() {
    return (
        <div className={Style.SkillContainer} id="skill">
            <div className={Style.label}>
                <p className={Style.title}>スキル</p>
                <p>私のよく使うスキル、ツール、そして技術</p>
            </div>
            <div className={Style.Content}>
                <div className={Style.skillItem}>
                    <JavaScript />
                    <p>JavaScript</p>
                </div>
                <div className={Style.skillItem}>
                    <TypeScript />
                    <p>TypeScript</p>
                </div>
                <div className={Style.skillItem}>
                    <React />
                    <p>React</p>
                </div>
                <div className={Style.skillItem}>
                    <Next />
                    <p>Next.js</p>
                </div>
                <div className={Style.skillItem}>
                    <Node />
                    <p>Node.js</p>
                </div>
                <div className={Style.skillItem}>
                    <Express />
                    <p>Express.js</p>
                </div>
                <div className={Style.skillItem}>
                    <SocketIo />
                    <p>Socket.io</p>
                </div>
                <div className={Style.skillItem}>
                    <MySQL />
                    <p>MySQL</p>
                </div>
                <div className={Style.skillItem}>
                    <HTML />
                    <p>HTML5</p>
                </div>
                <div className={Style.skillItem}>
                    <Git />
                    <p>Git</p>
                </div>
                <div className={Style.skillItem}>
                    <ESlint />
                    <p>ESlint</p>
                </div>
                <div className={Style.skillItem}>
                    <Prettier />
                    <p>Prettier</p>
                </div>
            </div>
        </div>
    );
}
