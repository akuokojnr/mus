import * as React from "react";
import { v4 as uuid } from "uuid";
import delve from "dlv";

import { Home as HomeIcon } from "@styled-icons/heroicons-solid/Home";
import { Search as SearchIcon } from "@styled-icons/evaicons-solid/Search";
import { AccessTime as TimeIcon } from "@styled-icons/material-rounded/AccessTime";
import { FavoriteBorder as FavoriteIcon } from "@styled-icons/material-rounded/FavoriteBorder";
import { AddCircle as AddIcon } from "@styled-icons/ionicons-outline/AddCircle";

import {
  DesktopNav,
  Inner,
  Brand,
  ItemsWrapper,
  Category,
  Title,
  Items,
  Label,
  Button,
} from "./styles";

const data = [
  {
    header: "Menu",
    items: [
      { label: "Home", icon: (size = 20) => <HomeIcon size={size} /> },
      { label: "Browse", icon: (size = 20) => <SearchIcon size={size} /> },
    ],
  },
  {
    header: "Your library",
    items: [
      {
        label: "Recently played",
        icon: (size = 20) => <TimeIcon size={size} />,
      },
      {
        label: "Favorite songs",
        icon: (size = 20) => <FavoriteIcon size={size} />,
      },
    ],
  },
  {
    header: "Playlist",
    items: [],
  },
];

const Desktop: React.FC = () => {
  return (
    <DesktopNav>
      <Inner>
        <Brand>Mus</Brand>
        <ItemsWrapper>
          {data.map(({ header, items }) => (
            <Category key={uuid()}>
              {header && <Title>{header}</Title>}
              {items.length > 0 && (
                <Items>
                  {items.map((item) => (
                    <React.Fragment key={uuid()}>
                      {delve(item, "label") && delve(item, "icon") ? (
                        <li>
                          {item.icon()}
                          <Label>{item.label}</Label>
                        </li>
                      ) : (
                        <li>{item}</li>
                      )}
                    </React.Fragment>
                  ))}
                </Items>
              )}
            </Category>
          ))}
        </ItemsWrapper>
        <Button>
          <AddIcon size={22} />
          <span>Add new playlist</span>
        </Button>
      </Inner>
    </DesktopNav>
  );
};

export default Desktop;
