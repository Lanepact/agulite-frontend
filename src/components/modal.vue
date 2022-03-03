<template>
    <transition name="fade">
        <div class="vue-modal" v-show="open">
            <transition name="drop-in">
                <div class="vue-modal-inner" v-show="open">
                    <div class="vue-modal-content">
                        <div class="iconhold">
                            <img @click="$emit('close')" src="@/assets/closeicon.svg" class="img-fluid close-icon">
                        </div>
                        <slot />
                    </div>
                </div>
            </transition>
        </div>
    </transition>
</template>
<script>
export default {
    props:{
        open:{
            type:Boolean,
            required:true
        }
    }
}
</script>
<style scoped>
  .fade-enter-active, .fade-leave-active{
      transition: opacity 0.5s !important ;
  }
  .fade-enter, .fade-leave-to{
      opacity: 0 !important;
  }
  .drop-in-enter-active, .drop-in-leave-active{
      transition: all 0.3s ease ease-out !important ;
  }
</style>