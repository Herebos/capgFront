<template>
    <div class="hello">


        <div class="cardCont">
            <div class="card" v-for="(event, n) in events" :key="n">
                <div class="card-body" style="border-bottom: 1px solid #ececec">
                    <h4 class="card-title"> {{ event.name }}
                        <font-awesome-icon title="Add to favorite" class="leclik" :icon="icon" @click="icon === 'dot-circle' ? icon = 'check-circle' : icon = 'dot-circle'" />
                    </h4>
                    <p class="card-text">{{ event.description }} <br> {{ event.city.name }}</p>
                </div>
                <div class="card-body" style="border-bottom: 1px solid #ececec">
                    <p class="card-text">Number of collaborator & Entities :</p> <p class="card-text"> {{ event.placeNumber }} | {{ event.entityCap.name }} </p>
                    <p class="card-text">Beginning date : {{ event.startDate | moment("MMMM Do YYYY") }} <br> End date : {{ event.endDate | moment("MMMM Do YYYY") }} </p>
                </div>
                <div class="card-body" v-if="event.project != null">
                    
                    <p class="card-text"> Project linked to the Event : <strong> {{ event.project.name }} </strong><br>
                    {{ event.project.description }}</p>
                </div>
            </div>
        </div>

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
            //            http://192.168.0.40:8080/api/events
            // putFav() {
            //     if (this.icon === 'dot-circle') {
            //         this.icon = 'check-circle'
            //     } else {
            //         this.icon = 'dot-circle'
            //     }
            // }
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
