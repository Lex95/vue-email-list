const app = new Vue({
    el: "#app",
    data: {

    },
    methods: {
        generateEmail() {
            const result;
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then(function(response) {
                result = response.data;
            });
            return result;
        }
    }
})