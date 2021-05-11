const app = new Vue({
    el: "#app",
    data: {
        mailList: [],
    },
    methods: {
        generateEmail() {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) => {
                this.mailList.push(resp.data.response);
            });
        },
        generateEmailList(num) {
            this.mailList = [];
            for (let i = 0; i < num; i++) {
                this.generateEmail();
            }
        }
    }
})
