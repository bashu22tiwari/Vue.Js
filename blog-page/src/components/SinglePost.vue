<template>
    <div class="single-post">
        <h2> {{ post.title }} </h2>
        <p> {{ snippet }} </p>
    </div>
</template>

<script>
import { computed } from 'vue'
export default {
    props: ['post'],
    setup(props){
        const snippet = computed(() => {
            return props.post.body.substring(0,100) + '...'
        })

        return { snippet }
    }
}
</script>

<style>

</style>