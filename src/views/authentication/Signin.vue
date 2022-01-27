<template>
     <div class="pt-4">
        <div class="signlogo">
            <img src="@/assets/agulogo.png" alt="agulogo" />
        </div>
        <div class="signin-section mt-4">
            <div class="container main">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 d-none d-md-block">
                        <div>
                            <img src="@/assets/login-img.png" alt="signupimg" />
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div class="signin-form-section">
                            <h1>Welcome back,</h1>
                            <p>Login now to access your account.</p>
                            <form>
                                <div class="form-group">
                                    <label for="">Email Address:</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1">
                                </div>
                                <div class="form-group">
                                    <label for="">Password:</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1">
                                </div>
                                <div class="checkup">
                                     <div class="form-group">
                                        <input type="radio" class="" id="">
                                        <label class="rem-me" for="exampleCheck1">Remember me</label>
                                    </div>
                                    <a href="#" class="forgot-pass">Forgot password</a>
                                </div>
                                <button type="button" class="btn btn-primary btn-lg btn-block login p-3">Login</button>
                                <div class="account-signup">Don’t have an account?  <router-link to="/signup" class="">Sign up</router-link></div>
                                 <button type="button" class="btn btn-primary btn-lg btn-block google-sign-in p-2">
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
export default {
    data(){
        return{

        }
    }
}
</script>
<style>

</style>