<template>
    <div class="block">
        <div class="container">



            <form @submit="$event.preventDefault()">
                <div class="formLogin">
                    <div class="form-group">
                        <label for="email">Email :</label>
                        <input id="email" class="form-control" type="email" v-model="form.email" required placeholder="Enter email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password :</label>
                        <div class="input-group mb-3">
                            <input id="password" class="form-control" :type="type" v-model="form.password" required placeholder="Enter password" aria-describedby="passwordHelp">
                            <div class="input-group-append"><a class="eye" @click="type === 'text' ? type = 'password' : type = 'text'">
                                    <!--Ternary function-->
                                    <font-awesome-icon :icon="type === 'text' ? 'eye' : 'eye-slash'" /></a></div>
                            <!--Ternary function-->
                        </div>
                    </div>
                    <div class="bouton">
                        <button class="btn btn-primary btn-lg rounded" name="submit" value="Submit" type="submit" @click="login($event)">Log in</button>
                    </div>
                </div>
            </form>
            
        </div>

    </div>
</template>

<script>
    import axios from 'axios';
    import auth from '@/utils/auth.js'
    export default {
        name: 'login',
        data() {
            return {
                icon: 'eye',
                type:'password',
                btnText: 'Show Password',
                password: '',
                form: {
                    email: '',
                    password: '',
                }
            }

        },
        methods: {
            login() {
                axios.post('http://localhost:8181/api/login', this.form)
                    .then(response => {
                        auth.setLocalToken(response.data);
                        this.$router.push({ path: `/profil` });
                        console.log('gg', response);
                    })
                    .catch(error => {
                        console.log('nul', error)
                    })
            },

        }
    }

</script>
<style scoped>
    form {
        text-align: left;
    }

    .bouton {
        text-align: center;
    }

    .formLogin {
        width: 50%;
        margin: auto;
    }

    .eye {
        padding-top: 7px;
        padding-left: 4px;
        padding-right: 4px;
        border: 0.1em solid #CED4DA;
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
