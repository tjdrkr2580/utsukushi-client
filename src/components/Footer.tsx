import styled from "styled-components";

const FooterWrapper = styled.footer`
  width: 100vw;
  padding: 1rem 0.8rem;
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.45rem;
  position: absolute;
  bottom: 0%;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      {`© ${new Date().getFullYear()} Utsukushi Co. all rights reserved.`}
    </FooterWrapper>
  );
};

export default Footer;
