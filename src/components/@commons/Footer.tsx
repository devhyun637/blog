import React from "react";
import styled from "@emotion/styled";

const FooterWrapper = styled.div`
  padding: 50px 0;

  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: grid;

  font-size: 12px;
  color: #595959;
  text-align: center;
  line-height: 1.5;
`;

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <FooterWrapper>
      Thank You for Visiting My Blog, Have a Good Day 😆
      <br />© {year} Developer Eunhyun, Powered By Gatsby.
    </FooterWrapper>
  );
};

export default Footer;
