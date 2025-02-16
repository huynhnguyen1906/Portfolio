import Style from '@styles/componentsStyles/ModalNavBar.module.scss';
import Link from 'next/link';
import { IoCloseOutline } from 'react-icons/io5';
import GithubWhite from '../icons/GithubWhite';
import FacebookWhite from '../icons/FacebookWhite';
import InstagramWhite from '../icons/InstagramWhite';

interface ModalNavBarProps {
    handleClose: () => void;
}

export default function ModalNavBar({ handleClose: handleClose }: ModalNavBarProps) {
    return (
        <div
            className={Style.NavDisplay}
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    handleClose();
                }
            }}
        >
            <nav className={Style.NavBar}>
                <div className={Style.Top}>
                    <a href="/" className={Style.logo}>
                        <h1>Huynh’s Portfolio</h1>
                    </a>
                    <IoCloseOutline color="#d1d5db" className={Style.CloseIcon} size={40} onClick={handleClose} />
                </div>
                <div className={Style.NavItemBox}>
                    <div className={Style.NavItem}>
                        <Link href="/#about" onClick={handleClose}>
                            私について
                        </Link>
                        <Link href="/#skill" onClick={handleClose}>
                            スキル
                        </Link>
                        <Link href="/#experience" onClick={handleClose}>
                            経験
                        </Link>
                        <Link href="/#works" onClick={handleClose}>
                            作品
                        </Link>
                        <Link href="/#contact" onClick={handleClose}>
                            コンタクト
                        </Link>
                    </div>
                    <div className={Style.IconBox}>
                        <Link
                            href="https://github.com/huynhnguyen1906"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleClose}
                        >
                            <GithubWhite />
                        </Link>
                        <Link
                            href="https://www.facebook.com/Huynh.me123/"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleClose}
                        >
                            <FacebookWhite />
                        </Link>
                        <Link
                            href="https://www.instagram.com/n.d_.huynh/"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleClose}
                        >
                            <InstagramWhite />
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}
