"use client";
import { useEffect, useState } from "react";
import Header from "@/app/components/Header/Header";
import MobileMenu from "@/app/components/MobileMenu/MobileMenu";
import Footer from "@/app/components/Footer/Footer";
import { GetBlog } from "../endpoints/api";
import { useRouter } from 'next/navigation';
import Cookies from "universal-cookie";
import './blog.scss';
import Head from 'next/head';
import Layout from "../layout";


function Blogs() {
  const [menuToggler, setMenuToggler] = useState<boolean>(false);
  const [blogData, setBlogData] = useState<any>(null);
  const moment = require("moment");

  const cookies = new Cookies();

  const router = useRouter();

  const handleBlogClick = (blog: any) => {
    router.push(`/blog-posts/${blog.id}`);
    cookies.set('blog', blog);
    return;
  };


  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const data = await GetBlog();
        
        if (data) {
        }
        setBlogData(data.body);
        console.log(data.body);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogData();
  }, []); 

  
  return (
    <>
    <Layout
        title='fraktional'  description="hhhhh" type="dddd"
      >
    
      <Header
        menuTogglerFunction={setMenuToggler}
        menuTogglerValue={menuToggler}
      />

      <MobileMenu menuToggler={menuToggler} />

      <main id="content" role="main" className="pt-40 pb-20">

        <a></a>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4" style={{padding: '5%'}}>

            {Array.isArray(blogData) && blogData.map((data: any, index: number) => (
          <a
          className="blogcard"  
          onClick={handleBlogClick}
          href={`/blog-posts/${data.id}`}> 
          <img
            className=" max-w-full rounded-lg" 
            style={{height: '300px', width: '100%'}}
            src={data.jetpack_featured_media_url}
            alt=""
          />

            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                    <a
                     
                      className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
                    >

                    <h3 className="mb-5" style={{color: '#252525'}}
                    dangerouslySetInnerHTML={{__html: `${data.title.rendered.substring(0,60)} ${data.title.rendered.length>60?'...':''}`}}
                                />
                      {/* {data.title.rendered.substring(0,40)} */}
                    </a>
                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm ">
                      <p className="mb-5" style={{color: '#252525'}}
                            dangerouslySetInnerHTML={{__html: `${data.content.rendered.substring(0,200)} ${data.content.rendered.length>200?'...':''}`}}
                                  />
                    </p>
                    <p className="mt-3 text-sm text-blue-500">{ moment(data.date).format("DD/MM/YYYY")}</p>
                  </div>
              </a>
          ))}
  

        </div>

      <div>
     
      </div>
      </main>

      <Footer />
      </Layout>
    </>
  );
}

export default Blogs;
