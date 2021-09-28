<template>
  <div class="JobsDetails">
      <div v-if="jobs">
          <h1>Job Details Page </h1>
      <p>The Job Id is {{ jobs.id }}</p>
      <p> {{ jobs.title }} </p>
      </div>
      <div v-else>
        <p>Loading Data</p>
      </div>
  </div>
</template>

<script>
export default {
    props : ['id'],
    data(){
        return{
            jobs : null
        }
    },
    mounted(){
        fetch('http://localhost:3000/jobs/' + this.id)
        .then(res => res.json())
        .then(data => this.jobs = data)
        .catch(e => console.log(e))
    }
}
</script>

