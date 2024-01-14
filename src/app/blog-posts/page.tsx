"use client";
import { useEffect, useState } from "react";
import Header from "@/app/components/Header/Header";
import MobileMenu from "@/app/components/MobileMenu/MobileMenu";
import Footer from "@/app/components/Footer/Footer";
import { GetBlog } from "../endpoints/api";

function Blogs() {
  const [menuToggler, setMenuToggler] = useState<boolean>(false);
  const [blogData, setBlogData] = useState<any>(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const data = await GetBlog();
        setBlogData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  
  return (
    <>
      <Header
        menuTogglerFunction={setMenuToggler}
        menuTogglerValue={menuToggler}
      />

      <MobileMenu menuToggler={menuToggler} />

      <main id="content" role="main">
        <section className="bg-white dark:bg-gray-900">
            <ul>
            {Array.isArray(blogData) && blogData.map((data: any, index: number) => (
              <div key={index} className="container px-6 py-10 mx-auto">
                <div className="text-center">
                </div>
                <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
                  <div>
                    <img
                      className="relative z-10 object-cover w-full rounded-md h-96"
                      src={data.jetpack_featured_media_url}
                      alt=""
                    />
                    <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                      <a
                        href="#"
                        className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
                      >
                        {data.title.rendered.substring(0,40)}
                      </a>
                      <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                        veritatis sint autem nesciunt, laudantium quia tempore delect
                      </p>
                      <p className="mt-3 text-sm text-blue-500">21 October 2019</p>
                    </div>
                  </div>
      
                  </div>
                  
                </div>
          ))}
            </ul>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Blogs;
