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
                            <form>
                                 <div class="form-group">
                                    <label for="">First Name:</label>
                                    <input type="text" class="form-control" id="exampleInputPassword1">
                                </div>
                                <div class="form-group">
                                    <label for="">last Name:</label>
                                    <input type="text" class="form-control" id="exampleInputPassword1">
                                </div>
                                <div class="form-group">
                                    <label for="">Email Address:</label>
                                    <input type="email" class="form-control" id="exampleInputPassword1">
                                </div>
                                <div class="form-group">
                                    <label for="">Phone:</label>
                                    <input type="number" class="form-control" id="exampleInputPassword1">
                                </div>
                                <div class="form-group">
                                    <label for="">Password:</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1">
                                </div>
                                <div class="form-group">
                                    <label for="">Confirm Password:</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1">
                                </div>
                                <button type="button" class="btn btn-primary btn-lg btn-block next p-3" @click="next">Next</button>
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
                            <form>
                                 <div class="form-group">
                                    <label for="">What field are you passionate about?</label>
                                    <select>
                                        <option value="">Graphics Design And Motion graphics</option>
                                        <option value="">UI/UX Design</option>
                                        <option value="">Frontend Software Engineering(Web and Mobile)</option>
                                        <option value="">Backend Software Engineering(Web and Mobile)</option>
                                        <option value="">Mobile App Development </option>
                                        <option value="">DevOps Engineering </option>
                                        <option value="">Cloud Computing </option>
                                        <option value="">Data Analysis</option>
                                        <option value="">Quality Assurance and Engineering </option>
                                        <option value="">Digital Marketing </option>
                                        <option value="">Business Development and sales</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="" class="">What is your experience level?</label>
                                    <select class="">
                                        <option value="beginner">Beginner</option>
                                        <option value="intermediate">Intermediate</option>
                                        <option value="advanced">Advanced</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="">How long have you been in tech?</label>
                                    <select>
                                        <option value="">0-1 year</option>
                                        <option value="">2-4 years</option>
                                        <option value="">5 and above</option>
                                    </select>
                                </div>
                                <button type="button" class="btn btn-primary btn-lg btn-block next p-3" @click="after">Sign up</button>
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
    import { useAgulite } from '../../state'
    import { computed } from '@vue/runtime-core'
    import { useRouter } from 'vue-router'

    export default{
        data(){
            return{
                form1: true,
                form2: false,
                form3: false
            }
        },
        methods:{
            next(){
                this.form2 = true
                this.form1 = false
            },
            after(){
                this.form2 = false,
                this.form3 = true
            }
        },

        setup(){
            const router = useRouter()
            const { signup } = useAgulite

            const loading = ref(false)
            const errorMessage = ref("")

            // Registration details
            const fullname = ref("")
            const email = ref("")
            const password = ref("")
            const confirmPassword = ref("")

            const loginButtonText = computed(() => loading.value ? "Please, wait." : "Finish")

            const register = async () => {
                loading.value = true

                const data = {
                    fullname: fullname.value,
                    email: email.value,
                    password: password.value,
                    confirmPassword: confirmPassword.value
                }

                try{
                    const response = await signup(data)
                    loading.value = false
                    router.push("/signin")
                } catch(e) {
                    errorMessage.value = e.message
                    loading.value = false
                }

            }

            return {
                loginButtonText,
                loading,
                errorMessage,
                fullname,
                email,
                password,
                confirmPassword,
                register
            }
        }
    }


</script>