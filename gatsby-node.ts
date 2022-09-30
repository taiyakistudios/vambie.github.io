import { CreatePagesArgs } from 'gatsby'
import path from 'path'

export async function createPages({ actions, graphql }: CreatePagesArgs) {
  // Create project pages

  const { data } = await graphql<any>(`
    query {
      allProjectTypesYaml {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  for (const { node } of data.allProjectTypesYaml.edges) {
    const { slug } = node

    actions.createPage({
      path: `${slug}`,
      component: path.resolve('./src/templates/projectTypePage.tsx'),
      context: {
        slug,
        heroFrontImagePath: `project-types/${slug}/hero-front.png`,
      },
    })
  }
}
