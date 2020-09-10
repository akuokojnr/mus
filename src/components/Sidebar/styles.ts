import styled from "styled-components";

import media from "utils/media";

// (NOTE: daniel) Desktop sidebar
const PLAYER_HEIGHT = 6;

export const DesktopNav = styled.nav`
  height: calc(100vh - ${PLAYER_HEIGHT}rem);
  max-width: 350px;
  width: 100%;
  overflow: hidden;
  display: none;

  ${media.lg`
    display: block;
  `};
`;

export const Inner = styled.div`
  background: ${({ theme }) => theme.colors.black};
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Brand = styled.p`
  font-family: "Roboto Slab";
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.green};
  margin: 3rem;
`;

export const ItemsWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Category = styled.div`
  margin-bottom: 4rem;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.darkOrange};
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-left: 3rem;
  font-family: "Cabin";
`;

export const Items = styled.ul`
  margin: 0;

  li {
    list-style-type: none;
    margin-top: 0.2rem;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
    padding: 0.8rem 3rem;
    font-family: "Cabin";
    cursor: pointer;
    border-left: 0.3rem solid transparent;

    &:hover {
      background: ${({ theme }) => theme.gradients.navHighlight};
      border-left: 0.3rem solid ${({ theme }) => theme.colors.green};
      color: ${({ theme }) => theme.colors.green};
    }
  }
`;

export const Label = styled.span`
  margin-left: 1rem;
`;

export const Button = styled.button`
  outline: none;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.green};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.green};
  font-size: 0.8rem;
  font-family: "Cabin";
  font-weight: 700;
  padding: 0.6rem;
  width: max-content;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 0.5rem 0 4rem 3rem;
  transition: all 0.5s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};
  }

  span {
    margin-left: 0.8rem;
  }
`;

// (NOTE: daniel) Mobile sidebar

export const MobileNav = styled.nav`
  background: ${({ theme }) => theme.colors.black};
  padding: 1rem 1.5rem;
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  ${media.lg`
    display: none;
  `};
`;

export const MobileNavInner = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0;

  ${media.sm`
    justify-content: space-evenly;
  `};

  li {
    list-style-type: none;
    color: ${({ theme }) => theme.colors.white};
  }
`;
