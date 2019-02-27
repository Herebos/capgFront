<template>
    <div class="hello">


        <div class="cardCont justify-content-center">
            <div class="card" v-for="(event, n) in events" :key="n">
                <div class="card-body" style="border-bottom: 1px solid #ececec">
                    <h4 class="card-title"> {{ event.name }}
                        <font-awesome-icon title="Add to favorite" class="leclik" :icon="icon" @click="putFav" />
                    </h4>
                    <p class="card-text">{{ event.description }}</p>
                </div>
                <div class="card-body" style="border-bottom: 1px solid #ececec">
                    <p class="card-text">Nombres de places et Entitées :</p> <p class="card-text"> {{ event.placeNumber }} | {{ event.entityCap.name }} </p>
                    <p class="card-text">Début : {{ event.startDate || moment("dddd, MMMM Do YYYY") }} <br> Fin : {{ event.endDate | moment("dddd, MMMM Do YYYY") }} </p>
                </div>
                <div class="card-body" v-if="event.project != null">
                    
                    <p class="card-text"> Projet lié à l'événement : <strong> {{ event.project.name }} </strong><br>
                    {{ event.project.description }}</p>
                </div>

            </div>

        </div>


    </div>
</template>


<script>
    import axios from "axios";
    import moment from "moment";
    export default {
        name: 'displayProj',
        data() {
            return {
                icon: 'dot-circle',
                events: [],
            }
        },
        computed: {
            eventsProps() {
                return this.events[0] ? Object.keys(this.events[0]) : [];
            }
        },
        methods: {

            onLoad() {
                console.log("En attente de get...")
                //Pour les test 'http://httpbin.org/post'
                axios.get('http://10.65.12.107:8181/api/events')
                    .then((response) => {
                        this.events = response.data;
                        console.log("gg", response);
                    })
                    .catch((error) => {
                        // handle error
                        console.log("nul", error);
                    })
            },
            //            http://192.168.0.40:8080/api/events
            putFav() {
                if (this.icon === 'dot-circle') {
                    this.icon = 'check-circle'
                } else {
                    this.icon = 'dot-circle'
                }
            }
        },
        mounted() {
            this.onLoad()
        }
    }

</script>


<style lang="scss" scoped>
    .cardCont {
        height: 100%;
        margin: auto;
        display: flex;
        width: 80%;
    }

    .card {
        max-width: 25%;
    }

    .leclik {
        cursor: pointer;
    }

</style>
