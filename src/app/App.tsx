import React, { Suspense } from 'react';
import { UseTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/helpers/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { PageLoader } from 'widgets/PageLoader';

const App = () => {
  const { theme } = UseTheme();

  return (
    <div className={ classNames('app', {}, [theme]) }>
      <Suspense fallback={ <PageLoader /> }>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
