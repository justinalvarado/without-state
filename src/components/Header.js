import React from "react"
import { Link } from "gatsby"
import headerStyles from "../styles/components/header.module.scss"
import useSiteMetaData from "../static_queries/useSiteMetadata"

export default function Header(props) {
  const { infoData } = useSiteMetaData()

  return (
    <header
      className={`${headerStyles.header} ${props.page === 'info' &&
        headerStyles.info_page}`}
    >
      <nav
        className={headerStyles.header__nav}
        role="navigation"
        aria-label="main navigation"
      >
        <Link to="/">
          <h1 style={{color:infoData.font_color}}>{props.title}</h1>
        </Link>
        <div>
          <h1 style={{color:infoData.font_color}}>
            <Link
              to={
                props.page === 'info'
                  ? "/"
                  : "/info"
              }
              activeClassName={headerStyles.navItemActive}
            >
              {props.page === 'info'
                ? "close"
                : "info"}
            </Link>
          </h1>
        </div>
      </nav>
    </header>
  )
}
