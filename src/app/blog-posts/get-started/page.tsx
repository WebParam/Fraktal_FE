"use client";
import Image from "next/image";
import React, { useState } from "react";
import AI_Image from "../../../assets/img/blog-posts/artificial-intelligence.jpg";
import Header from "@/app/components/Header/Header";
import MobileMenu from "@/app/components/MobileMenu/MobileMenu";
import "./page.css";
import Footer from "@/app/components/Footer/Footer";

function GetStarted() {
  const [menuToggler, setMenuToggler] = useState<boolean>(false);

  return (
    <>
      <Header
        menuTogglerFunction={setMenuToggler}
        menuTogglerValue={menuToggler}
      />

      <MobileMenu menuToggler={menuToggler} />

      <main id="content" role="main">
        <div className="get-started-container">
          <Image
            className="get-started_img"
            src={AI_Image}
            alt="image"
            width={400}
            height={100}
          />
          <div className="get-started_text-container">
            <h3 className="get-started_text-header">
              How to get started in Tech in 2024
            </h3>
            <p>18 Jan 2024</p>
          </div>
          <p className="get-started_text" style={{marginTop:"4rem"}}>
            Lorem ipsum dolor sit amet consectetur. Ut mi feugiat proin
            phasellus dignissim nunc senectus. Viverra quis maecenas nibh
            convallis in purus sit viverra. Ultricies volutpat nunc aliquam sit
            nullam id interdum nulla orci. Volutpat elementum sed facilisi sed
            vulputate risus ut duis. Maecenas morbi duis sed scelerisque quis
            nulla eleifend est pharetra. Sollicitudin ut in magna amet.
            Vulputate adipiscing convallis consectetur praesent dolor erat massa
            nunc rhoncus. Faucibus hac ac hendrerit egestas et ut bibendum
            blandit. Faucibus turpis nulla ac etiam urna.
          </p>
          <p className="get-started_text">
            Sagittis ac enim eleifend diam pellentesque ornare amet ullamcorper
            id. Proin leo eget laoreet praesent diam nunc non. Commodo luctus
            quam morbi urna lectus proin sapien arcu. Adipiscing bibendum sed at
            tristique tristique. Eget velit quisque eu sit nisl mauris nec.
            Malesuada imperdiet proin amet gravida mi volutpat. Eget faucibus
            potenti non enim. Et imperdiet amet enim nibh. Nisl convallis donec
            at habitasse fermentum. In turpis ut sodales nunc elementum fusce in
            ut. Accumsan eu blandit mauris dictum mauris eget ut. Nullam mus sit
            in hendrerit et eu dictum diam. Integer purus nunc pretium id.
            Tortor enim non enim sagittis facilisis libero. Sed elementum
            aliquam ullamcorper imperdiet sem turpis. Sollicitudin leo aliquam
            auctor libero. Hac sem venenatis eget bibendum dui varius metus
            felis.
          </p>
          <p className="get-started_text">
            Id blandit congue tincidunt odio purus eu vulputate consectetur.
            Aliquam in sit eu scelerisque. Felis auctor porta eget in diam
            tortor aliquam. Integer in venenatis phasellus purus. Blandit
            aliquet id facilisi et donec mauris ac. Est eu nec ultricies
            ullamcorper non neque consequat sit. Tincidunt tristique elit velit
            luctus scelerisque enim lobortis varius. Cursus sit sagittis pretium
            faucibus adipiscing. Morbi et nec tristique iaculis ut sit auctor
            ornare.
          </p>
          <p className="get-started_text">
            Quam aliquam sagittis viverra nunc sed arcu feugiat tempor. Pharetra
            egestas mattis id fermentum. Nec ultricies ut proin odio. Sit
            facilisis iaculis elementum risus et felis venenatis eu eget. Ante
            sem lectus mauris libero vitae varius est nam viverra. Mauris cursus
            posuere penatibus tortor. Amet sit bibendum eget et quam amet augue.
            Felis pellentesque tincidunt ut tempus morbi tellus pulvinar diam
            eget. Aenean at pellentesque cursus dolor facilisis. Enim amet amet
            amet non. Aliquam et vitae a turpis quis. Enim donec tellus sem mi
            amet non aliquam quis pharetra.
          </p>

          <div className="sign-up_containerbox">
            <p className="sign-up_containerbox_firt-p">
              Looking to get an Fgig?
            </p>
            <p>
              <button>Sign Up</button>
            </p>
          </div>

          <h4>Read more articles</h4>
          <div className="articles">
            <div className="article">
            <Image
              className="article-img"
              src={AI_Image}
              alt="image"
              width={50}
              height={50}
            />
            <div className="article-img_text">
              <p>Quam aliquam </p>
              <span className="article-date">16 Jan 2024</span>
            </div>
          </div>
             <div className="article">
            <Image
              className="article-img"
              src={AI_Image}
              alt="image"
              width={50}
              height={50}
            />
            <div className="article-img_text">
              <p>Quam aliquam </p>
              <span className="article-date">16 Jan 2024</span>
            </div>
          </div>
          <div className="article">
            <Image
              className="article-img"
              src={AI_Image}
              alt="image"
              width={50}
              height={50}
            />
            <div className="article-img_text">
              <p>Quam aliquam </p>
              <span className="article-date">16 Jan 2024</span>
            </div>
          </div>
          <div className="article">
            <Image
              className="article-img"
              src={AI_Image}
              alt="image"
              width={50}
              height={50}
            />
            <div className="article-img_text">
              <p>Quam aliquam </p>
              <span className="article-date">16 Jan 2024</span>
            </div>
          </div>
            </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default GetStarted;

