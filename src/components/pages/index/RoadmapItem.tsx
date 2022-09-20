import styled from '@emotion/styled'
import React from 'react'
import CheckIcon from '../../../images/icons/check-icon.svg'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
`

const ExtendingLine = styled.div<Pick<Props, 'isFirst' | 'isLast'>>`
  width: ${({ theme }) => theme.spacing(0.5)};
  background-color: rgba(255, 255, 255, 0.1);
  position: absolute;
  left: 0;
  bottom: ${({ isLast }) => (isLast ? '50%' : 0)};
  height: ${({ isFirst, isLast }) => (isFirst || isLast ? '50%' : '100%')};
`

const BranchLine = styled.div<Pick<Props, 'isHighlight'>>`
  height: ${({ theme }) => theme.spacing(0.5)};
  width: ${({ theme }) => theme.spacing(5)};
  background-color: rgba(255, 255, 255, ${({ isHighlight }) => (isHighlight ? 1 : 0.1)});
`

const TimeframeIndicator = styled.div<Pick<Props, 'isHighlight'>>`
  height: ${({ theme }) => theme.spacing(3)};
  width: ${({ theme }) => theme.spacing(3)};
  border: solid 4px rgba(255, 255, 255, ${({ isHighlight }) => (isHighlight ? 1 : 0.1)});
  border-radius: 50%;
  position: absolute;
  left: calc(${({ theme }) => theme.spacing(-1.5)} - 2px);
  top: 50%;
  transform: translateY(-50%);
  background-color: ${({ isHighlight }) =>
    isHighlight ? 'rgba(255, 255, 255, 1)' : '#171717'};
  display: flex;
  align-items: center;
  justify-content: center;
`

const InnerContainer = styled.div<Pick<Props, 'isHighlight'>>`
  background-color: rgba(255, 255, 255, ${({ isHighlight }) => (isHighlight ? 1 : 0.1)});
  padding: ${({ theme }) => theme.spacing(3)};
  border-radius: ${({ theme }) => theme.spacing(1)};
  margin-bottom: ${({ theme }) => theme.spacing(3)};
  flex: 1;
  color: ${({ isHighlight, theme }) =>
    theme.colors.common[isHighlight ? 'black' : 'white']};
`

const MobileTimeframe = styled.span`
  font-size: 0.8rem;
  opacity: 0.5;
`

const Title = styled.h4`
  margin: ${({ theme }) => theme.spacing(2, 0, 0, 0)};
  line-height: 1.5;
  font-weight: 700;
`

const Body = styled.p`
  font-weight: 300;
  line-height: 1.6;
  margin-bottom: 0;

  ${({ theme }) => theme.breakpoints.up('md')} {
    margin-top: ${({ theme }) => theme.spacing(3)};
  }
`

interface Props {
  timeframe: string
  title: string
  description: string
  isHighlight?: boolean
  isFirst?: boolean
  isLast?: boolean
}

export function RoadmapItem({
  timeframe,
  title,
  description,
  isHighlight = false,
  isFirst = false,
  isLast = false,
}: Props) {
  return (
    <Container>
      <ExtendingLine isFirst={isFirst} isLast={isLast} />
      <TimeframeIndicator isHighlight={isHighlight}>
        {isHighlight && <CheckIcon />}
      </TimeframeIndicator>
      <BranchLine isHighlight={isHighlight} />
      <InnerContainer isHighlight={isHighlight}>
        <MobileTimeframe>{timeframe}</MobileTimeframe>
        <Title>{title}</Title>
        <Body>{description}</Body>
      </InnerContainer>
    </Container>
  )
}
