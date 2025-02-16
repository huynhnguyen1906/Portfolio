import Style from '@styles/componentsStyles/Contact.module.scss';
import Email from '../icons/Email';
import Phone from '../icons/Phone';
import CopyButton from './CopyButton';

export default function Contact() {
    return (
        <div className={Style.ContactContainer}>
            <div className={Style.label}>
                <p className={Style.title}>コンタクト</p>
                <p>お問い合わせ、ご質問、またはつながりたい方はお気軽にどうぞ！</p>
            </div>
            <div className={Style.Content}>
                <div className={Style.mail}>
                    <Email />
                    <p>duchuynhnguyen1906@gmail.com</p>
                    <CopyButton text="duchuynhnguyen1906@gmail.com" />
                </div>
                <div className={Style.phoneNumber}>
                    <Phone />
                    <p>090-8380-5537</p>
                    <CopyButton text="090-8380-5537" />
                </div>
            </div>
        </div>
    );
}
