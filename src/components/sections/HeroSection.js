import React from "react"
import styled, { keyframes } from "styled-components"
import MockupAnimation from "../animtations/MockupAnimation"
import BackgroundWaves from "../backgrounds/BackgroundWaves"
import PurchaseButton from "../buttons/PurchaseButton"
import { themes } from "../styles/ColorStyles"
import { H1, MediumText } from "../styles/TextStyles"

function HerSection() {
  return (
    <Wrapper>
      <BackgroundWaves />
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Design and code <span>React</span> app
          </Title>
          <Description>
            Don’t skip design. Learn design and code, by building real apps with
            React and Swift. Complete courses about the best tools
          </Description>
          <PurchaseButton
            title="Start Learning"
            subtitle="120+ hours of videos"
            image={"/images/icons/credit.svg"}
            ringImage={"/images/icons/icon-ring.svg"}
          />
        </TextWrapper>
        <MockupAnimation />
      </ContentWrapper>
    </Wrapper>
  )
}
export default HerSection

const animation = keyframes`
0% { opacity:0; transform: translateY(-10px); filter: blur(10px); }
100% { opacity: 1; transform: translateY(0px); filter: blur(0px);  } 
`

const Wrapper = styled.div`
  overflow: hidden;
`

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
  display: grid;
  grid-template-columns: 360px auto;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    gap: 60px;
    padding: 150px 20px 250px;
  }
`

const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;

  > * {
    :nth-child(1) {
      animation: ${animation} 1s 0s forwards;
    }
    :nth-child(2) {
      animation: ${animation} 1s 0.4s forwards;
    }
    :nth-child(3) {
      animation: ${animation} 1s 0.6s forwards;
    }
  }
`
const Title = styled(H1)`
  color: ${themes.dark.text1};
  background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  @media (max-width: 450px) {
    font-size: 48px;
  }
  span {
    background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
`

const Description = styled(MediumText)``
