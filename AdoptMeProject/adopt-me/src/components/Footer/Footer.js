export const Footer = () => {
  return (
    <footer>
      <div className="about">
        <h3>About Creator</h3>
        <ul className="about-creator">
          <li> <img src="/images/locationLogo.png" /> Sofia, Bulgaria</li>
          <li> <img src="/images/mailLogo.png" /> danisimeonova147@gmail.com </li>
          <li> <img src="/images/callLogo.png" /> +359895556107</li>
        </ul>
        <h3>Social networks</h3>
        <ul className="social-networks">
          <li>
            <a href="https://www.facebook.com/dani.simeonova.589/">
              <img src="/images/facebookLogo.png" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/dani-simeonova-945181279/">
              <img src="/images/linkedInLogo.png" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};