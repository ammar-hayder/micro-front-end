import React from 'react';

export default function LeftNavigation() {

  return (
    <React.Fragment>
      <main>
        <div className="left-menu">

          <div className="menu active">
            <div className="home"></div>
          </div>

          <div className="menu">
            <div className="menu-calendar"></div>
          </div>

          <div className="menu">
            <div className="help"></div>
          </div>

          <div className="menu">
            <div className="more"></div>
          </div>

          <div className="b-menu-notification">
            <div className="notification"></div>
          </div>

          <div className="b-menu-settings">
            <div className="settings"></div>
          </div>

          <div className="b-menu">
            <div className="sign-out"></div>
          </div>

        </div>
      </main>
    </React.Fragment>
  );

}
