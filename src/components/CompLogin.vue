<template>
    <div class="block">
        <div class="container">
            <h1>Welcome please login to your account</h1>
            <form action="submit" @submit.prevent="login">

                <section class="input1">
                    <img class="logo" alt="logo cap" src="../assets/cap.png">
                    <h2>Email Adress</h2>
                    <input type="email" class="email" placeholder v-model="email" required>
                    <font-awesome-icon icon="user" class="icon" />
                </section>
                <section class="input2">
                    <h2>Password</h2>
                    <input type="password" class="password" placeholder v-model="password" max="8" required>
                    <font-awesome-icon icon="lock" class="icon" />
                </section>
                <section class="drop">
                    <input type="checkbox" class="check">
                    <p class="reminder">Remember me</p>
                    <a class="pass">
                        <u>forgot password?</u>
                    </a>
                </section>
                <section class="button">
                    <button type="submit" class="btn1" @click="login">login</button>
                    <button class="btn2">Signup</button>
                </section>
            </form>
        </div>
        <div class="image">
            <img src="../assets/mini_samson-creative-91091-unsplash.jpg" alt>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'login',
        data() {
            return {
                email: '',
                password: '',
            }

        },
        methods: {
            login() {
                axios.post('http://localhost:8181/api/account/login', {
                        email: this.email,
                        password: this.password
                    })
                    .then(response => {
                        console.log(response);
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },

        }
    }

</script>
<style scoped>
    .block {
        display: flex;
    }

    .container {
        flex: 4;
        top: 10%;
    }

    .image {
        position: relative;
        flex: 6;
        top: 100px;
    }

    .email,
    .password {
        height: 50px;
        width: 60%;
        position: relative;
        font-size: 20px;
    }

    section {
        padding: 2%;

    }

    .check {
        position: relative;
        left: 13%;
        top: 15px;
    }

    .drop {
        position: relative;
        display: flex;
        justify-content: space-around;
        right: 7%;
        bottom: 7%;
    }

    .reminder {
        position: relative;
        right: 10%;
    }

    u {

        color: black;
    }

    .button {
        display: flex;
        justify-content: space-around;
        position: relative;
        bottom: 7%;
    }

    .btn1 {
        position: relative;
        border: solid 0.5px #e6e6e6;
        background: #47a8dc;
        width: 150px;
        height: 80px;
        font-size: 25px;
        border-radius: 20px;
        box-shadow: 3px 3px 6px 0px #47A8DC;
        color: white;
    }

    .btn2 {
        border: solid 2px r;
        background: #e6e6e6;
        width: 150px;
        height: 80px;
        font-size: 25px;
        border-radius: 20px;
        color: black;
        box-shadow: 3px 3px 6px 0px #47A8DC;
        border: 1px solid #e6e6e6;
    }

    .icon {
        position: relative;

        left: 10%;
        bottom: 40px;
        font-size: 30px;
        display: flex;
        justify-content: initial;
    }

    h1 {
        position: relative;
        top: 20%;
    }

    h2 {
        position: relative;
        right: 24%;
        font-size: 15px;
    }

    .logo {
        position: relative;
        bottom: 180px;
        height: 180px;
        bottom: 100px;
    }

    /* telephone */
    @media only screen and (max-device-width : 640px) {
        .image {
            display: none;
        }

        .check {
            position: relative;
            left: 4%;
        }
    }

    /* tablette */
    @media only screen and (max-device-width : 1024px) {

        main {
            display: flex;
            flex: 4;
        }

    }

</style>
