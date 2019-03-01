<template>
    <div class="profil">
        <h2>Accounts</h2>
        <hr>
        <div>

        <div class="cardCont">
            <div class="card" v-for="(user, n) in users" :key="n">
                <div class="card-body" style="border-bottom: 1px solid #ececec">
                    <h4 class="card-title"> {{ user.name }}, {{user.lastName}} </h4>
                    <p class="card-text">{{ user.email }} <br> {{ user.city.name }} <br> {{user.phoneNumber}} </p>
                </div>
                <div class="card-body" style="border-bottom: 1px solid #ececec">
                    <p class="card-text">Entities :</p> <p class="card-text">{{ user.entityCap.name }} </p>
                </div>
                <div class="card-body">
                    <p class="card-text"> Active : <strong> {{ user.active }} {{user.id}}</strong></p> <br>
                    <button class="btn btn-danger btn-lg rounded" name="confirm" @click="$router.push('/confirm/' + user.id)" >Set Inactive</button>
                </div>
            </div>
        </div>

        </div>
    </div>
</template>
<script>
import axios from 'axios';
    export default {
        name: 'GestionDesComptes',
        data() {
            return {
                users: [],
                user: [],
            }
        },
        methods: {

            onLoad() {
                console.log("En attente de get...")
                //Pour les test 'http://httpbin.org/post'
                axios.get('http://192.168.0.40:8181/api/users')
                    .then((response) => {
                        this.users = response.data;
                        console.log("gg", response);
                    })
                    .catch((error) => {
                        // handle error
                        console.log("nul", error);
                    })
            },
        },
        mounted() {
            this.onLoad();
        }

    }

</script>
<style>

    .profil {
        flex: 10;
        top: 5%;
        position: relative;
    }
    .cardCont {
        height: 100%;
        margin: auto;
        display: flex;
        justify-content: space-evenly;
        width: 80%;
        flex-wrap: wrap;
    }

    .card {
        width: 30%;
    //max-width: 35%;
    }

</style>