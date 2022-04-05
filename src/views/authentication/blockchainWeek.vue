<template>
     <div class="pt-4">
        <div class="signlogo">
            <img src="@/assets/agulogo.png" alt="agulogo" />
        </div>
        <div class="signin-section mt-4">
            <div class="container main">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 d-none d-md-block">
                      <!--  <div class="left-img">
                            <img src="@/assets/login-img.png" alt="signupimg" class="img-fluid" />
                        </div> -->
                        <div class="left-img">
                            <img src="@/assets/BC.jpg" alt="signupimg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div class="signin-form-section">
                            <h1>Blockchain Week,</h1>
                            <!-- <p>A gathering for blockchain enthusiasts, including industry professionals, developers, and traders.</p> -->
                            <p class="fst-italic">Featuring: Smart Contract Development, Trading highlights, and Panel Sessions on how blockchain is impacting key industries</p>
                            <div v-show="errorMessage" class="mt-3 bg-danger error-box p-3">
                                <h6 class="text-white">{{ errorMessage }}</h6>
                            </div>
                            <form @submit.prevent="signup">
                                <div class="form-group">
                                    <label for="">First Name:</label>
                                    <input type="text" class="form-control" v-model="firstName" required>
                                </div>
                                <div class="form-group">
                                    <label for="">Last Name:</label>
                                    <input type="text" class="form-control" v-model="lastName" required>
                                </div>
                                <div class="form-group">
                                    <label for="">Email Address:</label>
                                    <input type="email" class="form-control" v-model="email" required>
                                </div>
                                <div class="form-group">
                                    <label for="">What do you want to gain from the event?</label>
                                    <div class="form-check">
                                        <input type="checkbox" id="goal01" value="I want to learn blockchain development" v-model="goal"/>
                                        <label for="goal01" class="ps-2 d-inline">I want to learn blockchain development</label>
                                    </div>
                                    <div class="form-check">
                                        <input type="checkbox" id="goal02" value="I want to learn blockchain (crypto) trading" v-model="goal"/>
                                        <label for="goal02" class="ps-2 d-inline">I want to learn blockchain (crypto) trading</label>
                                    </div>
                                    <div class="form-check">
                                        <input type="checkbox" id="goal03" value="I want to learn how blockchain affects other industries" v-model="goal"/>
                                        <label for="goal03" class="ps-2 d-inline">I want to learn how blockchain affects other industries</label>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary btn-lg btn-block login p-2" :disabled="loading">{{ loginButtonText }}</button>
                            </form>
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
</template>

<script>
import { ref } from '@vue/reactivity'
import { useAgulite } from '../../composables'
import { validateEmail, getErrorMessage, getUserCountry } from '../../utils'
import { computed, onMounted } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
import axios from 'axios'

export default {
    setup(){
        const router = useRouter()
        const { signin } = useAgulite()

        const loading = ref(false)
        const errorMessage = ref("")
        const firstName = ref("")
        const lastName = ref("")
        const email = ref("")
        const goal = ref([])

        const loginButtonText = computed(() => loading.value ? "Please, wait." : "Signup")

        const signup = async () => {
            if(!validateEmail(email.value)){
                errorMessage.value = "Invalid email"
                return
            }

            loading.value = true

            const country = await getUserCountry()

            const data = {
                firstname: firstName.value,
                lastname: lastName.value,
                email: email.value,
                goal: JSON.stringify(goal.value),
                country: country ? country : ""
            }

            try{
                let result = await axios.post('https://agulite.herokuapp.com/api/v1/blockchain/createuser', data)
                router.push({
                    name: "JoinCommunity",
                    params: { ...data }
                });
            } catch(e) {
                errorMessage.value = getErrorMessage(e)
            }

            loading.value = false

        }

        return {
            loginButtonText,
            loading,
            errorMessage,
            firstName,
            lastName,
            email,
            goal,
            signup
        }
    }
}
</script>

<style>

</style>