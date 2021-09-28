<template>
<div>
    <!-- Putting Messages -->

    <!-- <h1>Hello from Home Component</h1>
    <h2> {{data}} </h2>
    <h2> {{msg}} </h2> -->



    <!-- To use the click Events -->

    <!-- <h1>Hello from Home Component</h1>
    <button v-on:mouseover="hello('hello function called')">Call Hello Function</button> -->


 
    <!-- To use the conditional rendering -->
    
    <!-- <h1>Hello from Home Component</h1>
    <h2> {{data}} </h2>
    <h2 v-if="show">Conditional Rendering if Block</h2>
    <h2 v-else>Conditional Rendering else Block</h2>
    <button v-on:click="display">Toggle Element</button> -->


    <!-- To use the for loop in Vue -->
    <!-- <h2> {{data}} </h2>
    <h2>For Loops in Vue Js</h2>
    <table border="2px">
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
        </tr>
        <tr v-for="user in users" :key="user.id">
            <td> {{user.id}} </td>
            <td> {{user.name}} </td>
            <td> {{user.email}} </td>
        </tr>
        
    </table> -->

    <h1>Main Home Page</h1>
    <p><router-link to="user/1">Bashu</router-link></p>
    <p><router-link to="user/2">Abhay</router-link></p>
    <p><router-link to="user/3">Rekha</router-link></p>
    <p><router-link to="user/4">Adarsh</router-link></p>

</div>
</template>

<script>

export default {
    name:'Home'
    // props: {
    //     // data : String,
    //     // msg : String
    // },
    // methods : {
    //     // hello(abc){
    //     //     alert(abc);
    //     // },
    //     // display(){
    //     //     this.show = !(this.show)
    //     // }
    // },
    // data(){
    //     // return {show:false}
        
    //     // return {
    //     //     users:[
    //     //         {id:1, name:'bashu', email:'bashuti@gmail.com'},
    //     //         {id:2, name:'bgfv', email:'bashuti@gmail.com'},
    //     //         {id:3, name:'treg', email:'bashuti@gmail.com'},
    //     //         {id:4, name:'rgtg', email:'bashuti@gmail.com'},
    //     //         {id:5, name:'efrg', email:'bashuti@gmail.com'}
    //     //     ]
    //     // }
    // }
}
</script>
