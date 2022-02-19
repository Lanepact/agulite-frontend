<template>
       <router-link :to ="{name:'Details', params: {id : course.id}}">
        <span class="course-title">{{ course.title }}</span>
       </router-link>
        <div class="course-level">
            <span class="percent">{{ course.progress }}%</span>
            <button>Continue</button>
        </div>
    
</template>

<script>
export default {
    props: ['course']
}
</script>

<style>

</style>