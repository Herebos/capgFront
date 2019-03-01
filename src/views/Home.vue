<template>
    <div class="home">
        <img alt="Vue logo" style="width: 850px; padding-top: 20px;" src="https://www.capgemini.com/fr-fr/wp-content/themes/capgemini-komposite/assets/images/logo.svg">
        
        <index />
        
        <h3>Que voulez-faire ?</h3>

        <!--<div class="nani">-->
            <!--&lt;!&ndash; TODO &ndash;&gt;-->
            <!--<p>rajouter texte de presentation</p>-->
            <!--<router-link to="/inscription">Inscription</router-link>-->
            <!--<a href="#">Login</a>-->
            <!--<router-link to="/about">About</router-link>-->
            <!--<router-link to="/creeprojet">Crée un Projet</router-link>-->
            <!--<router-link to="/vueprojet">Parcourir les projet</router-link>-->
        <!--</div>-->






    </div>
</template>

<script>
    import index from '@/components/CompIndex.vue'

    export default {
        name: 'home',
        components: {
            index
        },
        data() {
            return {
            }
        }
    }

</script>


<style>
    .nani {
        display: flex;
        border-radius: 1em;
        border: 1px solid #ececec;
        width: 30%;
        margin: auto;
        margin-top: 50px;
        padding: 50px;
        flex-wrap: wrap;
    }

    .nani a,
    .nani p {
        padding: 20px;
    }

</style>
