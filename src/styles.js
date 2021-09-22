/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const wrapper = css`
  margin: 0;
  padding: 0;
  border: 0;
  line-height: 26px;
  overflow-x: hidden;
`;
export const s1Style = css`
  display: block;
  height: 685px;
  background: #ffffff;
  .Container {
    margin: 0 auto;
    position: relative;
    padding: 32px;
    max-width: 1440px;
  }
  .Header {
    margin: 0;
    display: flex;
    font-weight: 850;
    color: black;
    font-size: 48px;

    line-height: 120%;
  }
  .Keywords {
    position: absolute;
    bottom: 750px;
    font-size: 34px;
    font-weight: 800;
    line-height: 140%;
  }
  .GooglePlayBadge {
    position: absolute;
    width: 180px;
    border-bottom: none;
    right: 32px;
    bottom: 260px;
    bottom: auto;
    top: 610px;
  }
  .AppStore {
    position: absolute;
    width: 180px;
    height: 52px;
    border-bottom: none;
    right: 32px;
    bottom: 180px;
    bottom: auto;
    top: 543px;
  }
  .Hero {
    position: relative;
    width: 1280px;
    margin: 0 auto;
    z-index: 100000;
    border: 0;
  }
  .Animation {
    display: block;
    position: absolute;
    top: 430px;
    width: 320px;
    height: 320px;
    left: calc(50% - 160px);
    background-color: #000000;
  }
  .Sun {
    width: 100%;
    height: auto;
    animation-fill-mode: forwards;
    animation-name: breathing;
    animation-duration: 19s;
    animation-iteration-count: 4;
    animation-timing-function: ease-in-out;
  }
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
  .SunLines {
    z-index: 1000;
    position: absolute;
    left: 0;
    bottom: 4px;
    width: 100%;
  }
`;
export const s2Style = css`
  background: #000000;
  margin-top: 8px;
  padding: 585px 0 0 0;
  color: #fff;

  .Container {
    margin: 0 auto;
    position: relative;
    padding: 32px;
    max-width: 1440px;
  }

  p {
    margin-bottom: 24px;
    max-width: 66%;
    font-size: 23px;
  }
  .Container p:nth-of-type(3) {
    margin-bottom: 150px;
  }
  .Hero2 {
    display: block;
    width: 1280px;
    height: auto;
    z-index: 100000;
    margin: 0 auto;
  }
`;
export const s3Style = css`
  background: #ffffff;
  color: #ffffff;
  margin-top: -850px;
  padding: 728px 0 0 0;
  display: block;
  .Container {
    margin: 0 auto;
    position: relative;
    padding: 32px;
    max-width: 1440px;
  }
  span {
    color: black;
    margin: 8px 0 24px 0;
    font-size: 21px;
  }
  p {
    color: black;
    max-width: 66%;
    margin-bottom: 72px;
    font-size: 21px;
  }
  h2 {
    line-height: 140%;
    font-weight: 900;
    font-size: 34px;
    color: #000000;
  }
  img {
    display: block;
    margin: 0 auto;
    width: 1280px;
    height: auto;
    z-index: 100000;
  }
`;

export const s4Style = css`
  background-color: #000000;
  color: #fff;
  margin-top: -523px;
  padding: 440px 0 0 0;
  display: block;

  .Container {
    margin: 0 auto;
    position: relative;
    padding: 32px;
    max-width: 1440px;
    p {
      margin-bottom: 24px;
      max-width: 66%;
    }
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    font-size: 32px;
    line-height: 48px;
    margin-bottom: 16px;
  }
  a {
    border-bottom: 2px solid #feed07;
  }
  .GooglePlayBadge {
    position: absolute;
    width: 180px;
    border-bottom: none;
    right: 32px;
    bottom: 260px;
  }
  .AppStore {
    position: absolute;
    width: 180px;
    height: 80px;
    border-bottom: none;
    right: 32px;
    bottom: 180px;
    padding: 12px;
  }
  .Footer {
    margin-top: 72px;
    opacity: 0.5;
    font-size: 14px;
    background: #000000;
  }
`;
