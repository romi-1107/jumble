import Head from "next/head";
import Navbar from "layout/navbar/Navbar";
import Header from "layout/header/Header";
import HeaderText from "common/headerText/HeaderText";
import Banner from "common/banner/Banner";
import HomeProducts from "components/products/homeProducts/HomeProducts";
import TextList from "common/textList/TextList";
import HomeBlogs from "components/blogs/homeBlogs/HomeBlogs";
import { homeBlogData } from "data/blogData";
import Footer from "layout/footer/Footer";
import { supportData } from "data/supportData";
import { faqData } from "data/faqData";
import { Fragment } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Bars from "common/bars/Bars";
import { homeNavBarData } from "data/barData";

function Home({ poplulateHomeBlogData }) {
  const router = useRouter();
  const { locale } = router;
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <Fragment>
      <Head>
        <title>JUMBLE | The livestream shopping</title>
      </Head>
      <Navbar />
      <Bars barData={homeNavBarData} />
      <Header headerText="Have fun, live SHOPPING" />
      <HeaderText />
      <Banner bannerText="Upcoming Sales" />
      <HomeProducts />
      <Banner bannerText="The Jumblog" />
      <HomeBlogs homeBlogData={poplulateHomeBlogData} />
      <Banner bannerText="Support" />
      <TextList data={supportData} />
      <Banner bannerText="FAQS" />
      <TextList data={faqData} />
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
export default Home;
