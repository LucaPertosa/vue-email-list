const { createApp } = Vue;

createApp({
    data() {
        return {
            emailList: [],
            isLoading: true
        };
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((resp) => {
                if (this.emailList.length < 10) {
                    this.emailList.push(resp.data.response)
                }
                if (i === 9) {
                    this.isLoading = false
                }
            })
        }
    
    },
}).mount("#app");