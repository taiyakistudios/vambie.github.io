import { graphql, HeadFC } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'

import { DefaultHead, Footer, Layout } from '../components/shared'
import {
  GetAssetsSection,
  HeroSection,
  HowItWorksSection,
  KeyPointsSection,
} from '../components/templates/projectTypePage'
import projectContent from '../content/index.yaml'

interface ImageSharpFile {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData
  }
}

interface Props {
  data: {
    projectTypesYaml: {
      slug: string
      name: string
      description: string
      [key: string]: any
    }
    heroFrontFile: ImageSharpFile
  }
}

function ProjectPage({ data }: Props) {
  const projectTypeContent = data.projectTypesYaml

  return (
    <Layout>
      <main>
        <HeroSection
          logoTitle={projectContent.name}
          title={projectTypeContent.hero.title}
          tagline={projectTypeContent.hero.tagline}
          ctaTitle={projectTypeContent.hero.cta_title}
          ctaLink={projectTypeContent.hero.cta_link}
          frontImage={data.heroFrontFile.childImageSharp.gatsbyImageData}
        />
        <KeyPointsSection
          title={projectTypeContent.key_points.title}
          blocks={projectTypeContent.key_points.blocks}
        />
        <HowItWorksSection
          title={projectTypeContent.how_it_works.title}
          tagline={projectTypeContent.how_it_works.tagline}
          items={projectTypeContent.how_it_works.items}
        />
        <GetAssetsSection
          title={projectTypeContent.get_assets.title}
          tagline={projectTypeContent.get_assets.tagline}
          ctaTitle={projectTypeContent.get_assets.cta_title}
          ctaLink={projectTypeContent.get_assets.cta_link}
        />
      </main>
      <Footer isLight={false} />
    </Layout>
  )
}

export default ProjectPage

export const Head: HeadFC<Props['data']> = function ({ data }) {
  const projectName = projectContent.name
  const projectTypeName = data.projectTypesYaml.name

  return (
    <DefaultHead
      title={`Taiyaki Studios - ${projectName} - ${projectTypeName}`}
      description={projectContent.description}
    />
  )
}

export const query = graphql`
  query ($slug: String!, $heroFrontImagePath: String!) {
    projectTypesYaml(slug: { eq: $slug }) {
      slug
      name
      description
      hero {
        title
        tagline
        cta_title
        cta_link
      }
      key_points {
        title
        blocks {
          title
          body
        }
      }
      how_it_works {
        title
        tagline
        items {
          title
          body
        }
      }
      get_assets {
        title
        tagline
        cta_title
        cta_link
      }
    }
    heroFrontFile: file(relativePath: { eq: $heroFrontImagePath }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, width: 480)
      }
    }
  }
`
