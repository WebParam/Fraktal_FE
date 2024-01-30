'use client'
import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";
import MobileMenu from "@/app/components/MobileMenu/MobileMenu";
import { GetBlog } from "@/app/endpoints/api";
import Layout from "@/app/layout";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import '../[id]/style.css';

import koala from '../../../assets/additional/koala.png';
import moment from "moment";


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
              setBlogs(data.body);
              
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

      

    

      const blogExclCurrrent = blogs.filter(x=>x.id!==parseInt(id));

      
      return (

       
             <>
                <Layout
                  title={ `Fraktional Blog #${blog?.title?.rendered}`}
                  description={blog?.excerpt?.rendered.replace(/<\/?[^>]+(>|$)/g, '').substring(0,200)} 
                  type="blog" 
                  // ogImage={blog?.jetpack_featured_media_url}
                  ogImage={koala.src}
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
                    marginTop: "5%",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
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

                <div className="lastsection1">
                  <div  className="lastsection" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <div style={{display: 'flex', justifyContent: 'space-between', width: '90%', flexWrap: 'wrap' }}>
                          <p style={{color: "#000", fontFamily: "Poppins", fontSize: 27, fontStyle: "normal", fontWeight: 500, lineHeight: "normal"}} >
                              Looking to get an Fgig?
                          </p>

                            <a href="/fraktional-gig" style={{ width: 181, color: 'white', height: 59, backgroundColor: '#FD2DC3', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >Sign Up</a>
                      </div>
                  </div>
                </div>
               

                <div style={{display: 'flex', width: '100%', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                  <h3 style={{width: '65%'}}>Read more articles</h3>
                  {Array.isArray(blogExclCurrrent) &&
                  <div style={{ width: '80%', display: 'flex', gap: '10px', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', paddingTop: '3%', paddingBottom: '10%', color: 'white'}}>
                          {blogExclCurrrent.slice(0, 4).map((blogExclCurrrent: any, index: number) => (
                               <a href={`/blog-posts/${blogExclCurrrent.id}`}>
                                   <div key={index} style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.35) 100%), url(${blogExclCurrrent.jetpack_featured_media_url}), lightgray 50% / cover no-repeat`, backgroundPosition: 'center', backgroundSize: 'cover',  width: '225px', height: '240px', borderRadius:'13px', display: 'flex', flexDirection: 'column', justifyContent: 'end', padding: '10px'}}>
                                    <p style={{color: "#FFF", fontFamily: "Avenir", fontSize: 18, fontStyle: "normal", fontWeight: 500, lineHeight: "normal"}}>
                                        {blogExclCurrrent.title.rendered.substring(0, 50)}
                                    </p>
                                    <p style={{color: 'white'}}>{moment(blogExclCurrrent.date).format('DD/MM/YYYY')}</p>
                                </div>
                               </a>
                            ))}
                        </div>
}

                    

                </div>

             
                <Footer />
                </div>
                </Layout>
             </>
           
      )
}