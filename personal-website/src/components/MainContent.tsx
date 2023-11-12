import React from 'react';
import headshot from '../assets/images/headshot.jpg';
import Introduction from './Introduction';

const MainContent: React.FC = () => {
    return (
        <main className="flex-grow container mx-auto px-6 py-8">
            <section className="flex flex-col items-center mb-8">
                <h1 className="text-3xl font-bold text-white mb-8">Jannic Holzer</h1>
                <img src={headshot} alt="Jannic Holzer" className="w-3/12 rounded-full mb-8" />
                <Introduction />
            </section>
        </main>
    );
};

export default MainContent;
