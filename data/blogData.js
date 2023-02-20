import Blog1 from "../assets/blogs/blog-1.webp";
import Blog2 from "../assets/blogs/blog-2.webp";
import Blog3 from "../assets/blogs/blog-3.webp";
import Blog4 from "../assets/blogs/blog-4.webp";
import Blog5 from "../assets/blogs/blog-5.webp";
import Blog6 from "../assets/blogs/blog-6.webp";
import Blog7 from "../assets/blogs/blog-7.webp";
import Blog8 from "../assets/blogs/blog-8.webp";
import Blog9 from "../assets/blogs/blog-9.webp";
import Blog10 from "../assets/blogs/blog-10.webp";

export const homeBlogData = [
  {
    id: 1,
    blogImg: Blog1,
    date: "NOVEMBER 9, 2022",
    type: "news",
    by: "auther1",
    title: "blog_1_title",
    link: "/the-jumblog/why-sustainable-beautiful-is-here-to-stay",
    detail: "blog_1_detail",
    tags: [
      { id: 1, tag: "beauty", url: "/tag/beauty" },
      { id: 2, tag: "eco", url: "/tag/eco" },
      { id: 3, tag: "green", url: "/tag/green" },
      { id: 4, tag: "beauty industry", url: "/tag/beauty-industry" },
    ],
    completeBlog: [
      {
        id: 1,
        para: "blog_1_para_1",
        heading: null,
        embedUrl: "https://www.instagram.com/p/Cj2OgQ0riVP",
        matchTexts: [
          {
            id: 1,
            matchText: "blog_1_para_1_matchText_1",
            linkText: "blog_1_para_1_linkText_1",
            linkTo: "/the-jumblog",
          },
        ],
      },
      {
        id: 2,
        para: "blog_1_para_2",
        heading: "La bouche rouge",
        embedUrl: "https://www.instagram.com/p/CksXGn_sMm0",
        matchTexts: [
          {
            id: 1,
            matchText: "blog_1_para_2_matchText_1",
            linkText: "blog_1_para_2_linkText_1",
            linkTo: "/the-jumblog/lipstick",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    blogImg: Blog2,
    date: "NOVEMBER 2, 2022",
    type: "news",
    by: "auther2",
    title: "CHOOSING THE RIGHT EYESHADOW FOR YOUR EYE COLOUR",
    link: "/the-jumblog/choosing-the-right-eyeshadow-for-your-eye-colour",
    detail:
      "Just like finding the perfect foundation, you want to take your complexion into account when choosing the right eyeshadow for you. It all starts by finding the shade that perfectly complements your eye colour. Your eyes are the window to your soul, and you want to do accentuate them in every makeup look. Everything from your choice of mascara to eyeshadow and liner can transform your makeup look. We’re deep diving into the world of eyeshadows to help you find the perfect shade for your eye colour.",
    tags: [
      { id: 1, tag: "make up", url: "/tag/make-up" },
      { id: 2, tag: "genz", url: "/tag/gen-z" },
      { id: 3, tag: "colore", url: "/tag/colore" },
    ],
  },
  {
    id: 3,
    blogImg: Blog3,
    date: "OCTOBER 25, 2022",
    type: "news",
    by: "auther3",
    title: "TOP 10 MOST POPULAR MAKEUP INFLUENCERS ON TIKTOK",
    link: "/the-jumblog/top-10-most-popular-makeup-influencer-on-tiktok",
    detail:
      "There are so many makeup influencers on TikTok nowadays, that it can be hard to decide who you want to follow. Of course, you can follow more than one makeup influencer, but it can be nice to have an overview of which influencers are the most popular. That’s why we made a list of the top 10 most popular makeup influencers on TikTok.",
    tags: [
      { id: 1, tag: "Tiktok", url: "/tag/tiktok" },
      { id: 2, tag: "makeup", url: "/tag/make-up" },
      { id: 3, tag: "social", url: "/tag/social" },
      { id: 4, tag: "trends", url: "/tag/trends" },
    ],
  },
  {
    id: 4,
    blogImg: Blog4,
    date: "OCTOBER 11, 2022",
    type: "news",
    by: "auther4",
    title: "BEST VIRAL TIKTOK BEAUTY PRODUCTS",
    link: "/the-jumblog/best-viral-tiktok-beauty-products",
    detail:
      "There are so many beauty products and brands that you sometimes can simply no longer keep track. If you are searching for a new beauty product, TikTok is a great platform to do some research on. Loads of beauty influencers give you the best advice and that results in some great, viral beauty products. We’ve listed some of the best, so you have a nice overview of the best viral TikTok beauty products there are.",
    tags: [
      { id: 1, tag: "Tiktok", url: "/tag/tiktok" },
      { id: 2, tag: "social", url: "/tag/social" },
      { id: 3, tag: "beauty", url: "/tag/beauty" },
      { id: 4, tag: "makeup", url: "/tag/make-up" },
    ],
  },
  {
    id: 5,
    blogImg: Blog5,
    date: "SEPTEMBER 6, 2022",
    type: "news",
    by: "auther5",
    title: "10 BEAUTY INFLUENCERS TO FOLLOW ON INSTAGRAM",
    link: "/the-jumblog/10-beauty-influencer-to-follow-on-instagram",
    detail:
      "Do you ever find yourself going for a late-night scroll through your Instagram? If you’re in need of some inspiration to take your makeup to the next level, look no further than Instagram. We’re sharing 13 beauty influencers that deserve a spot on your follow list. Each offer something different and can help you find the perfect makeup routine for you.",
    tags: [
      { id: 1, tag: "social", url: "/tag/social" },
      { id: 2, tag: "beauty", url: "/tag/beauty" },
      { id: 3, tag: "beauty care", url: "/tag/beauty-care" },
    ],
  },
  {
    id: 6,
    blogImg: Blog6,
    date: "AUGUST 30, 2022",
    type: "news",
    by: "auther6",
    title: "WHAT ARE THE TIKTOK MAKEUP HACKS?",
    link: "/the-jumblog/what-are-the-tiktok-makeup-hacks",
    detail:
      "Loads of people love to do makeup. It can give you that extra glow or it can give you a little bit more confidence. Another great thing about makeup, is that you can keep learning new tips and tricks. An amazing platform to learn these things is TikTok. All the amazing TikTok makeup influencers love to share their favourite hacks and that doesn’t stay unnoticed. We have search for some of these amazing hacks and we’ve put them in a list, so that you can try them all out yourself.",
    tags: [
      { id: 1, tag: "Tiktok", url: "/tag/tiktok" },
      { id: 2, tag: "social", url: "/tag/social" },
      { id: 3, tag: "beauty", url: "/tag/beauty" },
      { id: 4, tag: "makeup", url: "/tag/make-up" },
    ],
  },
  {
    id: 7,
    blogImg: Blog7,
    date: "AUGUST 16, 2022",
    type: "news",
    by: "auther7",
    title: "MEET OUR NEW GO-TO TIKTOK MAKEUP TUTORIAL",
    link: "/the-jumblog/meet-our-new-go-to-tiktok-makeup-toturial",
    detail:
      "When we need a new makeup look, we head straight to TikTok. We love that the short videos give you everything you need to create a makeup look without spending 30-minutes watching a tutorial. One of our favourite go-to TikTok tutorials is less than 60 seconds. In the same time that it takes to mobile order your Starbucks drink, you can discover a whole new makeup look.",
    tags: [
      { id: 1, tag: "Tiktok", url: "/tag/tiktok" },
      { id: 2, tag: "makeup", url: "/tag/make-up" },
      { id: 3, tag: "trends", url: "/tag/trends" },
      { id: 4, tag: "social", url: "/tag/social" },
    ],
  },
  {
    id: 8,
    blogImg: Blog8,
    date: "AUGUST 2, 2022",
    type: "news",
    by: "auther8",
    title: "THE HOTTEST TIKTOK TRENDS FOR SUMMER 2022",
    link: "/the-jumblog/the-hottest-tiktok-trends-for-summer-2022",
    detail:
      "Summer 2022 is all about TikTok trends . Whatever you think of TikTok, it’s clear that the social media platform is dominating trends everywhere we look. Thanks to TikTok, we’ve all embraced the idea of DIY fashion and beauty tips and tricks. Whether it was teaching you how to do curtain bangs or tie-dye your old loungewear, TikTok is responsible for the must-follow fashion trends of summer 2022. If you’re building your summer closet or want to try a new beauty trend, TikTok is setting the style for summer 2022. Our guide to the hottest TikTok trends tells you all you need to know for summer 2022. Read on to get a taste of the biggest trends that are right around the corner.",
    tags: [
      { id: 1, tag: "Tiktok", url: "/tag/tiktok" },
      { id: 2, tag: "trends", url: "/tag/trends" },
      { id: 3, tag: "outfits", url: "/tag/outfits" },
      { id: 4, tag: "apparel", url: "/tag/apparel" },
    ],
  },
  {
    id: 9,
    blogImg: Blog9,
    date: "JULY 19, 2022",
    type: "news",
    by: "auther9",
    title: "THE TIKTOK FASHION TRENDS EVERY INFLUENCER IS WEARING RIGHT NOW",
    link: "/the-jumblog/the-tiktok-fashion-trends-every-influencer-is-wearing-right-now",
    detail:
      "Before the pandemic, most of us thought of TikTok as an app where Gen Z did dance routines. Flash forward a year, and the social media app is dominating everything from the music industry to fashion trends. It’s brought around the popularity of tie-dye, brought aesthetics like cottagecore into the mainstream, and even cancelled skin jeans. If you take a scroll through your ‘for you page’ on the app, you’re guaranteed to come across a few familiar trends. With big-name influencers (and celebrities!) jumping onto TikTok to capitalise on their popularity, it’s not surprising to see that some of them are embracing the TikTok fashion trends.",
    tags: [
      { id: 1, tag: "social", url: "/tag/social" },
      { id: 2, tag: "trends", url: "/tag/trends" },
      { id: 3, tag: "fashion", url: "/tag/fashion" },
      { id: 4, tag: "apps", url: "/tag/apps" },
      { id: 5, tag: "style", url: "/tag/style" },
      { id: 6, tag: "TikTok", url: "/tag/tiktok" },
    ],
  },
  {
    id: 10,
    blogImg: Blog10,
    date: "JULY 5, 2022",
    type: "news",
    by: "auther10",
    title: "TIKTOK FASHION TRENDS EVERYONE'S OBSESSED WITH",
    link: "/the-jumblog/tiktok-fashion-trends-everyone-obsessed-with",
    detail:
      "TikTok is an app most of us swore to stay away from before the pandemic. A lot can change in a year. It’s now an app we look at before even checking out Instagram or Twitter. The app, which is dominated by Generation Z and Millennials, has come to dominate the fashion trends. Who would have thought the app would have the power to cancel skinny jeans? We’re rounding up a few of our favourite fashion trends from TikTok that everyone is obsessed with.",
    tags: [
      { id: 1, tag: "fashion", url: "/tag/fashion" },
      { id: 2, tag: "genz", url: "/tag/genz" },
      { id: 3, tag: "social", url: "/tag/social" },
      { id: 4, tag: "style", url: "/tag/style" },
      { id: 5, tag: "apps", url: "/tag/apps" },
    ],
  },
];
