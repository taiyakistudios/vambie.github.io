import { graphql, HeadFC } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import React, { useRef } from 'react'
import { toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import {
  CtaToastContent,
  GeneralInfoSection,
  HeroSection,
  StoryboardSection,
  ToastContainer,
} from '../components/pages/index'
import { DefaultHead, Footer, Layout } from '../components/shared'
import content from '../content/index.yaml'
import { useOnScreenOnce } from '../hooks'

interface ImageSharpFile {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData
  }
}

interface Props {
  data: {
    heroFrontFile: ImageSharpFile
    mosaicBgFile: ImageSharpFile
    toastFrontFile: ImageSharpFile
    discordFrontFile: ImageSharpFile
    storyboardImageFiles: {
      edges: {
        node: ImageSharpFile & { name: string }
      }[]
    }
  }
}

function IndexPage({ data }: Props) {
  const storyboardSectionRef = useRef()

  useOnScreenOnce(storyboardSectionRef, (isVisible) => {
    if (!isVisible) return
    toast((props) => (
      <CtaToastContent
        {...props}
        mainCtaLink={content.hero.main_cta_link}
        secondaryCtaLink={content.hero.secondary_cta_link}
        frontImage={data.toastFrontFile.childImageSharp.gatsbyImageData}
      />
    ))
  })

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
          caption={content.hero.caption}
          frontImage={data.heroFrontFile.childImageSharp.gatsbyImageData}
        />
        <GeneralInfoSection
          title={content.general_info.title}
          tagline={content.general_info.tagline}
          mosaicBgImage={data.mosaicBgFile.childImageSharp.gatsbyImageData}
          blocks={content.general_info.blocks}
        />
        <StoryboardSection
          visibilityRef={storyboardSectionRef}
          title={content.storyboard.title}
          items={storyboardItems}
        />
        {/* NOTE(adrian): These sections can be re-added once copy is ready
        <ProjectTypesSection
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
        /> 
        */}
      </main>
      <Footer isLight={false} />

      <ToastContainer
        limit={1}
        position="bottom-center"
        autoClose={false}
        closeOnClick={false}
      />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC<Props['data']> = function () {
  return (
    <DefaultHead title="Vambie - Join the Preseason" description={content.description} />
  )
}

export const query = graphql`
  query {
    heroFrontFile: file(relativePath: { eq: "hero-front.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, width: 480)
      }
    }
    toastFrontFile: file(relativePath: { eq: "toast-front.png" }) {
      childImageSharp {
        gatsbyImageData(width: 100)
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
