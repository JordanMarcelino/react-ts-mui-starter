import { env } from '@/config/env';
import { Helmet, HelmetData } from 'react-helmet-async';

type HeadProps = {
  title?: string;
  description?: string;
};

const helmetData = new HelmetData({});

export const Head: React.FC<HeadProps> = ({ title = '', description = '' }) => {
  return (
    <Helmet
      helmetData={helmetData}
      title={title ? `${title} | ${env.APP_NAME}` : undefined}
      defaultTitle={`${env.APP_NAME}`}
    >
      <meta name="description" content={description} />
    </Helmet>
  );
};
