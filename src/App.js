import { ReactComponent as AppstoreBadge } from './images/app-store-badge.svg';
import heroImage3 from './images/calmaria_2front.png';
import heroImage2 from './images/calmaria_3pers.png';
import heroImage from './images/calmaria_front.png';
import googleBadge from './images/google-play-badge.png';
/** @jsxImportSource @emotion/react */
import { s1Style, s2Style, s3Style, s4Style, wrapper } from './styles.js';

function App() {
  return (
    <div className="Wrapper" css={wrapper}>
      <section id="s1" css={s1Style}>
        <div className="Container">
          <h1 className="Header">Calmaria</h1>
          <h2 className="Keywords">
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
              className="GooglePlayBadge"
              src={googleBadge}
              alt="Google Play Badge"
            />
          </a>
          <a href="https://apps.apple.com/us/app/calmaria/id1523108871">
            <AppstoreBadge className="AppStore" />
          </a>
          <div>
            <img className="Hero" src={heroImage} alt="Display of App" />
          </div>
        </div>
      </section>
      <section id="s2" css={s2Style}>
        <div className="Container">
          <p>
            Access to information has helped us evolve rapidly but not without
            side effects. Misinformation and the strong polarization of opinions
            are amplified by our confirmation bias tendencies. What to believe,
            who is right, who is wrong?
          </p>
          <p>
            Questions with no answers inevitably create anxiety. The good news
            is that there is a simple way to reduce it, just breathe. It works!{' '}
          </p>
          <p>
            There are several different breathing techniques and exercises that
            are designed to bring your body to a deep relaxation state. Holding
            your breath for a period of time allows your body to better
            oxygenate. One of the simplest techniques is the 4-7-8 method which
            is simply inhaling for 4 seconds, holding your breath for 7 seconds
            and exhaling for 8 seconds.{' '}
          </p>
          <img className="Hero2" src={heroImage2} alt="heroimage 2" />
        </div>
      </section>
      <section id="s3" css={s3Style}>
        <div className="Container">
          <h2>Calmaria</h2>
          <span>[ feminine ] /kɑʊma’ɾia/</span>
          <p>
            In Portuguese means calmness, tranquility, calm. It’s often used by
            seamen and surfers to indicate that there are no waves in the ocean.
            That mood perfectly translates to what this app intends to do, bring
            peace of mind and tranquility to your busy day to day life. Just
            breathe and relax.
          </p>
          <img src={heroImage3} alt="heroImage3" />
        </div>
      </section>
      <section id="s4" css={s4Style}>
        <div className="Container">
          <p>Available for</p>
          <ul>
            <li>
              <a href="https://play.google.com/store/apps/details?id=com.abdz.breathing">
                Android
              </a>
            </li>
            <li>
              <a href="https://apps.apple.com/us/app/calmaria/id1523108871">
                iOS
              </a>
            </li>
            <li>
              <a href="https://calmaria.app/pwa/">PWA Progressive Web App</a>
            </li>
          </ul>
          <div className="Badges">
            <a
              className="GooglePlay"
              href="https://play.google.com/store/apps/details?id=com.abdz.breathing"
            >
              <img
                className="GooglePlayBadge"
                src={googleBadge}
                alt="Google Play Badge"
              />
            </a>
            <a href="https://apps.apple.com/us/app/calmaria/id1523108871">
              <AppstoreBadge className="AppStore" />
            </a>
          </div>

          <footer className="Footer">
            Proudly cloned and copied by El Gordo
          </footer>
        </div>
      </section>
    </div>
  );
}

export default App;
