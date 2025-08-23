import Image from 'next/image';

const BlogDetail = ({ blog }) => {
  return (
    <div className="max-w-4xl mx-auto w-[90%]  py-10 md:py-16">
      <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>
      <h1 className="text-3xl font-bold text-gray-800 mt-6">{blog.title}</h1>
      <p className="text-sm text-gray-500 mt-2">
        By {blog.author} • {blog.date}
      </p>

      <div
        className="prose max-w-none blogContent"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
};

export default BlogDetail;
