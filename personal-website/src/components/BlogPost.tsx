import React from 'react';

interface IBlogPost {
    title: string;
    description: string;
    link: string;
    publishDate: Date;
}

const BlogPost: React.FC<IBlogPost> = ({ title, description, link, publishDate }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/3 bg-gray-700 p-4 rounded-lg cursor-pointer hover:bg-gray-600 transition-colors mb-2"
        >
            <h2 className="text-xl font-bold text-white text-left mb-2">{title}</h2>
            <p className="text-white text-left mb-2">{description}</p>
            <p className="text-white text-left">{publishDate.toLocaleDateString('en-GB')}</p>
        </a>
    );
};

export default BlogPost;
export type { IBlogPost };
