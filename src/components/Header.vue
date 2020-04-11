<template>
    <header class="container-fluid">

        <nav class="navbar navbar-expand-lg navbar-light bg-light row">

<!--            <a class="navbar-brand col-xl-2 col-3 text-left" href="#">Відродження<br>Регіону</a>-->
            <router-link
                    tag="a"
                    class="navbar-brand col-xl-2 col-3 text-left"
                    exact
                    to="/"
            >
                <h4>Відродження<br>Регіону</h4>
            </router-link>
            <div class="wrap d-lg-none col-md-1 col-sm-2 col-4 text-right">
                <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>


            <div class="collapse navbar-collapse bg-light col-xl-10" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <router-link
                            tag="li"
                            class="nav-item"
                            exact
                            active-class="active"
                            to="/"
                    >
                        <a class="nav-link">Лікарні</a>
                    </router-link>

                    <router-link
                            tag="li"
                            class="nav-item"
                            exact
                            active-class="active"
                            to="/need"
                    >
                        <a class="nav-link">Потреби</a>
                    </router-link>

<!--                    <router-link-->
<!--                            tag="li"-->
<!--                            class="nav-item"-->
<!--                            exact-->
<!--                            active-class="active"-->
<!--                            to=""-->
<!--                    >-->
<!--                        <a class="nav-link">Зробити внесок</a>-->
<!--                    </router-link>-->

                    <router-link
                            tag="li"
                            class="nav-item"
                            exact
                            active-class="active"
                            to="/about"
                    >
                        <a class="nav-link">Про фонд</a>
                    </router-link>
<!--                    <li class="nav-item active">-->
<!--                        <a class="nav-link" href="#">Про фонд</a>-->
<!--                    </li>-->
<!--                    <li class="nav-item">-->
<!--                        <a class="nav-link" href="#">Контакти</a>-->
<!--                    </li>-->
<!--                    <div class="navbar-text language_bar my-2 my-lg-0">-->
                        <!--                    <h5>EN</h5>-->
                        <!--                    <h5>RU</h5>-->
<!--                        <h5>UA</h5>-->
<!--                    </div>-->

                    <router-link
                            tag="li"
                            class="nav-item enter_exit navbar-text  text-right"
                            exact
                            active-class="active"
                            to="/authorization"
                    >
                        <span class="align-middle" v-if="user"><i class="far fa-user"></i>{{user}}</span>
                        <a class="nav-link  align-middle"  @click.stop="exit()">{{getEnterExit}}</a>
                    </router-link>
                </ul>
            </div>
        </nav>





    </header>
</template>

<script>
    import mixinCookie from "../mixins/mixinCookie";

    export default {
        name: "Header",

        data() {
            return {
                email: 'talanov.reserv@gmail.com',
                phone: "+38 (093) 35-40-206",
            }
        },

        mixins: [
            mixinCookie,
        ],

        created() {
            this.$store.state.user = this.getCookie('user');
            this.$store.state.allowEdits = this.getCookie('allowEdits');
        },

        computed: {
            user() {
                return this.$store.getters.getUser;
            },

            getEnterExit() {
                if (this.$store.getters.getAllowEdits) {
                    return "Вихід";
                } else {
                    return  "Вхід";
                }



                // if (this.$store.getters.getAllowEdits) {
                //     return ' Вихід';
                // } else if ( this.getCookie("allowEdits") ) {
                //     return ' Вихід';
                // } else {
                //     return  "Вхід";
                // }
            }
        },

        methods: {
            exit() {
                if (this.$store.getters.getAllowEdits){
                    this.$store.state.user = "";
                    this.$store.state.allowEdits = false;
                    console.log('del cookie');
                    this.delCookie('user');
                    this.delCookie('allowEdits');
                    console.log(this.getCookie('user'));
                    console.log(this.getCookie('allowEdits'));
                }
            },

        },
    }
</script>

<!--<style scoped>-->
<style lang="scss" scoped>
    @import '../styles/_variable';

    /** {*/
    /*    margin: 0;*/
    /*    padding: 0;*/
    /*}*/

    header.container-fluid {
        position: sticky;
        top: 0;
        z-index: 999;
        background-color: #fff;
        border-bottom: 1px solid #eeeeee;
        height: 70px;
        color: $font_color;
        padding: 0;
        nav.navbar {
            margin: 0;
            width: 100%;
            height: 100%;
            a.navbar-brand {
                display: block;
                height: 100%;
                padding: 0 10px 0 70px;
                margin: 0;
                background-image: url(../image/logo.png);
                /*background-image: url(../image/help_medic.png);*/
                background-repeat: no-repeat;
                -webkit-background-size: 60px;
                background-size: 60px;
                background-position: 0 center;
                vertical-align: middle;
                h4 {
                    padding: 10px 0;
                    height: 100%;
                    font-size: 0.8rem;
                    line-height: 1rem;
                    font-style: italic;
                    text-transform: uppercase;
                }
            }
            .collapse.navbar-collapse {
                ul.navbar-nav {
                    li.nav-item {
                        width: auto;
                        padding: 10px 0;
                        a.nav-link {
                            height: 100%;
                            padding: 8px 1rem;
                            font-size: 1.4rem;
                            /*padding-left: 1rem;*/
                            /*padding-right: 1rem;*/

                        }
                    }
                }
            }
        }

        .language_bar {
            flex-grow: 3;
            width: auto;
            @include flex;
            justify-content: flex-end;
            align-items: center;
            font-size: 1.3rem;
            h5 {
                width: 40px;
                margin-right: 10px;
                /*display: inline-block;*/
                font-weight: 200;
                padding: 5px;
                &:hover, &.active {
                    font-weight: bold;
                    color: #000000;
                }
            }

        }

        .enter_exit {
            flex-grow: 1;
            span {
                display: inline-block;
                width: auto;
                padding-right: 10px;
                i {
                    display: inline-block;
                    width: auto;
                    margin-right: 5px;
                }
            }
            a.nav-link {
                display: inline-block;
                width: auto;
            }
        }
}



    @media (max-width: 992px) {
        header.container-fluid {
            min-width: 400px;
            nav.navbar {
                .wrap {
                    button.navbar-toggler {
                        width: 60px;
                    }
                }

                .collapse.navbar-collapse {
                    width: 100%;
                    .navbar-nav {
                        .nav-item {
                            border-bottom: 1px solid #f0f0f0;
                            align-items: flex-start;
                            a.nav-link {
                                font-size: 1.8rem;
                            }
                        }
                    }
                }
            }
        }
        }




    /*@media (min-width: 575.9px) and (max-width: 768px) {*/

    /*}*/

    /*@media (max-width: 576px) {*/

    /*}*/

</style>