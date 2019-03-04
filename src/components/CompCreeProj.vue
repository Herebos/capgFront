<template>
    <div class="container">

        <form @submit="onSubmit" style="text-align: left;" id="formEvent">

            <div class="type">
                <select id="typeInput" v-model="type" class="form-control" name="type">
                    <option :value="type">Please select an option</option>
                    <option value="project">Project</option>
                    <option value="event">Event</option>
                </select>
                <div>Selected: <strong>{{ type }}</strong></div>
            </div>


            <div v-if="type != ''" class="formProject">
                <div class="form-group" v-if="type === 'project'">
                    <label for="name">Project name: <span class="requis">*</span></label>
                    <input id="name" class="form-control" type="text" v-model="form.name" required placeholder="Enter Project name" maxlength="50">
                </div>

                <div class="form-group" v-if="type === 'event'">
                    <label for="name">Event name: <span class="requis">*</span></label>
                    <input id="name" class="form-control" type="text" v-model="form.name" required placeholder="Enter Project name">
                </div>


                <div class="form-group">
                    <label for="description">Description: <span class="requis">*</span></label>
                    <textarea class="form-control" form="formEvent" name="description" v-model="form.description" placeholder="Describe what you'll do, what this is all about dunno just write" required id="description" rows="4" maxlength="800"></textarea>
                </div>


                <div class="form-group mb-3">
                    <label for="city">City : <span class="requis">*</span></label>
                    <select class="form-control" v-model="form.city.name" id="city" name="city" required>
                        <option value="">Please select an option</option>
                        <option v-for="city in cities" :key="city.id">{{city.name}}</option>
                    </select>
                </div>

                <div class="form-group">
                    <div class="form-row">
                        <div class="col-7">
                            <label for="placeNumber">Number of collaborator: <span class="requis">*</span></label>
                            <input id="placeNumber" type="number" class="form-control" v-model="form.placeNumber" placeholder="nbr" required>
                        </div>
                        <div class="col">
                            <label for="division">Entity:</label>
                            <select class="form-control" v-model="form.entityCap.name" id="entityCap" name="entityCap">
                                <option value="">Please select an option</option>
                                <option v-for="entity in entityCap" :key="entity.id">{{entity.name}}</option>
                            </select>
                        </div>
                    </div>
                </div>


                <!--Metrre en anglais si pb db-->
                <div class="form-group">
                    <label for="startDate">Beginning date:</label>
                    <input id="startDate" class="form-control" type="date" v-model="form.startDate">
                </div>
                <div class="form-group">
                    <label for="endDate">End date:</label>
                    <input id="endDate" class="form-control" type="date" v-model="form.endDate">
                </div>



                <!--
                <b-form-group id="exampleGroup4">
                    <b-form-checkbox-group v-model="form.checked" id="exampleChecks">
                        <b-form-checkbox value="CGU" required>J'accepte les <a href="#">C.G.U</a></b-form-checkbox>
                    </b-form-checkbox-group>
                </b-form-group>
-->
                <div class="bouton">
                    <button class="btn btn-primary btn-lg rounded" name="submit" value="Submit" type="submit">Submit</button>
                </div>

            </div>
        </form>
        <p> <br> <br> <br>
            ICI {{ form }}
        </p>


    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        name: 'creeProj',
        data() {
            return {
                type: '', //
                cities: [], // outside of <form> for v-if=""
                entityCap: [], //
                form: {
                    name: '',
                    description: '',
                    city: {
                        name: '',
                    },
                    placeNumber: '',
                    entityCap: {
                        name: '',
                    },
                    startDate: '',
                    endDate: '',
                },
            }
        },
        methods: {
            onLoad() {
                axios.get('/api/cities').then((response) => { //TODO change http
                        this.cities = response.data;
                        console.log("cities", this.cities);
                    })
                    .catch((response) => {
                        this.cities= response.data
                    });

                axios.get('/api/entities').then((response) => { //TODO change http
                        this.entityCap = response.data;
                        console.log("Entities", this.entityCap);
                    })
                    .catch((response) => {
                        this.entityCap= response.data
                    });
            },
            onSubmit(e) {
                e.preventDefault();
                console.log("En attente de post...")
                axios.post('/api/events', this.form).then((response) => { //TODO change http
                        console.log('Bien ouej =>', response);
                        this.$router.push("/vueprojet");
                    })
                    .catch((response) => {
                        this.form = response.data
                        console.log('perdu =>', response);
                    });
            },
        },
         mounted() {
            this.onLoad();
        },
    }

</script>


<style scoped>
    
    .formProject,
    .type {
        width: 70%;
        margin: auto;
    }

    .requis {
        color: red;
    }

    form {
        text-align: left;
    }

    .bouton {
        text-align: center;
    }

    .type {
        border-bottom: 1px solid #ececec;
        padding-bottom: 20px;
    }

</style>