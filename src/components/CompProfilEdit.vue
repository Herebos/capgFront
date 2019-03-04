<template>
    <div class="infos">
        <h2 class="editprofil">Edit my profil</h2>
        <hr>
        <div class="text-left" style="margin: auto; width: 70%;">
            <div class="form-group">
                <span>Name: {{user.name}}</span> <br>
                <input type="text" v-model="user.name" v-if="isEditing" @keyup.enter="$emit('update')">
            </div>

            <div class="form-group">
                <span>Surname: {{user.lastName}}</span> <br>
                <input type="text" v-model="user.lastName" v-if="isEditing" @keyup.enter="$emit('update')">
            </div>

            <div class="form-group">
                <span>Entity: {{user.entityCap.name}}</span> <br>
                <!--<input type="text" v-model="user.entityCap.name" v-if="isEditing" @keyup.enter="$emit('update')">-->
                <select class="form-control" v-model="user.entityCap.name" id="entityCap" name="entityCap" v-if="isEditing" @keyup.enter="$emit('update')">
                    <option value="">Please select an option</option>
                    <option v-for="entity in entityCap" :key="entity.id">{{entity.name}}</option>
                </select>
            </div>

            <div class="form-group">
                <span>Email: {{user.email}}</span> <br>
                <input type="email" v-model="user.email" v-if="isEditing" @keyup.enter="$emit('update')">
            </div>

            <div class="form-group">
                <span>Phone number: {{user.phoneNumber}}</span> <br>
                <input type="tel" v-model="user.phoneNumber" v-if="isEditing" @keyup.enter="$emit('update')">
            </div>

            <div class="form-group">
                <span>City: {{user.city.name}}</span> <br>
                <!-- <input type="text" v-model="user.city.name" v-if="isEditing" @keyup.enter="$emit('update')"> -->
                <select class="form-control" v-model="user.city.name" id="entityCap" name="city" v-if="isEditing" @keyup.enter="$emit('update')">
                    <option value="">Please select an option</option>
                    <option v-for="city in cities" :key="city.id">{{city.name}}</option>
                </select>
            </div>


            <button @click="edit()" class="btn btn-primary btn-lg rounded">Submit</button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'editInfo',
        data() {
            return {
                entityCap:[],
                user: [],
                cities:[]
            }
        },
        methods: {
            onLoad() {
                console.log('ici');
                axios.get('/api/users/current').then((response) => { //TODO change http
                        this.user = response.data;
                        console.log("gg", this.user);
                    })
                    .catch((response) => {
                        // this.user= response.data
                        console.log("null", response);
                    });
                     axios.get('/api/entities').then((response) => { //TODO change http
                        this.entityCap = response.data;
                        console.log("Entities", this.entityCap);
                    })
                    .catch((response) => {
                        this.entityCap= response.data
                    });
                    axios.get('/api/cities').then((response) => { //TODO change http
                        this.cities = response.data;
                        console.log("gg", this.cities);
                    })
                    .catch((response) => {
                        this.cities= response.data
                    });
            },
            edit() {
                //e.preventDefault();
                console.log('en attente...');
                axios.put('/api/users/', this.user).then((response) => { //TODO change http
                        console.log("gg2", response);
                    })
                    .catch((response) => {
                        this.user = response.data
                        console.log("nul", response);
                    });
            },
        },
        mounted() {
            this.onLoad();
            this.isEditing = true;
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
