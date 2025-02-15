import Style from '@styles/componentsStyles/Skill.module.scss';
import ESlint from '../icons/skillIcon/ESlint';
import JavaScript from '../icons/skillIcon/Javascript';
import TypeScript from '../icons/skillIcon/TypeScript';

export default function Skill() {
    return (
        <div className={Style.SkillContainer}>
            <div className={Style.label}>
                <p className={Style.title}>スキル</p>
                <p>私のよく使うスキル、ツール、そして技術：</p>
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
            </div>
        </div>
    );
}
