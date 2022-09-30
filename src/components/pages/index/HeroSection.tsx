import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'

import {
  ContainedButton,
  H1,
  NavBar,
  SectionContainer,
  SectionContentWrapper,
  SectionCtaButtonsWrapper,
  SectionTextWrapper,
  Tagline,
} from '../../shared'

const StyledContainer = styled(SectionContainer)`
  position: relative;
  background-color: #171717;

  ${({ theme }) => theme.breakpoints.up('md')} {
    min-height: 90vh;
  }
`

const ContentWrapper = styled(SectionContentWrapper)`
  margin-top: ${({ theme }) => theme.spacing(2)};
  z-index: 2;

  ${({ theme }) => theme.breakpoints.up('xs')} {
    margin-top: ${({ theme }) => theme.spacing(3)};
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    margin-top: ${({ theme }) => theme.spacing(5)};
  }
`

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.common.white};

  ${({ theme }) => theme.breakpoints.up('sm')} {
    flex-direction: row;
    align-items: center;
  }
`

const ProjectLogoText = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
  text-transform: uppercase;
`

// NOTE(adrian): Removed for Vambie launch
//
// const ByTaiyakiLogoText = styled(GatsbyLink)`
//   text-decoration: none;
//   font-size: 0.7rem;
//   font-weight: 300;
//   text-transform: uppercase;
//   opacity: 0.5;
//   margin-top: ${({ theme }) => theme.spacing(0.25)};
//   color: ${({ theme }) => theme.colors.common.white};

//   ${({ theme }) => theme.breakpoints.up('sm')} {
//     margin-left: ${({ theme }) => theme.spacing(2)};
//   }
// `

const InnerContentWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-top: auto;
  margin-bottom: auto;

  ${({ theme }) => theme.breakpoints.up('xs')} {
    padding-top: ${({ theme }) => theme.spacing(3)};
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    flex-direction: row;
    padding-top: ${({ theme }) => theme.spacing(5)};
  }
`

const FrontImageContainer = styled.div`
  margin: ${({ theme }) => theme.spacing(3, 0)};
  position: relative;
  align-self: center;

  ${({ theme }) => theme.breakpoints.up('md')} {
    margin-left: ${({ theme }) => theme.spacing(5)};
  }
`

const TextWrapper = styled(SectionTextWrapper)`
  color: ${({ theme }) => theme.colors.common.white};
  margin-bottom: auto;

  ${({ theme }) => theme.breakpoints.up('md')} {
    flex: 1;
  }
`

const CtaButtonsWrapper = styled(SectionCtaButtonsWrapper)`
  ${({ theme }) => theme.breakpoints.up('md')} {
    grid-auto-flow: row;
  }
`

interface Props {
  logoTitle: string
  title: string
  tagline: string
  mainCtaTitle: string
  mainCtaLink: string
  secondaryCtaTitle: string
  secondaryCtaLink: string
  frontImage: IGatsbyImageData
}

export function HeroSection({
  logoTitle,
  title,
  tagline,
  mainCtaTitle,
  mainCtaLink,
  secondaryCtaTitle,
  secondaryCtaLink,
  frontImage,
}: Props) {
  const formattedTagline = tagline
    .replace(/\n/, '<br/>')
    .split('<br/>')
    .flatMap((text) => {
      if (text.match(/\n/)) {
        return text.split(/\n/).map((string, index) => {
          if (string === '') return <br key={index} />
          return string
        })
      } else {
        return [text]
      }
    })

  return (
    <StyledContainer>
      <ContentWrapper>
        <NavBar
          isLight
          logoOverride={
            <LogoContainer>
              <ProjectLogoText>{logoTitle}</ProjectLogoText>
              {/* 
                NOTE(adrian): Removed for Vambie launch 
                <ByTaiyakiLogoText to="/">by Taiyaki Studios</ByTaiyakiLogoText>
              */}
            </LogoContainer>
          }
        />
        <InnerContentWrapper>
          <TextWrapper>
            <H1 as="h1">{title}</H1>
            <Tagline>{formattedTagline}</Tagline>
            <CtaButtonsWrapper>
              <ContainedButton
                href={mainCtaLink}
                target="_blank"
                rel="noopener noreferrer"
                isLight
              >
                {mainCtaTitle}
              </ContainedButton>
              <ContainedButton
                href={secondaryCtaLink}
                target="_blank"
                rel="noopener noreferrer"
                isOutline
                isLight
              >
                {secondaryCtaTitle}
              </ContainedButton>
            </CtaButtonsWrapper>
          </TextWrapper>
          <FrontImageContainer>
            <GatsbyImage image={frontImage} alt="Hero front image" />
          </FrontImageContainer>
        </InnerContentWrapper>
      </ContentWrapper>
    </StyledContainer>
  )
}
