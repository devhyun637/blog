import React from "react";
import styled from "@emotion/styled";
import ProfileImage from "components/ProfileImage";

const Background = styled.div`
  width: 100%;
  padding: 2rem;

  background-color: #f5bdbd;
  color: #222222;
`;

const Wrapper = styled.div`
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: #222222;
`;

const Title = styled.div`
  margin-top: 5px;
  margin-bottom: 45px;

  font-size: 30px;
  font-weight: 700;
`;

const Introduction = () => {
  return (
    <Background>
      <Wrapper>
        <div>
          <SubTitle>은현초 개발블로그</SubTitle>
          <Title>머릿속에 떠다니는 생각과 지식을 정리합니다.</Title>
        </div>

        <ProfileImage />
      </Wrapper>
    </Background>
  );
};

export default Introduction;
