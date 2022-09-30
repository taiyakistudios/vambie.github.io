import type { GatsbyConfig } from 'gatsby'

const plugins = [
  'gatsby-plugin-emotion',
  'gatsby-plugin-image',
  'gatsby-plugin-sharp',
  'gatsby-transformer-sharp',
  'gatsby-transformer-yaml',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: './src/images/',
    },
    __key: 'images',
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'content',
      path: './src/content/',
    },
  },
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /images/,
      },
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Vambie`,
      short_name: `Vambie`,
      start_url: `/`,
      background_color: `#fff`,
      theme_color: `#000`,
      display: `standalone`,
      icon: 'src/images/favicon.svg',
    },
  },
]

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Vambie',
    siteDomain: 'vambie.com',
    siteUrl: 'https://vambie.com',
    description:
      'Vambies are for storytellers and content creators. Join my community and bring a Vambie to life with your story.',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins,
}

export default config
