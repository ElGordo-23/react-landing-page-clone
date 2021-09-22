/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const s1Style = css`
  display: block;
  height: 685px;
  background: #ffffff;
`;

export const wrapperStyle = css`
  overflow-x: hidden;
`;

export const h1Styles = css`
  margin: 0;
  display: flex;
  font-weight: 900;
  color: black;
  font-size: 48px;

  line-height: 120%;
`;

export const containerStyles = css`
  margin: 0 auto;
  position: relative;
  padding: 32px;
  max-width: 1440px;
`;

export const heroImageStyle = css`
  position: relative;
  width: 1280px;
  margin: 0 auto;
  z-index: 100000;
`;

export const h2Styles = css`
  position: absolute;
  bottom: 750px;
  font-size: 34px;
  font-weight: 900;
`;

export const googlePlayBadgeStyle = css`
  position: absolute;
  width: 180px;
  border-bottom: none;
  right: 32px;
  bottom: 260px;
  bottom: auto;
  top: 610px;
`;
export const appStoreBadgeStyle = css`
  position: absolute;
  width: 180px;
  border-bottom: none;
  right: 32px;
  bottom: 180px;
  bottom: auto;
  top: 543px;
`;

export const s2Style = css`
  background: #000000;
  margin-top: 8px;
  padding: 585px 0 0 0;
  color: #fff;
  p {
    font-size: 20px;
  }
`;
export const animation = css`
  display: block;
  position: absolute;
  top: 430px;
  width: 320px;
  height: 320px;
  left: calc(50% - 160px);
  background-color: #000000;
`;

export const imgSunStyle = css`
  width: 100%;
  height: auto;
  animation-fill-mode: forwards;
  animation-name: breathing;
  animation-duration: 19s;
  animation-iteration-count: 4;
  animation-timing-function: ease-in-out;
  @keyframes breathing {
    0% {
      transform: scale(0.6);
    }
    19.04% {
      transform: scale(1);
    }
    53% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.6);
    }
  }
`;

export const imgSunsetLinesStyle = css`
  z-index: 1000;
  position: absolute;
  left: 0;
  bottom: 4px;
  width: 100%;
`;

export const paragraphStyles = css`
  margin-bottom: 24px;
  max-width: 66%;
`;

export const paragraphStyles2 = css`
  margin-bottom: 24px;
  max-width: 66%;

  margin-bottom: 150px;
`;

export const s2ContainerStyles = css`
  margin: 0 auto;
  position: relative;
  padding: 32px;
  max-width: 1440px;
`;

export const heroImage2Style = css`
  display: block;
  width: 1280px;
  height: auto;
  z-index: 100000;
  margin: 0 auto;
`;

export const s3Style = css`
  background: #ffffff;
  color: #ffffff;
  margin-top: -850px;
  padding: 728px 0 0 0;
  display: block;
  span {
    color: black;
    margin: 8px 0 24px 0;
  }
  p {
    color: black;
    max-width: 66%;
    margin-bottom: 72px;
  }
`;

export const h2Style = css`
  line-height: 140%;
  font-weight: 900;
  font-size: 34px;
  color: #000000;
`;

export const s3ContainerStyles = css`
  margin: 0 auto;
  position: relative;
  padding: 32px;
  max-width: 1440px;
`;

export const heroImage3Style = css`
  display: block;
  margin: 0 auto;
  width: 1280px;
  height: auto;
  z-index: 100000;
`;

export const s4Style = css`
  background-color: #000000;
  color: #fff;
  margin-top: -528px;
  padding: 440px 0 0 0;
  display: block;
  ul {
    list-style: none;
  }
  li {
    font-size: 32px;
    line-height: 48px;
    margin-bottom: 16px;
  }
  a {
    border-bottom: 2px solid #feed07;
  }
`;

export const footerStyle = css`
  margin-top: 72px;
  opacity: 0.5;
  font-size: 14px;
  background: #000000;
`;
