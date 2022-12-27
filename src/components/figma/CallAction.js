import React from 'react'
import styled from 'styled-components'

function CallAction() {
    const ButtonColumnFunction = (e, name) => {
        alert(`${name} was clicked`);
      };
  return (
    <CallActionWrapper>
        <CallActionContainer>
            <CallActionTitle>
                Invest in your jannah
            </CallActionTitle>
            <CallActionSubtitle>
                be apart of the builders of mCM Phoenix
            </CallActionSubtitle>
            <ButtonColumn onClick={(e) => ButtonColumnFunction(e, "ButtonColumn")}>
                <ButtonText>
                    Build a masjid
                </ButtonText>
            </ButtonColumn>
        </CallActionContainer>
    </CallActionWrapper>
  )
}

export default CallAction;

const CallActionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  padding: 8% 15% 8%;

`;

const CallActionContainer = styled.div`
  max-width: 1080px;
  width: 100%;
  height: 328px;
  gap: 14px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1% 15% 2%;
  border-radius: 50px;
  background-image: linear-gradient(
    180deg,
    #c0f3c8 0%,
    rgba(106, 174, 116, 0.3) 97%,
    rgba(68, 143, 80, 0) 100%
  );
`;
const CallActionTitle = styled.div`
  width: 60.92%;
  color: #1e361f;
  font-size: 18px;
  font-weight: 600;
  font-family: Outfit;
  line-height: 27.5px;
  letter-spacing: 1.44px;
  text-transform: uppercase;
  text-align: center;
`;
const CallActionSubtitle = styled.div`
  width: 100%;
  height: 100%;
  color: #292b2a;
  font-size: 56px;
  font-weight: 700;
  font-family: Outfit;
  line-height: 56px;
  text-align: center;
  text-transform: capitalize;
`;
const ButtonColumn = styled.button`
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0px;
  padding: 1.64% 3.75% 2.3% 3.97%;
  background-size: cover;
  border-radius: 51px;
  box-sizing: content-box;
  background-color: transparent;
  background-size: cover;
  background-color: #618A68;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
const ButtonText = styled.div`
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
