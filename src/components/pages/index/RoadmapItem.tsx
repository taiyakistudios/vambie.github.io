import styled from '@emotion/styled'
import React from 'react'
import CheckIcon from '../../../images/icons/check-icon.svg'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;

  ${({ theme }) => theme.breakpoints.up('md')} {
    flex-direction: column;
  }
`

const ExtendingLine = styled.div<Pick<Props, 'isFirst' | 'isLast'>>`
  width: ${({ theme }) => theme.spacing(0.5)};
  height: ${({ isFirst, isLast }) => (isFirst || isLast ? '50%' : '100%')};
  background-color: rgba(255, 255, 255, 0.1);
  position: absolute;
  left: 0;
  bottom: ${({ isLast }) => (isLast ? '50%' : 0)};

  ${({ theme }) => theme.breakpoints.up('md')} {
    margin: 0;
    height: ${({ theme }) => theme.spacing(0.5)};
    width: ${({ isFirst, isLast, theme }) => {
      if (isFirst) {
        return `calc(50% + ${theme.spacing(2)})`
      } else if (isLast) {
        return '50%'
      } else {
        return '100%'
      }
    }};
    top: ${({ theme }) => theme.spacing(5)};
    bottom: unset;
    left: ${({ isFirst, theme }) => (isFirst ? `calc(50% - ${theme.spacing(2)})` : 0)};
  }
`

const BranchLine = styled.div<Pick<Props, 'isHighlight' | 'isLast'>>`
  height: ${({ theme }) => theme.spacing(0.5)};
  width: ${({ theme }) => theme.spacing(5)};
  background-color: rgba(255, 255, 255, ${({ isHighlight }) => (isHighlight ? 1 : 0.1)});

  ${({ theme }) => theme.breakpoints.up('md')} {
    height: ${({ theme }) => theme.spacing(5)};
    width: ${({ theme }) => theme.spacing(0.5)};
    margin-right: ${({ isLast, theme }) => theme.spacing(isLast ? 0 : 3)};
    margin-top: ${({ theme }) => theme.spacing(5)};
  }
`

const TimeframeIndicator = styled.div<Pick<Props, 'isHighlight' | 'isLast'>>`
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

  ${({ theme }) => theme.breakpoints.up('md')} {
    top: ${({ theme }) => theme.spacing(5)};
    left: ${({ isLast, theme }) =>
      isLast ? '50%' : `calc(50% - ${theme.spacing(1.5)})`};
    transform: translate(-50%, -50%);
  }
`

const InnerContainer = styled.div<Pick<Props, 'isHighlight' | 'isLast'>>`
  background-color: rgba(255, 255, 255, ${({ isHighlight }) => (isHighlight ? 1 : 0.1)});
  padding: ${({ theme }) => theme.spacing(3)};
  border-radius: ${({ theme }) => theme.spacing(1)};
  margin-bottom: ${({ theme }) => theme.spacing(3)};
  flex: 1;
  color: ${({ isHighlight, theme }) =>
    theme.colors.common[isHighlight ? 'black' : 'white']};

  ${({ theme }) => theme.breakpoints.up('md')} {
    margin-right: ${({ isLast, theme }) => theme.spacing(isLast ? 0 : 3)};
  }
`

const MobileTimeframe = styled.span`
  font-size: 0.8rem;
  opacity: 0.5;

  ${({ theme }) => theme.breakpoints.up('md')} {
    display: none;
  }
`

const DesktopTimeframe = styled.span<Pick<Props, 'isLast'>>`
  text-align: center;
  display: none;
  font-size: 0.8rem;
  opacity: 0.5;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  margin-right: ${({ isLast, theme }) => theme.spacing(isLast ? 0 : 3)};

  ${({ theme }) => theme.breakpoints.up('md')} {
    display: block;
  }
`

const Title = styled.h4`
  margin: ${({ theme }) => theme.spacing(2, 0, 0, 0)};
  line-height: 1.5;
  font-weight: 700;

  ${({ theme }) => theme.breakpoints.up('md')} {
    margin: 0;
  }
`

const Body = styled.p`
  font-weight: 300;
  line-height: 1.6;
  margin-bottom: 0;
  margin-top: ${({ theme }) => theme.spacing(1)};
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
      <TimeframeIndicator isHighlight={isHighlight} isLast={isLast}>
        {isHighlight && <CheckIcon />}
      </TimeframeIndicator>
      <DesktopTimeframe isLast={isLast}>{timeframe}</DesktopTimeframe>
      <BranchLine isHighlight={isHighlight} isLast={isLast} />
      <InnerContainer isHighlight={isHighlight} isLast={isLast}>
        <MobileTimeframe>{timeframe}</MobileTimeframe>
        <Title>{title}</Title>
        <Body>{description}</Body>
      </InnerContainer>
    </Container>
  )
}
