<template>
    <div id="app">

        <b-navbar toggleable="md" type="dark" variant="">

            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

            <b-navbar-brand href="">
                <router-link to="/"><img
                        src="https://www.capgemini.com/fr-fr/wp-content/themes/capgemini-komposite/assets/images/logo.svg"
                        alt="Capgemini France"></router-link>
            </b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">


                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">

                    <b-nav-item-dropdown class="align-text" text="Langue" right no-caret>
                        <template slot="button-content">
                            <p>Language
                                <font-awesome-icon icon="chevron-circle-down"/>
                            </p>
                        </template>
                        <b-dropdown-item href="#"><img alt="country flag" class="img-flag"
                                                       src="https://www.capgemini.com/fr-fr/wp-content/themes/capgemini-komposite/assets/images/fl/fr.svg">
                            <span class="hidden-sm-down"> Français | FR</span></b-dropdown-item>
                        <b-dropdown-item href="#"><img alt="country flag" class="img-flag"
                                                       src="https://www.capgemini.com/fr-fr/wp-content/themes/capgemini-komposite/assets/images/fl/gb.svg">
                            <span class="hidden-sm-down"> English | EN</span></b-dropdown-item>
                        <b-dropdown-item href="#"><img alt="country flag" class="img-flag"
                                                       src="https://www.capgemini.com/fr-fr/wp-content/themes/capgemini-komposite/assets/images/fl/de.svg">
                            <span class="hidden-sm-down"> Deutsch | DE</span></b-dropdown-item>
                        <b-dropdown-item href="#"><img alt="country flag" class="img-flag"
                                                       src="https://www.capgemini.com/fr-fr/wp-content/themes/capgemini-komposite/assets/images/fl/es.svg">
                            <span class="hidden-sm-down"> Español | ES</span></b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown right no-caret>
                        <!-- Using button-content slot    -->
                        <template slot="button-content">
                            <div class="col" v-bind:class="{ active: isActive }" v-on:click="isActive = !isActive">
                                <div class="con" v-bind:class="{ active: isActive }">
                                    <div class="bar top" v-bind:class="{ active: isActive }"></div>
                                    <div class="bar middle" v-bind:class="{ active: isActive }"></div>
                                    <div class="bar bottom" v-bind:class="{ active: isActive }"></div>
                                </div>
                            </div>
                        </template>
                        <b-dropdown-item href="" v-on:click="isActive = !isActive">
                            <router-link to="/">Home</router-link>
                        </b-dropdown-item>
                        <b-dropdown-item href="" v-on:click="isActive = !isActive" v-if="islogged">
                            <router-link to="/inscription">Sign In</router-link>
                        </b-dropdown-item>
                        <b-dropdown-item href="" v-on:click="isActive = !isActive">
                            <router-link to="/creeprojet">Create a Project</router-link>
                        </b-dropdown-item>
                        <b-dropdown-item href="" v-on:click="isActive = !isActive">
                            <router-link to="/vueprojet">Display Project</router-link>
                        </b-dropdown-item>
                        <b-dropdown-item href="" v-on:click="isActive = !isActive">
                            <router-link to="/profil">Profil</router-link>
                        </b-dropdown-item>
                        <b-dropdown-item href="" v-on:click="isActive = !isActive">
                            <router-link to="/profilRh">Profil HR</router-link>
                        </b-dropdown-item>
                        <b-dropdown-item href="" v-on:click="isActive = !isActive" v-if="islogged">
                            <router-link to="/login">Sign Up</router-link>
                        </b-dropdown-item>
                        <b-dropdown-item href="" v-on:click="isActive = !isActive" v-if="!islogged">
                            <button class="btn-outline-danger btn" @click="logout">Logout</button>
                        </b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>

            </b-collapse>
        </b-navbar>


        <router-view/>

        <!--footer-->
        <footer class="footer container-full">
            <div class="container">
                <div class="footer__top row">
                    <div class="footer__logo col-md-4 hidden-lg-down">
                        <img alt="Logo de Capgemini"
                             src="https://www.capgemini.com/fr-fr/wp-content/themes/capgemini-komposite/assets/images/logo.svg">
                    </div>
                    <nav class="footer__nav col-12 col-xl-8">
                        <div class="row">
                            <ul class="col-6 col-md-3">
                                <li><a href="#" class="">Notre groupe</a></li>
                                <li><a href="#" class="">Nos services</a></li>
                                <li><a href="#" class="">Secteurs d&#039;activité</a></li>
                                <li><a href="#" class="">Partenaires</a></li>
                            </ul>
                            <ul class="col-6 col-md-3">
                                <li><a href="#" class="">Nous contacter</a></li>
                                <li><a href="#" class="">Nous trouver</a></li>
                            </ul>
                            <ul class="col-6 col-md-3">
                                <li>
                                    <router-link to="/dp">Données personnelles</router-link>
                                </li>
                                <li>
                                    <router-link to="/cgu">Conditions générales d’utilisation</router-link>
                                </li>
                            </ul>
                            <div class="col-6 col-md-3">

                                <h3 class="footer__title">Nos marques:</h3>

                                <ol>
                                    <li><a href="#" class="capconsult"><img alt="Capgemini Invent Logotype"
                                                                            src="https://www.capgemini.com/fr-fr/wp-content/themes/capgemini-komposite/assets/images/capgemini-invent.svg"></a>
                                    </li>
                                    <li><a href="#" class="sogeti" target="_blank"><img alt="Sogeti by Capgemini"
                                                                                        src="https://www.capgemini.com/fr-fr/wp-content/themes/capgemini-komposite/assets/images/sogeti-by-capgemini.svg"
                                                                                        style="margin: auto;"></a></li>
                                </ol>
                            </div>
                        </div>
                    </nav>
                </div>
                <div class="footer__bottom row no-gutters">
                    <div class="footer__social col-12 col-xl-6">
                        <ul>
                            <li>
                                <a href="#" class="social-buttons__button--fb">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                                        <title>Facebook icon</title>
                                        <g fill="none" fill-rule="evenodd">
                                            <rect width="36" height="36" rx="3"/>
                                            <path d="M16.572 28.558H20.1v-9.515h2.646l.523-2.973H20.1v-2.154c0-.695.458-1.424 1.111-1.424h1.802V9.52h-2.208v.014c-3.454.123-4.164 2.087-4.225 4.15h-.007v2.387h-1.764v2.973h1.764v9.515z"/>
                                        </g>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="social-buttons__button--twitter">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                                        <title>Twitter icon</title>
                                        <g fill="none" fill-rule="evenodd">
                                            <rect width="36" height="36" rx="3"/>
                                            <path d="M27.76 11.757c-.538.344-1.772.844-2.38.844v.001a3.816 3.816 0 0 0-6.477 3.487c-2.859-.075-5.984-1.507-7.866-3.959-1.157 2.003-.156 4.23 1.157 5.041-.45.034-1.277-.051-1.666-.431-.026 1.329.613 3.09 2.943 3.729-.449.241-1.243.172-1.588.12.12 1.123 1.692 2.59 3.41 2.59-.612.708-2.916 1.992-5.502 1.584a11.464 11.464 0 0 0 5.969 1.687c6.155 0 10.936-4.989 10.679-11.143-.002-.007-.002-.014-.002-.021l.002-.048c0-.02-.002-.038-.003-.056a6.582 6.582 0 0 0 1.85-1.953c-.312.171-1.246.515-2.116.6.558-.301 1.385-1.288 1.59-2.072"/>
                                        </g>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="social-buttons__button--in">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                                        <title>LinkedIn icon</title>
                                        <g fill="none" fill-rule="evenodd">
                                            <rect width="36" height="36" rx="3"/>
                                            <path d="M11.622 14.125c1.31 0 2.373-.97 2.373-2.166 0-1.198-1.063-2.168-2.373-2.168-1.312 0-2.375.97-2.375 2.168 0 1.197 1.063 2.166 2.375 2.166M9.791 28.056h4.258V15.775H9.791zM20.026 21.225c0-1.408.666-2.785 2.26-2.785 1.593 0 1.985 1.377 1.985 2.752v6.707h4.239v-6.981c0-4.851-2.867-5.687-4.631-5.687-1.762 0-2.734.596-3.853 2.04v-1.653h-4.251v12.281h4.251v-6.674z"/>
                                        </g>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer__copy col-12 col-xl-6" role="contentinfo">
                        <p>Tous droits réservés Team Cracotte. <span>Copyright &copy; 2019</span></p>
                    </div>
                    <div class="footer__logo col-12 hidden-xl-up">
                        <img alt="Logo de Capgemini"
                             src="https://www.capgemini.com/fr-fr/wp-content/themes/capgemini-komposite/assets/images/logo.svg">
                    </div>
                </div>
            </div>
        </footer>


    </div>

</template>

<script>
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    import auth from '@/utils/auth.js';

    export default {
        data() {
            return {
                isActive: false,
            };
        },
        methods: {
            logout() {
                auth.logUserOut(this);
                console.log('gg');
            },
            islogged(){
                auth.isLoggedIn()
            }
        },

    }

</script>

<style lang="scss">
    .footer {
        margin: auto;
        width: 100%;
        margin-top: 150px;
        background-color: white;
        border-top: 1px solid #ececec;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }


    .navbar-dark .navbar-nav .nav-link {
        color: black !important
    }

    .align-text {
        padding-top: 18px;
        padding-right: 45px;
    }

    nav {
        margin: auto;
        width: 70%;
        border-bottom: 1px solid #ececec;
    }

    ul,
    li {
        list-style-type: none;
    }

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }


    //MenuBurger
    .con {
        cursor: pointer;
        display: inline-block;
    }

    .bar {
        border-radius: 2em;
        display: block;
        height: 5px;
        width: 50px;
        background: #12ABDB;
        margin: 10px auto;
    }

    .con {
        width: auto;
        margin: 0 auto;
        -webkit-transition: all .7s ease;
        -moz-transition: all .7s ease;
        -ms-transition: all .7s ease;
        -o-transition: all .7s ease;
        transition: all .7s ease;
    }

    .col {
        display: inline-block;
        text-align: center;
        height: auto;
        position: relative;
    }

    /*
    .col > * {
        pointer-events: none;
    }
*/

    .middle {
        margin: 0;
        width: 65%;
    }

    .active .bar {
        background-color: #0070AD;
    }

    .bar {
        -webkit-transition: all .7s ease;
        -moz-transition: all .7s ease;
        -ms-transition: all .7s ease;
        -o-transition: all .7s ease;
        transition: all .7s ease;
    }

    .active .top {
        -webkit-transform: translateY(15px) rotateZ(45deg);
        -moz-transform: translateY(15px) rotateZ(45deg);
        -ms-transform: translateY(15px) rotateZ(45deg);
        -o-transform: translateY(15px) rotateZ(45deg);
        transform: translateY(15px) rotateZ(45deg);
    }

    .active .bottom {
        -webkit-transform: translateY(-15px) rotateZ(-45deg);
        -moz-transform: translateY(-15px) rotateZ(-45deg);
        -ms-transform: translateY(-15px) rotateZ(-45deg);
        -o-transform: translateY(-15px) rotateZ(-45deg);
        transform: translateY(-15px) rotateZ(-45deg);
    }

    .active .middle {
        width: 0;
    }

</style>
