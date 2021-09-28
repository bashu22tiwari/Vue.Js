<template>
    <div class="PostList">
        <div v-for="post in posts" :key="post">
            <SinglePost :post="post" />
        </div>
    </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
import SinglePost from './SinglePost.vue'
import { onUnmounted } from '@vue/runtime-core'
export default {
  components: { SinglePost },
    props: ['posts'],
    setup(props){
        onMounted(() => {
            console.log('Component Mounted')
        })
        onUnmounted(() => {
            console.log('Component Unmounted')
        })
    }
}
</script>

<style>

</style>