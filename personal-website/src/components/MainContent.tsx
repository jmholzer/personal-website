import React from 'react';

const MainContent: React.FC = () => {
    return (
        <main className="container mx-auto px-6 py-8">
            <section className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Jannic Holzer</h1>
                <p className="mt-4 text-gray-700">
                    Hey, I'm Jannic. I'm a software engineer and I love building things for the web.
                </p>
                {/* Add more content or components as needed */}
            </section>
        </main>
    );
};

export default MainContent;
