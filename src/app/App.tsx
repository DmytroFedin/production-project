import { classNames } from 'shared/lib/classNames/classNames';
import { UseTheme } from 'app/providers/themeProvider';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { getUserMounted, userActions } from 'entities/User';
import { AppRouter } from './providers/router';

const App = () => {
  const mounted = useSelector(getUserMounted);
  const { theme } = UseTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
    if (user) {
      dispatch(userActions.initAuthData(JSON.parse(user)));
    }
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback="{}">
        <Navbar className={theme} />
        <div className="page-container">
          <Sidebar />
          {mounted && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};

export default App;
