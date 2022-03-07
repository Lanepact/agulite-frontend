<template>
    
</template>

<script>
import { ref } from '@vue/reactivity';
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

        const payWithPaystack = (amount = 0, email = "", contact = "") => {
            if((amount > 0) && (email != "") && (contact != "")){
                var handler = PaystackPop.setup({
                    key: 'pk_test_369f4fcfaa66b2690bacfdf612fd7d2addab83d5',
                    // key: 'pk_live_9ee9d6246c273b1d1f713d77fd77f9b20260ab35',
                    email: email,
                    amount: (amount * 100),
                    currency: "NGN",
                    metadata: {
                        custom_fields: [
                            {
                                display_name: "Mobile Number",
                                variable_name: "mobile_number",
                                value: contact
                            }
                        ]
                    },
                    callback: function(response){
                        alert("The transaction was successful with the reference number, " + response.reference);
                    },
                    onClose: function(){
                        router.push('/blockchain-development')
                    }
                });

                handler.openIframe();
            }
        }

        onMounted(() => {
            const email = route.params.email
            payWithPaystack(65000, email, '08123456574')
        })
    }
}
</script>

<style>

</style>
