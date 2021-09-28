
<template>


    <div>
        <h1>Data Binding</h1>
        <h1 style="white-space:pre-line"> {{ message }} </h1>
        <textarea type="text" v-model="message">
        </textarea>
    </div>


</template>

<script>


export default {
    name : 'DataBind',
    data(){
        return{
            message : 'Hi'
        }
    }
    
}
</script>


<style scoped>
    
</style>