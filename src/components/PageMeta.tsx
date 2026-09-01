import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface PageMetaProps {
  title: string;
  description: string;
  image?: string;
}

export function PageMeta({ title, description, image = "https://gergis-portfolio.vercel.app/assets/og-image.jpg" }: PageMetaProps) {
  const { pathname } = useLocation();
  const url = `https://gergis-portfolio.vercel.app${pathname}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
