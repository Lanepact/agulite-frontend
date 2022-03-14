<template>
    <div>
        <sidebar />
    </div>
    <div class="dashboard-section">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-3 d-none d-lg-block">
                    <div class="dashboard-items">
                        <div class="logo">
                            <img src="@/assets/agulogowhite.png" alt="agulog"/>
                        </div>
                        <a href="/dashboard" class="db-item">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 10H8V0H0V10ZM0 18H8V12H0V18ZM10 18H18V8H10V18ZM10 0V6H18V0H10Z" fill="white"/>
                            </svg>
                            <span>Dashboard</span>
                        </a>
                         <a href="/courses" class="db-item">
                            <svg width="18" height="18" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.66683 6.99998H0.333496V30.3333C0.333496 32.1666 1.8335 33.6666 3.66683 33.6666H27.0002V30.3333H3.66683V6.99998ZM30.3335 0.333313H10.3335C8.50016 0.333313 7.00016 1.83331 7.00016 3.66665V23.6666C7.00016 25.5 8.50016 27 10.3335 27H30.3335C32.1668 27 33.6668 25.5 33.6668 23.6666V3.66665C33.6668 1.83331 32.1668 0.333313 30.3335 0.333313ZM28.6668 15.3333H12.0002V12H28.6668V15.3333ZM22.0002 22H12.0002V18.6666H22.0002V22ZM28.6668 8.66665H12.0002V5.33331H28.6668V8.66665Z" fill="white"/>
                            </svg>
                            <span>My Courses</span>
                        </a>
                         <a href="/connection" class="db-item">
                           <svg width="18" height="18" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M40 19.375V20.625C40 21.3156 39.5525 21.875 39 21.875H21.5V25H26C27.1044 25 28 26.1195 28 27.5V37.5C28 38.8805 27.1044 40 26 40H14C12.8956 40 12 38.8805 12 37.5V27.5C12 26.1195 12.8956 25 14 25H18.5V21.875H1C0.4475 21.875 0 21.3156 0 20.625V19.375C0 18.6844 0.4475 18.125 1 18.125H7.5V15H4C2.89562 15 2 13.8805 2 12.5V2.5C2 1.11953 2.89562 0 4 0H14C15.1044 0 16 1.11953 16 2.5V12.5C16 13.8805 15.1044 15 14 15H10.5V18.125H29.5V15H26C24.8956 15 24 13.8805 24 12.5V2.5C24 1.11953 24.8956 0 26 0H36C37.1044 0 38 1.11953 38 2.5V12.5C38 13.8805 37.1044 15 36 15H32.5V18.125H39C39.5525 18.125 40 18.6844 40 19.375ZM16 30V35H24V30H16ZM12 5H6V10H12V5ZM34 5H28V10H34V5Z" fill="white"/>
                            </svg>
                            <span>Connections</span>
                        </a>
                          <a href="/profile" class="db-item profile">
                               <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 21C0 18.8783 0.842855 16.8434 2.34315 15.3431C3.84344 13.8429 5.87827 13 8 13C10.1217 13 12.1566 13.8429 13.6569 15.3431C15.1571 16.8434 16 18.8783 16 21H0ZM8 12C4.685 12 2 9.315 2 6C2 2.685 4.685 0 8 0C11.315 0 14 2.685 14 6C14 9.315 11.315 12 8 12Z" fill="white"/>
                                </svg>    
                            <span>Profile</span>
                        </a>
                         <a href="/signout" class="db-item logout">
                              <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 20C0.734784 20 0.48043 19.8946 0.292893 19.7071C0.105357 19.5196 0 19.2652 0 19V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H15C15.2652 0 15.5196 0.105357 15.7071 0.292893C15.8946 0.48043 16 0.734784 16 1V4H14V2H2V18H14V16H16V19C16 19.2652 15.8946 19.5196 15.7071 19.7071C15.5196 19.8946 15.2652 20 15 20H1ZM14 14V11H7V9H14V6L19 10L14 14Z" fill="white"/>
                                </svg>
                            <span>Logout</span>
                        </a>
                    </div> 
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-9">
                    <div class="mobile-nav-info d-block d-lg-none">
                        <div class="nav-info">
                            <div class="username">Welcome {{user}},</div>
                            <div class="notification">
                                <img src="@/assets/bell.png" class="img-fluid"/>
                            </div>
                            <div class="user-img">
                                <img src="@/assets/pro-im.png" class="img-fluid"/>
                            </div>
                        </div>
                   
                    </div>
                    <div class="d-none d-lg-block">
                        <div class="db-nav">
                             <div class="username">Welcome back {{user}},</div>
                            <div class="notification">
                                <img src="@/assets/bell.png" class="img-fluid"/>
                            </div>
                            <div class="user-img">
                                <img src="@/assets/pro-im.png" class="img-fluid"/>
                            </div>                    
                        </div>  
                    </div>
                    <div class="container connection mt-4 d-none d-md-block">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                <div class="connect-left">
                                    <div class="info">
                                        <div class="cordinators-online">
                                            <h2>Coordinator</h2>
                                            <div class="person-online">
                                                <div class="prof">
                                                     <img src="@/assets/pro-im.png" class="img-fluid"/>
                                                     <div class="name">Camdor Dennis</div>
                                                </div>
                                                <div class="iconc">
                                                    <svg width="5" height="18" viewBox="0 0 5 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="2.5" cy="2.5" r="2.5" fill="#010107"/>
                                                        <circle cx="2.5" cy="11.5" r="2.5" fill="#010107"/>
                                                        <circle cx="2.5" cy="20.5" r="2.5" fill="#010107"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="coursemates-online mt-5">
                                            <h2>Course mates</h2>
                                            <div class="person-online mb-5">
                                                <div class="prof">
                                                     <img src="@/assets/pro-im.png" class="img-fluid"/>
                                                     <div class="name">Camdor Dennis</div>
                                                </div>
                                                <div class="iconc">
                                                    <svg width="5" height="18" viewBox="0 0 5 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="2.5" cy="2.5" r="2.5" fill="#010107"/>
                                                        <circle cx="2.5" cy="11.5" r="2.5" fill="#010107"/>
                                                        <circle cx="2.5" cy="20.5" r="2.5" fill="#010107"/>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="person-online">
                                                <div class="prof">
                                                     <img src="@/assets/pro-im.png" class="img-fluid"/>
                                                     <div class="name">Camdor Dennis</div>
                                                </div>
                                                <div class="iconc">
                                                    <svg width="5" height="18" viewBox="0 0 5 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="2.5" cy="2.5" r="2.5" fill="#010107"/>
                                                        <circle cx="2.5" cy="11.5" r="2.5" fill="#010107"/>
                                                        <circle cx="2.5" cy="20.5" r="2.5" fill="#010107"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                         <div class="teamates-online mt-5">
                                            <h2>Team mates</h2>
                                            <div class="person-online mb-5">
                                                <div class="prof">
                                                     <img src="@/assets/pro-im.png" class="img-fluid"/>
                                                     <div class="name">Camdor Dennis</div>
                                                </div>
                                                <div class="iconc">
                                                    <svg width="5" height="18" viewBox="0 0 5 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="2.5" cy="2.5" r="2.5" fill="#010107"/>
                                                        <circle cx="2.5" cy="11.5" r="2.5" fill="#010107"/>
                                                        <circle cx="2.5" cy="20.5" r="2.5" fill="#010107"/>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="person-online">
                                                <div class="prof">
                                                     <img src="@/assets/pro-im.png" class="img-fluid"/>
                                                     <div class="name">Camdor Dennis</div>
                                                </div>
                                                <div class="iconc">
                                                    <svg width="5" height="18" viewBox="0 0 5 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="2.5" cy="2.5" r="2.5" fill="#010107"/>
                                                        <circle cx="2.5" cy="11.5" r="2.5" fill="#010107"/>
                                                        <circle cx="2.5" cy="20.5" r="2.5" fill="#010107"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-8">
                                  <div class="connect-right">
                                       <div class="active-person">
                                          <div class="det">
                                               <img src="@/assets/pro-im.png" class="img-fluid"/>
                                                <div class="name">Camdor Dennis</div>
                                          </div>
                                          <div class="status">
                                              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="5" cy="5" r="5" fill="#3DB30D"/>
                                             </svg>
                                             <div class="stat-name">Active now </div>
                                          </div>
                                          <div class="phone">
                                              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.62 7.79C5.06 10.62 7.38 12.93 10.21 14.38L12.41 12.18C12.68 11.91 13.08 11.82 13.43 11.94C14.55 12.31 15.76 12.51 17 12.51C17.55 12.51 18 12.96 18 13.51V17C18 17.55 17.55 18 17 18C7.61 18 0 10.39 0 1C0 0.45 0.45 0 1 0H4.5C5.05 0 5.5 0.45 5.5 1C5.5 2.25 5.7 3.45 6.07 4.57C6.18 4.92 6.1 5.31 5.82 5.59L3.62 7.79Z" fill="#F5800C"/>
                                              </svg>
                                          </div>
                                       </div>
                                       <div class="chat-area">
                                            <chat-first-user></chat-first-user>
                                            <chat-second-user></chat-second-user>
                                            <chat-first-user></chat-first-user>
                                            <chat-second-user></chat-second-user>
                                         
                                           <div class="chat-form">
                                               <div class="chat-input">
                                                    <input type="text">
                                                    <svg class="pencil" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.3564 3.68895L15.88 5.16539L12.8371 2.1225L14.3136 0.646054C14.5083 0.451315 14.8217 0.451315 15.0164 0.646053L17.3564 2.98605C17.5512 3.18079 17.5512 3.49421 17.3564 3.68895ZM3.54289 17.5025H0.5V14.4596L11.06 3.89961L14.1029 6.9425L3.54289 17.5025Z" fill="#F5800C" stroke="#F5800C"/>
                                                    </svg>
                                                    <svg class="attachment" width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.59619 19.8595C0.477389 17.7407 0.60373 14.0738 3.02046 11.6571L11.93 2.74756C13.6425 1.03511 16.224 0.960454 17.7026 2.43901C19.1811 3.91756 19.1065 6.49912 17.394 8.21157L10.1815 15.4241C9.17335 16.4322 7.67713 16.4552 6.83883 15.6169C6.00054 14.7786 6.02351 13.2824 7.03168 12.2742L13.0421 6.26381L13.8778 7.09948L7.79099 13.1863C7.56574 13.4115 7.47558 13.6975 7.50539 13.9761C7.5335 14.2387 7.66363 14.466 7.82666 14.6291C7.9897 14.7921 8.21702 14.9222 8.47968 14.9503C8.75829 14.9802 9.04423 14.89 9.26948 14.6648L16.5583 7.3759C17.6545 6.27972 17.7874 4.5037 16.7126 3.42896C15.6379 2.35421 13.8619 2.48706 12.7657 3.58323L3.85613 12.4928C2.05567 14.2932 1.87114 17.1546 3.58614 18.8696C5.30114 20.5846 8.1625 20.4001 9.96296 18.5996L17.6704 10.8921L18.5061 11.7278L10.7986 19.4353C8.3819 21.852 4.715 21.9784 2.59619 19.8595Z" fill="#8686D7" stroke="#F5800C"/>
                                                    </svg>
                                                    <svg class="send" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="16" cy="16" r="16" fill="#F5800C"/>
                                                        <path d="M3.90906 15.1591L24.7734 7.33924L16.9535 28.2035L12.3034 23.5659L21.5823 11.2304L20.8822 10.5303L8.54667 19.8092L3.90906 15.1591Z" fill="#F5F2F2" stroke="#F5800C"/>
                                                    </svg>

                                               </div>
                                           </div>
                                       </div>
                                  </div>
                            </div> 
                        </div>
                    </div>
                    <!-- MOBILE VIEW OF CHAT -->
                   <div class="container connection mt-4 d-block d-md-none">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                <div class="connect-left" v-if="people">
                                    <div class="info">
                                        <div class="cordinators-online">
                                            <h2>Coordinator</h2>
                                            <div class="person-online" @click="clickChat">
                                                <div class="prof">
                                                     <img src="@/assets/pro-im.png" class="img-fluid"/>
                                                     <div class="name">Camdor Dennis</div>
                                                </div>
                                                <div class="iconc">
                                                    <svg width="5" height="18" viewBox="0 0 5 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="2.5" cy="2.5" r="2.5" fill="#010107"/>
                                                        <circle cx="2.5" cy="11.5" r="2.5" fill="#010107"/>
                                                        <circle cx="2.5" cy="20.5" r="2.5" fill="#010107"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="coursemates-online mt-5">
                                            <h2>Course mates</h2>
                                            <div class="person-online mb-5" @click="clickChat">
                                                <div class="prof">
                                                     <img src="@/assets/pro-im.png" class="img-fluid"/>
                                                     <div class="name">Camdor Dennis</div>
                                                </div>
                                                <div class="iconc">
                                                    <svg width="5" height="18" viewBox="0 0 5 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="2.5" cy="2.5" r="2.5" fill="#010107"/>
                                                        <circle cx="2.5" cy="11.5" r="2.5" fill="#010107"/>
                                                        <circle cx="2.5" cy="20.5" r="2.5" fill="#010107"/>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="person-online" @click="clickChat">
                                                <div class="prof">
                                                     <img src="@/assets/pro-im.png" class="img-fluid"/>
                                                     <div class="name">Camdor Dennis</div>
                                                </div>
                                                <div class="iconc">
                                                    <svg width="5" height="18" viewBox="0 0 5 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="2.5" cy="2.5" r="2.5" fill="#010107"/>
                                                        <circle cx="2.5" cy="11.5" r="2.5" fill="#010107"/>
                                                        <circle cx="2.5" cy="20.5" r="2.5" fill="#010107"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                         <div class="teamates-online mt-5" @click="clickChat">
                                            <h2>Team mates</h2>
                                            <div class="person-online mb-5">
                                                <div class="prof">
                                                     <img src="@/assets/pro-im.png" class="img-fluid"/>
                                                     <div class="name">Camdor Dennis</div>
                                                </div>
                                                <div class="iconc">
                                                    <svg width="5" height="18" viewBox="0 0 5 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="2.5" cy="2.5" r="2.5" fill="#010107"/>
                                                        <circle cx="2.5" cy="11.5" r="2.5" fill="#010107"/>
                                                        <circle cx="2.5" cy="20.5" r="2.5" fill="#010107"/>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="person-online" @click="clickChat">
                                                <div class="prof">
                                                     <img src="@/assets/pro-im.png" class="img-fluid"/>
                                                     <div class="name">Camdor Dennis</div>
                                                </div>
                                                <div class="iconc">
                                                    <svg width="5" height="18" viewBox="0 0 5 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="2.5" cy="2.5" r="2.5" fill="#010107"/>
                                                        <circle cx="2.5" cy="11.5" r="2.5" fill="#010107"/>
                                                        <circle cx="2.5" cy="20.5" r="2.5" fill="#010107"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-8">
                                  <div class="connect-right" v-if="chat">
                                       <div class="active-person">
                                          <div class="det">
                                               <img src="@/assets/pro-im.png" class="img-fluid"/>
                                                <div class="name">Camdor Dennis</div>
                                          </div>
                                          <div class="status">
                                              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="5" cy="5" r="5" fill="#3DB30D"/>
                                             </svg>
                                             <div class="stat-name">Active now </div>
                                          </div>
                                          <div class="phone">
                                              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.62 7.79C5.06 10.62 7.38 12.93 10.21 14.38L12.41 12.18C12.68 11.91 13.08 11.82 13.43 11.94C14.55 12.31 15.76 12.51 17 12.51C17.55 12.51 18 12.96 18 13.51V17C18 17.55 17.55 18 17 18C7.61 18 0 10.39 0 1C0 0.45 0.45 0 1 0H4.5C5.05 0 5.5 0.45 5.5 1C5.5 2.25 5.7 3.45 6.07 4.57C6.18 4.92 6.1 5.31 5.82 5.59L3.62 7.79Z" fill="#F5800C"/>
                                              </svg>
                                          </div>
                                       </div>
                                       <div class="chat-area">
                                            <chat-first-user></chat-first-user>
                                            <chat-second-user></chat-second-user>
                                            <chat-first-user></chat-first-user>
                                            <chat-second-user></chat-second-user>
                                         
                                           <div class="chat-form">
                                               <div class="chat-input">
                                                    <input type="text">
                                                    <svg class="pencil" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.3564 3.68895L15.88 5.16539L12.8371 2.1225L14.3136 0.646054C14.5083 0.451315 14.8217 0.451315 15.0164 0.646053L17.3564 2.98605C17.5512 3.18079 17.5512 3.49421 17.3564 3.68895ZM3.54289 17.5025H0.5V14.4596L11.06 3.89961L14.1029 6.9425L3.54289 17.5025Z" fill="#F5800C" stroke="#F5800C"/>
                                                    </svg>
                                                    <svg class="attachment" width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.59619 19.8595C0.477389 17.7407 0.60373 14.0738 3.02046 11.6571L11.93 2.74756C13.6425 1.03511 16.224 0.960454 17.7026 2.43901C19.1811 3.91756 19.1065 6.49912 17.394 8.21157L10.1815 15.4241C9.17335 16.4322 7.67713 16.4552 6.83883 15.6169C6.00054 14.7786 6.02351 13.2824 7.03168 12.2742L13.0421 6.26381L13.8778 7.09948L7.79099 13.1863C7.56574 13.4115 7.47558 13.6975 7.50539 13.9761C7.5335 14.2387 7.66363 14.466 7.82666 14.6291C7.9897 14.7921 8.21702 14.9222 8.47968 14.9503C8.75829 14.9802 9.04423 14.89 9.26948 14.6648L16.5583 7.3759C17.6545 6.27972 17.7874 4.5037 16.7126 3.42896C15.6379 2.35421 13.8619 2.48706 12.7657 3.58323L3.85613 12.4928C2.05567 14.2932 1.87114 17.1546 3.58614 18.8696C5.30114 20.5846 8.1625 20.4001 9.96296 18.5996L17.6704 10.8921L18.5061 11.7278L10.7986 19.4353C8.3819 21.852 4.715 21.9784 2.59619 19.8595Z" fill="#8686D7" stroke="#F5800C"/>
                                                    </svg>
                                                    <svg class="send" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="16" cy="16" r="16" fill="#F5800C"/>
                                                        <path d="M3.90906 15.1591L24.7734 7.33924L16.9535 28.2035L12.3034 23.5659L21.5823 11.2304L20.8822 10.5303L8.54667 19.8092L3.90906 15.1591Z" fill="#F5F2F2" stroke="#F5800C"/>
                                                    </svg>

                                               </div>
                                           </div>
                                       </div>
                                  </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
import { ref } from 'vue'
import Sidebar from '../../components/sidebar.vue'
import chatFirstUser from '../../components/chatuser1.vue'
import chatSecondUser from '../../components/chatuser2.vue'
export default {
    name:'Connection',
    components:{
        Sidebar,
        chatFirstUser,
        chatSecondUser
    },
    setup(){
       const user = ref('Esther')
        const people = ref(true)
        const chat = ref(false)

             const clickChat = () => {
                 people.value = false;
                 chat.value = true;
             }
         return {
                user,
                people,
                chat,
                clickChat
            }
    }
}
</script>
