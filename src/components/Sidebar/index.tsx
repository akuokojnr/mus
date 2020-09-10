import * as React from "react";

import Mobile from "./Mobile";
import Desktop from "./Desktop";

const Sidebar: React.FC = () => (
  <>
    <Mobile />
    <Desktop />
  </>
);

export default Sidebar;
