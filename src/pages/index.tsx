import React from "react";

import Layout from "components/Layout";
import SEO from "components/SEO";
import Sidebar from "components/Sidebar";
import MainContent from "components/MainContent";

const IndexPage: React.FC = () => (
  <>
    <SEO title="Mus" />

    <Layout>
      <Sidebar />
      <MainContent />
    </Layout>
  </>
);

export default IndexPage;
