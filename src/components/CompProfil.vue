<template>
    <div id="blockcontainer">
        <div class="dashboard">
            <font-awesome-icon icon="user-circle" class="profiicon" />
            <ul>
                <li>
                    <font-awesome-icon icon="calendar-alt" />
                    <a href="">Mes Évènements</a>
                </li>
                <li>
                    <font-awesome-icon icon="cog" /><a href="">Mes Paramètres</a></li>
            </ul>
        </div>
        <div class="infos">
            <h2 class="editprofil">Éditer mon profil</h2>
            <hr>
            <div>
                <span>Entity:</span>
                <span>{{this.user.entityCap.name}}</span>
                <span>Nom:</span>
                <span>{{this.user.name}}</span>
                <span>Email:</span>
                <span>{{this.user.email}}</span>
                <span>Prénom:</span>
                <span>{{this.user.lastName}}</span>
                <span>Télephone:</span>
                <span>{{this.user.phoneNumber}}</span>
                <span>Ville:</span>
                <span>{{this.user.city.name}}</span>
                <input v-show="editvalue ==false" v-model="this.user" @keyup.enter="editvalue=false; $emit('update')">
                <button @click="editvalue= true" class="edit">Éditer</button>
            </div>
        </div>

   
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        name: 'profil',
        data() {
            return {

                user: [],
            }
        },
        methods: {
            onLoad() {
                console.log('ici')
                axios.get('http://localhost:8181/api/users/1').then((response) => {
                        this.user = response.data;
                        console.log("gg", this.user);
                    })
                    .catch((response) => {
                        // this.user= response.data
                        console.log("null", response);
                    });
            },
            edit(e) {
                e.preventDefault();
                console.log('en attente...')
                axios.post('http://localhost:8181/api/users/1', this.user).then((response) => {
                        console.log("gg", response);
                    })
                    .catch((response) => {
                        this.user = response.data
                        console.log("null", response);
                    });
            },
        },
        mounted() {
            this.onLoad();
        },
        editvalue: function() {
            console.log("it is working")

        }
    }

</script>
<style scoped>

    #blockcontainer {
        display: flex;
        overflow: hidden;
        height: 100%;
    }

    .dashboard {
        background-image: linear-gradient(to bottom, #00A6FF, #006DA8, #D0DFE6, #005380);
        /* linear-gradient(#00A6FF, transparent),
        linear-gradient(to top left, #FFFFFF, transparent),
        linear-gradient(to top right, #214879, transparent);
    background-blend-mode: darken;  */
        flex: 2;
    }

    .passreset {
        background-image: linear-gradient(to bottom, #00A6FF, #006DA8, #D0DFE6, #005380);
        flex: 2;
    }

    .infos {
        flex: 10;
        top: 5%;
        position: relative;
    }

    ul,
    a {
        color: antiquewhite;
        text-decoration: none;
    }

    li:hover {
        background-color: skyblue;
    }

    ul>li {
        list-style: none;
        font-size: 25px;
        padding: 10%;
        text-align: center;
    }

    .profiicon {
        font-size: 10vw;
        color: #FFFFFF;
    }

    hr {
        height: 5px;
        /* background: honeydew; */
        background: #005380;
    }

    span {
        padding: 10px;
        font-weight: bold;
        font-size: 20px;
        padding: 15px;
        display: flex;
        position: relative;
        left: 10%;
    }

    .edit {
        position: relative;
        border: solid 0.5px #e6e6e6;
        background: #47a8dc;
        width: 150px;
        height: 40px;
        font-size: 25px;
        box-shadow: 3px 3px 6px 0px #47A8DC;
        color: white;
    }

</style>