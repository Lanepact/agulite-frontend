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
                <div class="c-banner-info" style="padding-bottom: 150px !important">
                    <div class="title">Presale starts in</div>
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
                </div>
            </div>
        </div>
    </div>
</div>

<div>
    <div class="mt-4 community-section" ref="community">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                <h1 class="header">Keep In Touch </h1>
            </div>
            <div class="row mb-4">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="community-social">
                        <div><a href="https://t.me/agulite_community" target="_blank"><i class="fab fa-telegram ic"></i></a></div>
                        <div><a href="https://twitter.com/officialagulite"><i class="fab fa-twitter ic"></i></a></div>
                        <div><a href="https://www.linkedin.com/company/agulite"><i class="fab fa-linkedin ic"></i></a></div>
                        <div><a href="https://www.reddit.com/r/AGUITE/"><i class="fab fa-reddit ic"></i></a></div>
                        <div><a href="https://www.instagram.com/official_agulite/"><i class="fab fa-instagram ic"></i></a></div>
                    </div>
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
import Navbar from '../components/navbar.vue'

export default {
    components: {
        Navbar,
        Modal
    },

    setup() {
        const countdown = ref({
            days: 0, hours: 0, minutes: 0, seconds: 0
        })

        const goToCommunity = () => {
            window.scrollTo(0, community.value.getBoundingClientRect().top)
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
            let startTime = 1650283200 // 12:00:00 AM, April 18th, 2022
            let timeLeft = startTime - currentTime

            if(timeLeft > 0){
                initCountDown(timeLeft)
            }
            
        })

        return {
            countdown
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
