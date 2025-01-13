import Image from "next/image";
import React from "react";

interface BlogProps {
  imgSrc: string;
  title: string;
  name: string;
  src: string;
  avatar: string;
  category: string;
  text: string;
  date: string;
}

const blogs: BlogProps[] = [
  {
    imgSrc: "/assets/images/cool_feat.png",
    title: "Cool feature title",
    avatar: "/assets/images/blog_avatar_1.png",
    name: "Chandler Bing",
    category: "Category",
    date: "November 22, 2021",
    text: "Pitch termsheet backing validation focus release.",
    src: "#services",
  },
  {
    imgSrc: "/assets/images/blog_image_2.png",
    title: "Even cooler feature",
    avatar: "/assets/images/blog_avatar_2.png",
    name: "Rachel Green",
    category: "Category",
    date: "November 22, 2021",
    text: "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
    src: "#services",
  },
  {
    imgSrc: "/assets/images/blog_image_3.png",
    title: "Cool feature title",
    avatar: "/assets/images/blog_avatar_3.png",
    name: "Monica Geller",
    category: "Category",
    date: "November 22, 2021",
    text: "Beta prototype sales iPad gen-z marketing network effects value proposition",
    src: "#services",
  },
];

const BlogHome = () => {
  return (
    <section className="text-black py-20 font-sans">
      <div className="max-w-[1200px] mx-auto text-center">
        <h4 className="text-xl text-[#777777]">Our Blog</h4>
        <h2 className="text-5xl leading-[72px] font-manrope mt-3 mb-14 max-w-[842px] mx-auto">
          Value proposition accelerator product management venture
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 justify-between mb-20">
          {blogs.map((blog, index) => (
            <article
              className="p-8 md:p-0 flex flex-col gap-y-4 text-left"
              key={index}
            >
              <div className="w-full h-48 relative rounded-xl overflow-hidden mb-4">
                <Image
                  src={blog.imgSrc}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (min-width: 768px) 33vw"
                />
              </div>

              <p className="text-[#777777] mb-1">
                <span className="font-bold text-primary mr-4">
                  {blog.category}
                </span>
                {blog.date}
              </p>

              <h3 className="text-xl mb-4">{blog.text}</h3>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-8 h-8 relative rounded-full overflow-hidden">
                  <Image
                    src={blog.avatar}
                    alt={blog.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p>{blog.name}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="flex items-center justify-center mt-4 font-bold text-xl">
          <button className="px-14 py-4 border-2 border-primary text-primary rounded-full hover:bg-gray-100">
            Load more
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogHome;
