
<template>

    <!-- Class and Style Binding -->


    <div>
        <h1 class="styleclass">Class And Style Binding</h1>
        <h1 v-bind:style="{color:'blue'}">Style Binding</h1>

        <h1 v-bind:class="{displayColor:show}">Class Binding with Object</h1>
        <h1 v-bind:class="[aclass]"> Class Binding with Array </h1>
    </div>


</template>

<script>


export default {
    name : 'Class',
    data(){
        return{
            show : true,
            aclass : ['arrayClass1','arrayClass2']
        }
    }
}
</script>

<style scoped>
    .styleclass{
        color: brown;
    }

    .displayColor{
        background-color: blueviolet;
    }
</style>