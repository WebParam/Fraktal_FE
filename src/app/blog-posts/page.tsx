"use client";
import { useEffect, useState } from "react";
import Header from "@/app/components/Header/Header";
import MobileMenu from "@/app/components/MobileMenu/MobileMenu";
import Footer from "@/app/components/Footer/Footer";
import { GetBlog } from "../endpoints/api";
import { useRouter } from 'next/navigation';
import Cookies from "universal-cookie";
import './blog.scss';
import Layout from "../layout";


function Blogs() {
  const [menuToggler, setMenuToggler] = useState<boolean>(false);
  const [blogData, setBlogData] = useState<any>(null);
  const moment = require("moment");

  const cookies = new Cookies();

  const router = useRouter();

  const handleBlogClick = (blog: any) => {
    router.push(`/blog-posts/${blog.id}`);
    // cookies.set('blog', blog);
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
         {/* Heading */}
         <div className="mb-5 mb-md-10" style={{textAlign:"center"}}>
                    <h1 className="display-4" style={{color: '#4B4C4E'}}>News & Blog</h1>
                    <p className="lead">Keep up to date with the latest news and developments.</p>
                </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4" >


        </div>

      <div>
      <div className="overflow-hidden" style={{padding: '5%'}}>
        <div className="row gx-lg-7">
          {Array.isArray(blogData) &&
            blogData.map((data: any, index: number) => (
              <div key={index} className="col-sm-6 col-lg-4 mb-5">
                {/* Card */}
                <a
                  
                  href={`/blog-posts/${data.id}`}
                  className="card card-flush h-100"
                  data-aos="fade-up"
                >
                  <img
                    style={{ height: '300px', width: '100%' }}
                    className="card-img"
                    src={data.jetpack_featured_media_url}
                    alt="Image Description"
                  />
                  <div className="card-body">
                    <span className="card-subtitle text-body">Read the blog</span>
                    <h3
                      className="card-title"
                      style={{ color: '#252525' }}
                      dangerouslySetInnerHTML={{
                        __html: `${data.title.rendered.substring(0, 50)} ${
                          data.title.rendered.length > 60 ? '...' : ''
                        }`,
                      }}
                    />

                    <p className="card-text text-body">
                      <p
                        className="mb-5"
                        style={{ color: '#252525' }}
                        dangerouslySetInnerHTML={{
                          __html: `${data.content.rendered.substring(0, 200)} ${
                            data.content.rendered.length > 200 ? '...' : ''
                          }`,
                        }}
                      />
                    </p>
                    <p className="mt-3 text-sm text-blue-500">
                      {moment(data.date).format('DD/MM/YYYY')}
                    </p>
                  </div>
                </a>
                {/* End Card */}
              </div>
            ))}
        </div>
  {/* End Row */}
</div>

      </div>
      </main>

      <Footer />
      </Layout>
    </>
  );
}

export default Blogs;
