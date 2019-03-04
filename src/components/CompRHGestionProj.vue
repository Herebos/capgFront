<template>
    <div class="gestProj">
        <h2 class="editprofil">Events</h2>
        <hr>
        <div>

        <div class="cardCont">
            <div class="card" v-for="(event, n) in events" :key="n">
                <div class="card-body" style="border-bottom: 1px solid #ececec">
                    <h4 class="card-title"> {{ event.name }} </h4>
                    <p class="card-text">{{ event.description }} <br> {{ event.city.name }}</p>
                </div>
                <div class="card-body" style="border-bottom: 1px solid #ececec">
                    <p class="card-text">Nombres de places et Entitées :</p> <p class="card-text"> {{ event.placeNumber }} | {{ event.entityCap.name }} </p>
                    <p class="card-text">Début : {{ event.startDate | moment("MMMM Do YYYY") }} <br> Fin : {{ event.endDate | moment("MMMM Do YYYY") }} </p>
                </div>
                <div class="card-body" v-if="event.project != null">

                    <p class="card-text"> Projet lié à l'événement : <strong> {{ event.project.name }} </strong><br>
                        {{ event.project.description }}</p>
                </div>

            </div>
        </div>

        </div>
    </div>
</template>


<script>
    import axios from "axios";
    export default {
        name: 'gestionProj',
        data() {
            return {
                events: [],
            }
        },
//        computed: {
//            eventsProps() {
//                return this.events[0] ? Object.keys(this.events[0]) : [];
//            }
//        },
        methods: {

            onLoad() {
                console.log("En attente de get...")
                //Pour les test 'http://httpbin.org/post'
                axios.get('http://192.168.0.40:8181/api/events') //TODO change http
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
        mounted() {
            this.onLoad()
        }
    }

</script>


<style lang="scss" scoped>
    .gestProj {
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

    .leclik {
        cursor: pointer;
    }

</style>
