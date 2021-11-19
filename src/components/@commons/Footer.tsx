import React from "react";
import styled from "@emotion/styled";

const FooterWrapper = styled.div`
  padding: 50px 0;

  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: grid;

  font-size: 15px;
  text-align: center;
  line-height: 1.5;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      Thank You for Visiting My Blog, Have a Good Day 😆
      <br />© 2021 Developer Eunhyun, Powered By Gatsby.
    </FooterWrapper>
  );
};

export default Footer;
