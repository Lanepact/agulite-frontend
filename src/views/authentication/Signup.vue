<template>
    <div class="pt-4">
        <div class="signlogo">
            <img src="@/assets/agulogo.png" alt="agulogo" />
        </div>
        <div class="sign-up-step">
            <span class="step-writeup">Step 1 of 2</span>
            <span class="step-line"></span>
        </div>
        <div class="signup-section mt-4">
            <div class="container">
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
                                <button type="button" class="btn btn-primary btn-lg btn-block next">Next</button>
                                <div class="account-login">I already have an account! <a href="#" class="">Login</a> </div>
                                 <button type="button" class="btn btn-primary btn-lg btn-block google-sign-up">
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
            
        }
    }
}


</script>