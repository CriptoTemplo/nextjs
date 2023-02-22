import React from 'react';
import DOMPurify from 'isomorphic-dompurify';
import { ISitemap } from "@/definitions/mediaPost";
import { GetStaticProps } from 'next';
import GlobalStore from '@/stores/GlobalStore';

interface ISitemapProps {
  content: string;
}

const Sitemap: React.FC<ISitemapProps> = ({ content }) => (
  <>
    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }} />
  </>
);

export const getStaticProps: GetStaticProps<ISitemapProps> = async () => {
  const sitemapHTML: ISitemap = await GlobalStore.getSitemap();
  const content = sitemapHTML.content;
  return {
    props: { content },
    revalidate: 1800 // regenerate every 30 minutes (1800 seconds)
  };
};

export default Sitemap;