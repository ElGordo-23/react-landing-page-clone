import { ReactComponent as AppstoreBadge } from './images/app-store-badge.svg';
import heroImage3 from './images/calmaria_2front.png';
import heroImage2 from './images/calmaria_3pers.png';
import heroImage from './images/calmaria_front.png';
import googleBadge from './images/google-play-badge.png';
import sun from './images/sun.png';
import { ReactComponent as SunsetLines } from './images/sunset_lines.svg';
/** @jsxImportSource @emotion/react */
import {
  animation,
  appStoreBadgeStyle,
  containerStyles,
  footerStyle,
  googlePlayBadgeStyle,
  h1Styles,
  h2Style,
  h2Styles,
  heroImage2Style,
  heroImage3Style,
  heroImageStyle,
  imgSunsetLinesStyle,
  imgSunStyle,
  paragraphStyles,
  paragraphStyles2,
  s1Style,
  s2ContainerStyles,
  s2Style,
  s3ContainerStyles,
  s3Style,
  s4Style,
  wrapperStyle,
} from './styles.js';

function App() {
  return (
    <div className="Wrapper" css={wrapperStyle}>
      <section id="s1" css={s1Style}>
        <div className="Container" css={containerStyles}>
          <h1 className="Header" css={h1Styles}>
            Calmaria
          </h1>
          <h2 className="Keywords" css={h2Styles}>
            {' '}
            Focus /
            <br />
            Breathe /
            <br />
            Relax /
          </h2>
          <a
            className="GooglePlay"
            href="https://play.google.com/store/apps/details?id=com.abdz.breathing"
          >
            <img
              src={googleBadge}
              alt="Google Play Badge"
              css={googlePlayBadgeStyle}
            />
          </a>
          <a
            className="AppStore"
            href="https://apps.apple.com/us/app/calmaria/id1523108871"
          >
            <AppstoreBadge css={appStoreBadgeStyle} />
          </a>
          <div>
            <img src={heroImage} alt="Display of App" css={heroImageStyle} />
          </div>
          <div className="Animation" css={animation}>
            <img src={sun} alt="Sun" css={imgSunStyle} />
            <SunsetLines css={imgSunsetLinesStyle} />
          </div>
        </div>
      </section>
      <section id="s2" css={s2Style}>
        <div className="Container" css={s2ContainerStyles}>
          <p css={paragraphStyles}>
            Access to information has helped us evolve rapidly but not without
            side effects. Misinformation and the strong polarization of opinions
            are amplified by our confirmation bias tendencies. What to believe,
            who is right, who is wrong?
          </p>
          <p css={paragraphStyles}>
            Questions with no answers inevitably create anxiety. The good news
            is that there is a simple way to reduce it, just breathe. It works!{' '}
          </p>
          <p css={paragraphStyles2}>
            There are several different breathing techniques and exercises that
            are designed to bring your body to a deep relaxation state. Holding
            your breath for a period of time allows your body to better
            oxygenate. One of the simplest techniques is the 4-7-8 method which
            is simply inhaling for 4 seconds, holding your breath for 7 seconds
            and exhaling for 8 seconds.{' '}
          </p>
          <img src={heroImage2} alt="heroimage 2" css={heroImage2Style} />
        </div>
      </section>
      <section id="s3" css={s3Style}>
        <div className="Container" css={s3ContainerStyles}>
          <h2 css={h2Style}>Calmaria</h2>
          <span>[ feminine ] /kɑʊma’ɾia/</span>
          <p>
            In Portuguese means calmness, tranquility, calm. It’s often used by
            seamen and surfers to indicate that there are no waves in the ocean.
            That mood perfectly translates to what this app intends to do, bring
            peace of mind and tranquility to your busy day to day life. Just
            breathe and relax.
          </p>
          <img src={heroImage3} alt="heroImage3" css={heroImage3Style} />
        </div>
      </section>
      <section id="s4" css={s4Style}>
        <div className="Container" css={s3ContainerStyles}>
          <p>Available for</p>
          <ul>
            <li>
              <a>Android</a>
            </li>
            <li>
              <a>iOS</a>
            </li>
            <li>
              <a>PWA Progressive Web App</a>
            </li>
          </ul>
        </div>
      </section>
      <footer css={footerStyle}>Proudly cloned and copied by El Gordo</footer>
    </div>
  );
}

export default App;
