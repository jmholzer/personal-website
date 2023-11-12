interface IBlogPost {
    title: string;
    description: string;
    link: string;
    publishDate: Date;
    logo: string; // New prop for the logo URL
}

const BlogPost: React.FC<IBlogPost> = ({ title, description, link, publishDate, logo }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="
                flex
                items-center
                w-1/3
                bg-slate-800
                p-4
                rounded-lg
                cursor-pointer
                hover:bg-slate-900
                transition-colors
                mb-4
            "
        >
            <img src={logo} alt="logo" className="w-32 h-32 mr-4" />
            <div>
                <h2 className="text-xl font-bold text-white text-left mb-2">{title}</h2>
                <p className="text-white text-left mb-2">{description}</p>
                <p className="text-white text-left">{publishDate.toLocaleDateString('en-GB')}</p>
            </div>
        </a>
    );
};


export default BlogPost;
export type { IBlogPost };
