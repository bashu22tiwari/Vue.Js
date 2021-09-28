<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <label>Email:</label>
            <input v-model="email" type="email" required>

            <label>Password:</label>
            <input type="password" v-model="password">

            <label>Role:</label>
            <select v-model="role">
                <option value="developer">Web Developer</option>
                <option value="designer">Web Designer</option>
            </select>

            <label>Skills:</label>
            <input type="text" v-model="tempSkill" required @keyup="addSkill">

            <div v-for="skill in skills" :key="skill">
                {{ skill }}
            </div>

            <div class="terms">
                <input v-model="terms" type="checkbox" required>
                <label>Accept Terms And Condition</label>
            </div>

            <div class="submit">
                <button>Create An Account</button>
            </div>            
            
        </form>

    </div>

</template>


<script>
export default {
    name : 'Form',
    data() {
        return {
            email : '',
            password: '',
            role: 'developer',
            terms: false,
            names : [],
            tempSkill : '',
            skills : []
        }
    },
    methods: {
        addSkill(e){
            if(e.key==',' && this.tempSkill){
                if(!this.skills.includes(this.tempSkill)){
                    this.skills.push(this.tempSkill);
                }
                this.tempSkill = '';
            }
        },
        handleSubmit(){
            console.log('form submitted');
        }
    }
    
}
</script>


<style>
    form {
        width: 520px;
        margin: 30px auto;
        background: white;
        text-align: left;
        padding: 40px;
        border-radius: 10px;
    }

    label{
        color: rgb(146, 144, 144);
        display: inline-block;
        margin: 25px 0px 15px;
        font-size: 0.8em;
        letter-spacing: 1px;
        font-weight: bold;
    }

    input,select{
        display: block;
        padding: 10px 6px;
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid #ddd;
        color: #555;
    }

    input[ type="checkbox" ] {
        display: inline-block;
        width: 16px;
        margin: 0 10px 0 0;
        position: relative;
        top: 2px;
    }

    button{
        background: #0b6dff;
        border: 0;
        padding: 10px 20px;
        margin-top: 20px;
        color: white;
        border-radius: 20px;
    }

    .submit{
        text-align: center;
    }

</style>