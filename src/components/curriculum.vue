<template>
     <div class="cur-1">
        <div class="cur-details">
            <span class="week">{{curriculum.week}}</span>
            <span class="week-course">{{curriculum.title}}</span>
        </div>
        <div class="lessons">
            <span>{{curriculum.index}} of 12 lessons</span>
        </div>
    </div>

</template>

<script>
export default {
    props:["curriculum"],
    setup(){

    }
}
</script>