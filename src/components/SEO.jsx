import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";

const Seo = ({ title, description, author, keyWords, article, pathname }) => {
  const { site } = useStaticQuery(query);

  const {
    defaultTitle,
    defaultTitleTemplate,
    defaultDescription,
    defaultKeyWords,
    siteUrl,
    lang,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
    keyWords: keyWords || defaultKeyWords,
  };

  return (
    <Helmet
      title={seo.title}
      titleTemplate={defaultTitleTemplate}
      htmlAttributes={{ lang: lang }}
    >
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keyWords.join(", ")} />
      <link rel="canonical" href={seo.url} />
      {/* <meta name="image" content={seo.image} /> */}

      {author && <meta name="author" content={author} />}

      {seo.url && <meta property="og:url" content={seo.url} />}

      {(article ? true : null) && <meta property="og:type" content="article" />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {/* {seo.image && <meta property="og:image" content={seo.image} />} */}

      <meta name="twitter:card" content="summary_large_image" />

      {seo.title && <meta name="twitter:title" content={seo.title} />}

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

      {/*  {seo.image && <meta name="twitter:image" content={seo.image} />} */}
    </Helmet>
  );
};

export const query = graphql`
  {
    site {
      siteMetadata {
        defaultTitle
        defaultTitleTemplate
        defaultDescription
        siteUrl
        defaultKeyWords
        lang
      }
    }
  }
`;

export default Seo;
