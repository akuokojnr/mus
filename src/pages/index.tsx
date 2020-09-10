import React from "react";

import Layout from "components/Layout";
import SEO from "components/SEO";
import Sidebar from "components/Sidebar";

const IndexPage: React.FC = () => (
  <>
    <SEO title="Mus" />

    <Layout>
      <Sidebar />
    </Layout>
  </>
);

export default IndexPage;
