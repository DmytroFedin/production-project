import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import './styles/index.scss'
import { AboutPageasync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { useContext } from "react";
import { Theme, ThemeContext } from "./theme/themeContext";
import { UseTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";


const App = () => {
  const { theme, toggleTheme } = UseTheme();

  return(
    <div className={classNames('app', {}, [theme])}>
      <div onClick={toggleTheme}>Change theme</div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageasync/>}></Route>
          <Route path={'/'} element={<MainPageAsync/>}></Route>
        </Routes>
      </Suspense>  
    </div>
  )
}

export default App;