<template>
    <div class="d-flex justify-content-center align-items-center flex-column">
        <div class="verification-box">
            <div class="text-center mb-4">
                <img src="@/assets/agulogo.png" alt="logo" class="img-fluid"/>
            </div>
            <h1 class="mb-3">A verification code has been sent to your email. Enter the code to verify your account</h1>
            <span class="d-block text-danger py-2" v-if="errorMessage">{{ errorMessage }}</span>
            <form class="form mt-2" @submit.prevent="verifyCode">
                <div class="form-group mt-2">
                    <input type="text" class="form-control form-control-lg p-2" v-model="verificationCode" required>
                </div>
                <div class="d-flex justify-content-end mt-2">
                    <button type="submit" class="btn btn-lg btn-block login p-2" :disabled="codeCompleted">{{ verifyButtonText }}</button>
                </div>
            </form>
            <span class="d-block text-center mt-3">Didn't get the code? <router-link to="#" @click.prevent="resendCode">Resend</router-link></span>
        </div>
    </div>
</template>

<script>
    import { ref } from '@vue/reactivity'
    import { useAgulite } from '../../composables'
    import { getErrorMessage } from '../../utils'
    import { computed, watchEffect } from '@vue/runtime-core'
    import { useRouter } from 'vue-router'

    export default {
        setup(){
            const router = useRouter()
            const { verifyAccount } = useAgulite()

            const loading = ref(false)
            const codeCompleted = ref(true)
            const errorMessage = ref("")
            const verificationCode = ref("")

            const verifyButtonText = computed(() => loading.value ? "Please, wait." : "Submit")

            watchEffect(() => {
                if(verificationCode.value.trim().length === 6){
                    codeCompleted.value = false
                } else {
                    codeCompleted.value = true
                }
            })

            const verifyCode = async () => {

                try {
                    const data = {
                        verificationCode: Number(verificationCode.value)
                    }

                    await verifyAccount(data)
                    loading.value = false
                    router.push("/signin")
                } catch(e){
                    errorMessage.value = getErrorMessage(e)
                    loading.value = false
                }
            }

            const resendCode = async () => {
                alert("New verification code sent!")
            }

            return {
                loading,
                codeCompleted,
                errorMessage,
                verificationCode,
                verifyButtonText,
                verifyCode,
                resendCode
            }
        }
    }
</script>

<style scoped>
    .verification-box {
        width: 40%;
        margin-top: 100px !important;
        padding: 25px !important;
        border: 1px solid rgb(212, 212, 212);
        border-radius: 5px;
        background-color: rgb(247, 247, 247) !important;
    }

    .verification-box .btn {
        background-color: #F5800C !important;
        color:  #ffffff !important;
    }

    .verification-box  h1{
        font-size: 20px !important;
    }

    .verification-box  h2{
        font-size: 16px !important;
    }

    @media screen and (max-width: 768px){
        .verification-box {
            width: 85%;
        }

        .verification-box  h1{
            font-size: 17px !important;
        }

        .verification-box  h2{
            font-size: 13px !important;
        }

        .verification-box  span{
            font-size: 12px !important;
        }
    }
</style>
