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
                            <h1>Welcome back,</h1>
                            <p>Login now to access your account.</p>
                            <div v-show="errorMessage" class="mt-3 bg-danger error-box p-3">
                                <h6 class="text-white">{{ errorMessage }}</h6>
                            </div>
                            <form @submit.prevent="login">
                                <div class="form-group">
                                    <label for="">Email Address:</label>
                                    <input type="email" class="form-control" v-model="email" required>
                                </div>
                                <div class="form-group">
                                    <label for="">Password:</label>
                                    <input type="password" class="form-control" v-model="password" required>
                                </div>
                                <div class="checkup">
                                     <div class="form-group rem">
                                        <input type="radio" class="" id="">
                                        <label class="rem-me" for="exampleCheck1">Remember me</label>
                                    </div>
                                    <a href="#" class="forgot-pass">Forgot password</a>
                                </div>
                                <button type="submit" class="btn btn-primary btn-lg btn-block login p-2" :disabled="loading">{{ loginButtonText }}</button>
                                <div class="account-signup">Don’t have an account?  <a href="/signup" class="">Sign up</a> </div>
                                 <button type="button" class="btn btn-primary btn-lg btn-block google-sign-in">
                                     <img src="@/assets/Google-Logo.png" alt="g"/>
                                     <span>Login with Google</span>
                                 </button>
                                  <button type="button" class="btn btn-primary btn-lg btn-block apple-sign-in p-2">
                                     <img src="@/assets/Apple_logo_black.svg" alt="g"/>
                                     <span>Login with Apple Id</span>
                                 </button>
                                  <button type="button" class="btn btn-primary btn-lg btn-block facebook-sign-in p-2">
                                     <img src="@/assets/facebook-logo.png" alt="g"/>
                                     <span>Login with Facebook</span>
                                 </button>
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
        const email = ref("")
        const password = ref("")

        const loginButtonText = computed(() => loading.value ? "Please, wait." : "Login")

        const login = async () => {
            if(!validateEmail(email.value)){
                errorMessage.value = "Invalid email"
                return
            }

            loading.value = true

            const data = {
                email: email.value,
                password: password.value
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
            password,
            login
        }
    }
}
</script>

<style>

</style>