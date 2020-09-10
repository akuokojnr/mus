import * as React from "react";
import { v4 as uuid } from "uuid";

import { MobileNav, MobileNavInner } from "./styles";

import { Home as HomeIcon } from "@styled-icons/heroicons-solid/Home";
import { Search as SearchIcon } from "@styled-icons/evaicons-solid/Search";
import { FavoriteBorder as FavoriteIcon } from "@styled-icons/material-rounded/FavoriteBorder";
import { Playlist as PlaylistIcon } from "@styled-icons/boxicons-solid/Playlist";

const data = [
  { label: "Home", icon: (size = 21) => <HomeIcon size={size} /> },
  { label: "Browse", icon: (size = 21) => <SearchIcon size={size} /> },
  {
    label: "Favorite songs",
    icon: (size = 21) => <FavoriteIcon size={size} />,
  },
  {
    label: "Playlist",
    icon: (size = 21) => <PlaylistIcon size={size} />,
  },
];

const MobileSidebar: React.FC = () => {
  return (
    <MobileNav>
      <MobileNavInner>
        {data.map(({ icon }) => (
          <li key={uuid()}>{icon()}</li>
        ))}
      </MobileNavInner>
    </MobileNav>
  );
};

export default MobileSidebar;
