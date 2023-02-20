import { classNames } from 'shared/lib/classNames/classNames';
import { UseTheme } from 'app/providers/themeProvider';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { AppRouter } from './providers/router';

const App = () => {
  const { theme } = UseTheme();

  // useEffect(() => {
  //   throw new Error();
  // }, []);

  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback="{}">
        <Navbar className={theme} />
        <div className="page-container">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
