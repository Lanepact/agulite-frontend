<template>
    <div class="pt-4">
        <div class="signlogo">
            <img src="@/assets/agulogo.png" alt="agulogo" />
        </div>
        <div class="sign-up-step" v-if="form1">
            <span class="step-writeup">Step 1 of 3</span>
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
                                    <label for="">Full Name:</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1">
                                </div>
                                <div class="form-group">
                                    <label for="">Email Address:</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1">
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
        <div class="sign-up-step" v-else-if="form2">
            <span class="step-writeup">Step 2 of 3</span>
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
                                    <label for="">Full Name:</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1">
                                </div>
                                <div class="form-group">
                                    <label for="">Email Address:</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1">
                                </div>
                                <div class="form-group">
                                    <label for="">Password:</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1">
                                </div>
                                <div class="form-group">
                                    <label for="">Confirm Password:</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1">
                                </div>
                                <button type="button" class="btn btn-primary btn-lg btn-block next p-3" @click="after">Continue</button>
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
         <div class="sign-up-step" v-else-if="form3">
            <span class="step-writeup">Step 3 of 3</span>
            <span class="step-line"></span>
        </div>
         <div class="signup-section mt-4"  v-if="form3">
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
                            <p>Sign up now to create your.</p>
                            <form>
                                 <div class="form-group">
                                    <label for="">Full Name:</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1">
                                </div>
                                <div class="form-group">
                                    <label for="">Email Address:</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1">
                                </div>
                                <div class="form-group">
                                    <label for="">Password:</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1">
                                </div>
                                <div class="form-group">
                                    <label for="">Confirm Password:</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1">
                                </div>
                                <button type="button" class="btn btn-primary btn-lg btn-block next p-3">Finish</button>
                                <div class="account-login">I already have an account! <router-link to="/signin" class="">Login</router-link> </div>
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
    }
   
}


</script>