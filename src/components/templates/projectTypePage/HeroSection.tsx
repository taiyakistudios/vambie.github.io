import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { Link as GatsbyLink } from 'gatsby'
import React from 'react'

import {
  H1,
  NavBar,
  SectionContainer,
  SectionContentWrapper,
  SectionCtaButton,
  SectionTextWrapper,
  Tagline,
} from '../../shared'

const StyledContainer = styled(SectionContainer)`
  position: relative;
  background-color: #171717;
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

const LogoButton = styled(GatsbyLink)`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.common.white};
  text-decoration: none;

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

const InnerContentWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-top: auto;
  margin-bottom: auto;

  ${({ theme }) => theme.breakpoints.up('xs')} {
    padding-top: ${({ theme }) => theme.spacing(3)};
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    padding-top: ${({ theme }) => theme.spacing(7)};
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    flex-direction: row;
  }
`

const FrontImageContainer = styled.div`
  margin: ${({ theme }) => theme.spacing(3, 0)};
  position: relative;
  align-self: center;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin-bottom: ${({ theme }) => theme.spacing(5)};
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    margin-left: ${({ theme }) => theme.spacing(5)};
  }
`

const TextWrapper = styled(SectionTextWrapper)`
  color: ${({ theme }) => theme.colors.common.white};
  margin-bottom: auto;

  ${({ theme }) => theme.breakpoints.up('md')} {
    width: 720px;
  }
`

interface Props {
  logoTitle: string
  title: string
  tagline: string
  ctaTitle: string
  ctaLink: string
  frontImage: IGatsbyImageData
}

export function HeroSection({
  logoTitle,
  title,
  tagline,
  ctaTitle,
  ctaLink,
  frontImage,
}: Props) {
  return (
    <StyledContainer>
      <ContentWrapper>
        <NavBar
          isLight
          logoOverride={
            <LogoButton to="/">
              <ProjectLogoText>{logoTitle}</ProjectLogoText>
            </LogoButton>
          }
        />
        <InnerContentWrapper>
          <TextWrapper>
            <H1 as="h1">{title}</H1>
            <Tagline>{tagline}</Tagline>
            <SectionCtaButton
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              isLight
            >
              {ctaTitle}
            </SectionCtaButton>
          </TextWrapper>
          <FrontImageContainer>
            <GatsbyImage image={frontImage} alt="Hero front image" />
          </FrontImageContainer>
        </InnerContentWrapper>
      </ContentWrapper>
    </StyledContainer>
  )
}
