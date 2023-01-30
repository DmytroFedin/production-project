import { Link } from "react-router-dom";

const MainPage = () => {
  return(
    <>
      <Link to={'/about'}>About</Link>
      <Link to={'/'}>Main</Link>
      <h2>
        MainPage
      </h2>
    </>
  )
}

export default MainPage;