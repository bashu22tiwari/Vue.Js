<template>
  <div class="home">

    <h1>Home</h1>
    <!-- <p ref="p"> {{ name }} and {{ age }} </p>
    <button @click="handleClick">Click</button>
    <input type="text" v-model="name"> -->
    <PostList v-if="showPost" :posts="posts" />
    <button @click="showPost = !showPost">Toggle Post</button>
    <p v-if="error"> {{ error }} </p>

  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import PostList from '../components/PostList.vue';
// @ is an alias to /src


export default {
  components: { PostList },
  name: 'Home',
  setup(){
    const posts = ref([])
    const error = ref(null)

    const load = async () => {
      try{
        let data = await fetch('http://localhost:3000/posts')
        if(!data.ok){ 
          throw Error('No Data Available')
        }
        let res = await data.json()
        posts.value = res;
      }
      catch(err){
        error.value = err
      }
    }

    load();

    const showPost = ref(true)

    return { posts , showPost , error}
  }


//  setup(){
//   console.log('Setup hook');

    
//   let name = ref('Bashu')
//   let age=ref(30)

//   const handleClick = () => {
//      name.value = 'Adarsh'
//      age.value = '44'
//      console.log('Changed')
//   } 

//   return {name,age,handleClick}
//  }
}
</script>
