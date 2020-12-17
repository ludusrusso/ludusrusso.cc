import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"

const Title = styled.span`
  font-size: 14pt;
  font-weight: bold;
  font-family: sans-serif;
  margin: 0;
  padding: 0;
`

const StyledLink = styled(Link)`
  color: #2f855a;
  text-decoration: none;
  margin: 0;
  padding: 0;
`

const StyledHeader = styled.header`
  padding: 20px 0;
  margin-bottom: 1rem;
  background: #e2e8f0;
  color: white;
  & > div {
    color: red;
    display: flex;
    align-items: center;
    padding: 0 10px;
    margin: auto;
    box-sizing: border-box;
  }
  .spacer {
    flex-grow: 1;
  }
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div className="max-w-6xl m-auto">
      <Title>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </Title>
      <span className="spacer"></span>
      <StyledLink to="/mentoring">
        mentoring{" "}
        <span role="img" aria-label="mentoring">
          👨‍💻
        </span>
      </StyledLink>
    </div>
  </StyledHeader>
)

export default Header
