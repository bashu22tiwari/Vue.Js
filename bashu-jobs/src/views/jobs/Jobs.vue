<template>
    <div class="jobs">
        <h1>This is the Job Page</h1>
        <div v-for="job in jobs" :key="job.id" class="jobList">
            <router-link :to="{ name:'JobsDetail', params:{id : job.id} }">
             <h2>{{ job.title }}</h2>
             </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            jobs : []
        }
    },
    mounted(){
        fetch('http://localhost:3000/jobs')
        .then(res => res.json())
        .then(data => this.jobs = data)
        .catch(e => console.log(e))
    }
}
</script>

<style>
    .jobList h2{
        padding:10px;
        background: 20px;
        border-radius: 10px;
        background:#f4f4f4;
        max-width: 400px;
    cursor: pointer;
    color: #444;
    margin: 15px auto;
    }

    .jobList h2:hover{
        background: #ddd;
    }

    .jobList a{
        text-decoration: none;
    }
</style>