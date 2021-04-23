import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export default function Component1({ }) {

  // return (
  //   <React.Fragment>
  //     <main>

  //       <div className="landing-page">

  //         <div className="section-row user-information">

  //           <div className="grid-row">
  //             <div className="left-section">

  //               <div className="row">
  //                 <small>Welcome,</small>
  //                 <h4>Richard Hackerson</h4>
  //               </div>
  //             </div>
  //           </div>

  //           <div className="grid-row">
  //             <div className="col-2">
  //               <div className="row">
  //                 <small>Active Time:</small>
  //                 <h4>1hr 45min</h4>
  //               </div>
  //             </div>
  //             <div className="col-2">
  //               <div className="row">
  //                 <small>Status:</small>
  //                 <h4 className="link">Working</h4>
  //               </div>
  //             </div>
  //           </div>

  //           <div className="grid-button-row">
  //             Create Project
  //           </div>
  //           <div className="grid-button-row button-orange">
  //             View Projects
  //           </div>

  //         </div>

  //         <div className="section-row">
  //           <div className="section-header">
  //             Today's Tasks
  //           </div>

  //           <RouterLink to="/Component2">
  //             <div className="section-tile">
  //               <h4>Meeting with Johny Simons</h4>
  //               <small>Time: 11:45 AM</small>
  //             </div>
  //           </RouterLink>

  //           <div className="section-tile">
  //             <h4>Review of Architecture Design</h4>
  //             <small>Time: 01:00 PM</small>
  //           </div>

  //           <div className="section-tile">
  //             <h4>Handover Project Related Files</h4>
  //             <small>Time: 03:00 PM</small>
  //           </div>

  //           <div className="section-tile">
  //             <h4>Review of Project Design</h4>
  //             <small>Time: 03:45 PM</small>
  //           </div>

  //           <div className="section-tile">
  //             <h4>Meeting with the management</h4>
  //             <small>Time: 04:30 PM</small>
  //           </div>

  //           <div className="section-tile-add">
  //             <div className="add"></div>
  //             <div className="link-text">Add New Task</div>
  //           </div>

  //         </div>

  //         <div className="section-row projects">

  //           <div className="section-header">
  //             Running Projects
  //           </div>

  //           <div className="section-tile in-progress-bg">

  //             <h4>
  //               Project A
  //               <div className="project-in-progress-box">
  //                 In-Progress
  //               </div>
  //             </h4>
  //             <div className="project-status">
  //               <small>Task Completed: 8/10</small>
  //               <div className="project-tracker">
  //                 <div className="project-in-progress"></div>
  //               </div>
  //             </div>
  //           </div>

  //           <div className="section-tile good-bg">
  //             <h4>Project B
  //               <div className="project-in-progress-box">
  //                 In-Progress
  //               </div>
  //             </h4>
  //             <div className="project-status">
  //               <small>Task Completed: 4/10</small>
  //               <div className="project-tracker">
  //                 <div className="project-good"></div>
  //               </div>
  //             </div>
  //           </div>

  //           <div className="section-tile done-bg">
  //             <h4>Project C
  //               <div className="project-status-ready-box">
  //                 Ready
  //               </div>
  //             </h4>
  //             <div className="project-status">
  //               <small>Task Completed: 10/10</small>
  //               <div className="project-tracker">
  //                 <div className="project-done"></div>
  //               </div>
  //             </div>
  //           </div>

  //           <div className="section-tile onhold-bg">

  //             <h4>
  //               Project D
  //               <div className="project-status-box">
  //                 On-Hold
  //               </div>
  //             </h4>
  //             <div className="project-status">
  //               <small>Task Completed: 2/10</small>
  //               <div className="project-tracker">
  //                 <div className="project-onhold"></div>
  //               </div>
  //             </div>
  //           </div>

  //           <div className="section-tile done-bg">
  //             <h4>Project E
  //             <div className="project-status-ready-box">
  //                 Ready
  //               </div>
  //             </h4>
  //             <div className="project-status">
  //               <small>Task Completed: 10/10</small>
  //               <div className="project-tracker">
  //                 <div className="project-done"></div>
  //               </div>
  //             </div>
  //           </div>

  //           <div className="section-tile done-bg">
  //             <h4>Project F
  //               <div className="project-status-ready-box">
  //                 Ready
  //               </div>
  //             </h4>
  //             <div className="project-status">
  //               <small>Task Completed: 10/10</small>
  //               <div className="project-tracker">
  //                 <div className="project-done"></div>
  //               </div>
  //             </div>
  //           </div>

  //         </div>

  //         <div className="section-row">
  //           <div className="section-header">
  //             Active Members
  //           </div>

  //           <div className="grid-row">
  //             <div className="user"></div>
  //             <div className="left-section">
  //               <h4>Lastname Firstname</h4>
  //               <div className="row">
  //                 <small>
  //                   01 January 2021 <strong>to</strong> 16 October 2021
  //                 </small>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="grid-row">
  //             <div className="user"></div>
  //             <div className="left-section">
  //               <h4>Lastname Firstname</h4>
  //               <div className="row">
  //                 <small>
  //                   01 January 2021 <strong>to</strong> 16 October 2021
  //                 </small>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="grid-row">
  //             <div className="user"></div>
  //             <div className="left-section">
  //               <h4>Lastname Firstname</h4>
  //               <div className="row">
  //                 <small>
  //                   01 January 2021 <strong>to</strong> 16 October 2021
  //                 </small>
  //               </div>
  //             </div>
  //           </div>

  //         </div>

  //       </div>

  //     </main>
  //   </React.Fragment>
  // );

  // use this section for landing page
  return (
    <React.Fragment>
      <main>

        <div className="landing-page">

        <div className="header-row user-information">

          <RouterLink to="/">
            <div className="menu-item menu-item-active">
                <h4>HOME</h4>
                <small>Dashboard & Reports</small>
            </div>
           </RouterLink>

           <RouterLink to="/Component2">
            <div className="menu-item">
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
              <h2>Search Projects</h2>
            </div>

            <div className="search-tile">

              <div className="search-header-menu-item orange-font">
                Domains
              </div>

              <div className="search-menu-item search-menu-item-active">
                All Domains
                <div className="count-dark">
                  23
                </div>
              </div>

              <div className="search-menu-item">
                Health Care
                <div className="count">
                  5
                </div>
              </div>

              <div className="search-menu-item">
                Banking
                <div className="count">
                  3
                </div>
              </div>

              <div className="search-menu-item">
                Education
                <div className="count">
                  5
                </div>
              </div>

              <div className="search-menu-item">
                Internet Of Things
                <div className="count">
                  10
                </div>
              </div>

              <div className="search-menu-item">
                Others
              </div>

            </div>

            <div className="search-contents">
              <div className="content-container">

                <div className="search-bar">
                  <div class="tab search-active-tab">ALL</div>
                  <div class="tab">A</div>
                  <div class="tab">B</div>
                  <div class="tab">C</div>
                  <div class="tab search-tab-inactive">D</div>
                  <div class="tab search-tab-inactive">E</div>
                  <div class="tab search-tab-inactive">F</div>
                  <div class="tab search-tab-inactive">G</div>
                  <div class="tab">H</div>
                  <div class="tab search-tab-inactive">I</div>
                  <div class="tab search-tab-inactive">J</div>
                  <div class="tab search-tab-inactive">K</div>
                  <div class="tab search-tab-inactive">L</div>
                  <div class="tab search-tab-inactive">M</div>
                  <div class="tab search-tab-inactive">N</div>
                  <div class="tab search-tab-inactive">O</div>
                  <div class="tab">P</div>
                  <div class="tab search-tab-inactive">Q</div>
                  <div class="tab search-tab-inactive">R</div>
                  <div class="tab search-tab-inactive">S</div>
                  <div class="tab search-tab-inactive">T</div>
                  <div class="tab search-tab-inactive">U</div>
                  <div class="tab search-tab-inactive">V</div>
                  <div class="tab">W</div>
                  <div class="tab search-tab-inactive">X</div>
                  <div class="tab search-tab-inactive">Y</div>
                  <div class="tab search-tab-inactive">Z</div>
                </div>
              </div>

            </div>

            <div className="search-results">
              <div className="group-tile">
                A
              </div>
              <div className="section-tile">
                <h4>After the Rayne</h4>
                <small>Health Care Domain</small>
              </div>

              <div className="section-tile">
                <h4>A Moveable Feast</h4>
                <small>Health Care Domain</small>
              </div>

              <div className="section-tile">
                <h4>Axa Life Insurance</h4>
                <small>Banking Domain</small>
              </div>

              <div className="group-tile">
                B
              </div>

              <div className="section-tile">
                <h4>Be Healthy</h4>
                <small>Health Care Domain</small>
              </div>

              <div className="group-tile">
                C
              </div>

              <div className="section-tile">
                <h4>Caring Wellness</h4>
                <small>Health Care Domain</small>
              </div>

              <div className="group-tile">
                H
              </div>
              <div className="section-tile">
                <h4>Helpful Hearts</h4>
                <small>Health Care Domain</small>
              </div>


              <div className="group-tile">
                P
              </div>

              <div className="section-tile">
                <h4>Project Name</h4>
                <small>Banking Domain</small>
              </div>

              <div className="section-tile">
                <h4>Project Name</h4>
                <small>Education Domain</small>
              </div>

              <div className="section-tile">
                <h4>Project Name</h4>
                <small>Education Domain</small>
              </div>

              <div className="section-tile">
                <h4>Project Name</h4>
                <small>Education Domain</small>
              </div>

              <div className="section-tile">
                <h4>Project Name</h4>
                <small>Education Domain</small>
              </div>

              <div className="section-tile">
                <h4>Project Name</h4>
                <small>Education Domain</small>
              </div>

              <div className="section-tile">
                <h4>Project Name</h4>
                <small>Intenet Of Things</small>
              </div>

              <div className="section-tile">
                <h4>Project Name</h4>
                <small>Intenet Of Things</small>
              </div>

              <div className="section-tile">
                <h4>Project Name</h4>
                <small>Intenet Of Things</small>
              </div>

              <div className="section-tile">
                <h4>Project Name</h4>
                <small>Intenet Of Things</small>
              </div>

              <div className="section-tile">
                <h4>Project Name</h4>
                <small>Intenet Of Things</small>
              </div>

              <div className="section-tile">
                <h4>Project Name</h4>
                <small>Intenet Of Things</small>
              </div>

              <div className="section-tile">
                <h4>Project Name</h4>
                <small>Intenet Of Things</small>
              </div>

              <div className="section-tile">
                <h4>Project Name</h4>
                <small>Intenet Of Things</small>
              </div>

              <div className="section-tile">
                <h4>Project Name</h4>
                <small>Intenet Of Things</small>
              </div>

              <div className="section-tile">
                <h4>Project Name</h4>
                <small>Intenet Of Things</small>
              </div>

              <div className="group-tile">
                W
              </div>

              <div className="section-tile">
                <h4>Wealthify Me</h4>
                <small>Banking Domain</small>
              </div>

            </div>

          </div>

        </div>

      </main>
    </React.Fragment>
  );

//   return (
//     <React.Fragment>
//       <main>
//         <div className="dashboard-left">
//           <div class="menu active">
//             <div className="home"></div>
//           </div>
//           <div class="menu">
//             <div className="menu-calendar"></div>
//           </div>
//           <div class="menu">
//             <div className="help"></div>
//           </div>
//           <div class="menu">
//             <div className="more"></div>
//           </div>
//           <div class="b-menu-notification">
//             <div className="notification"></div>
//           </div>
//           <div class="b-menu-settings">
//             <div className="settings"></div>
//           </div>

//         </div>

//         <div className="dashboard-wrapper">
//           <div className="secondary-menu">
//             <div className="group-tile">
//               Projects
//             </div>

//             <div className="section-tile">
//               <h4>Project Name</h4>
//               <small>Intenet Of Things</small>
//             </div>

//             <div className="section-tile">
//               <h4>Project Name</h4>
//               <small>Intenet Of Things</small>
//             </div>

//             <div className="section-tile">
//               <h4>Project Name</h4>
//               <small>Intenet Of Things</small>
//             </div>

//             <div className="section-tile">
//               <h4>Project Name</h4>
//               <small>Intenet Of Things</small>
//             </div>

//             <div className="section-tile">
//               <h4>Project Name</h4>
//               <small>Intenet Of Things</small>
//             </div>
//           </div>

//           <div className="row gray-bg">

//             <div className="grid-column">
//               <small>Project:</small>
//               <h4>Project Name</h4>
//             </div>

//             <div className="grid-column">
//               <small>Task Completed: 10/35</small>
//               <div className="project-tracker">
//                 <div className="project-task-completed"></div>
//               </div>
//             </div>

//             <div className="grid-button-row">
//               Create Task
// </div>

//           </div>

//           <div className="dashboard-row">



//             <div className="tool-bar">
//               <div class="tab-head">
//                 Tasks
//                 <small>
//                   More than 5+ tasks are completed
//                 </small>
//               </div>

//               <div class="tab active-tab">
//                 In-Progress [15]
//               </div>

//               <div class="tab">
//                 Completed [10]
//               </div>

//               <div class="tab">
//                 Upcoming [10]
//             </div>
//             </div>

//             <div className="task-section">

//               <div className="task-row">

//                 <div className="name">
//                   Task Name
//                 </div>
//                 <div className="description">
//                   Sit praesentium consequuntur est possimus fuga eos quos dolorem eos officia voluptatem
//                 </div>
//                 <div className="project-in-progress-box">
//                   In-Progress
//               </div>
//               </div>

//               <div className="task-row">
//                 <div className="name">
//                   Task Name
//                 </div>
//                 <div className="description">
//                   Sit praesentium consequuntur est possimus fuga eos quos dolorem eos officia voluptatem
//                 </div>
//                 <div className="project-in-progress-box">
//                   In-Progress
//               </div>
//               </div>

//               <div className="task-row">
//                 <div className="name">
//                   Task Name
//                 </div>
//                 <div className="description">
//                   Sit praesentium consequuntur est possimus fuga eos quos dolorem eos officia voluptatem
//                 </div>
//                 <div className="project-in-progress-box">
//                   In-Progress
//                 </div>
//               </div>

//               <div className="task-row">
//                 <div className="name">
//                   Task Name
//                 </div>
//                 <div className="description">
//                   Sit praesentium consequuntur est possimus fuga eos quos dolorem eos officia voluptatem
//                 </div>
//                 <div className="project-in-progress-box">
//                   In-Progress
//                 </div>
//               </div>

//               <div className="task-row">
//                 <div className="name">
//                   Task Name
//                 </div>
//                 <div className="description">
//                   Sit praesentium consequuntur est possimus fuga eos quos dolorem eos officia voluptatem
//                 </div>
//                 <div className="project-in-progress-box">
//                   In-Progress
//                 </div>
//               </div>

//               <div className="task-row">
//                 <div className="name">
//                   Task Name
//                 </div>
//                 <div className="description">
//                   Sit praesentium consequuntur est possimus fuga eos quos dolorem eos officia voluptatem
//                 </div>
//                 <div className="project-in-progress-box">
//                   In-Progress
//               </div>
//               </div>

//               <div className="task-row">
//                 <div className="name">
//                   Task Name
//                 </div>
//                 <div className="description">
//                   Sit praesentium consequuntur est possimus fuga eos quos dolorem eos officia voluptatem
//                 </div>
//                 <div className="project-in-progress-box">
//                   In-Progress
//               </div>
//               </div>

//               <div className="task-row">
//                 <div className="name">
//                   Task Name
//                 </div>
//                 <div className="description">
//                   Sit praesentium consequuntur est possimus fuga eos quos dolorem eos officia voluptatem
//                 </div>
//                 <div className="project-in-progress-box">
//                   In-Progress
//                 </div>
//               </div>

//               <div className="task-row">
//                 <div className="name">
//                   Task Name
//                 </div>
//                 <div className="description">
//                   Sit praesentium consequuntur est possimus fuga eos quos dolorem eos officia voluptatem
//                 </div>
//                 <div className="project-in-progress-box">
//                   In-Progress
//                 </div>
//               </div>

//               <div className="task-row">
//                 <div className="name">
//                   Task Name
//                 </div>
//                 <div className="description">
//                   Sit praesentium consequuntur est possimus fuga eos quos dolorem eos officia voluptatem
//                 </div>
//                 <div className="project-in-progress-box">
//                   In-Progress
//                 </div>
//               </div>

//               <div className="task-row">
//                 <div className="name">
//                   Task Name
//                 </div>
//                 <div className="description">
//                   Sit praesentium consequuntur est possimus fuga eos quos dolorem eos officia voluptatem
//                 </div>
//                 <div className="project-in-progress-box">
//                   In-Progress
//               </div>
//               </div>

//               <div className="task-row">
//                 <div className="name">
//                   Task Name
//                 </div>
//                 <div className="description">
//                   Sit praesentium consequuntur est possimus fuga eos quos dolorem eos officia voluptatem
//                 </div>
//                 <div className="project-in-progress-box">
//                   In-Progress
//               </div>
//               </div>

//               <div className="task-row">
//                 <div className="name">
//                   Task Name
//                 </div>
//                 <div className="description">
//                   Sit praesentium consequuntur est possimus fuga eos quos dolorem eos officia voluptatem
//                 </div>
//                 <div className="project-in-progress-box">
//                   In-Progress
//                 </div>
//               </div>


//             </div>

//           </div>
//         </div>
//       </main>
//     </React.Fragment>
//   );
}
