import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { Layout } from "../components/Layout";
import SEO from "react-seo-component";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

export default ({ data, pageContext }) => {
  const {
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
    authorName,
  } = useSiteMetadata();
  const {
    frontmatter: { title, date, cover },
    body,
    excerpt,
    fields,
  } = data.mdx;
  const { previous, next } = pageContext;
  return (
    <Layout>
      <SEO
        title={title}
        description={excerpt}
        image={
          cover === null ? `${siteUrl}${image}` : `${siteUrl}${cover.publicURL}`
        }
        pathname={`${siteUrl}${fields.slug}`}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
        author={authorName}
        article={true}
        publishedDate={date}
        modifiedDate={new Date(Date.now()).toISOString()}
      />
      <h1>{title}</h1>
      <p>{date}</p>
      <MDXRenderer>{body}</MDXRenderer>
      {previous ? (
        <>
          Previous:{" "}
          <Link to={previous.fields.slug}>{previous.frontmatter.title}</Link>
        </>
      ) : null}
      {next ? (
        <>
          Next: <Link to={next.fields.slug}>{next.frontmatter.title}</Link>
        </>
      ) : null}
    </Layout>
  );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        cover {
          publicURL
        }
      }
      body
      excerpt
      fields {
        slug
      }
    }
  }
`;
