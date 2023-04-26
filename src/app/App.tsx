import React, { Suspense, useEffect } from 'react';
import './styles/index.scss';
import { UseTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/helpers/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { PageLoader } from 'widgets/PageLoader';

const App = () => {
  const { theme } = UseTheme();

  // useEffect(() => {
  //   if (Math.random() < 0.5) {
  //     throw new Error();
  //   }
  // });

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
