import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  '@global': {
    a: {
      textDecoration: 'none',
    },
  },
  icon: {
    marginRight: theme.spacing(2),
  }
}));

export default function Component2() {

  return (
    <React.Fragment>
      <main>

        <div className="landing-page">

          <div className="header-row user-information">

            <RouterLink to="/">
              <div className="menu-item">
                <h4>HOME</h4>
                <small>Dashboard & Reports</small>
              </div>
            </RouterLink>

            <RouterLink to="/Component2">
              <div className="menu-item menu-item-active">
                <h4>PROJECTS</h4>
                <small>Project Management</small>
              </div>
            </RouterLink>

            <div className="menu-item">
              <h4>REPORTS</h4>
              <small>Tools & Metrics</small>
            </div>

            <div className="menu-item">
              <h4>ORDERS</h4>
              <small>Order Management</small>
            </div>

            <RouterLink to="/auth/signin">
              <div className="menu-item">
                <h4>USERS</h4>
                <small>Login, Register & Password</small>
              </div>
            </RouterLink>

          </div>

          <div className="section-row">

            <div className="page-header">
              <h2>Completed Projects</h2>
            </div>

            <div className="tab-tile">
              <h4>
                Project Name
                <div className="project-status-ready-box">
                  Completed
                </div>
              </h4>
              <div className="project-status">
                <small>Task Completed: 10/10</small>
                <div className="project-tracker">
                  <div className="project-done"></div>
                </div>
              </div>
            </div>

            <div className="tab-tile">
              <h4>
                Project Name
                <div className="project-status-ready-box">
                  Completed
                </div>
              </h4>
              <div className="project-status">
                <small>Task Completed: 10/10</small>
                <div className="project-tracker">
                  <div className="project-done"></div>
                </div>
              </div>
            </div>

            <div className="tab-tile">
              <h4>
                Project Name
                <div className="project-status-ready-box">
                  Completed
                </div>
              </h4>
              <div className="project-status">
                <small>Task Completed: 10/10</small>
                <div className="project-tracker">
                  <div className="project-done"></div>
                </div>
              </div>
            </div>

            <div className="tab-tile">
              <h4>
                Project Name
                <div className="project-status-ready-box">
                  Completed
                </div>
              </h4>
              <div className="project-status">
                <small>Task Completed: 10/10</small>
                <div className="project-tracker">
                  <div className="project-done"></div>
                </div>
              </div>
            </div>

            <div className="page-header">
              <h2>On-going Projects</h2>
            </div>

            <div className="tab-tile">
              <h4>Project Name
                <div className="project-in-progress-box">
                  In-Progress
                </div>
              </h4>
              <div className="project-status">
                <small>Task Completed: 5/10</small>
                <div className="project-tracker">
                  <div className="project-good"></div>
                </div>
              </div>
            </div>

            <div className="tab-tile">
              <h4>Project Name
                <div className="project-in-progress-box">
                  In-Progress
                </div>
              </h4>
              <div className="project-status">
                <small>Task Completed: 2/10</small>
                <div className="project-tracker">
                  <div className="project-good-20"></div>
                </div>
              </div>
            </div>

            <div className="tab-tile">
              <h4>Project Name
                <div className="project-in-progress-box">
                  In-Progress
                </div>
              </h4>
              <div className="project-status">
                <small>Task Completed: 1/10</small>
                <div className="project-tracker">
                  <div className="project-good-10"></div>
                </div>
              </div>
            </div>

            <div className="page-header">
              <h2>Upcoming Projects</h2>
            </div>

            <div className="tab-tile">
              <h4>Project Name
              <div className="project-status-ytd-box">
                  Upcoming
                </div>
              </h4>
              <div className="project-status">
                <small>Task Completed: 0/10</small>
                <div className="project-tracker">
                </div>
              </div>
            </div>

            <div className="tab-tile">
              <h4>
                Project Name
                <div className="project-status-ytd-box">
                  Upcoming
                </div>
              </h4>
              <div className="project-status">
                <small>Task Completed: 0/10</small>
                <div className="project-tracker">
                </div>
              </div>
            </div>

            <div className="tab-tile">
              <h4>
                Project Name
                <div className="project-status-ytd-box">
                  Upcoming
                </div>
              </h4>
              <div className="project-status">
                <small>Task Completed: 0/10</small>
                <div className="project-tracker">
                </div>
              </div>
            </div>

            <div className="tab-tile">
              <h4>
                Project Name
                <div className="project-status-ytd-box">
                  Upcoming
                </div>
              </h4>
              <div className="project-status">
                <small>Task Completed: 0/10</small>
                <div className="project-tracker">
                </div>
              </div>
            </div>

            <div className="tab-tile">
              <h4>
                Project Name
                <div className="project-status-ytd-box">
                  Upcoming
                </div>
              </h4>
              <div className="project-status">
                <small>Task Completed: 0/10</small>
                <div className="project-tracker">
                </div>
              </div>
            </div>

            <div className="tab-tile">
              <h4>
                Project Name
                <div className="project-status-ytd-box">
                  Upcoming
                </div>
              </h4>
              <div className="project-status">
                <small>Task Completed: 0/10</small>
                <div className="project-tracker">
                </div>
              </div>
            </div>

            <div className="tab-tile">
              <h4>
                Project Name
                <div className="project-status-ytd-box">
                  Upcoming
                </div>
              </h4>
              <div className="project-status">
                <small>Task Completed: 0/10</small>
                <div className="project-tracker">
                </div>
              </div>
            </div>

            <div className="tab-tile">
              <h4>
                Project Name
                <div className="project-status-ytd-box">
                  Upcoming
                </div>
              </h4>
              <div className="project-status">
                <small>Task Completed: 0/10</small>
                <div className="project-tracker">
                </div>
              </div>
            </div>

            {/* <div className="tab-contents">
              <div className="content-container">

                <div className="content-tile activity-tile">
                  <h4>Project Two</h4>
                  <small>5 Tasks Completed | 2 Development Activities | 2 Testing Activities | 1 Deployment</small>
                </div>

                <div className="content-tile completed-tile">
                  <div className="icon">
                    1
                  </div>
                  <h4>Handover Project Related Files</h4>
                  <small>Time: 11:45 AM</small>
                </div>

                <div className="content-tile completed-tile">
                  <div className="icon">
                    2
                  </div>
                  <h4>Handover Project Related Files</h4>
                  <small>Time: 12:15 PM</small>
                </div>

                <div className="content-tile completed-tile">
                  <div className="icon">
                    3
                  </div>
                  <h4>Handover Project Related Files</h4>
                  <small>Time: 12:30 PM</small>
                </div>

                <div className="content-tile completed-tile">
                  <div className="icon">
                    4
                  </div>
                  <h4>Handover Project Related Files</h4>
                  <small>Time: 01:00 PM</small>
                </div>

                <div className="content-tile ytd-tile">
                  <div className="icon">
                    5
                  </div>
                  <h4>Handover Project Related Files</h4>
                  <small>Time: 01:00 PM</small>
                </div>

                <div className="content-tile ytd-tile">
                  <div className="icon">
                    6
                  </div>
                  <h4>Handover Project Related Files</h4>
                  <small>Time: 01:00 PM</small>
                </div>

                <div className="content-tile ytd-tile">
                  <div className="icon">
                    7
                  </div>
                  <h4>Handover Project Related Files</h4>
                  <small>Time: 01:00 PM</small>
                </div>

                <div className="content-tile ytd-tile">
                  <div className="icon">
                    8
                  </div>
                  <h4>Handover Project Related Files</h4>
                  <small>Time: 01:00 PM</small>
                </div>

                <div className="content-tile ytd-tile">
                  <div className="icon">
                    9
                  </div>
                  <h4>Handover Project Related Files</h4>
                  <small>Time: 01:00 PM</small>
                </div>

                <div className="content-tile ytd-tile">
                  <div className="icon">
                    10
                  </div>
                  <h4>Handover Project Related Files</h4>
                  <small>Time: 01:00 PM</small>
                </div>

              </div>
            </div> */}
          </div>

        </div>

      </main>
    </React.Fragment>
  );

}
