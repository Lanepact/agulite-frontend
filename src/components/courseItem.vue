<template>
        <div class="course-1">
            <span class="course-title">{{ course.title }}</span>
                <div class="course-level">
                    <span class="percent">{{ course.progress }}%</span>
                    <button>Continue</button>
                </div>
         </div>
        
</template>
<script>
export default {
    props: ["course"],

    setup(){
    }
}
</script>