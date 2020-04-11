<template>
    <footer class="container-fluid">
        <div class="row">
            <div class="hotLine col-6 text-center">
                <h4>ГАРЯЧА ЛІНІЯ ДЛЯ ПАЦІЄНТІВ</h4>
                <p>пн-пт, с 10:00 до 14:00</p>
                <p>(096) --- -- -- | (093) --- -- --</p>
                <p>info@-------.in.ua</p>
            </div>
            <div class="techHelpMed col-6 text-center">
                <h4>ТЕХНІЧНА ПІДТРИМКА ДЛЯ МЕДЗАКЛАДІВ:</h4>
                <p>пн-пт, с 10:00 до 16:00</p>
                <p>(098) --- -- -- | (066) --- -- --</p>
                <p>help@-------.in.ua</p>
            </div>
            <span class="col-12 text-center">Проект «HelpMedic» · 2020</span>
        </div>
        <div class="d-flex last">
            <div class="develop text-left">
                <a href="https://atlant-mega.com/" title="Atlant-Mega"></a>
                <span>
                    © 2020 Atlant-Mega | Создание сайтов.<br/>
                Копирование материалов разрешено только с активной ссылкой на источник
                </span>
            </div>
<!--            <span class="text-right">-->
<!--                +38 (096) 574-77-08 <br/>keeper@ninydev.com-->
<!--            </span>-->
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style lang="scss" scoped>
    @import './src/styles/_variable';

    * {
        margin: 0;
        padding: 0;
    }

    footer.container-fluid {

        background-color: #373737;
        color: #f0f0f0;
        padding: 0;
        .row {
            padding: 30px 0 10px;
            div {
                margin-bottom: 30px;
                h4 {
                    font-size: 1.2rem;
                    margin-bottom: 10px;
                }
                p {
                    font-size: 1rem;
                    margin-bottom: 5px;
                }
            }
        }
        .last {
            margin: 0 auto;
            padding: 10px 20px;
            background-color: #232323;
            color: #ffffff;
            font-size: 0.9rem;

            span {
                flex: 1;
                vertical-align: top;
            }
            div.develop {
                vertical-align: middle;
                flex: 1;
                a {
                    display: inline-block;
                    width: 100px;
                    height: 100%;
                    background-image: url(../image/atlant-mega.png);
                    background-repeat: no-repeat;
                    background-position: 0 center;
                    -webkit-background-size: 100px;
                    background-size: 100px;
                }
                span {
                    display: inline-block;
                    width: auto;
                    padding-left: 20px;
                }
                margin-right: 20px;
                color: #f0f0f0;
            }
        }
    }

    @media (max-width: 576px) {
        footer.container-fluid {
            min-width: 470px;
            .row {
                padding: 20px 0;
                div {
                    h4 {
                        font-size: 1rem;
                        margin-bottom: 10px;
                    }
                    p {
                        font-size: 0.7rem;
                        margin-bottom: 5px;
                    }
                }
            }
            .row:last-child {
                text-align: center;
                padding: 5px;
                background-color: #232323;
                color: #ffffff;
                font-size: 0.9rem;
            }
        }
    }

</style>