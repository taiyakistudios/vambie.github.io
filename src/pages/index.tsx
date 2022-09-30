import { graphql, HeadFC } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'

import {
  HeroSection,
  StoryboardSection,
  GeneralInfoSection,
} from '../components/pages/index'
import { DefaultHead, Footer, Layout } from '../components/shared'
import content from '../content/index.yaml'

interface ImageSharpFile {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData
  }
}

interface Props {
  data: {
    heroFrontFile: ImageSharpFile
    mosaicBgFile: ImageSharpFile
    discordFrontFile: ImageSharpFile
    storyboardImageFiles: {
      edges: {
        node: ImageSharpFile & { name: string }
      }[]
    }
  }
}

function IndexPage({ data }: Props) {
  const storyboardImageByName = data.storyboardImageFiles.edges
    .filter(({ node }: any) => node.childImageSharp != null)
    .reduce<Record<string, IGatsbyImageData>>(
      (result, current) => ({
        ...result,
        [current.node.name]: current.node.childImageSharp.gatsbyImageData,
      }),
      {},
    )

  const storyboardItems = content.storyboard.items.map((item: any) => {
    if (item.imageFileName != null) {
      return { image: storyboardImageByName[item.imageFileName] }
    } else {
      return { title: item.title, body: item.body }
    }
  })

  return (
    <Layout>
      <main>
        <HeroSection
          logoTitle={content.name}
          title={content.hero.title}
          tagline={content.hero.tagline}
          mainCtaTitle={content.hero.main_cta_title}
          mainCtaLink={content.hero.main_cta_link}
          secondaryCtaTitle={content.hero.secondary_cta_title}
          secondaryCtaLink={content.hero.secondary_cta_link}
          frontImage={data.heroFrontFile.childImageSharp.gatsbyImageData}
        />
        <GeneralInfoSection
          title={content.general_info.title}
          tagline={content.general_info.tagline}
          mosaicBgImage={data.mosaicBgFile.childImageSharp.gatsbyImageData}
          blocks={content.general_info.blocks}
        />
        <StoryboardSection title={content.storyboard.title} items={storyboardItems} />
        {/* <ProjectTypesSection
          title={content.project_types.title}
          tagline={content.project_types.tagline}
          items={content.project_types.items}
        />
        <DiscordSection
          title={content.discord.title}
          tagline={content.discord.tagline}
          ctaTitle={content.discord.cta_title}
          ctaLink={content.discord.cta_link}
          frontImage={data.discordFrontFile.childImageSharp.gatsbyImageData}
        /> */}
      </main>
      <Footer isLight={false} />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC<Props['data']> = function ({ data }) {
  const name = content.name
  const heroTitle = content.hero.title

  return (
    <DefaultHead title={`${name} - ${heroTitle}`} description={content.description} />
  )
}

export const query = graphql`
  query {
    heroFrontFile: file(relativePath: { eq: "hero-front.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, width: 480)
      }
    }
    mosaicBgFile: file(relativePath: { eq: "mosaic-bg.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, width: 1080)
      }
    }
    discordFrontFile: file(relativePath: { eq: "discord-front.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, width: 480)
      }
    }
    storyboardImageFiles: allFile(filter: { name: { glob: "sb-image-*" } }) {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, width: 480)
          }
        }
      }
    }
  }
`
