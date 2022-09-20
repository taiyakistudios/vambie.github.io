import styled from '@emotion/styled'
import React from 'react'

import {
  H2,
  SectionContainer,
  SectionContentWrapper,
  SectionTextWrapper,
} from '../../shared'
import { RoadmapItem } from './RoadmapItem'

const MainContainer = styled(SectionContainer)`
  background-color: #171717;
  color: ${({ theme }) => theme.colors.common.white};
  min-height: 0;
`

const TextWrapper = styled(SectionTextWrapper)`
  margin: 0;
`

const RoadmapItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing(5)};
`

interface Props {
  title: string
  items: {
    timeframe: string
    title: string
    description: string
    is_highlight?: boolean
  }[]
}

export function RoadmapSection({ title, items }: Props) {
  function renderItems() {
    return items.map(({ timeframe, title, description, is_highlight }, index) => (
      <RoadmapItem
        key={index}
        timeframe={timeframe}
        title={title}
        description={description}
        isHighlight={is_highlight}
        isFirst={index === 0}
        isLast={index === items.length - 1}
      />
    ))
  }

  return (
    <>
      <MainContainer>
        <SectionContentWrapper>
          <TextWrapper>
            <H2>{title}</H2>
          </TextWrapper>
          <RoadmapItemsWrapper>{renderItems()}</RoadmapItemsWrapper>
        </SectionContentWrapper>
      </MainContainer>
    </>
  )
}
