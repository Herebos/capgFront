<template>
    <div class="creeProjet">

        <h1>Créer un Projet !</h1>



        <form @submit="onSubmit" style="text-align: left;" id="formEvent">

            <div class="type">
                <select id="typeInput" v-model="type" class="form-control" name="type">
                    <option :value="type">Please select an option</option>
                    <option value="project">Projet</option>
                    <option value="event">Événement</option>
                </select>
                <div>Selected: <strong>{{ type }}</strong></div>
            </div>


            <div v-if="type != null" class="formProject">
                <div class="form-group" v-if="type == 'project'">
                    <label for="name">Nom du Projet: <span class="requis">*</span></label>
                    <input class="form-control" type="text" v-model="form.name" required placeholder="Enter Project name" maxlength="50">
                </div>

                <div class="form-group" v-if="type == 'event'">
                    <label for="name">Nom de l'événement: <span class="requis">*</span></label>
                    <input class="form-control" type="text" v-model="form.name" required placeholder="Enter Project name">
                </div>


                <div class="form-group">
                    <label for="description">Description: <span class="requis">*</span></label>
                    <textarea class="form-control" form="formEvent" name="description" v-model="form.description" placeholder="Describe what you'll do, what this is all about dunno just write" required id="description" rows="4" maxlength="800"></textarea>
                </div>


                <div class="form-group mb-3">
                    <label for="city">City : <span class="requis">*</span></label>
                    <select class="form-control" v-model="form.city.name" id="city" name="city" required>
                        <option :value="city">Please select an option</option>
                        <option value="Puteaux">Puteaux</option>
                        <option value="Sarcelles">Sarcelles</option>
                        <option value="Puteaux">Lille</option>
                    </select>
                </div>

                <div class="form-group">
                    <div class="form-row">
                        <div class="col-7">
                            <label for="placeNumber">Nombre de personnes: <span class="requis">*</span></label>
                            <input type="number" class="form-control" v-model="form.placeNumber" placeholder="nbr" required>
                        </div>
                        <div class="col">
                            <label for="division">Entité:</label>
                            <select class="form-control" v-model="form.entityCap.name" id="entityCap" name="entityCap">
                                <option :value="entityCap">Please select an option</option>
                                <option value="FS">FS</option>
                                <option value="Apps">Apps</option>
                                <option value="Sogeti ATS">Sogeti ATS</option>
                                <option value="Sogeti HiTech">Sogeti Hi-Tech</option>
                            </select>
                        </div>
                    </div>
                </div>


                <!--Metrre en anglais si pb db-->
                <div class="form-group">
                    <label for="startDate">Date de début:</label>
                    <input class="form-control" type="date" v-model="form.startDate">
                </div>
                <div class="form-group">
                    <label for="endDate">Date de fin:</label>
                    <input class="form-control" type="date" v-model="form.endDate">
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
        data() {
            return {
                type: '',         //
                city: '',         // exterior of form for v-if
                entityCap: '',    //
                form: {
                    //type: null,
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
                    //checked: [],
                },
            }
        },
        methods: {
            onSubmit(e) {
                e.preventDefault();
                console.log("En attente de post...")
                axios.post('http://10.65.12.107:8181/api/events', this.form).then((response) => {
                        console.log('Bien ouej =>', response);
                        //this.$router.push("/vueprojet");
                    })
                    .catch((response) => {
                        this.form = response.data
                        console.log('perdu =>', response);
                    });
            },
        }
    }

</script>


<style scoped>
    
    .formProject,
    .type {
        width: 30%;
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
