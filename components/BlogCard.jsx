import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ blog }) => {
  return (
    <main className="bg-white rounded-xl">
      <div className="border border-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 pb-4">
        <Link href={`/blogs/${blog.slug}`}>
          <div className="relative w-full h-[250px]">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        </Link>

        <div className="px-4 ">
          <p className="text-sm text-gray-500 pt-2">{blog.date}</p>
          <Link href={`/blogs/${blog.slug}`}>
            <h2 className="pt-3 text-xl  h-[70px] font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300 line-clamp-2">
              {blog.title}
            </h2>
          </Link>
          <div
            className="text-sm text-gray-600 mt-2 line-clamp-3"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
          <p className="text-sm text-gray-700 mt-3 font-medium">
            By {blog.author}
          </p>

          <div className="mt-auto pt-4">
            <Link
              href={`/blogs/${blog.slug}`}
              className="text-blue-600 font-medium hover:underline"
            >
              Read More →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogCard;
