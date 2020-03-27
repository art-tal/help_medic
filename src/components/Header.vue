<template>
    <header class="container-fluid">

        <nav class="navbar navbar-expand-lg navbar-light bg-light row">

            <a class="navbar-brand col-xl-2 col-3 text-left" href="#">Відродження<br>Регіону</a>

            <button class="navbar-toggler col-md-1 col-sm-2 col-4" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse bg-light col-xl-10" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Про фонд</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Завдання</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Потреби</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Зробити внесок</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Контакти</a>
                    </li>
                </ul>
                <div class="form-inline language_bar my-2 my-lg-0">
<!--                    <h5>EN</h5>-->
<!--                    <h5>RU</h5>-->
                    <h5>UA</h5>
                </div>
            </div>
        </nav>





    </header>
</template>

<script>
    export default {
        name: "Header",

        data() {
            return {
                email: 'talanov.reserv@gmail.com',
                phone: "+38 (093) 35-40-206",
            }
        },
    }
</script>

<!--<style scoped>-->
<style lang="scss" scoped>
    @import './src/styles/_variable';

    /** {*/
    /*    margin: 0;*/
    /*    padding: 0;*/
    /*}*/

    header.container-fluid {
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
                margin: 5px;
                background-image: url(../image/logo.jpg);
                background-repeat: no-repeat;
                -webkit-background-size: 60px;
                background-size: 60px;
                background-position: 0 0;
                vertical-align: middle;
                h1 {
                    padding: 10px 0;
                    height: 100%;
                    font-size: 0.8rem;
                    line-height: 1rem;
                    font-style: italic;
                    text-transform: uppercase;
                }
            }
        }

        .language_bar {
            flex-grow: 1;
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
}



    @media (max-width: 992px) {
        header.container-fluid {
            min-width: 470px;
            nav.navbar {
                .collapse.navbar-collapse {
                    .navbar-nav {
                        .nav-item {
                            border-bottom: 1px solid #f0f0f0;
                            align-items: flex-start;
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