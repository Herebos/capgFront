<template>
    <div>

        <form @submit="onSubmit">

            <div class="role form-group">
                <select class="form-control" id="statusInput" v-model="form.status" name="status">
                    <option :value="status">Please select an option</option>
                    <option value="salarie">Collaborator</option>
                    <option value="association">Association</option>
                    <option value="rh">HR Team</option>
                </select>
                <div>Selected: <strong>{{ form.status }}</strong></div>
            </div>

            <div v-if="form.status != ''" class="formInscri">
                <div class="form-group">
                    <label for="email">Email : <span class="requis">*</span></label>
                    <input id="email" class="form-control" type="email" v-model="form.email" required
                           placeholder="Enter email">
                </div>

                <div class="form-group" v-if="form.status === 'salarie'">
                    <label for="name">Name : <span class="requis">*</span></label>
                    <input id="name" class="form-control" type="text" v-model="form.name" required
                           placeholder="Enter name">
                </div>

                <div class="form-group" v-if="form.status === 'association'">
                    <label for="name">Association Name : <span class="requis">*</span></label>
                    <input id="name" class="form-control" type="text" v-model="form.name" required
                           placeholder="Enter name">
                </div>

                <div class="form-group" v-if="form.status === 'rh'">
                    <label for="name">HR Team name : <span class="requis">*</span></label>
                    <input id="name" class="form-control" type="text" v-model="form.name" required
                           placeholder="Enter name">
                </div>

                <div class="form-group" v-if="form.status === 'salarie'">
                    <label for="lastName">Surname : <span class="requis">*</span></label>
                    <input id="lastName" class="form-control" type="text" v-model="form.lastName" required
                           placeholder="Enter lastname">
                </div>


                <div class="form-group">
                    <label for="password">Password : <span class="requis">*</span></label>
                    <div class="input-group mb-3">
                        <input id="password" class="form-control" :type="type" v-model="form.password" required
                               placeholder="Enter password" pattern=".{8,}" aria-describedby="passwordHelp">
                        <div class="input-group-append"><a class="eye"
                                                           @click="type === 'text' ? type = 'password' : type = 'text'">
                            <!--Ternary function-->
                            <font-awesome-icon :icon="type === 'text' ? 'eye' : 'eye-slash'"/>
                        </a></div> <!--Ternary function-->
                    </div>
                    <small id="passwordHelp" class="form-text text-muted">Eight (8) characters minimum</small>
                </div>

                <div class="form-group">
                    <label for="checkPassword">Confirm Password : <span class="requis">*</span></label>
                    <div class="input-group mb-3">
                        <input id="checkPassword" class="form-control" :type="type" v-model="form.checkPassword"
                               required placeholder="Enter password" pattern=".{8,}" aria-describedby="passwordHelp">
                        <div class="input-group-append"><a class="eye"
                                                           @click="type === 'text' ? type = 'password' : type = 'text'">
                            <font-awesome-icon :icon="type === 'text' ? 'eye' : 'eye-slash'"/>
                        </a></div>
                    </div>
                    <small id="passwordHelp" class="form-text text-muted">Confirm Password</small>
                    <div v-if="form.password != form.checkPassword">
                        <div class="alert alert-danger text-center" role="alert">
                            Password does not match !
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <label for="phoneNumber">Phone Number : <span class="requis">*</span></label>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">+33</span>
                        </div>
                        <input id="phoneNumber" class="form-control" type="tel" v-model="form.phoneNumber" required
                               placeholder="Enter your phone number" pattern="[0-9]{9}" aria-describedby="phoneHelp">
                    </div>
                    <small id="phoneHelp" class="form-text text-muted">ex: 123456789</small>
                </div>


                <div class="form-group mb-3">
                    <label for="city">City : <span class="requis">*</span></label>
                    <select class="form-control" v-model="form.city" id="city" name="city">
                        <option value="">Please select an option</option>
                        <option v-for="city in cities" :key="city.id">{{city.name}}</option>
                    </select>
                </div>

                <div v-if="form.status === 'association'">
                    <div v-if="form.city != null" class="bouton">
                        <button class="btn btn-primary btn-lg rounded" name="submit" value="Submit" type="submit">
                            Submit
                        </button>
                    </div>
                </div>


                <div v-if="form.status != 'association'">
                    <div class="form-group">
                        <label for="entityCap">Entity : <span class="requis">*</span></label>
                        <select class="form-control" v-model="form.entityCap" id="entityCap" name="entityCap">
                            <option value="">Please select an option</option>
                            <option v-for="entity in entityCap" :key="entity.id">{{entity.name}}</option>
                        </select>
                    </div>


                    <div v-if="form.entityCap != null" class="bouton">
                        <button class="btn btn-primary btn-lg rounded" name="submit" value="Submit" type="submit">
                            Submit
                        </button>
                    </div>
                </div>

                <!-- Check CGU Plus Tard
                <b-form-group id="checked">
                    <b-form-checkbox-group v-model="form.checked" id="exampleChecks">
                        <b-form-checkbox value="CGU" required>J'accepte les <a href="#">C.G.U</a></b-form-checkbox>
                    </b-form-checkbox-group>
                </b-form-group>
-->

            </div>
        </form>
        <p><br> <br> <br>
            ICI {{ form }}
        </p>


    </div>
</template>


<script>
    import axios from 'axios'

    export default {
        name: 'inscription',

        data() {
            return {
                icon: 'eye',
                type: 'password',
                btnText: 'Show Password',
                status: '', //
                entityCap: [], //Bind à l'extérieur pour le v-if
                cities: [], //
                form: {
                    email: '',
                    name: '',
                    lastName: null,
                    password: '',
                    checkPassword: '',
                    phoneNumber: '',
                    city: '',
                    entityCap: '',
                    status: '',
                    //checked: [],
                },

            }
        },
        methods: {
            onLoad() {
                axios.get('/api/cities').then((response) => { //TODO change http
                        this.cities = response.data;
                        console.log("gg", this.cities);
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
                console.log(this.form);
                console.log("En attente de post...");
                //                'http://httpbin.org/post'
                axios.post('/api/users', this.form).then((response) => { //TODO change http
                        console.log('Bien ouej =>', response);
                        this.$router.push("/");
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
    .role {
        border-bottom: 1px solid #ececec;
        padding-bottom: 20px;
    }

    form {
        text-align: left;
    }

    .bouton {
        text-align: center;
    }

    .requis {
        color: red;
    }

    .formInscri,
    .role {
        width: 30%;
        margin: auto;
    }

    .eye {
        padding-top: 7px;
        padding-left: 4px;
        padding-right: 4px;
        border: 0.1em solid #CED4DA;
    }

</style>
