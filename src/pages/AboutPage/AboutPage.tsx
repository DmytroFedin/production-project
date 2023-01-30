import { Link } from "react-router-dom";

const AboutPage = () => {
  return(
    <>
      <Link to={'/about'}>About</Link>
      <Link to={'/'}>Main</Link>
      <h2>
        AboutPage
      </h2>
    </>
  )
}

export default AboutPage;