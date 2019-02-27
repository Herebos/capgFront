<template>
    <div class="hello">
        <h1>Bienvenue sur Cap-Engagment {{ user.name }} !</h1>

    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'Index',
        props: {
            msg: String
        },
        data() {
            return {
                user: [],
            }
        },
        methods: {
            onLoad() {
                console.log("En attente de get...")
                //Pour les test 'http://httpbin.org/post'
                axios.get('localhost:8181/api/users/1')
                    .then((response) => {
                        this.events = response.data;
                        console.log("gg", response);
                    })
                    .catch((error) => {
                        // handle error
                        console.log("nul", error);
                    })
            },
        },
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
