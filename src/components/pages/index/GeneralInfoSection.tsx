import styled from '@emotion/styled'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'

import { SectionContainer, SectionContentWrapper } from '../../shared'

const VideoSectionContainer = styled(SectionContainer)`
  background-color: #212121;
  color: ${({ theme }) => theme.colors.common.white};
  position: relative;
`

const VideoSectionIFrame = styled.iframe`
  position: absolute;
  height: 100%;
  width: 100%;
`

// NOTE(adrian): Can be re-added if necessary post launch
//
// const MainTextWrapper = styled(SectionTextWrapper)`
//   z-index: 3;
//   ${({ theme }) => theme.breakpoints.up('md')} {
//     width: 800px;
//   }
// `

// const MainImageOverlay = styled.div`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   z-index: 2;
//   background: linear-gradient(
//     to top,
//     rgba(0, 0, 0, 0.9),
//     rgba(0, 0, 0, 0.8),
//     rgba(0, 0, 0, 0.3)
//   );
// `

const TextSectionContainer = styled(SectionContainer)`
  background-color: #2b2b2b;
  color: ${({ theme }) => theme.colors.common.white};
  min-height: 0;
`

const TextSectionContentWrapper = styled(SectionContentWrapper)`
  margin: ${({ theme }) => theme.spacing(5, 'auto')};

  ${({ theme }) => theme.breakpoints.up('md')} {
    margin: ${({ theme }) => theme.spacing(6, 'auto')};
  }
`

const TextSectionGrid = styled.div`
  display: grid;
  row-gap: ${({ theme }) => theme.spacing(5)};

  ${({ theme }) => theme.breakpoints.up('sm')} {
    grid-template-rows: auto;
    row-gap: unset;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: ${({ theme }) => theme.spacing(5)};
  }
`

const TextSectionGirdItem = styled.div``

const TextSectionGridItemTitle = styled.h4`
  margin: 0;
  line-height: 1.5;
`

const TextSectionGridItemBody = styled.p`
  font-weight: 300;
  line-height: 1.6;
  margin-bottom: 0;

  ${({ theme }) => theme.breakpoints.up('md')} {
    margin-top: ${({ theme }) => theme.spacing(3)};
  }
`

interface Props {
  title: string
  tagline: string
  mosaicBgImage: IGatsbyImageData
  blocks: {
    title: string
    body: string
  }[]
}

export function GeneralInfoSection({ blocks }: Props) {
  function renderGridItems() {
    return blocks.map((block, index) => (
      <TextSectionGirdItem key={index}>
        <TextSectionGridItemTitle>{block.title}</TextSectionGridItemTitle>
        <TextSectionGridItemBody>{block.body}</TextSectionGridItemBody>
      </TextSectionGirdItem>
    ))
  }

  return (
    <>
      <TextSectionContainer>
        <TextSectionContentWrapper>
          <TextSectionGrid>{renderGridItems()}</TextSectionGrid>
        </TextSectionContentWrapper>
      </TextSectionContainer>
      <VideoSectionContainer>
        <VideoSectionIFrame
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/GlQ-VlEZrc0?modestbranding=1&rel=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></VideoSectionIFrame>
      </VideoSectionContainer>
    </>
  )
}
