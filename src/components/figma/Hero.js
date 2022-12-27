import React from 'react'
import styled from 'styled-components'

function Hero() {
  return (
    <HeroSectionWrapper>
        <HeroSectionContainer>
            <HeroSectionContent>
                <TitleColumn>
                    <Text1>
                        Welcome To MCM Phoenix
                    </Text1>
                    <Paragraph>
                        A welcoming community masjid dedicated to promoting understanding of
                        the teachings of Islam.
                    </Paragraph>
                </TitleColumn>

                <ButtonRow>
                    <DonateButton>
                        <Text2>
                            donate now
                        </Text2>
                    </DonateButton>
                    <VisitButton>
                        <Text3>
                            vist mcm
                        </Text3>
                    </VisitButton>
                </ButtonRow>
            </HeroSectionContent>
            <Image1 src={`/images/img-herosection.jpg`} />
    </HeroSectionContainer>
  </HeroSectionWrapper>
  )
}

export default Hero

const HeroSectionWrapper = styled.div`
  gap: 13px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10% 1% 2%
  
`;
const HeroSectionContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  gap: 120px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const HeroSectionContent = styled.div`
  gap: 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`;
const TitleColumn = styled.div`
  width: 373px;
  height: 351px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: stretch;
  padding: 0px 142px 0px 3px;
`;
const Text1 = styled.div`
  width: 453px;
  height: 288px;
  left: 2px;
  top: 0px;
  position: absolute;
  font-size: 87px;
  font-weight: 700;
  font-family: Outfit;
  line-height: 87px;
  text-transform: capitalize;
`;
const Paragraph = styled.div`
  width: 373px;
  position: relative;
  font-size: 18px;
  font-family: Roboto;
  line-height: 27.5px;
`;
const ButtonRow = styled.div`
  gap: 28px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const DonateButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: 23px 44px 22px 45px;
  background-size: cover;
  border-radius: 51px;
  background-color: #618A68;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
const Text2 = styled.div`
  width: 156px;
  color: #202020;
  font-size: 20px;
  font-weight: 600;
  font-family: Outfit;
  line-height: 27.5px;
  letter-spacing: 1.6px;
  text-transform: uppercase;
`;
const VisitButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: 23px 67px 22px 67px;
  background-size: cover;
  border-radius: 51px;
  border: 1px solid #618A68;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
const Text3 = styled.div`
  width: 111px;
  font-size: 20px;
  font-weight: 600;
  font-family: Outfit;
  line-height: 27.5px;
  letter-spacing: 1.6px;
  text-transform: uppercase;
`;
const Image1 = styled.img`
  width: 813px;
  height: 428px;
  align-self: flex-start;
  margin: 1px 0px 0px 0px;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 
    0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 
    0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 
    0px -2px 6px 0px inset;
    cursor: pointer;
    &: hover {
      opacity: 0.8;
    } ;
`;
