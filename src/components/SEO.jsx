import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, name, type }) {
  return (
    <Helmet>
      <title>{title ? `${title} | Chidiuto Kelechi` : 'Chidiuto Kelechi | Portfolio'}</title>
      <meta name='description' content={description || "Chidiuto Kelechi's personal portfolio."} />
      <meta property='og:type' content={type || 'website'} />
      <meta property='og:title' content={title || 'Chidiuto Kelechi | Portfolio'} />
      <meta property='og:description' content={description || "Chidiuto Kelechi's personal portfolio."} />
      <meta name='twitter:creator' content={name || 'Chidiuto Kelechi'} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title || 'Chidiuto Kelechi | Portfolio'} />
      <meta name='twitter:description' content={description || "Chidiuto Kelechi's personal portfolio."} />
    </Helmet>
  );
}
