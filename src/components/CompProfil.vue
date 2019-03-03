<template>
    <div id="blockcontainer">

        <div class="dashboard">
            <router-link :to="{name: 'profil'}">
                <font-awesome-icon style="cursor: pointer;" icon="user-circle" class="profilIcon" />
            </router-link>
            <ul>
                <li>
                    <font-awesome-icon class="icon" icon="calendar-alt" />
                    <router-link :to="{name: 'profilEvent'}">My Events</router-link>
                </li>
                <li>
                    <font-awesome-icon class="icon" icon="edit" />
                    <router-link :to="{name: 'editInfo'}">Edit my Info</router-link>
                </li>
                <li>
                    <font-awesome-icon class="icon" icon="cog" /><a href="">Account Parameters</a>
                    
                </li>
            </ul>
        </div>

        <router-view />


    </div>
</template>
<script>
    export default {
        name: 'profil',
        data() {
            return {

            }
        },
        methods: {

        },

    }

</script>
<style scoped>
    .icon {
        margin-right: 10px;
    }
    
    #blockcontainer {
        display: flex;
        margin-top: 15px;

    }

    .dashboard {
        background-image: linear-gradient(to bottom, #00A6FF, #006DA8, #005380);
        flex: 2;
        height: 40em;
        margin-top: 53.5px;
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
        text-align: center;
    }

    li {
        padding: 25px;
    }

    .profilIcon {
        margin-top: 45px;
        margin-bottom: 30px;
        font-size: 10vw;
        color: #FFFFFF;
    }



</style>
