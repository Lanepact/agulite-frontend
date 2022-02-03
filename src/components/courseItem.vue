<template>

        <div v-for="course in courses" :key = "course.id">
            <div class="course-1">
               <single-course :course="course"></single-course>
            </div>
        </div>
        
</template>
<script>

import SingleCourse from '../components/Singlecourse'

export default {
    props: ["courses"],
    components:{
        SingleCourse
    },
    setup(){
    }
}
</script>