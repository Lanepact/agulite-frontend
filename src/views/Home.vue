<template>
  <div>
    <navbar :goToCommunity="goToCommunity" />
  </div>
    <div class="h-banner d-none d-lg-block">
       <div class="banner-text">
         <div class="banner-left">
           <h1>A Leading Web 3.0 and Blockchain Development Learning Space</h1>
           <div class="b-details">
             <div><i class="fa fa-check ic"></i><p>The next generation of creators, guided by a community of blockchain development experts</p></div>
             <div><i class="fa fa-check ic"></i><p>Agulite having one of the highest APYs in crypto as her Utility Token </p></div>
             <div><i class="fa fa-check ic"></i><p>Agulite Utility Token pays interest every 16 minutes: 90 times per day!</p></div>
             <div><i class="fa fa-check ic"></i><p>Several projects and innovations from the learning space developed to revolutionize the WEB 3.0 and blockchain space</p></div>
           </div>
          </div>
          <div class="banner-right">
             <div class="logo">
              <img src="@/assets/agulogowhite.png" class="img-fluid"/>
            </div>
            <button class="mt-4 airdrop"><a class="text-decoration-none text-white" href="/blockchain-week" target="_blank">Participate in Blockchain Week</a> </button>
            <button class="mt-4 presale"><a class="text-decoration-none text-white" href="/presale" target="_blank">Pre-sale </a></button>
            <a target="_blank" href="/blockchain-development" class="mt-4 develop text-center">Become a Blockcahain Developer </a>
          </div>
       </div>
    </div>
    <div class="mobile-banner d-block d-lg-none">
        <h1 class="header">A Leading Web 3.0 and Blockchain Development Learning Space</h1>
        <div class="details">
          <div><i class="fa fa-check ic"></i><p>The next generation of creators, guided by a community of blockchain development experts</p></div>
          <div><i class="fa fa-check ic"></i><p>Agulite having one of the highest APYs in crypto as her Utility Token </p></div>
          <div><i class="fa fa-check ic"></i><p>Agulite Utility Token pays interest every 16 minutes: 90 times per day!</p></div>
          <div><i class="fa fa-check ic"></i><p>Several projects and innovations from the learning space developed to revolutionize the WEB 3.0 and blockchain space</p></div>
        </div>
    </div>
  
    <div class="row d-block d-md-flex d-lg-none ad-sect">
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 mb-4">
          <router-link to="/blockchain-week" target="_blank"><button class="airdrop">Participate in Blockchain Week</button></router-link>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 mb-4">
         <router-link to="/presale" target="_blank"><button class="presale">Pre-sale</button></router-link>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 mb-4">
           <router-link to="/blockchain-development" target="_blank"><button class="develop">Blockchain Development</button></router-link>
          
      </div>
    </div>
    <div class="staking-section">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
               <h2 class="text-center header">Agulite Auto-Staking Protocol</h2>
            </div>  
        </div>
        <div class="row stake-all">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div class="stake-left">
                <h2 class="head1">Innovation Driven</h2>
                <h2 class="head2">Learning Space </h2>
                <p class="power">powered by a utility token </p>
                <p class="apy">102,212.69%</p>
                <p class="fixed">Fixed Staking APY</p>
                <div class="adrp-buttons">
                  <button class="whitepaper"><a class="text-decoration-none text-white" href="https://agulite.gitbook.io/agulite" target="_blank">WHITE PAPER</a> </button>
                  <button class="airdrop"><router-link class="text-decoration-none text-white" to="/blockchain-week" target="_blank">Participate in Blockchain Week.</router-link> </button>
  
                </div>
                
              </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div class="stake-right">
                <h2 class="abt-head">ABOUT</h2>
                <p class="abt-info">
                 A global Web 3.0 and blockchain learning space that matches people with experts who will guide them as they work on major projects in Blockchain Development, Web 3.0 Frontend Development, DApps and design, Blockchain Trading, the Metaverse (Design and implementation of Augmented Reality, Virtual Reality, and Mixed Reality), and Information Science. A learning environment driven by a decentralized financial asset that rewards every 16 minutes to its holders.
                </p>
              </div>
          </div>
        </div>
      </div>
      <div class="reward">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="reward-text text-center">
                    <h3>ʻʻ All Agulite holders are rewarded with automatic compound interest which is paid every 16 minutes ʼʼ</h3>
                </div>
            </div>
        </div>
      </div>
      <div class="l-path">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="l-head">
                  <span class="head">BUILD A CAREER IN</span>
                  <div class="line"></div>
                </div>
                <div class="why">LEARNING PATH WE OFFER</div>  
            </div>
          </div>
          <div class="row l-offers">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div class="box-1">
                    <div class="bicon"><i class="bx bx-world"></i></div>
                    <p class="title">
                      Blockchain Development
                    </p>
                    <p class="details">Understand behind-the-scene functionality of blockchain platforms, smart contracts, DeFi and other based projects</p>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div class="box-1">
                <div class="bicon"><i class="bx bx-slideshow"></i></div>
                  <div class="title">
                    Web 3 Frontend Software Engineering
                    </div>
                    <p class="details">Learn to create interactive websites with a blend of design, technology and programming that interacts seemlessly with blockchain networks</p>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
               <div class="box-1">
                   <div  class="bicon"><i class="bx bx-file"></i></div>
                  <div class="title">
                      Web 3 Mobile App Development
                    </div>
                    <p class="details">Use creativity, thinking and coding skills to integrate the mobile user experience and build mobile applications</p>
              </div>
            </div>
            <!-- <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
              <div class="box-1">
                    <div class="bicon"><i class="bx bxl-dribbble"></i></div>
                   <div class="title">
                      Frontend Software Engineering
                    </div>
                    <p class="details">earn the craft of creating visual content to communicate user messages in an excellent way</p>
              </div>
            </div> -->
            <!-- <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
              <div class="box-1">
                   <div class="bicon"><i class="bx bx-file"></i></div>
                   <div class="title">
                      Backend Software Engineering
                    </div>
                    <p class="details">earn the craft of creating visual content to communicate user messages in an excellent way</p>
              </div>
            </div> -->
            <!-- <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
              <div class="box-1">
                  <div  class="bicon"><i class="bx bx-tachometer"></i></div>
                   <div class="title">
                      Mobile App Dev
                    </div>
                    <p class="details">earn the craft of creating visual content to communicate user messages in an excellent way</p>
              </div>
            </div> -->
          </div>
    </div>
    <div class="agu-aim">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="agulite-head">
                  <span class="head">AGULITE</span>
                  <div class="line"></div>
                </div>
                <div class="why">WHY CHOOSE AGULITE</div>  
            </div>
          </div>
          <div class="row service-bg">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div class="box-1">
                    <div class="title">
                      <span><i class="far fa-smile fn"></i></span>
                      <span class="h-text">Learning Space innovation increases the token's worth</span>
                    </div>
                    <p class="details">Learning-based innovation is the driving force of Agulite. The token's value will continue to rise as internal projects and R&D are aimed at enhancing the Web3 ecosystem.</p>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div class="box-1">
                  <div class="title">
                      <span><i class="far fa-address-book fn"></i></span>
                      <span class="h-text">Low Risk Exposure with the Agu Insurance Fund (AIF) </span>
                    </div>
                    <p class="details">The Agulite Insurance Fund holds 5% of all trading fees, which serves to sustain and back the staking benefits by sustaining price stability and greatly lowering downside risk..</p>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
               <div class="box-1">
                  <div class="title">
                      <span><i class="fas fa-headset fa-lg fn"></i></span>
                      <span class="h-text">Easy and Safe Staking</span>
                    </div>
                    <p class="details"> The Agulite token is always kept in your wallet, therefore it is never given to a 3rd party or centralized authority. All you have to do is buy and hold since you will automatically receive rewards in your own wallet, eliminating the need for any complicated staking processes.</p>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div class="box-1">
                  <div class="title">
                      <span><i class="fas fa-user-friends fn"></i></span>
                      <span class="h-text">Interest Yield with Automatic Rapid Interest Payments</span>
                    </div>
                    <p class="details"> You will not be required to re-stake your tokens. Your interest yield is paid automatically every 16 minutes or 90 times each day and compounded in your wallet, ensuring that you never miss a payment. Making it one of the fastest auto-compounding protocol in crypto.</p>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div class="box-1">
                  <div class="title">
                      <span><i class="fas fa-user-friends fn"></i></span>
                      <span class="h-text">One of the Highest APY</span>
                    </div>
                    <p class="details">Agulite pays out at 102,212% in the first year, which is unrivaled in the DeFi industry to date. After the first year, the interest rate drops over a predefined Longterm Interest Cycle period.</p>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div class="box-1">
                  <div class="title">
                      <span><i class="fas fa-user-friends fn"></i></span>
                      <span class="h-text">Auto Token Burn</span>
                    </div>
                    <p class="details">One of the exciting features of the Agulite Protocol is an automatic token burn system named “The Fire Pit” which prevents circulating supply getting out of hand and becoming unmanageable. The Fire Pit burns 0.5% out of all Agulite Token market sales and is burned in the same individual transaction.</p>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center mt-3">
              <!-- <div>
                <button @click="getStarted" class="get-start">Get Started </button>
              </div> -->
            </div>
          </div>
     </div>
     <!-- <div class="contact-section">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
          <div class="contact-head">
              <span class="head">TESTIMONIALS</span>
              <div class="line"></div>
          </div>
          <div class="why">TESTIMONIALS</div>  
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <Carousel :autoplay="5000" :items-to-show="2.5" :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
            <Slide v-for="item in items" :key="item">
               <div class="caro-itm">
                  <div class="profile">
                    <div class="image"><img :src="item.src" class="img-fluid"/></div>
                    <div class="profile-info">
                      <span class="mb-2 name"><b>{{item.name}}</b></span>
                      <span class="mb-4 skill">{{item.skill}}</span>
                        <div class="story">{{item.story}}</div>
                    </div>
                   
                  </div>
                
               </div>
            </Slide>

            <template #addons>
              <Pagination />
            </template>
          </Carousel>

        </div>
      </div>
         
    </div> -->
    <div class="how-section">
      <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h1 class="text-center header">How the Utility Token Works</h1>
          </div>
      </div>
      <div class="row how-view">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 text-center">
              <div class="box">
                 <div class="log"> <img src="@/assets/agulogo.png" class="img-fluid"/></div>
                 <div class="title">$AGU TOKEN</div>
                 <p>$AGU is the native token which interest based rewards are paid.Every token holder automatically
                   receives interest every 16 minutes just for holding $AGU token in their wallet </p> 
              </div>
          </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div class="box">
                  <div class="log"><img src="@/assets/Asset1.png" class="img-fluid"/></div>
                  <div class="title">Auto-Compounding</div>
                  <p>The Agulite Protocol pays every Agulite Token holder each and every 30 minutes or 48 times each day, making it one of the fastest auto-compounding
                    protocol in crypto</p>
              </div>
          </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div class="box">
                  <div class="log"><img src="@/assets/Asset3.png" class="img-fluid"/></div>
                  <div class="title">Agu Insurance Fund</div>
                  <p>The Agulite Insurance Fund holds 5% of all trading fees, which serves to sustain and back the staking
                     benefits by sustaining price stability and greatly lowering downside risk
                  </p>
              </div>
          </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div class="box">
                    <div class="log"><img src="@/assets/Asset2.png" class="img-fluid"/></div>
                    <div class="title">Easy and Safe Staking</div>
                    <p>The Agulite token is always kept in your wallet, therefore it is never given to a third party
                      or centralized authority.All you have to do is to buy and hold since you will automatically receive rewards
                      in your own wallet, eliminating the need for any complicated staking processes
                    </p>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                 <div class="box">
                    <div class="log"><img src="@/assets/flame.png" width="60px" class="img-fluid"/></div>
                    <div class="title">Fire Pit</div>
                    <p>One of the exciting features of the Agulite-Protocol is an automatic token burn system
                      named "The Fire Pit" which prevents circulating supply getting out of hand and becoming 
                      unmanageable.The fire Pit burns 0.5% out of all Agulite Token market sales and is burned in
                      the same individual transaction
                    </p>
                </div>
          </div>
      </div>
    </div>
    <div class="l-faq">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="faq-head">
              <span class="head">F.A.Q</span>
              <div class="line"></div>
            </div>
            <div class="why">FREQUENTLY ASKED QUESTIONS</div>  
        </div>
      </div>
      <div class="row faq-bg-section">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <!-- <div class="faq-img">
            <img src="@/assets/faq-img.jpg" class="img-fluid"/>
          </div> -->
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="faq-overview">
             <!-- <div class="info">
              Are you starting from scratch or looking to improve your skills? You can become a qualified designer, software developer, product manager, or business development in a few months, competenet enough work for a company or startup anywhere in the world.
            </div> -->
            <div class="list-bg mt-4">
              <div @click="showDetails" class="drpdn">
                <span class="quest"><b> What does Agulite do?</b></span>
                <span><i class="fas fa-arrow-circle-down"></i></span>
              </div>
              <transition name="fade">
                <div v-if="information" class="content pt-4 pb-4">
                  <p class="mb-4">Agulite is a thriving Web 3.0 and Blockchain Learning Space that develops top talents of the future with the skills and experience needed to kick-start your career in today's Web 3.0 powered by a decentralized sustainable asset fund for all users that rewards token holders every 16 minutes.</p>
                  <p class="mb-4">Are you starting from scratch or looking to improve your skills? You can become a blockchain developer</p>
                  <p>We specialize in following three core areas:</p>
                  <p>1. Blockchain Development</p>
                  <p>2. Web 3 Frontend Software Engineering</p>
                  <p>3. Web 3 Mobile App Development</p>
                  
                </div>
              </transition>
            </div>
             <div class="list-bg mt-4">
              <div @click="showDetails2" class="drpdn">
                <span class="quest"><b> How do I become a Blockchain Developer?</b></span>
                <span><i class="fas fa-arrow-circle-down"></i></span>
              </div>
              <transition name="fade">
                <div v-if="information2" class="content pt-4 pb-4">
                  <p>Our registration procedure is simple. Click "Developer" in the Navbar, then "Enroll for the Next Cohort" to begin your amazing journey on one of the lucrative professional paths today.</p>
                </div>
              </transition>
            </div>
            <div class="list-bg mt-4">
              <div @click="showDetails3" class="drpdn">
                <span class="quest"><b> Who is the Agulite Team?</b></span>
                <span><i class="fas fa-arrow-circle-down"></i></span>
              </div>
              <transition name="fade">
                <div v-if="information3" class="content pt-4 pb-4">
                  <p>The Agulite Team is comprised of a growing team of developers, marketing professionals, and its CEO, Marcellus Nwankwo, who is driven by a goal of pushing Innovation in the Web 3.0 space by establishing a genuinely global learning space that will yield revolutionary solutions. We have a broad network of contacts in the cryptosphere, 
                  allowing us to access stakeholders even while they are in diaspora.</p>
                </div>
              </transition>
            </div>
             <div class="list-bg mt-4">
              <div @click="showDetails5" class="drpdn">
                <span class="quest"><b> Is Agulite just another Safuu Fork?</b></span>
                <span><i class="fas fa-arrow-circle-down"></i></span>
              </div>
              <transition name="fade">
                <div v-if="information5" class="content pt-4 pb-4">
                  <p>The smart contract for our protocol was built and implemented by our own competent team of developers. It has some relation to Safuu's code and function, 
                  as we can see from Safuu's well-designed new set of mechanisms that ensure protocol sustainability.
We have several proprietary mechanisms in place, such as our Agulite Auto-Liquidity Engine (AALE), the Agulite Insurance Fund (AIF), and our Longterm Interest Cycle (LIC), as well as measures in place to protect against hostile hacking attempts.
Agulite's tokenomics are also entirely unique, with its Auto-Burn Fire Pit structure, low initial supply, and lower 16-minute Epochs for a much more linear APY progression of attainability.</p>
                </div>
              </transition>
            </div>
            <div class="list-bg mt-4">
              <div @click="showDetails6" class="drpdn">
                <span class="quest"><b> How can we sustain such a huge APY?</b></span>
                <span><i class="fas fa-arrow-circle-down"></i></span>
              </div>
              <transition name="fade">
                <div v-if="information6" class="content pt-4 pb-4">
                  <p>Agulite, as a utility token, uses a far more extensive method than Safuu or other rivals. 
                  Our token supply is far lower at just 2,896,000, with auto burn at 0.5 percent, 
                  auto LP every 48 hours, and the factor of rebasing at 16-minute intervals, resulting 
                  in a more linear growth of sustainability. Market volume will provide money for the 
                  Treasury in the form of a 2.5-4.5 percent tax, as well as an extra 5% for the Agulite Insurance Fund,
                   which will more than cover the daily interest being awarded. APY will be 100% sustained. Simply said, the more that is traded on a daily basis, the larger the Treasury & AIF balance increases automatically, assisting with long-term sustainability and future development. We also have a patented Agulite Auto-Liquidity Engine (AALE) that automatically injects an additional 4% liquidity every 48 hours to preserve protocol stability and ensure the APY is maintained for the life of Agulite. On top of that, we have our patented LIC model in place, which cuts the interest rate over time beyond the first 12 months, 
                   allowing our protocol to stay stable.</p>
                </div>
              </transition>
            </div>
            <div class="list-bg mt-4">
              <div @click="showDetails7" class="drpdn">
                <span class="quest"><b> How long is Agulite's training Programme?</b></span>
                <span><i class="fas fa-arrow-circle-down"></i></span>
              </div>
              <transition name="fade">
                <div v-if="information7" class="content pt-4 pb-4">
                  <p>The program runs for a period of 5 months which is but the beginning to your amazing journey as an Agulite.</p>
                </div>
              </transition>
            </div>
             <div class="list-bg mt-4">
              <div @click="showDetails4" class="drpdn">
                <span class="quest"><b> How much does the program cost?</b></span>
                <span><i class="fas fa-arrow-circle-down"></i></span>
              </div>
              <transition name="fade">
                <div v-if="information4" class="content pt-4 pb-4">
                  <p class="mb-4">You can start with our 7 days free access to the blockchain development learning path.</p>
                  <p>With a 30 days money-back guarantee, and upon completing the 7 days free access to the blockchain development learning path, continue as follows:</p>
                  <p>ESSENTIAL $131.99 inclusive of VAT which covers, learning resources, assess to team experts and network.</p>
                  <p>or</p>
                  <p>STANDARD $593.96 for complete payment path (i.e 5 months) and save 10% inclusive of VAT which covers, learning resources and assess to team experts and network</p>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="community-section" ref="community">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                <h1 class="header">Keep In Touch </h1>
            </div>
            <div class="row mb-4 text-center community-social">
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-2">
                    <div><a href="https://t.me/agulite_community" target="_blank"><i class="fab fa-telegram ic"></i></a></div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-2">
                    <div><a href="https://twitter.com/officialagulite"><i class="fab fa-twitter ic"></i></a></div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-2">  
                    <div><a href="https://www.linkedin.com/company/agulite"><i class="fab fa-linkedin ic"></i></a></div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-2">
                    <div><a href="https://www.reddit.com/r/AGUITE/"><i class="fab fa-reddit ic"></i></a></div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-2">
                    <div><a href="https://www.instagram.com/official_agulite/"><i class="fab fa-instagram ic"></i></a></div>
                </div> 
                 <div class="col-xs-12 col-sm-12 col-md-4 col-lg-2">
                    <div><a href="https://m.facebook.com/officialAgulite"><i class="fab fa-facebook ic"></i></a></div>
                </div>
            </div>
        </div>
    </div>
    <div class="fter">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                <h4 class="p-5 h6">Copyright &copy;2022</h4>
            </div>
        </div>
    </div>
    <!-- <div class="contact-section">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
          <div class="contact-head">
              <span class="head">CONTACT</span>
              <div class="line"></div>
          </div>
          <div class="why">CONTACT US</div>  
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mb-4">
              <div class="address">
                <span><i class="fas fa-map-marker ic"></i></span>
                <span class="tit">Our Address</span>
                <span>Abeokuta, Ogun, Nigeria</span>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div class="mail">
                <span><i class="far fa-envelope ic"></i></span>
                <span class="tit">Email Us</span>
                <span>info@agulite.com</span>
                <span>chi@agulite.com</span>
              </div>
            </div>
             <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div class="phone">
                <span><i class="fas fa-phone ic"></i></span>
                <span class="tit">Call Us</span>
                <span>+234 704 347 6118</span>
                <span>+234 902 537 2508</span>
              </div>
            </div>
          </div>
        </div>
         <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
           <div class="contact-form">
              <form>
                  <input type="text" placeholder="Your Name" style="width:48%; margin-right: 10px !important;"> 
                  <input type="text" placeholder="Your Email" style="width:48%" class="">
                  <div class="form-group">
                    <input type="email" style="width:98%" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                 <div class="form-group">
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
                </div>
                <div class="c-but"><button>Send message </button></div>
              </form>
            </div>
        </div>
      </div>
    </div> -->
 
   
  
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from '../components/navbar.vue'
import Footer from '../components/footer.vue'
import imageA from '@/assets/pro-im.png'


export default {
  name: 'Home',
  components:{
    Navbar,
    Footer,
    Carousel,
    Slide,
    Pagination,
    Navigation
  },
  setup(){
    const router = useRouter()

    const information = ref(false)
    const information2 = ref(false)
    const information3 = ref(false)
    const information4 = ref(false)
    const information5 = ref(false)
    const information6 = ref(false)
    const information7 = ref(false)
    const community = ref(null)
     
    const goToCommunity = () => {
        window.scrollTo(0, community.value.getBoundingClientRect().top)
    }
    const items = ref([
        {id:1, story:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit exercitationem autem, dolor inventore eveniet nulla quae omnis vel eius itaque accusantium, tempora culpa amet quam esse eos illum iure numquam ullam? Ab, impedit illum ut deserunt maiores voluptatum? Sequi, temporibus?", name:"Amadi Patrick", skill:"Fullstack dev", src:imageA},
        {id:2, story:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit exercitationem autem, dolor inventore eveniet nulla quae omnis vel eius itaque accusantium, tempora culpa amet quam esse eos illum iure numquam ullam? Ab, impedit illum ut deserunt maiores voluptatum? Sequi, temporibus?", name:"Richard", skill:"Mobile dev", src:imageA},
        {id:3, story:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit exercitationem autem, dolor inventore eveniet nulla quae omnis vel eius itaque accusantium, tempora culpa amet quam esse eos illum iure numquam ullam? Ab, impedit illum ut deserunt maiores voluptatum? Sequi, temporibus?", name:"Beloved Maximus", skill:"Digital marketter", src:imageA},
        {id:3, story:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit exercitationem autem, dolor inventore eveniet nulla quae omnis vel eius itaque accusantium, tempora culpa amet quam esse eos illum iure numquam ullam? Ab, impedit illum ut deserunt maiores voluptatum? Sequi, temporibus?", name:"Stanley Agu", skill:"Backend dev", src:imageA}
    ])
    const settings = ref({
      itemsToShow: 1,
      snapAlign: 'left',
    })
    const breakpoints = ref({
      480: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
      1024: {
        itemsToShow: 2,
        snapAlign: 'start',
      },
    })
    const showDetails = () => {
        information.value = !information.value
    }
    const showDetails2 = () => {
         information2.value = !information2.value
    }
    const showDetails3 = () => {
         information3.value = !information3.value
    }
    const showDetails4 = () => {
         information4.value = !information4.value
    }
    const showDetails5 = () => {
         information5.value = !information5.value
    }
    const showDetails6 = () => {
         information6.value = !information6.value
    }
    const showDetails7 = () => {
         information7.value = !information7.value
    }
    const getStarted = () => {
      router.push('/blockchain-development')
    }
    return {
        information,
        information2,
        information3,
        information4,
        information5,
        information6,
        information7,
        showDetails,
        showDetails2,
        showDetails3,
        showDetails4,
        showDetails5,
        showDetails6,
        showDetails7,
        items,
        breakpoints,
        settings,
        getStarted,
        community,
        goToCommunity
    }

  }
  
}
</script>