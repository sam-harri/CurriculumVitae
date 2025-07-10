import { Link } from 'react-router-dom';
import { posts } from '../../data/posts';

const Blog = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900 mt-8 mb-4">From the Blog</h1>
      <p className="text-lg text-gray-500 mb-12">Short opinions on anything tech related.</p>
      <div className="space-y-12">
        {posts.map((post) => (
          <Link to={`/blog/${post.slug}`} key={post.slug} className="block border-b border-gray-200 pb-12 group no-underline hover:decoration-gray-500">
            <div className="flex items-center">
              <div className="w-1/3">
                <img src={post.image} alt={post.title} className="w-full h-auto object-cover rounded-lg" />
              </div>
              <div className="w-2/3 pl-8">
                <p className="text-sm text-gray-500 mb-2 hover:text-gray-500 hover:underline decoration-gray-500">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <h2 className="text-3xl font-bold text-gray-900 mb-2 group-hover:underline">
                  {post.title}
                </h2>
                <p className="text-xl text-gray-500 hover:text-gray-500 hover:underline decoration-gray-500">{post.subtitle}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
