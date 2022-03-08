<template>
    
</template>

<script>
import paystack from "vue3-paystack"
import { computed, onMounted } from '@vue/runtime-core';
import { useRoute, useRouter } from 'vue-router'

export default {
    components: {
        paystack
    },
    setup(props) {
        const route = useRoute()
        const router = useRouter()

        const payWithPaystack = (amount = 0, email = "") => {
            if(amount > 0 && email != ""){
                var handler = PaystackPop.setup({
                    key: 'pk_test_369f4fcfaa66b2690bacfdf612fd7d2addab83d5',
                    // key: 'pk_live_9ee9d6246c273b1d1f713d77fd77f9b20260ab35',
                    email: email,
                    amount: (amount * 100),
                    currency: "NGN",
                    callback: function(response){
                        let reference = response.reference

                        //TODO: Verify payment on the backend

                        router.push('/predashboard')
                    },
                    onClose: function(){
                        router.push('/predashboard2')
                    }
                });

                handler.openIframe();
            }
        }

        onMounted(() => {
            const amount = route.params.amount
            const email = route.params.email

            if(!amount || !email){
                router.push('/blockchain-development')
            }

            payWithPaystack(amount, email)
        })
    }
}
</script>
