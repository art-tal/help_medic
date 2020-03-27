<template>
    <section class="promo">
        <div class="wrap">
            <header>
                <h1>Stop<br>Covid-19</h1>
            </header>
            <div class="body">
                <h2>Єднаймося для боротьби з коронавірусом</h2>
            </div>
            <footer>
                <h3>Долучайтесь до діяльності фонду «Відродження регіону». Фонд створений заради об'єднання зусиль бізнесу у боротьбі з коронавірусом
                    у Миколаївській області</h3>
            </footer>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Promo"
    }
</script>

<style lang="scss" scoped>
    @import './src/styles/_variable';

    * {
        margin: 0;
        padding: 0;
    }

    section.promo {
        @extend %box;
        width: 100%;
        /*height: 1000px;*/
        background-image: url(../image/nikolaev2.jpg);
        background-repeat: no-repeat;
        -webkit-background-size: 100%;
        background-size: 100%;
        background-position: center center;
        color: #f0f0f0;
        font-family: Arial, sans-serif;
        vertical-align: middle;
        display: table;
        .wrap {
            @extend %box;
            width: 100%;
            height: 100%;
            padding: 30px 50px;
            background-color: rgba(0,0,0,0.5);
            text-align: center;
            display: table-cell;
            vertical-align: middle;
            header h1{
                font-size: 6rem;
                color: rgba(255,255,0,0.7);
                font-weight: bolder;
                margin-bottom: 20px;
            }
            .body h2 {
                width: 70%;
                font-size: 3.5rem;
                margin: 0 auto 30px;
            }
            footer h3 {
                width: 70%;
                font-size: 2rem;
                margin: 0 auto;
            }
        }
    }

    @media (min-width: 1199.9px) and (max-width: 1400px) {
        section.promo {
            .wrap {
                padding: 30px 20px;
                header h1{
                    font-size: 3rem;
                    margin-bottom: 15px;
                }
                .body h2 {
                    width: 70%;
                    font-size: 2rem;
                    margin: 0 auto 30px;
                }
                footer h3 {
                    width: 70%;
                    font-size: 1.5rem;
                    margin: 0 auto;
                }
            }
        }
    }

    @media (min-width: 991.9px) and (max-width: 1200px) {
        section.promo {
            .wrap {
                padding: 10px 50px;
                header h1{
                    font-size: 3rem;
                    font-weight: bolder;
                    margin-bottom: 20px;
                }
                .body h2 {
                    width: 70%;
                    font-size: 2rem;
                    margin: 0 auto 30px;
                }
                footer h3 {
                    width: 80%;
                    font-size: 1.5rem;
                    margin: 0 auto;
                }
            }
        }
    }

    @media (min-width: 767.9px) and (max-width: 992px) {
        section.promo {
            .wrap {
                padding: 30px 20px;
                header h1{
                    font-size: 2.5rem;
                    margin-bottom: 10px;
                }
                .body h2 {
                    width: 90%;
                    font-size: 1.75rem;
                    margin: 0 auto 20px;
                }
                footer h3 {
                    width: 90%;
                    font-size: 1.5rem;
                    margin: 0 auto;
                }
            }
        }
    }

    @media (min-width: 575.9px) and (max-width: 768px) {
        section.promo {
            .wrap {
                padding: 15px 20px;
                header h1{
                    font-size: 2rem;
                    margin-bottom: 10px;
                }
                .body h2 {
                    width: 100%;
                    font-size: 1.5rem;
                    margin: 0 auto 10px;
                }
                footer h3 {
                    width: 100%;
                    font-size: 1.3rem;
                    margin: 0 auto;
                }
            }
        }
    }

    @media (max-width: 576px) {
        section.promo {
            min-width: 470px;
            .wrap {
                padding: 10px 20px;
                header h1{
                    font-size: 1.75rem;
                    margin-bottom: 7px;
                }
                .body h2 {
                    width: 100%;
                    font-size: 1.3rem;
                    margin: 0 auto 10px;
                }
                footer h3 {
                    width: 100%;
                    font-size: 1rem;
                    margin: 0 auto;
                }
            }
        }
    }

</style>