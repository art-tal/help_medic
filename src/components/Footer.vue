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
        </div>
        <div class="row text-center">Проект «-----» · 2020</div>
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
        padding: 0px;
        .row {
            padding: 30px 0;
            div {
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
        .row:last-child {
            text-align: center;
            padding: 5px;
            background-color: #232323;
            color: #ffffff;
            font-size: 0.9rem;
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