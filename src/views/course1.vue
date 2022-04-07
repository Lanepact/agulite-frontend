<template>
<navbar :goToCommunity="goToCommunity"/>
<div class="advert">
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="text-center advert-bg">Welcome to Agulite! Claim your personal discount now. Explore programs and use within 10days. <a href="#" @click="moveUp">Learn more</a></div>
        </div>
    </div>
</div>
<div class="courses-bannner">
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="c-banner">
                <div class="c-banner-info">
                    <div class="title">Become a Blockchain Developer</div>
                    <div class="details">The demand for blockchain developers is escalating. In this program, you'll work with the Ethereum and top blockchain protocols to create projects and real-world applications. </div>
                    <div class="action-buttons">
                        <button class="b1" @click="handleDownload">DOWNLOAD SYLLABUS </button>
                        <button class="b2" @click="moveUp">ENROLL NOW </button>
                    </div>
                    <div class="countdown">
                        <div class="day">
                            <span class="numb">{{ countdown.days }}</span>
                            <span class="text">DAYS</span>
                        </div>
                        <div class="hrs">
                            <span class="numb">{{ countdown.hours }}</span>
                            <span class="text">HRS</span>
                        </div>
                        <div class="min">
                            <span class="numb">{{ countdown.minutes }}</span>
                            <span class="text">MIN</span>
                        </div>
                        <div class="sec">
                            <span class="numb">{{ countdown.seconds }}</span>
                            <span class="text">SEC</span>
                        </div> 
                        
                    </div>
                    <div class="details" style="padding-top:20px !important; font-weight:500 !important;">
                        <p style="text-transform:uppercase !important;">NEXT Corhots starts on the 11th April </p>
                        <p style="padding-top:5px !important;"><b>Enroll now</b> to get access to workspace and prep resources</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="blockchain-section">
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="b-info">
                <div class="benefits">
                    <div class="title">What You Will Learn </div>
                    <button class="download" @click="handleDownload">DOWNLOAD SYLLABUS </button>
                </div>
                <div class="features">
                    <div class="syllabus">SYLLABUS</div>
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-8">
                            <div class="full-info">
                                <div class="title">Blockchain Developer </div>
                                <div class="det">Discover the fundamentals of the blockchain platform. Create your own private blockchain and secure a digital asset with blockchain identity. Investigate the Ethereum platform and build your own decentralized application with Solidity and smart contracts. Create a comprehensive DAPP and ICO with Web3J, TruffleV4, MetaMask, Ganache, and Solidity ++.</div>
                                <hr class="mt-4 mb-4">
                                <div class="action">
                                    <div class="duration">5 months to complete </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pre">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-8">
                                <div class="knowledge">
                                    <div class="title">PREREQUESITE KNOWLEDGE</div>
                                    <div class="details">
                                        <li>Fundamental understanding of core design patterns as well as an architectural paradigm. It is also necessary to be at ease when learning new programming language. </li>
                                        <li>Good to have knowledge of some Javascript frameworks, as well as some experience with Javascript web apps.</li>
                                        <li>Basic knowledge of the Javascript DOM model</li>
                                        <li>1+ years of object-oriented programming experience</li>
                                        <li>Understanding of how to design a server and use the client-server model in software architecture</li>
                                        <li>Expertise in consuming data from a distant API</li>
                                    </div>
                                    <div class="programs">
                                        <div class="mil">
                                            <div class="title">Blockchain Fundamentals</div>
                                            <div class="text">Create your own private blockchain to learn the fundamentals of the blockchain data paradigm.</div>
                                            <div class="create"><i class="fa fa-list"></i> <span style="text-transform:uppercase !important;"> PROJECT 1: CREATE YOUR PRIVATE BLOCKCHAIN </span></div>
                                            <div class="circ"></div>
                                        </div>
                                        <div class="mil">
                                            <div class="title">Ethereum Smart Contracts, Tokens and Dapps</div>
                                            <div class="text">Smart contracts on the Ethereum network will allow you to advance your blockchain competence to the second generation of blockchain services.</div>
                                            <div class="create"><i class="fa fa-list"></i> <span style="text-transform:uppercase !important;">PROJECT 2: Design, develop and deploy a smart contract for a decentralized Lottery </span></div>
                                            <div class="circ2"></div>
                                        </div>
                                        <div class="mil">
                                            <div class="title">Blockchain Architecture</div>
                                            <div class="text">Learn about blockchain architecture as well as advanced topics like privacy, security, and decentralized file management.</div>
                                            <div class="create"><i class="fa fa-list"></i> <span style="text-transform:uppercase !important;"> PROJECT 3: Design, develop and deploy a smart contract for a decentralized Auction Platform </span></div>
                                            <div class="circ3"></div>
                                        </div>
                                        <div class="mil">
                                            <div class="title">Dapp with autonomous smart contracts and orcles</div>
                                            <div class="text">Develop a decentralized application (Dapp) that will take activities depending on external triggers and manage payments to expand your blockchain skill set.</div>
                                            <div class="create"><i class="fa fa-list"></i> <span style="text-transform:uppercase !important;"> PROJECT 4: Design, create and deploy a fully-compliant ERC20 Token and launch an Initial Coin Offering (ICO)</span></div>
                                            <div class="circ4"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                <div class="right-area">
                                    <div class="squar1">
                                        <div class=""><i class="fas fa-book icon"></i></div>
                                        <div class="tit">NEED TO PREPARE ? </div>
                                        <div class="info">Get started right now by taking the <a target="_blank" href="https://www.youtube.com/watch?v=UB1O30fR-EE&list=PLFXomc0Vr7mS_6D7UMWri4NxTA5YUI279">HTML and JavaScript crash courses</a> and <a target="_blank" href="https://www.youtube.com/watch?v=4l3bTDlT6ZI&list=PL4cUxeGkcC9i5yvDkJgt60vNVWffpblB7">JavaScript OPP</a> by a good friends Traversy media, amigoscode and the net ninja respectively.</div>
                                    </div>
                                    <div class="squar2">
                                        <div class=""><i class="fas fa-book icon"></i></div>
                                        <div class="info">Blockchain demand is exploding, and the market is predicted to increase at a rate of more than 65% each year.</div>
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
<div class="program-section">
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="progrm">
                <div class="pr-info">
                    <div class="row">
                        <div class="title">All Our Programs Include </div>
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <div class="pr-deet">
                                <div class="pr-image">
                                    <img src="@/assets/syllabus-image2.jpg" class="img-fluid" />
                                </div>
                                <div class="pr-in">
                                    <h3>Estimated Time</h3>
                                    <p>5 Months at 10 hrs/week</p>
                                    <div class="it"><i class="far fa-clock i"></i></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <div class="pr-deet">
                                <div class="pr-image">
                                    <img src="@/assets/syllabus-image1.jpg" class="img-fluid" />
                                </div>
                                <div class="pr-in">
                                    <h3>Community of Practice</h3>
                                    <p>Be part of a thriving community driving innovation in the Web 3.0 and Blockchain Space </p>
                                    <div class="it"><i class="far fa-clock i"></i></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <div class="pr-deet">
                                <div class="pr-image">
                                    <img src="@/assets/syllabus-image4.jpg" class="img-fluid" />
                                </div>
                                <div class="pr-in">
                                    <h3>Realtime Expert Guide</h3>
                                    <p>Direct access to a blockchain development expert</p>
                                    <div class="it"><i class="far fa-clock i"></i></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <div class="pr-deet">
                                <div class="pr-image">
                                    <img src="@/assets/syllabus-image9.jpg" class="img-fluid" />
                                </div>
                                <div class="pr-in">
                                    <h3>Flexible Project-Driven Learning Path</h3>
                                    <p>Learn on your time, as long as you complete weekly activities</p>
                                    <div class="it"><i class="far fa-clock i"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- <div class="prog-table-section">
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="prog-table">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div class="table-sec">
                            <table style="width:100%;">
                                <tr>
                                    <th>Program Offerings</th>
                                    <th class="thright">Enrollment Incudes:</th>
                                </tr>
                                <tr>
                                    <td class="title">CLASS CONTENT</td>
                                    <td></td>
                                </tr>
                                <tr class="white">
                                    <td>Real world Projects</td>
                                    <td class="tdright"><i class="fa fa-check i"></i></td>
                                </tr>
                                <tr class="white">
                                    <td>Real world Projects</td>
                                    <td class="tdright"><i class="fa fa-check i"></i></td>
                                </tr>
                                <tr class="white">
                                    <td>Real world Projects</td>
                                    <td class="tdright"><i class="fa fa-check i"></i></td>
                                </tr>
                                <tr>
                                    <td class="title">STUDENT SERVICES</td>
                                    <td></td>
                                </tr>
                                <tr class="white">
                                    <td>
                                        <div class="new">
                                            <span>Technical Support </span>
                                            <span class="nw">NEW</span>
                                        </div>
                                    </td>
                                    <td class="tdright"><i class="fa fa-check i"></i></td>
                                </tr>
                                <tr class="white">
                                    <td>
                                        <div class="improved">
                                            <span>Technical Support </span>
                                            <span class="im">IMPROVED</span>
                                        </div>
                                    </td>
                                    <td class="tdright"><i class="fa fa-check i"></i></td>
                                </tr>
                                <tr>
                                    <td class="title">CAREER SERVICES</td>
                                    <td></td>
                                </tr>
                                <tr class="white">
                                    <td>Real world Projects</td>
                                    <td class="tdright"><i class="fa fa-check i"></i></td>
                                </tr>
                                <tr class="white">
                                    <td>Real world Projects</td>
                                    <td class="tdright"><i class="fa fa-check i"></i></td>
                                </tr>
                                <tr class="white">
                                    <td>Real world Projects</td>
                                    <td class="tdright"><i class="fa fa-check i"></i></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="instructor-section">
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="instructor-sect">
                <div class="instruct">
                    <div class="row">
                        <div class="title">Learn with the Best</div>
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                            <div class="instructors">
                                <div class="instructor">
                                    <div class="image"><img src="@/assets/person.png" class="img-fluid" /></div>
                                    <div class="name">Brandy Camacho</div>
                                    <div class="rank">INSTRUCTOR</div>
                                    <p class="info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque dolor nam numquam laudantium iure architecto beatae ipsa nemo dolore! Neque fuga molestiae commodi, adipisci aut placeat doloremque culpa mollitia sunt.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                            <div class="instructors">
                                <div class="instructor">
                                    <div class="image"><img src="@/assets/person.png" class="img-fluid" /></div>
                                    <div class="name">Brandy Camacho</div>
                                    <div class="rank">INSTRUCTOR</div>
                                    <p class="info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque dolor nam numquam laudantium iure architecto beatae ipsa nemo dolore! Neque fuga molestiae commodi, adipisci aut placeat doloremque culpa mollitia sunt.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                            <div class="instructors">
                                <div class="instructor">
                                    <div class="image"><img src="@/assets/person.png" class="img-fluid" /></div>
                                    <div class="name">Brandy Camacho</div>
                                    <div class="rank">INSTRUCTOR</div>
                                    <p class="info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque dolor nam numquam laudantium iure architecto beatae ipsa nemo dolore! Neque fuga molestiae commodi, adipisci aut placeat doloremque culpa mollitia sunt.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                            <div class="instructors">
                                <div class="instructor">
                                    <div class="image"><img src="@/assets/person.png" class="img-fluid" /></div>
                                    <div class="name">Brandy Camacho</div>
                                    <div class="rank">INSTRUCTOR</div>
                                    <p class="info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque dolor nam numquam laudantium iure architecto beatae ipsa nemo dolore! Neque fuga molestiae commodi, adipisci aut placeat doloremque culpa mollitia sunt.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> -->
<div class="pricing-section" ref="payment">
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="price-sect">
                <div class="pricing">
                    <div class="row">
                        <div class="gs">GET STARTED TODAY</div>
                        <div class="title">Blockchain Developer </div>
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div class="price">
                                <div class="price-info">
                                    <div class="access">MONTHLY ACCESS</div>
                                    <div class="pay">Pay as you go</div>
                                    <hr>
                                    <div class="price-1">$131.99</div>
                                    <div class="per-m">per month</div>
                                    <button @click="goToSignUp(1)">ENROLL NOW</button>
                                    <div class="bene">
                                        <i class="fa fa-check i"></i>
                                        <span>Maximum flexibility to learn at your own pace as long as you achieve weekly activities</span>
                                    </div>
                                </div>
                                <div class="price-info2">
                                    <div class="best">BEST VALUE</div>
                                    <div class="price-block">
                                        <div class="access">5-MONTHS ACCESS</div>
                                        <div class="pay">Pay upfront and save an extra 10%</div>
                                        <hr>
                                        <div class="price-1">
                                            $593.96
                                            <del class="text-danger fst-bold"><span class="cancelled"> $659.95</span></del>
                                        </div>
                                        <div class="per-m">per month</div>
                                        <button @click="goToSignUp(2)">ENROLL NOW</button>
                                        <div class="bene">
                                            <i class="fa fa-check"></i>
                                            <span>Maximum flexibility to learn at your own pace</span>
                                        </div>
                                        <div class="circle">
                                            <h4>NEW PERSONALIZED DISCOUNTS</h4>
                                            <a href="#">Learn more</a>
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
</div>
<div class="call-bg-section">
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="call-bg">
                <h2>Blockchain Developer</h2>
                <div class="buttons">
                    <button class="a" @click="handleDownload">DOWNLOAD SYLLABUS</button>
                    <button class="b" @click="moveUp">ENROLL NOW </button>
                </div>
            </div>
        </div>
    </div>
</div>
<div>
    <Modal :open="isOpen" @close="isOpen = !isOpen" class="modal1">
        <div class="text-center m-tit">
            <h3>Request detailed syllabus</h3>
            <small class="small">Fill in the form to receive more information about the course.</small>
        </div>
        <form @submit.prevent="submitDownloadForm">
            <div class="form-group">
                <label>Firstname</label>
                <input type="text" class="form-control" id="" v-model="firstName" required>
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" id="" v-model="email" required>
            </div>
            <p>By providing your information and clicking "Download Syllabus", you consent and agree to receive marketing emails from Udacity, and that your information will be used in accordance with the Udacity Terms of Use and Privacy Policy, including relevant opt out provisions therein.</p>
            <div class="m-but"><button type="submit" class="btn btn-primary" :disabled="downloadProcessing">Download Syllabus</button></div>
            <p class="text-danger text-center mt-2">
                {{ errorMessage }}
            </p>
        </form>
    </Modal>

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
</div>
</template>

<script>
import Modal from '../components/modal.vue'
import { onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Navbar from '../components/navbar.vue'
import { useAgulite } from '../composables'
import { getErrorMessage } from '../utils'
import axios from 'axios'

export default {
    components: {
        Navbar,
        Modal
    },
    setup() {
        const { getAgulite, saveSyllabusViewer } = useAgulite()

        const countdown = ref({
            days: 0, hours: 0, minutes: 0, seconds: 0
        })

        const isOpen = ref(false)

        const router = useRouter()
        const route = useRoute()
        const payment = ref(null)
        const errorMessage = ref(null)

        const firstName = ref('')
        const email = ref('')

        const downloadProcessing = ref(false)

        const goToCommunity = () => {
            window.scrollTo(0, community.value.getBoundingClientRect().top)
        }

        const moveUp = () => {
            window.scrollTo(0, payment.value.getBoundingClientRect().top)
        }

        const handleDownload = async () => {
            const user = await getAgulite()

            if(user){
                download()
            } else {
                isOpen.value = true
            }
        }

        const submitDownloadForm = async () => {
            downloadProcessing.value = true
            errorMessage.value = ''

            const data = {
                firstName: firstName.value,
                email: email.value
            }

            try {
                await saveSyllabusViewer(data)
                isOpen.value = false
                download()
            } catch(error) {
                errorMessage.value = getErrorMessage(error.message)
                console.log(error.message)
            }

            downloadProcessing.value = false
        }

        const download = () => {
            // let downloadLink = document.createElement('a')
            // downloadLink.target = "_blank"
            // downloadLink.href = 'https://drive.google.com/file/d/1MN6dzZinqUpzisskU_nw1RJ5GwR5hk6H/view?usp=sharing'
            // downloadLink.click()

            window.location.href = 'https://drive.google.com/file/d/1MN6dzZinqUpzisskU_nw1RJ5GwR5hk6H/view?usp=sharing'
        }

        const goToSignUp = async (id = 1) => {
            let amount = id === 1 ? 131.99 : 593.96

            router.push({
                name: 'Signup',
                params: { amount: amount, referrerCode: route.params.referrerCode }
            })
            
        }

        const initCountDown = (timeAmount) => {

            const component = (x, v) => {
                return Math.floor(x / v);
            }

            setInterval(function () {
                timeAmount--

                let days = component(timeAmount, 24 * 60 * 60),
                    hours = component(timeAmount, 60 * 60) % 24,
                    minutes = component(timeAmount, 60) % 60,
                    seconds = component(timeAmount, 1) % 60

                countdown.value = { days, hours, minutes, seconds }

                if (timeAmount <= 0) {
                    window.location.reload()
                }

            }, 1000)
        }

        onMounted(() => {
            let currentTime = Math.round(Date.now() / 1000)
            let startTime = 1649656800 // 06:00:00 AM, April 11th, 2022
            let timeLeft = startTime - currentTime

            if(timeLeft > 0){
                initCountDown(timeLeft)
            }
        })

        return {
            countdown,
            isOpen,
            firstName,
            email,
            payment,
            errorMessage,
            downloadProcessing,
            goToCommunity,
            handleDownload,
            submitDownloadForm,
            download,
            moveUp,
            goToSignUp
        }
    }
}
</script>

<style scoped>
    .cancelled {
        color: #000000 !important;
        font-size: 12pt;
    }
</style>
