import React from 'react';

const MainContainer = ({children}) => {
  return (
    <main className="dashboard_main">
      {children}
    </main>
  );
};

export default MainContainer;
