<template>
    <article class="authorization container-fluid">
        <div class="block">
            <div class="row nav nav-tabs">
                <div class="col-6 nav-item">
                    <router-link
                            tag="h3"
                            class="text-center nav-link"
                            exact
                            active-class="active"
                            to="/authorization/login"
                    >
                        Вхід
                    </router-link>
                </div>

                <div class="col-6 nav-item">
                    <router-link
                            tag="h3"
                            class="text-center  nav-link"
                            exact
                            active-class="active"
                            to="/authorization/registration"
                    >
                        Реєстрація
                    </router-link>
                </div>
            </div>

            <div class="row form">
                <router-view></router-view>
            </div>

        </div>
    </article>
</template>

<script>
    export default {
        name: "Authorization",

        created() {
            this.$router.push({name: "login"});
        },
    }
</script>

<style lang="scss" scoped>
    @import './src/styles/_variable';

    * {
        margin: 0;
        padding: 0;
    }

    article.authorization.container-fluid {
        background-color: #f0f0f0;
        background-image: url(../image/back.jpg);
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-position: center 0;
        -webkit-background-size: cover;
        background-size: cover;
        padding: 100px;
        .block {
            width: 700px;
            margin: auto;
            .row.nav.nav-tabs {
                border: none;
                .nav-item {
                    box-sizing: border-box;
                    color: #929292;
                    cursor: pointer;
                    border: none;
                    h3.nav-link {
                        font-size: 1.5rem;
                        background-color: rgba(255,255,255,0.6);
                        padding: 20px;
                        border: 1px solid #929292;
                        border-bottom: 2px solid #00AEEF;
                        border-radius: 10px 10px 0 0;
                        &.active {
                            color: #020202;
                            border: 2px solid #00AEEF;
                            border-bottom: none;
                            background-color: rgba(255,255,255,0.9);
                        }
                    }
                }
            }

            .form.row {
                /*max-height: 65vh;*/
                /*overflow: scroll;*/
            }
        }

    }

    @media (max-width: 991.9px) {
        article.authorization.container-fluid {
            -webkit-background-size: cover;
            background-size: cover;
            padding: 60px 0;
            .block {
                min-width: 470px;
                width: 80%;

            }

        }
    }

</style>