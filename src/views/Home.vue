<template>
    <div class="home">
        <img alt="Vue logo" style="width: 850px; padding-top: 20px;" src="https://www.capgemini.com/fr-fr/wp-content/themes/capgemini-komposite/assets/images/logo.svg">
        
        <index />
        
        <h3>What do you want to do ?</h3>



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
