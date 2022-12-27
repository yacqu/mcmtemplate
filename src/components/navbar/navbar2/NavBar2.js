import React from 'react'
import styled from "styled-components";



export function NavBar2() {
  return (
    <NavBarWrapper>
        <NavBarContainer>
            <Text1>MCM Phoenix</Text1>
            <NavBarContainerContent>
                <Text2>about</Text2>
                <Text3>services</Text3>
                <Text4>masjid construction</Text4>
                <Text5>donate</Text5>
            </NavBarContainerContent>
        </NavBarContainer>
    </NavBarWrapper>
  )
}

const NavBarWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0% 0px;
  background-color: #C0C9C0;
`;

const NavBarContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 2% 0% 1%;
  font-family: 'Outfit', sans-serif;
`;
const NavBarContainerContent = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1% 0% 1% 1%;
  font-family: 'Outfit', sans-serif;
`;
const Text1 = styled.div`
  width: 100%;
  color: #637565;
  font-size: 20px;
  font-weight: 700;
  font-family: Outfit;
  line-height: 27.5px;
  text-transform: uppercase;
  cursor: pointer;
  &: hover {
    opacity: 0.8;
  } ;
`;
const Text2 = styled.div`
    width: 100%;
  color: #637565;
  font-size: 20px;
  font-family: Outfit;
  line-height: 27.5px;
  cursor: pointer;
  &: hover {
    opacity: 0.7;
  } ;
`;
const Text3 = styled.div`
    width: 100%;
    color: #637565;
    font-size: 20px;
    font-family: Outfit;
    line-height: 27.5px;
    cursor: pointer;
    &: hover {
      opacity: 0.7;
    } ;
`;
const Text4 = styled.div`
    width: 100%;
  color: #637565;
  font-size: 20px;
  font-family: Outfit;
  line-height: 27.5px;
  cursor: pointer;
  &: hover {
    opacity: 0.7;
  } ;
`;
const Text5 = styled.div`
    width: 100%;
  color: #637565;
  font-size: 20px;
  font-family: Outfit;
  line-height: 27.5px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  cursor: pointer;
  &: hover {
    opacity: 0.7;
  } ;
`;