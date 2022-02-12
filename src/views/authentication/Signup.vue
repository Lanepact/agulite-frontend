<template>
    <div class="pt-4">
        <div class="signlogo">
            <img src="@/assets/agulogo.png" alt="agulogo" />
        </div>
        <div class="sign-up-step" v-if="form1">
            <span class="step-writeup">Step 1 of 2</span>
            <span class="step-line"></span>
        </div>
        <div class="signup-section mt-4" v-if="form1">
            <div class="container main">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 d-none d-md-block">
                        <div>
                            <img src="@/assets/signup-img.png" alt="signupimg" />
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div class="signup-form-section">
                            <h1>Welcome to Agu,</h1>
                            <p>Sign up now to create your account.</p>
                            <form @submit.prevent="next">
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
                                    <label for="">Phone Number:</label>
                                    <input type="tel" class="form-control" v-model="phoneNumber" required>
                                </div>
                                <div class="form-group">
                                    <label for="">Password:</label>
                                    <input type="password" class="form-control" v-model="password" required>
                                </div>
                                <div class="form-group">
                                    <label for="">Confirm Password:</label>
                                    <input type="password" class="form-control" v-model="confirmPassword" required>
                                </div>
                                <div class="border border-danger p-3 error-box" v-show="errorMessage">
                                    <span class="text-danger font-bold">{{ errorMessage }}</span>
                                </div>
                                <button type="submit" class="btn btn-primary btn-lg btn-block next p-3">Next</button>
                                <div class="account-login">I already have an account! <a href="/signin" class="">Login</a> </div>
                                 <button type="button" class="btn btn-primary btn-lg btn-block google-sign-up p-2">
                                     <img src="@/assets/Google-Logo.png" alt="g"/>
                                     <span>Sign up with Google</span>
                                 </button>
                            </form>
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>
        <div class="sign-up-step" v-if="form2">
            <span class="step-writeup">Step 2 of 2</span>
            <span class="step-line"></span>
        </div>
         <div class="signup-section mt-4"  v-if="form2">
            <div class="container main">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 d-none d-md-block">
                        <div>
                            <img src="@/assets/signup-img.png" alt="signupimg" />
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div class="signup-form-section">
                            <h1>My Interest,</h1>
                            <p>Let us know what you wish to learn.</p>
                            <div class="bg-success mt-4 p-3 error-box" v-if="signUpFeedBack">
                                <span class="text-white font-bold">{{ signUpFeedBack }}</span>
                            </div>
                            <div class="bg-danger mt-4 p-3 error-box" v-if="errorMessage">
                                <span class="text-white font-bold">{{ errorMessage }}</span>
                            </div>
                            <form @submit.prevent="register">
                                 <div class="form-group">
                                    <label for="">What field are you interested in?</label>
                                    <select v-model="interestField">
                                        <option value="Graphics Design And Motion graphics">Graphics Design And Motion graphics</option>
                                        <option value="UI/UX Design">UI/UX Design</option>
                                        <option value="Frontend Software Engineering(Web and Mobile)">Frontend Software Engineering(Web and Mobile)</option>
                                        <option value="Backend Software Engineering(Web and Mobile)">Backend Software Engineering(Web and Mobile)</option>
                                        <option value="Mobile App Development">Mobile App Development</option>
                                        <option value="DevOps Engineering">DevOps Engineering</option>
                                        <option value="">Cloud Computing</option>
                                        <option value="Cloud Computing">Data Analysis</option>
                                        <option value="Quality Assurance and Engineering">Quality Assurance and Engineering</option>
                                        <option value="Digital Marketing">Digital Marketing</option>
                                        <option value="Business Development and sales">Business Development and sales</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="" class="">What is your experience level?</label>
                                    <select class="" v-model="experienceLevel">
                                        <option value="beginner">Beginner</option>
                                        <option value="intermediate">Intermediate</option>
                                        <option value="advanced">Advanced</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="">How long have you been in tech?</label>
                                    <select v-model="yearsOfExperience" required>
                                        <option value="0-1 year">0-1 year</option>
                                        <option value="2-4 years">2-4 years</option>
                                        <option value="5 and above">5 and above</option>
                                    </select>
                                </div>
                                <button type="submit" class="btn btn-primary btn-lg btn-block next p-3" :disabled="loading">{{ registerButtonText }}</button>
                                <div class="account-login">I already have an account! <a href="/signin" class="">Login</a> </div>
                                 <button type="button" class="btn btn-primary btn-lg btn-block google-sign-up p-2">
                                     <img src="@/assets/Google-Logo.png" alt="g"/>
                                     <span>Sign up with Google</span>
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
    import { validateEmail } from '../../utils'
    import { computed, onMounted, watchEffect } from '@vue/runtime-core'
    import { useRouter } from 'vue-router'

    export default{
        setup(){

            const router = useRouter()
            const { signup } = useAgulite()

            const form1 = ref(true)
            const form2 = ref(false)

            const loading = ref(false)
            const errorMessage = ref("")
            const signUpFeedBack = ref("")

            // Registration details
            const firstName = ref("")
            const lastName = ref("")
            const phoneNumber = ref("")
            const email = ref("")
            const password = ref("")
            const confirmPassword = ref("")
            const interestField = ref("Graphics Design And Motion graphics")
            const experienceLevel = ref("beginner");
            const yearsOfExperience = ref("0-1 year");

            const registerButtonText = computed(() => loading.value ? "Please, wait." : "Sign up")

            watchEffect(() => {
                const _password = password.value.trim()
                const _confirmPassword = confirmPassword.value.trim()

                if(
                    (_password !== "" && _confirmPassword !== "") &&
                    (_password !== _confirmPassword)
                ){
                    errorMessage.value = "Password mismatch"
                } else {
                    errorMessage.value = ""
                }
            })

            const next = () => {
                if(!validateEmail(email.value)){
                    errorMessage.value = "Invalid email"
                    return
                }

                if(password.value !== confirmPassword.value){
                    errorMessage.value = "Password mismatch"
                    return
                }

                if(password.value.trim().length < 8){
                    errorMessage.value = "Password must be up-to 8 characters"
                    return
                }

                form2.value = true
                form1.value = false
            }

            const register = async () => {
                loading.value = true

                const data = {
                    firstName: firstName.value,
                    lastName: lastName.value,
                    phoneNumber: phoneNumber.value,
                    email: email.value,
                    password: password.value,
                    interestField: interestField.value,
                    experienceLevel: experienceLevel.value,
                    yearsOfExperience: yearsOfExperience.value
                }

                try{
                    await signup(data)
                    loading.value = false
                    router.push("/verification")
                } catch(e) {
                    errorMessage.value = e.message
                    loading.value = false
                }

            }

            return {
                form1,
                form2,
                registerButtonText,
                loading,
                errorMessage,
                signUpFeedBack,
                firstName,
                lastName,
                phoneNumber,
                email,
                password,
                confirmPassword,
                interestField,
                experienceLevel,
                yearsOfExperience,
                next,
                register
            }
        }
    }


</script>