import React from "react";
import styled from "styled-components";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";

const ContactWrapper = styled.div`
  h4 {
    /* Heading/H4 */

    font-family: "Sora";
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 72px;
    /* identical to box height, or 257% */

    letter-spacing: 1px;

    color: #fbfbfb;
  }

  .sns {
    display: flex;
    gap: 20px;
    img {
      width: 26px;
      height: 26px;
    }
  }
`;

const Contact = ({ title, content }) => {
  return (
    <ContactWrapper>
      <h4>Lets connect</h4>
      <div className="sns">
        <img src={instagram} alt="" />
        <img src={twitter} alt="" />
        <img src={facebook} alt="" />
      </div>
    </ContactWrapper>
  );
};

export default Contact;
