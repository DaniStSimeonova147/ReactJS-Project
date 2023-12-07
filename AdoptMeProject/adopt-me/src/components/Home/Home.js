import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    //  {/* <!--Home Page--> */}
    <section id="welcome-world" className="welcome-content">
      {/*Welcome Page*/}
      <article className="welcome-content-text">
        <h1>If you want to do a good deed...</h1>
        <h1 className="bold-welcome">You can share your home with me!</h1>
        <Link to="/catalog">
          <img
            width="300px"
            src="images/pawsWaitListLogo.png"
            alt="WaitList"
          />
        </Link>
      </article>
      <article className="welcome-content-image">
        <img src="images/adopMeHomePic.jpg" alt="dog" />
      </article>
    </section>

  );
};