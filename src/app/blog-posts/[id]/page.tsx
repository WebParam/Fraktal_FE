'use client'
import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";
import MobileMenu from "@/app/components/MobileMenu/MobileMenu";
import { GetBlog } from "@/app/endpoints/api";
import Layout from "@/app/layout";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";

import koala from '../../../assets/additional/koala.png';


export default function BlogPost() {
    const [blogs, setBlogs] = useState<any[]>([]);
    const [blog, setBlog] = useState<any>({});
    const { id } = useParams();
    const [menuToggler, setMenuToggler] = useState<boolean>(false);
    console.log('id is alive', id)

    useEffect(() => {
        const fetchBlogData = async () => {
            try {
              const data = await GetBlog();
              
              if (data && data.body) {
                const item = data.body.find((blog:any) => blog.id === Number(id));
                if (item) {
                  console.log(item);
                  setBlog(item);
                } else {
                  console.error(`Blog post with id ${id} not found.`);
                }
              }
            } catch (error) {
              console.error("Error fetching blog data:", error);
            }
          };
              
        fetchBlogData();
      }, []); 



      return (

       
             <>
                <Layout
                  title={ `Fraktional Blog #${blog?.title?.rendered}`}
                  description={blog?.excerpt?.rendered.replace(/<\/?[^>]+(>|$)/g, '').substring(0,200)} 
                  type="blog" 
                  // ogImage={blog?.jetpack_featured_media_url}
                  ogImage={koala}
                >
                   <div>
             <Header
        menuTogglerFunction={setMenuToggler}
        menuTogglerValue={menuToggler}
      />

      <MobileMenu menuToggler={menuToggler} />

           <div className="" style={{paddingTop: '10%', paddingLeft: '15%', paddingRight: '15%'}}>

            <div  
                style={{
                    position: "relative",
                    paddingLeft: "15%",
                    paddingRight: "15%",
                    height: 400,
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(${blog?.jetpack_featured_media_url})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    borderRadius: "20px",
                    marginBottom: "5%",
                    marginTop: "5%"
                  }}

                  className="flex items-center justify-center text-center"
            >
                 <h1 className="text-white"
                dangerouslySetInnerHTML={{__html: blog?.title?.rendered}}             
                  />

             </div>
           
          
           
            {/* {blog?.content?.rendered} */}
                <div className="mb-10"
                    dangerouslySetInnerHTML={{__html: blog?.content?.rendered}}
                                />
                </div>
                <Footer />
                </div>
                </Layout>
             </>
           
      )
}