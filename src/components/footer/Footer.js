import styled from '@emotion/styled'

const FooterBar = styled.footer`
  width: 100%;
  display: flex;
  height: 72px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top: 2px solid rgba(255, 255, 255, 0.02);
  margin-top: 3rem;
`;

const FooterLink = styled.a`
  color: #66add9;
  font-family: grenze;
  font-size: 1.25rem;
  text-decoration: none;
  :hover {
    color: #ffffff;
  }
`;

export default function Footer() {
  return (
    <FooterBar>
      <p 
        style={{
          fontFamily: 'grenze',
          fontSize: '1.25rem',
          color: '#66add9',
          margin: '0 auto'
        }}
      >
        &copy; {new Date().getFullYear()} 
        <FooterLink
          href="https://www.facebook.com/@Havamalofficial" 
          target="_blank" 
          rel="noreferrer" 
          aria-label="Havamal Official on Facebook"
        >
          &nbsp;Havamal&nbsp;
        </FooterLink>
        | Website by
        <FooterLink
          href="https://www.github.com/usmcamgrimm" 
          target="_blank" 
          rel="noreferrer" 
          aria-label="Adrian Grimm on GitHub"
        >
          &nbsp;Adrian Grimm
        </FooterLink>
      </p>
    </FooterBar>
  )
}