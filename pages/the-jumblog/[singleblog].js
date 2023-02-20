import Head from "next/head";
import Navbar from "layout/navbar/Navbar";
import HomeBlogs from "components/blogs/homeBlogs/HomeBlogs";
import { homeBlogData } from "data/blogData";
import Footer from "layout/footer/Footer";
import { Fragment } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Bars from "common/bars/Bars";
import { homeNavBarData } from "data/barData";
import Breadcrumbs from "common/breadcrumbs/Breadcrumbs";
import BlogDetail from "components/blogDetail/BlogDetail";
import { useState } from "react";

function Home({ poplulateHomeBlogData }) {
  const router = useRouter();
  const { i18n } = useTranslation();
  const { locale, asPath } = router;

  const [singleBlog, setSingleBlog] = useState([]);

  useEffect(() => {
    // if (locale) {
    //   i18n.changeLanguage(locale);
    // }
    getSingleBlog();
  }, [locale]);

  const getSingleBlog = () => {
    poplulateHomeBlogData?.forEach((blog) => {
      if (blog.link === asPath) {
        setSingleBlog(blog);
        return;
      }
    });
  };

  const breadcrumbsLinks = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "The Jumblog", link: "/the-jumblog" },
    { id: 3, title: "News", link: "/the-jumblog/news" },
    {
      id: 4,
      title: "why sustainable beautiful is here to stay",
      link: "/the-jumblog/why-sustainable-beautiful-is-here-to-stay",
    },
  ];

  return (
    <Fragment>
      <Head>
        <title>JUMBLE | The Jumblog </title>
      </Head>
      <Navbar />
      <Bars barData={homeNavBarData} />
      <Breadcrumbs links={breadcrumbsLinks} />
      <BlogDetail blog={singleBlog} />
      <HomeBlogs homeBlogData={poplulateHomeBlogData} />
      <Footer />
    </Fragment>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      poplulateHomeBlogData: homeBlogData,
      ...(await serverSideTranslations(locale, ["common", "blogs"])),
    },
    revalidate: 60,
  };
}
export async function getStaticPaths() {
  const blogPaths = homeBlogData.map((blog) => blog.link);

  return {
    paths: blogPaths,
    fallback: true,
  };
}

export default Home;