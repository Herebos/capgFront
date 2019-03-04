<template>
    <div class="infos">
        <h2>Confirmation</h2>
        <hr>
        <div>
            <h3>Do you want to set <strong>{{users.id}}{{users.name}} {{users.lastName}}</strong> inactive ?</h3>
            <button class="btn btn-danger btn-lg rounded" name="confirm" @click="edit" >Yes</button>
            <button class="btn btn-success btn-lg rounded" name="confirm" @click="back" >No</button>



        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'confirm',
        data() {
            return {
                users: [],
            }
        },
        methods: {
            onLoad() {
                console.log('En attente de get...');
                axios.get('/api/users/', { //TODO change http
                    params: {
                        'id': this.id
                            }
                        }
                    )
                    .then((response) => {
                    this.users = response.data;
                    console.log("gg", response);
                })
                    .catch((response) => {
                        // this.user= response.data
                        console.log("null", response);
                    });
            },
            edit() {

            },
            back() {
                this.$router.push("/profilRh/gestionDesComptes");
            }
        },
        mounted() {
            this.onLoad();
        }
    }

</script>


<style>
    .infos {
        flex: 10;
        top: 5%;
        position: relative;
    }

    hr {
        height: 1px;
        background: #005380;
    }


</style>
