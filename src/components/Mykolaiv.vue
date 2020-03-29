<template>
    <section class="container">
        <article class="row choice_district">
            <div class="col-lg-4 col-12">
                <div class="logo">
                    <img src="../image/mykolaiv.png" alt="Mykolaiv">
                    <h2>Миколаївська область</h2>
                </div>
                <form class="choice" name="choice">
                    <h5>Оберіть район або населений пункт для отримання інформації про доступні лікарні.</h5>

                    <select name="areas"
                            id="areas"
                            :disabled="blockAreaField"
                            v-model="area"
                            @change="selectArea()"
                    >
                        <option selected="selected" disabled="disabled">Оберіть район</option>
                        <option v-for="(ar, key) in areas"
                                :key="key"
                                :value="ar">{{ar.area_name}}
                            <i class="fas fa-times"></i>
                        </option>
                    </select>

                    <select name="cities" id="cities" v-model="city" @change="selectCity()">
                        <option selected="selected" disabled="disabled">Оберіть населений пункт</option>
                        <option v-for="(city, key) in cities"
                                :key="key"
                                :value="city"
                        >{{city.name}}</option>
                    </select>

                    <input type="reset" class="btn btn-dark" value="Скинути вибір" @click="resetSelect()"/>

                </form>
            </div>


            <div class="map col-lg-8 col-12">
<!--                <google-></google->-->
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d821116.2854233051!2d31.588305633583683!3d47.4672520037775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c59abab155d4c9%3A0x9382d10df151ad2e!2z0J3QuNC60L7Qu9Cw0LXQstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGM!5e0!3m2!1sru!2sua!4v1585406198748!5m2!1sru!2sua" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
        </article>

    </section>
</template>

<script>
    import axios from "axios"
    // import googleMap from "@/components/googleMap";

    export default {
        name: "Mykolaiv",

        components: {
            // googleMap
        },

        data() {
            return {
                areas: null,
                area: "Оберіть район",
                cities: null,
                city: "Оберіть населений пункт",

                blockAreaField: false,
            }
        },

        created() {
            this.getAreas();
            this.getCities();
        },

        methods:{
            getAreas() {
                axios.get(
                    "https://helpmedic.atlant-mega.com/ajax/areas"
                )
                .then( (response) => {
                    this.areas = response.data;
                } )
                .catch( (error) => {
                    console.log("Ошибка!");
                    console.log(error);
                } )
            },

            getCities() {
                axios.get('https://helpmedic.atlant-mega.com/ajax/cities/all'//,

                )
                .then( (response) => {
                    this.cities = response.data;
                } )
                .catch( (error) => {
                    console.log("Ошибка! населенка");
                    console.log(error);
                } )
            },

            selectArea() {
                this.$store.state.area = this.area;
                this.findCity();
                if (this.cities.length === 1) {
                    this.city = this.cities[0];
                    this.$store.state.city = this.city;
                    console.log(this.$store.state.city);
                }
            },

            selectCity() {
                this.$store.state.city = this.city;
                // console.log(this.$store.state.city );
                this.area = this.areas.find( ar => ar.area_id === this.city.area_id );
                this.$store.state.area = this.area;
                // console.log(this.area);
                this.blockAreaField = true;
                },

            findCity() {
                axios.get(
                    "https://helpmedic.atlant-mega.com/ajax/cities",
                    {params: {id: this.area.area_id}}
                )
                .then( (response) => {
                    this.cities = response.data;
                    if (this.cities.length === 1) {
                        this.$store.state.city = this.city = this.cities[0];
                    }
                } )
                .catch( (error) => {
                    console.log('Ошибка');
                    console.log(error);
                } )
            },

            resetSelect() {
                this.area = "Оберіть район";
                this.city = "Оберіть населений пункт";
                this.blockAreaField = false;
                this.$store.state.area = null;
                this.$store.state.city = null;
                this.getAreas();
                this.getCities();
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import './src/styles/_variable';

    * {
        margin: 0;
        padding: 0;
    }

    section.container {
        padding-top: 30px;
        padding-bottom: 30px;
        margin: 0 auto;
        article.row.choice_district {
            div {
                .logo {
                    border-bottom: 1px solid #f0f0f0;
                    padding-bottom: 20px;
                    img {
                        width: 30%;
                    }
                    h2 {
                        margin-left: 10px;
                        display: inline-block;
                        width: 60%;
                        padding: 0 15px;
                    }
                }
                .choice {
                    margin-top: 15px;
                    h5 {
                        font-size: 1.3rem;
                        font-weight: normal;
                        margin-bottom: 10px;
                    }

                    select {
                        /*height: 64px;*/
                        margin-bottom: 15px;
                        border: 1px solid #00AEEF;
                        padding: 10px 15px;
                        border-radius: 10px;
                        h3 {
                            @include flex;
                            justify-content: space-between;
                            margin: 0;
                            /*display: inline;*/
                            font-size: 1.3rem;
                            font-weight: normal;
                            i {
                                width: 20px;
                                font-size: 1.3rem;
                                padding-right: 10px;
                            }
                        }

                    }

                    input[type="reset"].btn.btn-dark {
                        @include button
                        /*padding: 7px 10px;*/
                        /*background-color: #929292;*/
                        /*border-radius: 10px;*/
                    }
                }
            }
            div.map {
                padding: 0 40px 30px;
            }
        }
    }

    @media (min-width: 575.9px) and (max-width: 992px) {
        section.container {
            article.row.choice_district {
                div.map {
                    padding: 40px 0;
                }
            }
        }
    }


    @media (max-width: 576px) {
        section.container {
            min-width: 470px;
            padding: 30px 20px;
            margin: 0 auto;
            article.row.choice_district {
                div {
                    .logo {
                        border-bottom: 1px solid #f0f0f0;
                        padding-bottom: 20px;
                        img {
                            width: 30%;
                        }
                        h2 {
                            margin-left: 10px;
                            display: inline-block;
                            width: 60%;
                            padding: 0 15px;
                        }
                    }
                    .choice {
                        margin-top: 15px;
                        h5 {
                            font-size: 1.3rem;
                            font-weight: normal;
                        }
                        select {
                            /*height: 64px;*/
                            border: 1px solid #00AEEF;
                            padding: 10px 15px;
                            border-radius: 10px;
                            h3 {
                                @include flex;
                                justify-content: space-between;
                                margin: 0;
                                /*display: inline;*/
                                font-size: 1.3rem;
                                font-weight: normal;
                                i {
                                    width: 20px;
                                    font-size: 1.3rem;
                                    padding-right: 10px;
                                }
                            }

                        }
                    }
                }
                div.map {
                    padding: 40px 0;
                }
            }
        }
    }

</style>