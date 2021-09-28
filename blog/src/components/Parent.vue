<template>
    <div>
        <h1>Parent Component</h1>
        <Child1/>
        <Child2/>
    </div>
</template>

<script>
import Child1 from './Child1.vue'
import Child2 from './Child2.vue'

export default{
    name:'Parent',
    components:{
        Child1,
        Child2
    }
}
</script>

<style scoped>
    div{
        background-color: #91bde4;
        height: 500px;
    }
</style>
