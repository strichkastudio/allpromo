import { useEffect } from 'react';
import Head from 'next/head';

const AdminPage = () => {
  useEffect(() => {
    (async () => {
      const CMS = (await import('decap-cms-app')).default;
      CMS.init();
    })();
  }, []);

  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <div></div>
    </>
  );
};

export default AdminPage;