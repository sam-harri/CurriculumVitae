import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Helmet } from 'react-helmet';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { posts } from '../../data/posts';

interface Post {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  date: string;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [postContent, setPostContent] = useState('');
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const currentPost = posts.find((p) => p.slug === slug);
    setPost(currentPost || null);

    if (currentPost) {
      fetch(`/posts/${slug}.md`)
        .then((response) => response.text())
        .then((text) => setPostContent(text))
        .catch((err) => console.error(err));
    }
  }, [slug]);

  if (!post) {
    return <div>Post not found</div>;
  }

  const imageName = post.image.split('/').pop()?.replace('.png', '') || slug;
  const ogImage = `/posts/images/${imageName}.png`;

  const components = {
    code({ node, inline, className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <div className="not-prose">
          <SyntaxHighlighter
            style={dracula}
            language={match[1]}
            PreTag="div"
            customStyle={{
              margin: '1.5rem 0',
              borderRadius: '0.5rem',
              fontSize: '0.875rem',
            }}
            {...props}
          >
            {String(children).replace(/\n$/, '')}
          </SyntaxHighlighter>
        </div>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Helmet>
            <title>{post.title}</title>
            <meta name="description" content={post.subtitle} />
            <meta property="og:title" content={post.title} />
            <meta property="og:description" content={post.subtitle} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:url" content={`https://samharrison.ca/blog/${slug}`} />
            <meta property="og:type" content="article" />
            <meta property="og:site_name" content="Sam Harrison - Portfolio" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={`${post.title} - ${post.subtitle}`} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={post.title} />
            <meta name="twitter:description" content={post.subtitle} />
            <meta name="twitter:image" content={ogImage} />
            <meta name="twitter:site" content="@samharrri" />
            <meta name="twitter:creator" content="@samharrri" />
          </Helmet>
          
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{post.title}</h1>
            <p className="text-xl text-gray-500 mb-4 no-underline hover:no-underline">{post.subtitle}</p>
            <p className="text-sm text-gray-500 mb-6">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
          
          <div className="prose prose-lg max-w-none text-justify [&_pre]:!bg-transparent [&_pre]:!p-0 [&_pre]:!border-0 [&_code]:!bg-transparent [&_code]:!p-0 [&_code]:!border-0">
            <ReactMarkdown components={components}>{postContent}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
