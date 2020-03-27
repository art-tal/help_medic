<template>
    <section class="container">
        <article class="row choice_district">
            <div class="col-lg-4 col-12">
                <div class="logo">
                    <img src="../image/mykolaiv.png" alt="Mykolaiv">
                    <h2>Миколаївська область</h2>
                </div>
                <div class="choice">
                    <h5>Оберіть район або населений пункт для отримання інформації про доступні лікарні.</h5>


                    <select name="areas" id="areas" v-model="area" @change="findHospital(area)">
                        <option selected="selected" disabled="disabled">Оберіть район</option>
                        <option v-for="(ar, key) in areas"
                                :key="key"
                                :value="ar.area_name">{{ar.area_name}}</option>
                    </select>



                    <select name="cities" v-model="city" @change="findHospital(city)">
                        <option selected="selected" disabled>Оберіть населений пункт</option>
                        <option v-for="(city, key) in cities"
                                :key="key"
                                :value="city.name"
                        >{{city.name}}</option>
                    </select>

                </div>
            </div>


            <div class="col-lg-8 col-12"></div>
        </article>





        <hospital></hospital>

    </section>
</template>

<script>
    import axios from "axios"
    import Hospital from "@/components/Hospital";

    export default {
        name: "Mykolaiv",

        components: {
            Hospital
        },

        data() {
            return {
                areas: null,
                area: null,
                cities: null,
                city: null,
            }
        },

        created() {
            this.getAreas();
            this.getCities();

            // this.$router.push({name: 'hospitals'})
        },

        methods:{
            getAreas() {
                axios.get(
                    "https://helpmedic.atlant-mega.com/ajax/areas"
                )
                .then( (response) => {
                    this.areas = response.data;
                    console.log(this.areas);
                } )
                .catch( (error) => {
                    console.log("Ошибка!");
                    console.log(error);
                } )
            },

            getCities() {
                axios.get('https://helpmedic.atlant-mega.com/ajax/cities'//,
                    // {
                    // params: {
                    //     id: 1//this.district.id
                    // }}
                )
                .then( (response) => {
                    this.cities = response.data;
                    console.log(response.data);
                } )
                .catch( (error) => {
                    console.log("Ошибка! населенка");
                    console.log(error);
                } )
            },

            findHospital(obj) {
                console.log('change');
                if(obj.region_name) {
                    // this.$router.push({name: "hostital", params: {area_id: obj.id}} );
                    console.log('area id');
                    this.$store.state.area = obj;
                }
                else if (obj.name) {
                    // this.$router.push({name: "hospital", params: {city_id: obj.id}});
                    console.log('city id');
                    this.$store.state.city = obj;
                }
            }





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
                    }
                    select {
                        /*height: 64px;*/
                        margin-top: 15px;
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
                            margin-top: 15px;
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
            }
        }
    }

</style>