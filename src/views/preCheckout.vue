<template>
<div class="d-flex justify-content-center align-items-center flex-column">
    <div class="pre-checkout-box">
        <div class="text-center mb-4">
            <h1 class="">Quick Checkout</h1>
            <p class="mb-3">Already have an account? <router-link to="/signin">Sign in</router-link>
            </p>
            <p class="">Sign up using your Google or get started with just your email.</p>
        </div>
        <div class="d-flex justify-content-center">
            <button type="submit" class="btn btn-lg p-2" @click="googleSignUp">
                Sign up with Google
            </button>
        </div>
        <div class="text-center my-4">
            or
        </div>
        <form class="form" @submit.prevent="continueWithCheckout()">
            <div class="form-group mt-2">
                <input type="email" class="form-control form-control-lg p-2" v-model="email" placeholder="Email" required>
            </div>
            <div class="form-group mt-2">
                <input type="password" class="form-control form-control-lg p-2" v-model="password" placeholder="Password"  required>
            </div>
            <div class="d-flex justify-content-center mt-2">
                <button type="submit" class="btn btn-lg agulite-btn btn-block login p-2">{{ continueButtonText }}</button>
            </div>
        </form>
        <span class="d-block text-danger py-2" v-if="errorMessage">{{ errorMessage }}</span>
    </div>
</div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { getErrorMessage } from '../utils'
import {  computed, onMounted } from '@vue/runtime-core'
import {  useRouter, useRoute } from 'vue-router'
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth'

export default {
    setup() {

        const router = useRouter()
        const route = useRoute()

        const amount = ref(0)
        const email = ref("")
        const password = ref("")
        const loading = ref(false)
        const errorMessage = ref("")

        const continueButtonText = computed(() => loading.value ? "Please, wait." : "Continue with checkout")

        onMounted(() => {
            amount.value = route.params.amount

            if(!amount.value){
                router.push('/blockchain-development')
            }
        })

        const googleSignUp = async () => {
            const provider = new GoogleAuthProvider()
            signInWithPopup(getAuth(), provider)
                .then(result => {
                    const fullName = result.user.displayName.split(' ')

                    const data = {
                        firstName: fullName[0],
                        lastName: fullName[1],
                        phoneNumber: result.user.phoneNumber,
                        email: result.user.email,
                        password: result.user.uid,
                        interestField: "Blockchain Development",
                        experienceLevel: 0,
                        yearsOfExperience: 0,
                        image: result.user.photoURL,
                        isVerified: result.user.emailVerified
                    }

                    //TODO: Send to agulite backend (signup user)

                    router.push({
                        name: 'checkout',
                        params: { email: data.email, amount: amount.value }
                    })

                })
                .catch(error => {

                })
        }

        const continueWithCheckout = async () => {

            const credentials = {
                email: email.value,
                password: password.value
            }

            try{
                const authUser = await createUserWithEmailAndPassword(getAuth(), credentials.email, credentials.password)

                // TODO: Try verifying the user

                router.push({
                    name: 'checkout',
                    params: { email: data.email, amount: amount.value }
                })
            } catch(error) {
                console.log(error.message)
            }
        }

        return {
            email,
            password,
            loading,
            errorMessage,
            continueButtonText,
            googleSignUp,
            continueWithCheckout,
        }
    }
}
</script>

<style scoped>
.pre-checkout-box {
    width: 40%;
    margin-top: 100px !important;
    padding: 25px !important;
}

.pre-checkout-box .btn {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.pre-checkout-box .agulite-btn {
    background-color: #F5800C !important;
    color: #ffffff !important;
}

.pre-checkout-box h1 {
    font-size: 24px !important;
}

.pre-checkout-box h2 {
    font-size: 16px !important;
}

@media screen and (max-width: 768px) {
    .pre-checkout-box {
        width: 85%;
    }

    .pre-checkout-box h1 {
        font-size: 20px !important;
    }

    .pre-checkout-box h2 {
        font-size: 13px !important;
    }

    .pre-checkout-box span {
        font-size: 12px !important;
    }
}
</style>
