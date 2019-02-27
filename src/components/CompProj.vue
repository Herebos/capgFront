<template>
    <div class="hello">

        <!--
        <div class="cardCont">
            <b-card no-body style="max-width: 50rem; min-width: 20rem;">
                <h4 class="h4Head" slot="header"> {{ event.name }} 
                    <font-awesome-icon title="Add to favorite" class="leclik" :icon="icon" @click="putFav" />
                </h4>
                <b-card-body>
                    <b-card :title="name">
                        <p>
                           {{ event.id }} <br>
                            {{ event.description }}
                        </p>
                    </b-card>
                </b-card-body>
                <b-list-group flush>
                    <b-list-group-item>Nombres de places et Entitées : <br> {{ event.placeNumber }} | {{ event.entityCap }} </b-list-group-item>
                    <b-list-group-item>Début : {{ event.startDate }} | Fin : {{ event.endDate }} </b-list-group-item>
                </b-list-group>
                <b-card-body>
                    Lien vers l'event :
                    <a href="#" class="card-link">Card link</a>
                </b-card-body>
            </b-card>
        </div>
-->


        <table id="events" class="table table-bordered table-hover">
            <thead class="thead-light">
                <tr>
                    <th v-for="(prop, p) in eventsProps" :key="p" > {{prop}} </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(event, n) in events" :key="n" >
                    <td v-for="(prop, p) in event" :key="p"> {{ prop }} </td>
                </tr>
            </tbody>
        </table>
   
   
    </div>
</template>


<script>
    import axios from "axios";
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
    #events {
        border-collapse: collapse;

        td,
        th {
            border: 1px solid;
            padding: 10px;
        }
    }

    .leclik {
        cursor: pointer;
    }

</style>
