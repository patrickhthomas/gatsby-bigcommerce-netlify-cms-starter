import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import LogoSrc from "../../static/images/favicon.png"






const LogoContainer = styled.div`
  grid-column: 2 / 3;
`


const MyLogo = styled.img`
  width: 3em;
  margin-left: 0;
  border-radius: 1em;
  box-shadow: 0px 0px 12px 0px rgba(30, 30, 42, .05);
      &:hover {
    background: ${props => props.theme.colors.white};
    transition: all .2s ease-in;
    transform: scale(1.05);
    box-shadow: 0px 0px 20px 0px rgba(30, 30, 42, .2);
  }
@media (min-width: ${props => props.theme.responsive.small}) {
  margin-left: 1em;
}
`

const Header = styled.header`
  background: ${props => props.theme.colors.white};
  width: 100%;
  padding: 1.5em 0;
`


/*  display: grid;  !! Reinsert into Nav after configuring Modal element
  grid-template-columns: 1.5em 1fr 1fr 1fr 1fr 1.5em;
  align-items: end;
  ul {
    display: flex;
    justify-content: flex-end;
    visibility: visible;
  }

*/
const Nav = styled.nav`



  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;
  line-height: 1.5em;
  ul {
    display: flex;
    justify-content: flex-end;
    visibility: visible;
    max-width: 100%;
  

  li {
    display: inline-block;
    margin-left: 1em;
    margin-right: 1em;
    border-bottom: .5px solid ${props => props.theme.colors.secondary}
  }

  a {
    text-decoration: none;
    color: DarkGray;
    font-weight: 600;
    transition: all 0.2s;
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }
}
`



const activeLinkStyle = {
  color: '#5E5BF7',
  fontWeight: 'bold',
}




const Menu = ({pageContext}) => {

  const { menuLinks } = useSiteMetadata()
  const { basePath } = useSiteMetadata()
  return (
    <Header>
      <Nav>
        <LogoContainer>
            <Link to={basePath}>
              <MyLogo src={ LogoSrc } alt="Logo"/>
            </Link>
          </LogoContainer>
        <ul>
          {menuLinks.map(link => (
            <li key={link.name}>
              <Link to={link.slug} activeStyle={activeLinkStyle}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </Nav>
      
    </Header>
  )
}

export default Menu


