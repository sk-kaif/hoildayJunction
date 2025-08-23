import dummyBlogs from '@/utils/dummyBlogs';
import BlogDetail from '@/components/BlogDetail';

const BlogDetailPage = async ({ params }) => {
  const { slug } = await params; // ✅ Await params first

  const blog = dummyBlogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="text-center py-20 text-red-500 text-lg">
        Blog not found.
      </div>
    );
  }

  return <BlogDetail blog={blog} />;
};

export default BlogDetailPage;
