<template>
    <div class="infos">
        <h2 class="editprofil">My Events</h2>
        <hr>
        <div>
             
            <div class="cardCont">
            <div class="card">
                <div class="card-body" style="border-bottom: 1px solid #ececec">
                    <h4 class="card-title"> {{ events.name }}
                        <font-awesome-icon title="Add to favorite" class="leclik" :icon="icon" @click="putFav" />
                    </h4>
                    <p class="card-text">{{ events.description }} <br> {{ events.city.name }}</p>
                </div>
                <div class="card-body" style="border-bottom: 1px solid #ececec">
                    <p class="card-text">Nombres de places et Entities :</p> <p class="card-text"> {{ events.placeNumber }} | {{ events.entityCap.name }} </p>
                    <p class="card-text">Debut : {{ events.startDate | moment("MMMM Do YYYY") }} <br> Fin : {{ events.endDate | moment("MMMM Do YYYY") }} </p>
                </div>
                <div class="card-body" v-if="events.project != null">
                    
                    <p class="card-text"> Projet lié à l'événement : <strong> {{ events.project.name }} </strong><br>
                    {{ events.project.description }}</p>
                </div>
            </div>
        </div>
           
           
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'profilEvent',
        data() {
            return {
                icon: 'dot-circle',
                events: [],
            }
        },
        methods: {
            onLoad() {
                console.log('En attente de get...')
                axios.get('http://192.168.0.40:8181/api/events/1').then((response) => {
                        this.events = response.data;
                        console.log("gg", response);
                    })
                    .catch((response) => {
                        // this.user= response.data
                        console.log("null", response);
                    });
            },
            
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

    .leclik {
        cursor: pointer;
    }
    

</style>
