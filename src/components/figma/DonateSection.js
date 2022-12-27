import React from 'react'
import styled from 'styled-components';

function DonateSection() {
  return (
    <ServicesWrapper>
        <ServicesContainer>
            
            <ServicesContent>
                <TitleColumn>
                    <TitleMain>
                        donation
                    </TitleMain>
                    <TitleHeader>
                        Donate To Our New Masjid construction
                    </TitleHeader>
                    <Paragraph>
                        Help us build a beautiful and welcoming space for the entire
                        community to come together and connect with their faith.
                    </Paragraph>
                </TitleColumn>
                <TitleColumnButton>
                    <Text3>
                        Donate Now
                    </Text3>
                </TitleColumnButton>
            </ServicesContent>
            <Image src={`/images/img-donate-section.png`} />
    </ServicesContainer>
  </ServicesWrapper>
  )
}

export default DonateSection

const ServicesWrapper = styled.div`
  gap: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12% 1% 2%;
`;
const ServicesContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  gap: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
`;
const Image = styled.img`
  width: 43.88%;
  height: 309px;
   border-radius: 100px;
  align-self: flex-end;
  margin: 0px 0px 0% 0px;
  box-shadow: rgba(50, 50, 93, 0.25) 
  0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 
  0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 
  0px -2px 6px 0px inset;
  cursor: pointer;
  &: hover {
    opacity: 0.8;
  } ;
`;
const ServicesContent = styled.div`
  gap: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0% 1% 1% 1%;
`;
const TitleColumn = styled.div`
  height: 235px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1% 1% 1% 0%;
`;
const TitleMain = styled.div`
  width: 24.5%;
  margin: 0px 2px 0% 1%;
  color: #1e361f;
  font-size: 20px;
  font-weight: 600;
  font-family: Outfit;
  line-height: 27.5px;
  letter-spacing: 1.6px;
  text-transform: uppercase;
`;
const TitleHeader = styled.div`
  width: 100%;
  height: 109px;
  align-self: center;
  margin: 0px 0px 3.31% 0px;
  color: #292b2a;
  font-size: 56px;
  font-weight: 700;
  font-family: Outfit;
  line-height: 56px;
  text-transform: capitalize;
`;
const Paragraph = styled.div`
  width: 82.34%;
  margin: 0px 0px 0px 0%;
  font-size: 18px;
  font-family: Roboto;
  line-height: 27.5px;
`;
const TitleColumnButton = styled.div`
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  align-items: center;
  margin: 0px 0px 0px .44%;
  padding: 1.64% 3.75% 2.3% 3.97%;
  background-size: cover;
  border-radius: 51px;
  background-color: #618A68;  
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
const Text3 = styled.div`
  width: 100%;
  height: 28px;
  color: #202020;
  font-size: 20px;
  font-weight: 600;
  font-family: Outfit;
  line-height: 27.5px;
  letter-spacing: 1.6px;
  text-transform: uppercase;
`;