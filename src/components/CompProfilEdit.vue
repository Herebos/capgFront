<template>
    <div class="infos">
        <h2 class="editprofil">Éditer mon profil</h2>
        <hr>
        <div class="text-left" style="margin: auto; width: 70%;">
            <div class="form-group">
                <span>Entity: {{user.entityCap.name}}</span> <br>
                <input type="text" v-model="user.entityCap.name" v-if="isEditing" @keyup.enter="$emit('update')">
            </div>
            <div class="form-group">
                <span>Name: {{user.name}}</span> <br>
                <input type="text" v-model="user.name" v-if="isEditing" @keyup.enter="$emit('update')">
            </div>

            <div class="form-group">
                <span>Surname: {{user.lastName}}</span> <br>
                <input type="text" v-model="user.lastName" v-if="isEditing" @keyup.enter="$emit('update')">
            </div>

            <div class="form-group">
                <span>Email: {{user.email}}</span> <br>
                <input type="email" v-model="user.email" v-if="isEditing" @keyup.enter="$emit('update')">
            </div>

            <div class="form-group">
                <span>Phone: {{user.phoneNumber}}</span> <br>
                <input type="tel" v-model="user.phoneNumber" v-if="isEditing" @keyup.enter="$emit('update')">
            </div>

            <div class="form-group">
                <span>City: {{user.city.name}}</span> <br>
                <input type="text" v-model="user.city.name" v-if="isEditing" @keyup.enter="$emit('update')">
            </div>


            <button @click="edit()" class="btn btn-primary btn-lg rounded">Valider</button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'editInfo',
        data() {
            return {
                user: [],
            }
        },
        methods: {
            onLoad() {
                console.log('ici')
                axios.get('/api/users/current').then((response) => {
                        this.user = response.data;
                        console.log("gg", this.user);
                    })
                    .catch((response) => {
                        // this.user= response.data
                        console.log("null", response);
                    });
            },
            edit() {
                //e.preventDefault();
                console.log('en attente...')
                axios.put('/api/users/', this.user).then((response) => {
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

    /*
    span {
        padding: 10px;
        font-weight: bold;
        font-size: 20px;
        padding: 15px;
        display: flex;
        position: relative;
        left: 10%;
    }
*/

    hr {
        height: 1px;
        background: #005380;
    }

</style>
