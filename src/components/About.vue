<template>
    <section class="about container-fluid">
        <div class="img align-middle"></div>

        <header class="text-center">
            <h1 class="font-weight-bolder">Про фонд</h1>
            <p><strong>Наша місія</strong> — унеможливити розповсюдження коронавірусу
                у Миколаївській області.</p>
            <p><strong>Наша мета</strong> — об'єднати соціально відповідальний бізнес
                у боротьбі проти епідемії.</p>
        </header>

        <div class="body">
            <div class="block_1 text-center">
                <h2>Основні завдання фонду</h2>
                <div class="wrap row">

                    <div class="task col-lg-3 col-8">
                        <img src="../image/Icons-01.webp" alt="01">
                        <p>Розробка плану заходів по боротьбі з коронавірусом</p>
                    </div>

                    <div class="task col-lg-3 col-8">
                        <img src="../image/Icons-02.webp" alt="02">
                        <p>Акумулювання та розподілення коштів підприємств, які готові підтримати Миколаїв та область у боротьбі з епідемією</p>
                    </div>

                    <div class="task col-lg-3 col-8">
                        <img src="../image/Icons-03.webp" alt="03">
                        <p>Інформування жителів регіону про вжиті заходи</p>
                    </div>

                </div>
            </div>
            
            <div class="block_2 text-center">
                <h2>Наші принципи</h2>

                <ul class="text-left">
                    <li>Рівні права у прийнятті рішень у всіх учасників фонду</li>
                    <li>Відкритий діалог з місцевою владою щодо пріоритетних напрямків роботи</li>
                    <li>Комплексний підхід у формуванні програми превентивних заходів</li>
                    <li>Оперативна реакція на нагальні потреби області</li>
                    <li>Відкритість і прозорість</li>
                </ul>
            </div>
            
            <div class="block_3 text-center"></div>
            
            <div class="block_4 text-center">
                <h2>Хто створив фонд</h2>
                <p>Ініціатор створення фонду – компанія <strong>ХТОСЬ</strong>.</p>
                <p>У Миколаївській області знаходяться 5 підприємств компанії, на яких працює понад ?? тисяч осіб. Компанія уже виділила ? млн доларів на загальнодержавну закупівлю тестів на коронавірус, частина з яких буде направлена у Миколаївську область.</p>
                <p>Крім того, <strong>ХТОСЬ</strong> направить на боротьбу з коронавірусом ?? млн грн, зекономлених за рахунок «податкових канікул» згідно з законом №3220.</p>
            </div>

        </div>
    </section>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style lang="scss" scoped>
    @import './src/styles/_variable';

    * {
        margin: 0;
        padding: 0;
    }

    section.about.container-fluid {
        .img {
            width: 100%;
            height: 40vh;
            overflow: hidden;
            background-image: url(../image/koronavirus.jpg);
            background-repeat: no-repeat;
            background-position: 0 center;
            -webkit-background-size: 100%;
            background-size: 100%;
        }
        header {
            padding: 90px 0;
            width: 1200px;
            margin: 0 auto;
            h1 {
                font-size: 4.2rem;
                margin-bottom: 40px;
            }
            p {
                font-size: 2.4rem;
                text-align: left;
                margin-bottom: 40px;
                padding: 0 100px;
            }
        }
        .body {
            .block_1 {
                padding: 90px 0;
                background-color: #f0f0f0;
                h2 {
                    font-size: 3.8rem;
                    text-transform: uppercase;
                    margin-bottom: 102px;
                }
                .wrap {
                    margin: 0 auto;
                    width: 1200px;
                    justify-content: space-around;
                    .task {
                        padding: 0 10px;
                        img {
                            width: 90px;
                            height: 90px;
                            margin-bottom: 25px;
                        }
                        p {
                            font-size: 1.8rem;
                        }
                    }
                }
            }

            .block_2 {
                padding: 90px 0;
                h2 {
                    font-size: 3.8rem;
                    margin-bottom: 90px;
                }
                ul {
                    width: 900px;
                    margin: 0 auto;
                    list-style-type: none;
                    list-style-image: url(../image/check-double-solid.svg);
                    li {
                        font-size: 2.4rem;
                        margin-bottom: 55px;
                        padding-left: 30px;
                        &:last-child {
                            margin-bottom: 0;
                        }
                    }
                }
            }

            .block_3 {
                height: 50vh;
                overflow: hidden;
                background-image: url(../image/281234.jpg);
                background-repeat: no-repeat;
                background-position: center center;
                -webkit-background-size: 100%;
                background-size: 100%;
            }

            .block_4 {
                width: 900px;
                margin: 0 auto;
                padding: 90px 0;
                h2 {
                    font-size: 4.2rem;
                    margin-bottom: 50px;
                }
                p {
                    text-align: left;
                    font-size: 1.8rem;
                    margin-bottom: 50px;
                }
            }
        }

    }

    @media (min-width: 992px) and (max-width: 1199.9px) {
        section.about.container-fluid {

            header {
                padding: 50px 0;
                width: 900px;
                h1 {
                    font-size: 3.8rem;
                    margin-bottom: 30px;
                }
                p {
                    font-size: 2.2rem;
                    margin-bottom: 30px;
                    padding: 0 50px;
                }
            }
            .body {
                .block_1 {
                    padding: 50px 0;
                    h2 {
                        font-size: 3.0rem;
                        text-transform: uppercase;
                        margin-bottom: 70px;
                    }
                    .wrap {
                        margin: 0 auto;
                        width: 900px;
                        justify-content: space-around;
                        .task {
                            padding: 0 10px;
                            p {
                                font-size: 1.4rem;
                            }
                        }
                    }
                }

                .block_2 {
                    padding: 50px 0;
                    h2 {
                        font-size: 3.0rem;
                        margin-bottom: 50px;
                    }
                    ul {
                        li {
                            font-size: 2.0rem;
                            margin-bottom: 30px;
                        }
                    }
                }
                .block_4 {
                    padding: 50px 0;
                    h2 {
                        font-size: 3.0rem;
                        margin-bottom: 30px;
                    }
                    p {
                        font-size: 1.6rem;
                        margin-bottom: 30px;
                    }
                }
            }

        }
    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        section.about.container-fluid {
            header {
                padding: 50px 0;
                width: 100%;
                h1 {
                    font-size: 3.0rem;
                    margin-bottom: 30px;
                }
                p {
                    font-size: 2.0rem;
                    margin-bottom: 30px;
                }
            }
            .body {
                .block_1 {
                    padding: 50px 0;
                    h2 {
                        font-size: 3.0rem;
                        margin-bottom: 60px;
                    }
                    .wrap {
                        width: 100%;
                        .task {
                            padding: 0 10px 60px;
                            p {
                                font-size: 1.8rem;
                            }
                            &:last-child {
                                padding-bottom: 0;
                            }
                        }
                    }
                }

                .block_2 {
                    padding: 50px 0;
                    h2 {
                        font-size: 3.0rem;
                        margin-bottom: 40px;
                    }
                    ul {
                        width: 100%;
                        li {
                            font-size: 2.0rem;
                            margin-bottom: 30px;
                        }
                    }
                }

                .block_4 {
                    width: 100%;
                    padding: 50px 0;
                    h2 {
                        font-size: 3.4rem;
                        margin-bottom: 30px;
                    }
                    p {
                        padding: 0 30px;
                        font-size: 1.6rem;
                        margin-bottom: 30px;
                    }
                }
            }

        }
    }

    @media (min-width: 568px) and (max-width: 767.9px) {
        section.about.container-fluid {
            header {
                padding: 50px 0;
                width: 100%;
                h1 {
                    font-size: 3rem;
                    margin-bottom: 20px;
                }
                p {
                    font-size: 1.8rem;
                    margin-bottom: 20px;
                    padding: 0 50px;
                }
            }
            .body {
                .block_1 {
                    padding: 50px 0;
                    background-color: #f0f0f0;
                    h2 {
                        font-size: 3rem;
                        margin-bottom: 50px;
                    }
                    .wrap {
                        width: 100%;
                        .task {
                            padding: 0 10px 50px;
                            p {
                                font-size: 1.8rem;
                            }
                        }
                    }
                }

                .block_2 {
                    padding: 50px 0;
                    h2 {
                        font-size: 3rem;
                        margin-bottom: 50px;
                    }
                    ul {
                        width: 100%;
                        li {
                            font-size: 1.8rem;
                            margin-bottom: 20px;
                            padding: 0 15px;

                        }
                    }
                }

                .block_4 {
                    width: 100%;
                    padding: 50px 0;
                    h2 {
                        font-size: 3rem;
                        margin-bottom: 30px;
                    }
                    p {
                        font-size: 1.6em;
                        margin-bottom: 20px;
                        padding: 0 15px;
                    }
                }
            }

        }
    }

    @media (max-width: 567.9px) {
        section.about.container-fluid {
            min-width: 470px;
            .img {
                height: 25vh;
            }
            header {
                padding: 30px 0;
                width: 100%;
                h1 {
                    font-size: 2.2rem;
                    margin-bottom: 20px;
                }
                p {
                    font-size: 1.3rem;
                    margin-bottom: 20px;
                    padding: 0 15px;
                }
            }
            .body {
                .block_1 {
                    padding: 30px 10px;
                    h2 {
                        font-size: 2.0rem;
                        margin-bottom: 30px;
                    }
                    .wrap {
                        width: 100%;
                        .task {
                            padding: 0 10px 30px;
                            p {
                                font-size: 1.5rem;
                            }
                        }
                    }
                }

                .block_2 {
                    padding: 30px 0;
                    h2 {
                        font-size: 2.2rem;
                        margin-bottom: 30px;
                    }
                    ul {
                        width: 100%;
                        li {
                            font-size: 1.5rem;
                            margin-bottom: 20px;
                            padding: 0 15px;
                        }
                    }
                }

                .block_3 {
                    height: 35vh;
                }

                .block_4 {
                    width: 100%;
                    padding: 30px 15px;
                    h2 {
                        font-size: 2.2rem;
                        margin-bottom: 30px;
                    }
                    p {
                        font-size: 1.5rem;
                        margin-bottom: 20px;
                    }
                }
            }

        }
    }


</style>