const app = Vue.createApp({
    data(){
        return{
            message : "Second Example"
        };

    },
    methods: {
       reversemsg() {
      this.message = this.message.split('').reverse().join('');
    }
    }
}).mount('#app');
