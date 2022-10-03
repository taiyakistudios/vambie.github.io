import styled from '@emotion/styled'
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

const Text = styled.p`
  margin: 0;
  font-family: 'Decimal A', 'Decimal B', Arial, Helvetica, sans-serif;
  color: ${({ theme }) => theme.colors.common.black};
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

export function CtaToastContent(_: ToastContentProps<any>) {
  return (
    <Container>
      <Text>Get your Vambies now</Text>
      <ButtonsContainer>
        <ContainedButton>From Discord</ContainedButton>
        <ContainedButton isOutline>By Email</ContainedButton>
      </ButtonsContainer>
    </Container>
  )
}
