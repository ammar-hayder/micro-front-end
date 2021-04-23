import React from 'react';

export default function Message() {

  return (
    <React.Fragment>
      <main>
        <div className="notification-section">

          <div className="small-info">
            <div className="notification-w pull-right"></div>
            <h3>Messages</h3>
          </div>

          <div className="grid-row">
            {/* <div className="message-photo">

            </div> */}
            <div className="left-section">
              <h3>David</h3>
              <div className="row">
                <small>
                  Hey tell me about progress of project? Waiting for your response
                  </small>
              </div>
            </div>
            <div className="right-section">
              <small className="message-margin-top pull-right text-right margin-right-reset">
                21 July
                </small>
            </div>
          </div>

          <div className="grid-row">
            <div className="message-photo">

            </div>
            <div className="left-section">
              <h3>Stephanie</h3>
              <div className="row">
                <small>
                  I got your first assignment. It was quite good, you can start work on next assignment
                  </small>
              </div>
            </div>
            <div className="right-section">
              <small className="message-margin-top pull-right text-right margin-right-reset">
                19 July
                </small>
            </div>
          </div>

          <div className="grid-row">
            <div className="message-photo">

            </div>
            <div className="left-section">
              <h3>William</h3>
              <div className="row">
                <small>
                  I want some changes in previous work you sent me. Waiting for you reply
                  </small>
              </div>
            </div>
            <div className="right-section">
              <small className="message-margin-top pull-right text-right margin-right-reset">
                17 July
                </small>
            </div>
          </div>

          <div className="grid-row">
            <div className="message-photo">

            </div>
            <div className="left-section">
              <h3>Alana</h3>
              <div className="row">
                <small>
                  I am really impressed from your work. Keep doing great work
                  </small>
              </div>
            </div>
            <div className="right-section">
              <small className="message-margin-top pull-right text-right margin-right-reset">
                15 July
                </small>
            </div>
          </div>

          <div className="grid-row">
            <div className="message-photo">

            </div>
            <div className="left-section">
              <h3>Hira</h3>
              <div className="row">
                <small>
                  When are you starting to redesign the app? Previous project was perfect
                  </small>
              </div>
            </div>
            <div className="right-section">
              <small className="message-margin-top pull-right text-right margin-right-reset">
                21 July
                </small>
            </div>
          </div>

        </div>
      </main>
    </React.Fragment>
  );

}
