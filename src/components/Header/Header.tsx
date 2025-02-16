'use client';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Style from '@styles/componentsStyles/Header.module.scss';
import '@styles/componentsStyles/CustomNavBar.scss';
import ModalNavBar from './ModalNavBar';
import { useState } from 'react';
import GithubWhite from '../icons/GithubWhite';

export default function Header() {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    const handleClose = () => setShow(false);
    return (
        <header className={Style.Header}>
            <Navbar expand="lg" className={Style.Navbar}>
                <Navbar.Brand href="/">
                    <h1>Huynh’s Portfolio</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleShow} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="d-flex justify-content-end">
                        <Nav.Link href="/#about">私について</Nav.Link>
                        <Nav.Link href="/#skill">スキル</Nav.Link>
                        <Nav.Link href="/#experience">経験</Nav.Link>
                        <Nav.Link href="/#works">作品</Nav.Link>
                        <Nav.Link href="/#contact">コンタクト</Nav.Link>
                        <Nav.Link href="https://github.com/huynhnguyen1906" target="_blank" rel="noopener noreferrer">
                            <GithubWhite />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {show && <ModalNavBar handleClose={handleClose} />}
        </header>
    );
}
