import React from 'react'
import styled from "styled-components";


function Footer2() {
    const FlexColumn5Function = (e, name) => {
        alert(`${name} was clicked`);
      };

  return (
    <FooterWrapper>
        <FooterRootRootRoot>
            <Group6>
                <Text1>MCM Phoenix</Text1>
                <Text2>Masjid</Text2>
                <Text4>Services</Text4>
                <Text5>Contact</Text5>
                <Text7>join our newsletter</Text7>
            </Group6>
            <Group7>
                <Group22>
                    <NewGroup>
                        <Paragraph>
                            Home
                            <br />
                            About
                            <br />
                            Donate
                            <br />
                            Construction
                        </Paragraph>
                    </NewGroup>
                    <NewGroup>
                        <Paragraph>
                            Quran Program
                            <br />
                            Community Programs
                            <br />
                            New Muslim Programs
                            <br />
                            Family Aid
                        </Paragraph>
                    </NewGroup>
                    <NewGroup>
                        <Paragraph>
                            Email
                            <br />
                            PayPal
                            <br />
                            Instagram
                            <br />
                            <Text6>
                                Call : (602) 306-4959
                            </Text6>
                        </Paragraph>
                        
                    </NewGroup>
                    <NewGroup>
                        <Paragraph>
                            <EmailForm>
                                <EmailFormContainer>

                                </EmailFormContainer>
                            </EmailForm>
                        </Paragraph>
                    </NewGroup>
                </Group22>
            </Group7>
        </FooterRootRootRoot>
    </FooterWrapper>
  )
}

export default Footer2

const FooterWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #C0C9C0;
  padding: 2% 0% 0%;

`;

const FooterRootRootRoot = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0px 0%;
`;
const Group6 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  padding: 0% 0px;
`;
const Text1 = styled.div`
  width: 100%;
  color: #637665;
  font-size: 22px;
  font-weight: 600;
  font-family: Outfit;
  text-transform: uppercase;
`;
const Text2 = styled.div`
  width: 100%;
  color: #637665;
  font-size: 16px;
  font-weight: 600;
  font-family: Outfit;
`;
const Text4 = styled.div`
  width: 100%;
  color: #637665;
  font-size: 16px;
  font-weight: 600;
  font-family: Outfit;
`;
const Text5 = styled.div`
  width: 100%;
  color: #637665;
  font-size: 16px;
  font-weight: 600;
  font-family: Outfit;
`;
const Text7 = styled.div`
  width: 100%;
  align-self: flex-end;
  color: #637665;
  font-size: 22px;
  font-weight: 600;
  font-family: Outfit;
`;
const Group7 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

`;
const Group22 = styled.div`
  gap: 170px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0% 0px;
`;
const NewGroup = styled.div`
  gap: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0% 0px;
`;
const Paragraph = styled.div`
width: 100%;
gap: 60px;

  align-self: flex-end;
  margin: 0px 0px 0% 0px;
  color: #637665;
  font-size: 16px;
  font-family: Roboto;
  line-height: 31px;
`;


const Text6 = styled.div`
  width: 160px;
  position: relative;
  color: #637665;
  font-size: 16px;
  font-weight: 600;
  font-family: Outfit;
`;
const EmailForm= styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    border-radius: 47px;
    background-color: #E0EBE2;
`;
const EmailFormContainer = styled.div`

    height: 30px;
    min-width: 200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 3% 3% 3%;
    border-radius: 47px;

`;
const EmailFormText = styled.div`
  height: 100%;
  width: 100%;
  padding: 0% 0% 0%;

  border-radius: 40px;

`;
const EmailFormButton = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    background-color: #618A68;
    padding: 7% -8% 8%;
`;