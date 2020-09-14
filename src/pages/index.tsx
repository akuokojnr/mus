import React from "react";

import Layout from "components/Layout";
import SEO from "components/SEO";
import Sidebar from "components/Sidebar";
import MainContent from "components/MainContent";
import Player from "components/Player";

const IndexPage: React.FC = () => (
  <>
    <SEO title="Mus" />

    <Layout>
      <Sidebar />
      <MainContent />
      <Player audioSrc="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
    </Layout>
  </>
);

export default IndexPage;
