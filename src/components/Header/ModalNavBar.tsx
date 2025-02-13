import Style from '@styles/componentsStyles/ModalNavBar.module.scss';
import Link from 'next/link';
import { IoCloseOutline } from 'react-icons/io5';
import GithubWhite from '../icons/githubWhite';
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
                    <a href="#" className={Style.logo}>
                        <h1>Huynh’s Portfolio</h1>
                    </a>
                    <IoCloseOutline color="#d1d5db" className={Style.CloseIcon} size={40} onClick={handleClose} />
                </div>
                <div className={Style.NavItemBox}>
                    <div className={Style.NavItem}>
                        <Link href="#">私について</Link>
                        <Link href="#">スキル</Link>
                        <Link href="#">経験</Link>
                        <Link href="#">作品</Link>
                        <Link href="#">コンタクト</Link>
                    </div>
                    <div className={Style.IconBox}>
                        <Link href="#">
                            <GithubWhite />
                        </Link>
                        <Link href="#">
                            <FacebookWhite />
                        </Link>
                        <Link href="#">
                            <InstagramWhite />
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}
