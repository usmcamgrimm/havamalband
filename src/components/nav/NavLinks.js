import styled from '@emotion/styled'

const NavLink = styled.a`
  color: #fecb00;
  font-family: grenze;
  font-size: 1.25rem;
  text-decoration: none;
  padding: 8px 1.25rem;
  :hover {
    color: #ffffff;
  }
  @media screen and (max-width: 768px) {
    padding: 12px 0;
    font-size: 1.75rem;
    z-index: 5;
  }
`;

export default function NavLinks() {
  return(
    <>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/music">Music</NavLink>
      <NavLink href="/gallery">Gallery</NavLink>
      <NavLink href="/saga">Saga</NavLink>
      <NavLink href="../#raids">Raids</NavLink>
      <NavLink href="/news">News</NavLink>
      <NavLink href="/resources">Resources</NavLink>
    </>
  )
}