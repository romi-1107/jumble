import React from "react";
import styles from "./ArticleItem.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { ArticleTags } from "components/tags/articleTags/ArticleTags";
import { ArticleHeading } from "common/articleHeading/ArticleHeading";

export function ArticleItem({
  id,
  img,
  date,
  type,
  title,
  detail,
  tags,
  link,
}) {
  const { t } = useTranslation("articles");

  const {
    articleItemTagWrapper,
    dateContainer,
    articleItemContainer,
    articleItemDetail,
    greenBg,
    blueBg,
    articleItemImgContainer,
  } = styles;

  const typeBg = type === "editorials" ? blueBg : greenBg;

  return (
    <div className={`${articleItemContainer} ${typeBg}`}>
      <div className={articleItemDetail}>
        <Link href={link}>
          <div className={`${dateContainer}`}>
            <p>{date}</p>
            <p>{type}</p>
          </div>
          <ArticleHeading heading={t(title)} />
          <h2>{t(detail)}</h2>
        </Link>
        <div className={articleItemTagWrapper}>
          <ArticleTags tags={tags} />
        </div>
      </div>
      <Link href={link} className={articleItemImgContainer}>
        <Image src={img} alt="article-img" priority={id === 1} />
      </Link>
    </div>
  );
}
