import App from 'app/App';
import { ErrorBoundary } from 'app/providers/errorBoundary';
import { ThemeProvider } from 'app/providers/themeProvider';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'shared/config/i18n/i18n';

render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root'),
);
