import React from 'react';
import BlogPost from './BlogPost';
import type { IBlogPost } from './BlogPost';

const Blog: React.FC = () => {
    const blogPosts: IBlogPost[] = [
        {
            title: "Managed Delta Tables with Kedro",
            description: "How to work with managed Delta tables in Databricks within your Kedro project.",
            link: "https://kedro.org/blog/managed-delta-tables-kedro-dataset",
            publishDate: new Date('2023-07-05')
        },
        {
            title: "Managed Delta Tables with Kedro",
            description: "How to work with managed Delta tables in Databricks within your Kedro project.",
            link: "https://kedro.org/blog/managed-delta-tables-kedro-dataset",
            publishDate: new Date('2023-07-05')
        },
    ]
    return (
        <div className="flex flex-col items-center h-screen">
            {
                blogPosts.map((blogPost: IBlogPost) => {
                    return (
                        <BlogPost
                            title={blogPost.title}
                            description={blogPost.description}
                            link={blogPost.link}
                            publishDate={blogPost.publishDate}
                        />
                    );
                })
            }
        </div>
    );
};

export default Blog;
