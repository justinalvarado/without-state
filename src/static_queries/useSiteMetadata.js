import { graphql, useStaticQuery } from "gatsby"

export default function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    query getMetadata {
      site {
        siteMetadata {
          title
          description
          infoData {
            contact {
              email
              twitter_handle
            }
            cta
            description
            background_color
            font_color
          }
        }
      }
    }
  `)
  return data.site.siteMetadata
}
