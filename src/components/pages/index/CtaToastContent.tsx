import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'
import { ToastContentProps } from 'react-toastify'
import { ContainedButton } from '../../shared'

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 720px) {
    flex-direction: row;
    align-items: center;
  }
`

const FrontImageContainer = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  left: ${({ theme }) => theme.spacing(1)};
  height: 90%;
  width: 72px;

  @media (min-width: 720px) {
    display: block;
  }
`

const Text = styled.p`
  margin: 0;
  font-family: 'Decimal A', 'Decimal B', Arial, Helvetica, sans-serif;
  color: ${({ theme }) => theme.colors.common.black};

  @media (min-width: 720px) {
    margin-left: calc(8px + 64px);
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.spacing(2)};

  & > a:not(:first-of-type) {
    margin-left: ${({ theme }) => theme.spacing(1)};
  }

  @media (min-width: 720px) {
    margin-top: 0;
    margin-left: auto;
  }
`

interface Props extends ToastContentProps<any> {
  mainCtaLink: string
  secondaryCtaLink: string
  frontImage: IGatsbyImageData
}

export function CtaToastContent({ mainCtaLink, secondaryCtaLink, frontImage }: Props) {
  return (
    <Container>
      <FrontImageContainer>
        <GatsbyImage
          image={frontImage}
          alt="Hero front image"
          objectFit="contain"
          style={{ height: '100%', width: '100%' }}
        />
      </FrontImageContainer>
      <Text>Get your Vambies now</Text>
      <ButtonsContainer>
        <ContainedButton href={mainCtaLink} target="_blank" rel="noopener noreferrer">
          From Discord
        </ContainedButton>
        <ContainedButton
          href={secondaryCtaLink}
          target="_blank"
          rel="noopener noreferrer"
          isOutline
        >
          By Email
        </ContainedButton>
      </ButtonsContainer>
    </Container>
  )
}
