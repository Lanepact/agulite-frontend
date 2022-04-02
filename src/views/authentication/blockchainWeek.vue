<template>
     <div class="pt-4">
        <div class="signlogo">
            <img src="@/assets/agulogo.png" alt="agulogo" />
        </div>
        <div class="signin-section mt-4">
            <div class="container main">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 d-none d-md-block">
                        <div class="left-img">
                            <img src="@/assets/login-img.png" alt="signupimg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div class="signin-form-section">
                            <h1>Blockchain Week,</h1>
                            <p>Don't miss this event.</p>
                            <div v-show="errorMessage" class="mt-3 bg-danger error-box p-3">
                                <h6 class="text-white">{{ errorMessage }}</h6>
                            </div>
                            <form @submit.prevent="signup">
                                <div class="form-group">
                                    <label for="">First Name:</label>
                                    <input type="password" class="form-control" v-model="firstName" required>
                                </div>
                                <div class="form-group">
                                    <label for="">Last Name:</label>
                                    <input type="password" class="form-control" v-model="lastName" required>
                                </div>
                                <div class="form-group">
                                    <label for="">Email Address:</label>
                                    <input type="email" class="form-control" v-model="email" required>
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
import { validateEmail, getErrorMessage } from '../../utils'
import { computed, onMounted } from '@vue/runtime-core'
import { useRouter } from 'vue-router'

export default {
    setup(){
        const router = useRouter()
        const { signin } = useAgulite()

        const loading = ref(false)
        const errorMessage = ref("")
        const firstName = ref("")
        const lastName = ref("")
        const email = ref("")

        const loginButtonText = computed(() => loading.value ? "Please, wait." : "Signup")

        const signup = async () => {
            if(!validateEmail(email.value)){
                errorMessage.value = "Invalid email"
                return
            }

            loading.value = true

            const data = {
                firstName: firstName.value,
                lastName: lastName.value,
                email: email.value
            }

            try{
                await signin(data)
                router.push("/profile")
            } catch(e) {
                errorMessage.value = getErrorMessage(e)
                loading.value = false
                
            }

        }

        return {
            loginButtonText,
            loading,
            errorMessage,
            email,
            firstName,
            lastName,
            signup
        }
    }
}
</script>

<style>

</style>