<template>
   <div>
      <coSideBar />
   </div>
    <div class="dashboard-section">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-3 d-none d-lg-block">
                    <div class="dashboard-items">
                        <div class="logo">
                            <img src="@/assets/agulogowhite.png" alt="agulog"/>
                        </div>
                        <a href="/cordinator/dashboard" class="db-item">
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
                        <a href="/cordinator/students" class="db-item">
                            <svg width="18" height="18" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 3.33333V26.6667C0 28.5 1.48333 30 3.33333 30H26.6667C28.5 30 30 28.5 30 26.6667V3.33333C30 1.5 28.5 0 26.6667 0H3.33333C1.48333 0 0 1.5 0 3.33333ZM20 10C20 12.7667 17.7667 15 15 15C12.2333 15 10 12.7667 10 10C10 7.23333 12.2333 5 15 5C17.7667 5 20 7.23333 20 10ZM5 23.3333C5 20 11.6667 18.1667 15 18.1667C18.3333 18.1667 25 20 25 23.3333V25H5V23.3333Z" fill="white"/>
                            </svg>
                            <span>Students</span>
                        </a>
                        <a href="/signin" class="db-item">
                            <svg width="18" height="18" viewBox="0 0 40 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M33.334 12.6883C33.334 11.6788 33.6852 10.7106 34.3103 9.99673C34.9354 9.28288 35.7833 8.88184 36.6673 8.88184C37.5514 8.88184 38.3992 9.28288 39.0243 9.99673C39.6495 10.7106 40.0007 11.6788 40.0007 12.6883V38.4494L36.6673 44.1591L33.334 38.4494V12.6883ZM36.6673 11.4195C36.3726 11.4195 36.09 11.5532 35.8816 11.7911C35.6733 12.0291 35.5562 12.3518 35.5562 12.6883V37.6805L36.6673 39.5837L37.7784 37.6805V12.6883C37.7784 12.3518 37.6614 12.0291 37.453 11.7911C37.2446 11.5532 36.962 11.4195 36.6673 11.4195Z" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M38.8898 17.7636H34.4453V15.226H38.8898V17.7636Z" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.44445 2.53766C3.85508 2.53766 3.28984 2.80502 2.8731 3.28093C2.45635 3.75683 2.22222 4.40229 2.22222 5.07532V40.6026C2.22222 41.2756 2.45635 41.9211 2.8731 42.397C3.28984 42.8729 3.85508 43.1403 4.44445 43.1403H26.6667C27.256 43.1403 27.8213 42.8729 28.238 42.397C28.6548 41.9211 28.8889 41.2756 28.8889 40.6026V5.07532C28.8889 4.40229 28.6548 3.75683 28.238 3.28093C27.8213 2.80502 27.256 2.53766 26.6667 2.53766H4.44445ZM0 5.07532C0 3.72926 0.468253 2.43834 1.30175 1.48653C2.13524 0.53472 3.2657 0 4.44445 0H26.6667C27.8454 0 28.9759 0.53472 29.8094 1.48653C30.6429 2.43834 31.1111 3.72926 31.1111 5.07532V40.6026C31.1111 41.9487 30.6429 43.2396 29.8094 44.1914C28.9759 45.1432 27.8454 45.6779 26.6667 45.6779H4.44445C3.2657 45.6779 2.13524 45.1432 1.30175 44.1914C0.468253 43.2396 0 41.9487 0 40.6026V5.07532Z" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5547 11.4195C15.5547 11.083 15.6717 10.7603 15.8801 10.5223C16.0885 10.2844 16.3711 10.1507 16.6658 10.1507H25.5547C25.8494 10.1507 26.132 10.2844 26.3404 10.5223C26.5487 10.7603 26.6658 11.083 26.6658 11.4195C26.6658 11.7561 26.5487 12.0788 26.3404 12.3167C26.132 12.5547 25.8494 12.6884 25.5547 12.6884H16.6658C16.3711 12.6884 16.0885 12.5547 15.8801 12.3167C15.6717 12.0788 15.5547 11.7561 15.5547 11.4195Z" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5547 16.4948C15.5547 16.1583 15.6717 15.8356 15.8801 15.5976C16.0885 15.3597 16.3711 15.226 16.6658 15.226H25.5547C25.8494 15.226 26.132 15.3597 26.3404 15.5976C26.5487 15.8356 26.6658 16.1583 26.6658 16.4948C26.6658 16.8313 26.5487 17.1541 26.3404 17.392C26.132 17.63 25.8494 17.7636 25.5547 17.7636H16.6658C16.3711 17.7636 16.0885 17.63 15.8801 17.392C15.6717 17.1541 15.5547 16.8313 15.5547 16.4948Z" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5547 27.9143C15.5547 27.5778 15.6717 27.255 15.8801 27.0171C16.0885 26.7791 16.3711 26.6454 16.6658 26.6454H25.5547C25.8494 26.6454 26.132 26.7791 26.3404 27.0171C26.5487 27.255 26.6658 27.5778 26.6658 27.9143C26.6658 28.2508 26.5487 28.5736 26.3404 28.8115C26.132 29.0495 25.8494 29.1832 25.5547 29.1832H16.6658C16.3711 29.1832 16.0885 29.0495 15.8801 28.8115C15.6717 28.5736 15.5547 28.2508 15.5547 27.9143Z" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5547 32.9896C15.5547 32.653 15.6717 32.3303 15.8801 32.0924C16.0885 31.8544 16.3711 31.7207 16.6658 31.7207H25.5547C25.8494 31.7207 26.132 31.8544 26.3404 32.0924C26.5487 32.3303 26.6658 32.653 26.6658 32.9896C26.6658 33.3261 26.5487 33.6488 26.3404 33.8868C26.132 34.1247 25.8494 34.2584 25.5547 34.2584H16.6658C16.3711 34.2584 16.0885 34.1247 15.8801 33.8868C15.6717 33.6488 15.5547 33.3261 15.5547 32.9896Z" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.66753 27.9143V31.7208H10.0009V27.9143H6.66753ZM5.55642 25.3767H11.112C11.4067 25.3767 11.6893 25.5104 11.8976 25.7483C12.106 25.9863 12.2231 26.309 12.2231 26.6455V32.9897C12.2231 33.3262 12.106 33.6489 11.8976 33.8869C11.6893 34.1248 11.4067 34.2585 11.112 34.2585H5.55642C5.26174 34.2585 4.97912 34.1248 4.77075 33.8869C4.56238 33.6489 4.44531 33.3262 4.44531 32.9897V26.6455C4.44531 26.309 4.56238 25.9863 4.77075 25.7483C4.97912 25.5104 5.26174 25.3767 5.55642 25.3767V25.3767Z" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0067 10.5225C13.215 10.7604 13.332 11.0831 13.332 11.4195C13.332 11.756 13.215 12.0787 13.0067 12.3166L7.77668 18.289L4.7689 14.8543C4.66278 14.7372 4.57813 14.5972 4.5199 14.4424C4.46166 14.2876 4.43101 14.1211 4.42973 13.9526C4.42845 13.7842 4.45656 13.6171 4.51243 13.4611C4.5683 13.3052 4.6508 13.1635 4.75513 13.0444C4.85945 12.9253 4.98351 12.8311 5.12006 12.7673C5.25661 12.7035 5.40292 12.6714 5.55045 12.6728C5.69799 12.6743 5.84379 12.7093 5.97935 12.7758C6.11491 12.8423 6.23751 12.9389 6.34001 13.0601L7.77668 14.7007L11.4356 10.5225C11.6439 10.2846 11.9265 10.151 12.2211 10.151C12.5158 10.151 12.7983 10.2846 13.0067 10.5225V10.5225Z" fill="white"/>
                            </svg>
                            <span>Tasks</span>
                        </a>
                        <a href="/signin" class="db-item">
                            <svg width="18" height="18" viewBox="0 0 51 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.22352 37.8711H28.6764C29.8925 37.8711 30.8822 36.9608 30.8822 35.8423V10.144C30.8822 10.1129 30.8675 10.0859 30.8631 10.0561C30.859 10.0278 30.8526 9.99975 30.844 9.97227C30.8152 9.85699 30.7532 9.75095 30.6646 9.66524L20.372 0.198823C20.2554 0.0974896 20.1063 0.033455 19.947 0.0162305C19.9161 0.0135254 19.8867 0 19.8529 0H2.2147C0.994114 0 0 0.910259 0 2.02881V35.8423C0 36.9608 0.997055 37.8711 2.22352 37.8711ZM20.5882 2.30878L28.3719 9.46777H21.3234C21.1284 9.46777 20.9414 9.39652 20.8035 9.2697C20.6656 9.14287 20.5882 8.97086 20.5882 8.7915V2.30878ZM1.47058 2.02881C1.47058 1.65551 1.8044 1.35254 2.2147 1.35254H19.1176V8.7915C19.1176 9.91005 20.1073 10.8203 21.3234 10.8203H29.4116V35.8423C29.4116 36.0216 29.3342 36.1937 29.1963 36.3205C29.0584 36.4473 28.8714 36.5186 28.6764 36.5186H2.22352C2.1258 36.5196 2.02881 36.503 1.93808 36.4696C1.84735 36.4362 1.76467 36.3867 1.69475 36.3239C1.62483 36.2611 1.56905 36.1862 1.53059 36.1036C1.49212 36.0209 1.47173 35.9322 1.47058 35.8423V2.02881Z" fill="white"/>
                                <path d="M6.61615 16.2305H24.2631C24.4581 16.2305 24.6452 16.1592 24.7831 16.0324C24.921 15.9056 24.9984 15.7336 24.9984 15.5542C24.9984 15.3748 24.921 15.2028 24.7831 15.076C24.6452 14.9492 24.4581 14.8779 24.2631 14.8779H6.61615C6.42114 14.8779 6.23412 14.9492 6.09622 15.076C5.95833 15.2028 5.88086 15.3748 5.88086 15.5542C5.88086 15.7336 5.95833 15.9056 6.09622 16.0324C6.23412 16.1592 6.42114 16.2305 6.61615 16.2305V16.2305Z" fill="white"/>
                                <path d="M6.61615 21.6406H24.2631C24.4581 21.6406 24.6452 21.5694 24.7831 21.4426C24.921 21.3157 24.9984 21.1437 24.9984 20.9644C24.9984 20.785 24.921 20.613 24.7831 20.4862C24.6452 20.3593 24.4581 20.2881 24.2631 20.2881H6.61615C6.42114 20.2881 6.23412 20.3593 6.09622 20.4862C5.95833 20.613 5.88086 20.785 5.88086 20.9644C5.88086 21.1437 5.95833 21.3157 6.09622 21.4426C6.23412 21.5694 6.42114 21.6406 6.61615 21.6406V21.6406Z" fill="white"/>
                                <path d="M6.61615 10.8203H13.9691C14.1641 10.8203 14.3511 10.7491 14.489 10.6222C14.6269 10.4954 14.7044 10.3234 14.7044 10.144C14.7044 9.96469 14.6269 9.79267 14.489 9.66585C14.3511 9.53902 14.1641 9.46777 13.9691 9.46777H6.61615C6.42114 9.46777 6.23412 9.53902 6.09622 9.66585C5.95833 9.79267 5.88086 9.96469 5.88086 10.144C5.88086 10.3234 5.95833 10.4954 6.09622 10.6222C6.23412 10.7491 6.42114 10.8203 6.61615 10.8203V10.8203Z" fill="white"/>
                                <path d="M6.61615 27.0508H24.2631C24.4581 27.0508 24.6452 26.9795 24.7831 26.8527C24.921 26.7259 24.9984 26.5539 24.9984 26.3745C24.9984 26.1952 24.921 26.0231 24.7831 25.8963C24.6452 25.7695 24.4581 25.6982 24.2631 25.6982H6.61615C6.42114 25.6982 6.23412 25.7695 6.09622 25.8963C5.95833 26.0231 5.88086 26.1952 5.88086 26.3745C5.88086 26.5539 5.95833 26.7259 6.09622 26.8527C6.23412 26.9795 6.42114 27.0508 6.61615 27.0508V27.0508Z" fill="white"/>
                                <path d="M6.61615 32.4609H24.2631C24.4581 32.4609 24.6452 32.3897 24.7831 32.2629C24.921 32.136 24.9984 31.964 24.9984 31.7847C24.9984 31.6053 24.921 31.4333 24.7831 31.3065C24.6452 31.1796 24.4581 31.1084 24.2631 31.1084H6.61615C6.42114 31.1084 6.23412 31.1796 6.09622 31.3065C5.95833 31.4333 5.88086 31.6053 5.88086 31.7847C5.88086 31.964 5.95833 32.136 6.09622 32.2629C6.23412 32.3897 6.42114 32.4609 6.61615 32.4609V32.4609Z" fill="white"/>
                                <path d="M31.6191 6.7627H38.2367V14.2017C38.2367 15.3202 39.2264 16.2305 40.4426 16.2305H48.5308V41.2524C48.5308 41.4318 48.4533 41.6038 48.3154 41.7306C48.1775 41.8575 47.9905 41.9287 47.7955 41.9287H21.3427C21.2449 41.9298 21.1479 41.9131 21.0572 41.8797C20.9665 41.8463 20.8838 41.7968 20.8139 41.734C20.744 41.6712 20.6882 41.5964 20.6497 41.5137C20.6113 41.4311 20.5909 41.3423 20.5897 41.2524V39.8999C20.5897 39.7205 20.5123 39.5485 20.3744 39.4217C20.2365 39.2949 20.0494 39.2236 19.8544 39.2236C19.6594 39.2236 19.4724 39.2949 19.3345 39.4217C19.1966 39.5485 19.1191 39.7205 19.1191 39.8999V41.2524C19.1191 42.371 20.1162 43.2812 21.3427 43.2812H47.7955C49.0117 43.2812 50.0014 42.371 50.0014 41.2524V15.5542C50.0014 15.5231 49.9867 15.496 49.9823 15.4663C49.9782 15.4379 49.9718 15.4099 49.9631 15.3824C49.9343 15.2671 49.8724 15.1611 49.7837 15.0754L39.4911 5.60898C39.3753 5.5068 39.2257 5.44303 39.0661 5.42774C39.0352 5.42368 39.0058 5.41016 38.972 5.41016H31.6191C31.4241 5.41016 31.2371 5.48141 31.0992 5.60823C30.9613 5.73506 30.8838 5.90707 30.8838 6.08643C30.8838 6.26578 30.9613 6.4378 31.0992 6.56462C31.2371 6.69145 31.4241 6.7627 31.6191 6.7627ZM40.4426 14.8779C40.2476 14.8779 40.0606 14.8067 39.9227 14.6799C39.7848 14.553 39.7073 14.381 39.7073 14.2017V7.71894L47.4911 14.8779H40.4426Z" fill="white"/>
                                <path d="M34.5576 21.6406H43.381C43.5761 21.6406 43.7631 21.5694 43.901 21.4426C44.0389 21.3157 44.1163 21.1437 44.1163 20.9644C44.1163 20.785 44.0389 20.613 43.901 20.4862C43.7631 20.3593 43.5761 20.2881 43.381 20.2881H34.5576C34.3625 20.2881 34.1755 20.3593 34.0376 20.4862C33.8997 20.613 33.8223 20.785 33.8223 20.9644C33.8223 21.1437 33.8997 21.3157 34.0376 21.4426C34.1755 21.5694 34.3625 21.6406 34.5576 21.6406Z" fill="white"/>
                                <path d="M34.5576 27.0508H43.381C43.5761 27.0508 43.7631 26.9795 43.901 26.8527C44.0389 26.7259 44.1163 26.5539 44.1163 26.3745C44.1163 26.1952 44.0389 26.0231 43.901 25.8963C43.7631 25.7695 43.5761 25.6982 43.381 25.6982H34.5576C34.3625 25.6982 34.1755 25.7695 34.0376 25.8963C33.8997 26.0231 33.8223 26.1952 33.8223 26.3745C33.8223 26.5539 33.8997 26.7259 34.0376 26.8527C34.1755 26.9795 34.3625 27.0508 34.5576 27.0508Z" fill="white"/>
                                <path d="M34.5576 32.4609H43.381C43.5761 32.4609 43.7631 32.3897 43.901 32.2629C44.0389 32.136 44.1163 31.964 44.1163 31.7847C44.1163 31.6053 44.0389 31.4333 43.901 31.3065C43.7631 31.1796 43.5761 31.1084 43.381 31.1084H34.5576C34.3625 31.1084 34.1755 31.1796 34.0376 31.3065C33.8997 31.4333 33.8223 31.6053 33.8223 31.7847C33.8223 31.964 33.8997 32.136 34.0376 32.2629C34.1755 32.3897 34.3625 32.4609 34.5576 32.4609Z" fill="white"/>
                                <path d="M34.5576 37.8711H43.381C43.5761 37.8711 43.7631 37.7998 43.901 37.673C44.0389 37.5462 44.1163 37.3742 44.1163 37.1948C44.1163 37.0155 44.0389 36.8435 43.901 36.7166C43.7631 36.5898 43.5761 36.5186 43.381 36.5186H34.5576C34.3625 36.5186 34.1755 36.5898 34.0376 36.7166C33.8997 36.8435 33.8223 37.0155 33.8223 37.1948C33.8223 37.3742 33.8997 37.5462 34.0376 37.673C34.1755 37.7998 34.3625 37.8711 34.5576 37.8711Z" fill="white"/>
                            </svg>

                            <span>Documents</span>
                        </a>
                        <a href="/cordinator/connection" class="db-item">
                            <svg width="18" height="18" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M30.334 0.333344H3.66732C1.83398 0.333344 0.350651 1.83334 0.350651 3.66668L0.333984 33.6667L7.00065 27H30.334C32.1673 27 33.6673 25.5 33.6673 23.6667V3.66668C33.6673 1.83334 32.1673 0.333344 30.334 0.333344ZM27.0007 20.3333H7.00065V17H27.0007V20.3333ZM27.0007 15.3333H7.00065V12H27.0007V15.3333ZM27.0007 10.3333H7.00065V7.00001H27.0007V10.3333Z" fill="white"/>    
                            </svg>
                            <span>Message</span>
                        </a>
                        <a href="/profile" class="db-item profile">
                               <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 21C0 18.8783 0.842855 16.8434 2.34315 15.3431C3.84344 13.8429 5.87827 13 8 13C10.1217 13 12.1566 13.8429 13.6569 15.3431C15.1571 16.8434 16 18.8783 16 21H0ZM8 12C4.685 12 2 9.315 2 6C2 2.685 4.685 0 8 0C11.315 0 14 2.685 14 6C14 9.315 11.315 12 8 12Z" fill="white"/>
                                </svg>    
                            <span>Profile</span>
                        </a>
                         <a href="/sigin" class="db-item profile">
                             <svg width="18" height="18" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M31.9005 21.56C31.9605 21.06 32.0005 20.54 32.0005 20C32.0005 19.46 31.9605 18.94 31.8805 18.44L35.2605 15.8C35.5605 15.56 35.6405 15.12 35.4605 14.78L32.2605 9.24002C32.0605 8.88002 31.6405 8.76002 31.2805 8.88002L27.3005 10.48C26.4605 9.84001 25.5805 9.32002 24.6005 8.92002L24.0005 4.68002C23.9405 4.28002 23.6005 4.00002 23.2005 4.00002H16.8005C16.4005 4.00002 16.0805 4.28002 16.0205 4.68002L15.4205 8.92002C14.4405 9.32002 13.5405 9.86001 12.7205 10.48L8.7405 8.88002C8.3805 8.74002 7.9605 8.88002 7.7605 9.24002L4.5605 14.78C4.3605 15.14 4.4405 15.56 4.7605 15.8L8.1405 18.44C8.0605 18.94 8.0005 19.48 8.0005 20C8.0005 20.52 8.0405 21.06 8.1205 21.56L4.7405 24.2C4.4405 24.44 4.3605 24.88 4.5405 25.22L7.7405 30.76C7.9405 31.12 8.3605 31.24 8.7205 31.12L12.7005 29.52C13.5405 30.16 14.4205 30.68 15.4005 31.08L16.0005 35.32C16.0805 35.72 16.4005 36 16.8005 36H23.2005C23.6005 36 23.9405 35.72 23.9805 35.32L24.5805 31.08C25.5605 30.68 26.4605 30.14 27.2805 29.52L31.2605 31.12C31.6205 31.26 32.0405 31.12 32.2405 30.76L35.4405 25.22C35.6405 24.86 35.5605 24.44 35.2405 24.2L31.9005 21.56V21.56ZM20.0005 26C16.7005 26 14.0005 23.3 14.0005 20C14.0005 16.7 16.7005 14 20.0005 14C23.3005 14 26.0005 16.7 26.0005 20C26.0005 23.3 23.3005 26 20.0005 26Z" fill="white"/>
                            </svg>
                            <span>Settings</span>
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
                            <div class="search-box">
                                <span class="search-icon border-0 pl-3"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.33333 0.333496C9.64533 0.333496 12.3333 3.0215 12.3333 6.3335C12.3333 9.6455 9.64533 12.3335 6.33333 12.3335C3.02133 12.3335 0.333328 9.6455 0.333328 6.3335C0.333328 3.0215 3.02133 0.333496 6.33333 0.333496ZM6.33333 11.0002C8.91133 11.0002 11 8.9115 11 6.3335C11 3.75483 8.91133 1.66683 6.33333 1.66683C3.75466 1.66683 1.66666 3.75483 1.66666 6.3335C1.66666 8.9115 3.75466 11.0002 6.33333 11.0002ZM11.99 11.0475L13.876 12.9328L12.9327 13.8762L11.0473 11.9902L11.99 11.0475Z" fill="#F5800C"/>
                                    </svg>
                                </span>
                                <input type="text">
                            </div>
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
                             <div class="search-box">
                                <span class="search-icon border-0 pl-3"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.33333 0.333496C9.64533 0.333496 12.3333 3.0215 12.3333 6.3335C12.3333 9.6455 9.64533 12.3335 6.33333 12.3335C3.02133 12.3335 0.333328 9.6455 0.333328 6.3335C0.333328 3.0215 3.02133 0.333496 6.33333 0.333496ZM6.33333 11.0002C8.91133 11.0002 11 8.9115 11 6.3335C11 3.75483 8.91133 1.66683 6.33333 1.66683C3.75466 1.66683 1.66666 3.75483 1.66666 6.3335C1.66666 8.9115 3.75466 11.0002 6.33333 11.0002ZM11.99 11.0475L13.876 12.9328L12.9327 13.8762L11.0473 11.9902L11.99 11.0475Z" fill="#F5800C"/>
                                    </svg>
                                </span>
                                <input type="text">
                            </div>                                                              
                       
                            <div class="notification">
                                <img src="@/assets/bell.png" class="img-fluid"/>
                            </div>
                            <div class="user-img">
                                <img src="@/assets/pro-im.png" class="img-fluid"/>
                            </div>                    
                        </div>  
                    </div>
                    <div class="student-table-section">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                               <div class="students-total">Students (50)</div> 
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div class="students-table d-none d-md-block">
                                    <table>
                                        <tr>
                                            <th>Profile</th>
                                            <th>Full name</th>
                                            <th>Email </th>
                                            <th>Status</th>
                                            <th colspan="3">Actions</th>
                                        </tr>
                                        <tr>
                                            <td>
                                               <router-link to="/cordinator/student/status"> <span><img src="@/assets/lad.png" class="img-fluid"/></span></router-link>
                                            </td>
                                            <td> <router-link to="/cordinator/student/status">Harry Potter</router-link></td>
                                            <td>Harry Potter@gmail.com</td>
                                            <td>Online</td>
                                            <td>
                                                <button>Message</button>
                                            </td>
                                            <td>
                                                <button>Call</button>
                                            </td>
                                            <td>
                                                <router-link to="/cordinator/student/status"><button>Check Stats</button></router-link>
                                            </td>
                                        </tr>
                                           <tr>
                                            <td>
                                               <router-link to="/cordinator/student/status"> <span><img src="@/assets/lad.png" class="img-fluid"/></span></router-link>
                                            </td>
                                            <td> <router-link to="/cordinator/student/status">Harry Potter</router-link></td>
                                            <td>Harry Potter@gmail.com</td>
                                            <td>Online</td>
                                            <td>
                                                <button>Message</button>
                                            </td>
                                            <td>
                                                <button>Call</button>
                                            </td>
                                            <td>
                                                <router-link to="/cordinator/student/status"><button>Check Stats</button></router-link>
                                            </td>
                                        </tr>
                                           <tr>
                                            <td>
                                               <router-link to="/cordinator/student/status"> <span><img src="@/assets/lad.png" class="img-fluid"/></span></router-link>
                                            </td>
                                            <td> <router-link to="/cordinator/student/status">Harry Potter</router-link></td>
                                            <td>Harry Potter@gmail.com</td>
                                            <td>Online</td>
                                            <td>
                                                <button>Message</button>
                                            </td>
                                            <td>
                                                <button>Call</button>
                                            </td>
                                            <td>
                                                <router-link to="/cordinator/student/status"><button>Check Stats</button></router-link>
                                            </td>
                                        </tr>
                                           <tr>
                                            <td>
                                               <router-link to="/cordinator/student/status"> <span><img src="@/assets/lad.png" class="img-fluid"/></span></router-link>
                                            </td>
                                            <td> <router-link to="/cordinator/student/status">Harry Potter</router-link></td>
                                            <td>Harry Potter@gmail.com</td>
                                            <td>Online</td>
                                            <td>
                                                <button>Message</button>
                                            </td>
                                            <td>
                                                <button>Call</button>
                                            </td>
                                            <td>
                                                <router-link to="/cordinator/student/status"><button>Check Stats</button></router-link>
                                            </td>
                                        </tr>
                                           <tr>
                                            <td>
                                               <router-link to="/cordinator/student/status"> <span><img src="@/assets/lad.png" class="img-fluid"/></span></router-link>
                                            </td>
                                            <td> <router-link to="/cordinator/student/status">Harry Potter</router-link></td>
                                            <td>Harry Potter@gmail.com</td>
                                            <td>Online</td>
                                            <td>
                                                <button>Message</button>
                                            </td>
                                            <td>
                                                <button>Call</button>
                                            </td>
                                            <td>
                                                <router-link to="/cordinator/student/status"><button>Check Stats</button></router-link>
                                            </td>
                                        </tr>
                                           <tr>
                                            <td>
                                               <router-link to="/cordinator/student/status"> <span><img src="@/assets/lad.png" class="img-fluid"/></span></router-link>
                                            </td>
                                            <td> <router-link to="/cordinator/student/status">Harry Potter</router-link></td>
                                            <td>Harry Potter@gmail.com</td>
                                            <td>Online</td>
                                            <td>
                                                <button>Message</button>
                                            </td>
                                            <td>
                                                <button>Call</button>
                                            </td>
                                            <td>
                                                <router-link to="/cordinator/student/status"><button>Check Stats</button></router-link>
                                            </td>
                                        </tr>
                                           <tr>
                                            <td>
                                               <router-link to="/cordinator/student/status"> <span><img src="@/assets/lad.png" class="img-fluid"/></span></router-link>
                                            </td>
                                            <td> <router-link to="/cordinator/student/status">Harry Potter</router-link></td>
                                            <td>Harry Potter@gmail.com</td>
                                            <td>Online</td>
                                            <td>
                                                <button>Message</button>
                                            </td>
                                            <td>
                                                <button>Call</button>
                                            </td>
                                            <td>
                                                <router-link to="/cordinator/student/status"><button>Check Stats</button></router-link>
                                            </td>
                                        </tr>
                                           <tr>
                                            <td>
                                               <router-link to="/cordinator/student/status"> <span><img src="@/assets/lad.png" class="img-fluid"/></span></router-link>
                                            </td>
                                            <td> <router-link to="/cordinator/student/status">Harry Potter</router-link></td>
                                            <td>Harry Potter@gmail.com</td>
                                            <td>Online</td>
                                            <td>
                                                <button>Message</button>
                                            </td>
                                            <td>
                                                <button>Call</button>
                                            </td>
                                            <td>
                                                <router-link to="/cordinator/student/status"><button>Check Stats</button></router-link>
                                            </td>
                                        </tr>
                                           <tr>
                                            <td>
                                               <router-link to="/cordinator/student/status"> <span><img src="@/assets/lad.png" class="img-fluid"/></span></router-link>
                                            </td>
                                            <td> <router-link to="/cordinator/student/status">Harry Potter</router-link></td>
                                            <td>Harry Potter@gmail.com</td>
                                            <td>Online</td>
                                            <td>
                                                <button>Message</button>
                                            </td>
                                            <td>
                                                <button>Call</button>
                                            </td>
                                            <td>
                                                <router-link to="/cordinator/student/status"><button>Check Stats</button></router-link>
                                            </td>
                                        </tr>
                                       
                    

                                    </table>
                                </div>
                                 <div class="students-table-mobile d-block d-sm-none">
                                    <table>
                                        <tr>
                                            <th>Profile</th>
                                            <th>Full name</th>
                                            <th>Email </th>
                                            <th>Status</th>
                                            <th></th>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span><img src="@/assets/lad.png" class="img-fluid"/></span>
                                            </td>
                                            <td>Harry Potter</td>
                                            <td>Harry Potter@gmail.com</td>
                                            <td>Online</td>
                                            <td>
                                                <span>
                                                   <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                       <circle cx="2" cy="2" r="2" fill="#333333"/>
                                                        <circle cx="2" cy="8" r="2" fill="#333333"/>
                                                        <circle cx="2" cy="14" r="2" fill="#333333"/>
                                                    </svg>
                                               </span>
                                                
                                            </td>
                                        </tr>
                                         <tr>
                                            <td>
                                                <span><img src="@/assets/lad.png" class="img-fluid"/></span>
                                            </td>
                                            <td>Harry Potter</td>
                                            <td>Harry Potter@gmail.com</td>
                                            <td>Online</td>
                                            <td>
                                                <span>
                                                   <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                       <circle cx="2" cy="2" r="2" fill="#333333"/>
                                                        <circle cx="2" cy="8" r="2" fill="#333333"/>
                                                        <circle cx="2" cy="14" r="2" fill="#333333"/>
                                                    </svg>
                                               </span>
                                            </td>
                                        </tr>
                                         <tr>
                                            <td>
                                                <span><img src="@/assets/lad.png" class="img-fluid"/></span>
                                            </td>
                                            <td>Harry Potter</td>
                                            <td>Harry Potter@gmail.com</td>
                                            <td>Online</td>
                                            <td>
                                                <span>
                                                   <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                       <circle cx="2" cy="2" r="2" fill="#333333"/>
                                                        <circle cx="2" cy="8" r="2" fill="#333333"/>
                                                        <circle cx="2" cy="14" r="2" fill="#333333"/>
                                                    </svg>
                                               </span>
                                            </td>
                                        </tr>
                                         <tr>
                                            <td>
                                                <span><img src="@/assets/lad.png" class="img-fluid"/></span>
                                            </td>
                                            <td>Harry Potter</td>
                                            <td>Harry Potter@gmail.com</td>
                                            <td>Online</td>
                                            <td>
                                                <span>
                                                   <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                       <circle cx="2" cy="2" r="2" fill="#333333"/>
                                                        <circle cx="2" cy="8" r="2" fill="#333333"/>
                                                        <circle cx="2" cy="14" r="2" fill="#333333"/>
                                                    </svg>
                                               </span>
                                            </td>
                                        </tr>
                                         <tr>
                                            <td>
                                                <span><img src="@/assets/lad.png" class="img-fluid"/></span>
                                            </td>
                                            <td>Harry Potter</td>
                                            <td>Harry Potter@gmail.com</td>
                                            <td>Online</td>
                                            <td>
                                                <span>
                                                   <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                       <circle cx="2" cy="2" r="2" fill="#333333"/>
                                                        <circle cx="2" cy="8" r="2" fill="#333333"/>
                                                        <circle cx="2" cy="14" r="2" fill="#333333"/>
                                                    </svg>
                                               </span>
                                            </td>
                                        </tr>
                                         <tr>
                                            <td>
                                                <span><img src="@/assets/lad.png" class="img-fluid"/></span>
                                            </td>
                                            <td>Harry Potter</td>
                                            <td>Harry Potter@gmail.com</td>
                                            <td>Online</td>
                                            <td>
                                               <span>
                                                   <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                       <circle cx="2" cy="2" r="2" fill="#333333"/>
                                                        <circle cx="2" cy="8" r="2" fill="#333333"/>
                                                        <circle cx="2" cy="14" r="2" fill="#333333"/>
                                                    </svg>
                                               </span>
                                            </td>
                                           
                                        </tr>

                                    </table>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div class="student-control-section">
                                    <div class="control-box">
                                        <div class="number">
                                            <span> 1 </span>
                                            <span> 2 </span>
                                            <span> 3 </span>
                                            <span> 4 </span>
                                            <span> 5 </span>
                                        </div>
                                        <div>
                                            <span class="next">Next >></span>
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
import { onMounted, ref } from 'vue'
import CoSideBar from '../../components/coSideBar.vue'
export default {
   
 components:{
    CoSideBar
  }
   
}
</script>

<style>

</style>