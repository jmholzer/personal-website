import React from 'react';
import ghLogo from '../assets/icons/github.svg';

const Footer: React.FC = () => {
    return (
        <footer className="mt-auto bg-slate-800">
            <div className="flex justify-center space-x-4 items-center">
                <p className="text-white text-xl text-sm text-center">
                    This site is available under the MIT license
                </p>
                <a href="https://github.com/jmholzer">
                    <img src={ghLogo} alt="GitHub" className="h-6" />
                </a>
                <div className="mb-24" />
            </div>
        </footer>
    );
};

export default Footer;
