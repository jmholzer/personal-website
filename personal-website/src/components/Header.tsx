import React from 'react';
import ghLogo from '../assets/icons/github.svg';
import liLogo from '../assets/icons/linkedin.svg';
import { Link } from 'react-router-dom';

interface NavPage {
    name: string;
    link: string;
}

const Header: React.FC = () => {
    const NavPages: NavPage[] = [
        { name: 'Home', link: '/' },
        { name: 'Blog', link: '/blog' },
    ];

    return (
        <header className="bg-slate-800 text-white shadow-md mb-4">
            <nav className="container mx-auto px-6 py-4">
                <div className="grid grid-cols-3 items-center w-full">
                    <div className="flex justify-start font-bold text-xl">Jannic Holzer</div>
                    <div className="flex justify-center space-x-4 text-xl">
                        {
                            NavPages.map(page => (
                                <Link
                                    key={page.name}
                                    to={page.link}
                                    className="
                                        text-white
                                        hover:text-blue-500
                                        hover:underline
                                        transition
                                        duration-300
                                        ease-in-out
                                    "
                                >
                                    {page.name}
                                </Link>
                            ))
                        }
                    </div>
                    <div className="flex justify-end space-x-4">
                        <a href="https://github.com/jmholzer">
                            <img src={ghLogo} alt="GitHub" className="h-6" />
                        </a>
                        <a href="https://linkedin.com/in/jannic-holzer/">
                            <img src={liLogo} alt="LinkedIn" className="h-6" />
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;