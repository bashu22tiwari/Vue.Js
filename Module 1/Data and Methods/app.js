var app = new Vue({
    el: '#app',
    data: {
        Name: 'Bashu',
        Job: 'Student'
    },
    methods: {
        greet: function(time){
            return 'Good ' + time + " " +this.Name;
        }
    }
})