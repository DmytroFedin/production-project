import { classNames } from 'shared/lib/classNames';
import { UseTheme } from 'app/providers/themeProvider';
import './styles/index.scss';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { AppRouter } from './providers/router';

const App = () => {
  const { theme } = UseTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
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
