<template>
    <section class="find_hospitals container">
        <h3>Знайдені медичні заклади</h3>

        <ol class="hospitals">
            <li class="hosp row"
                v-for="(hospital, key) in hospitals"
                :key="key">
                <p class="col-2">{{hospital.city_name}}</p>
                <a class="col-8" @click.prevent="setHospital(hospital)">{{hospital.name}}</a>
<!--                <router-link-->
<!--                        class="col-8"-->
<!--                        exact-->
<!--                        tag="a"-->
<!--                        @click="setHospital(hospital)"-->
<!--                        to="/hospital"-->
<!--                >-->
<!--                    {{hospital.name}}-->
<!--                </router-link>-->
                <p class="col-2">{{hospital.address}}</p>
            </li>
        </ol>




<!--        <ol class="hospitals" v-if="(getArea || getCity)">-->
<!--            <li class="hosp row"-->
<!--                v-for="(hospital, key) in hospitals"-->
<!--                :key="key">-->
<!--                <p class="col-3">{{hospital.city_name}}</p>-->
<!--                <a class="col-6">{{hospital.name}}</a>-->
<!--                <p class="col-3">{{hospital.address}}</p>-->
<!--            </li>-->
<!--        </ol>-->

<!--        <ul class="distr" v-if="!(getArea || getCity)">-->
<!--            <li class="distr_item" v-for="(area,key) in areas" :key="key">-->
<!--                <h4>{{area.area_name}}</h4>-->
<!--                <ol class="hospitals">-->
<!--                    <li class="hosp row"-->
<!--                        v-for="(hospital, key) in hospitals.filter( hosp => hosp.area_name === area.area_name)"-->
<!--                        :key="key">-->
<!--                        <p class="col-3">{{hospital.city_name}}</p>-->
<!--                        <p class="col-6">{{hospital.name}}</p>-->
<!--                        <p class="col-3">{{hospital.address}}</p>-->
<!--                    </li>-->
<!--                </ol>-->
<!--            </li>-->
<!--        </ul>-->

    </section>
</template>

<script>
    import axios from "axios";

    export default {
        name: "Hospitals",

        data() {
            return {
                areas: null,
                area: null,
                hospitals: null,
            }
        },

        created() {
            this.requestAreas();
            this.findHospital();
        },

        computed: {
          getArea() {
              return this.$store.getters.getArea
          },

            getCity() {
              return this.$store.getters.getCity;
            },
        },

        methods: {

            findHospital() {
                this.requestHospitals();
                // if(this.getCity) {
                //     this.hospitals = this.hospitals.filter( hosp => hosp.city_name === this.getCity.city_name );
                // } else if (this.getArea) {
                //     this.hospitals = this.hospitals.filter( hosp => hosp.area_name === this.getArea.area_name );
                // }
            },


            requestHospitals() {
                axios.get(
                    "https://helpmedic.atlant-mega.com/ajax/hospitals"
                )
                    .then((response) => {
                        this.hospitals = response.data;
                        console.log(this.hospitals);
                    })
                    .catch((error) => {
                        console.log("Ошибка!");
                        console.log(error);
                        ////////////////////////////////////////
                        this.hospitals = [
                            {
                                id: 1,
                                name: "Березнегуватський районний центр первинної медико-санітарної допомоги",
                                tel: "0516892063",
                                city_id: 4,
                                city_name: "смт. Березнегувате",
                                address: "вул. Лермонтова, 1",
                                gps: "---",
                                invoice: "38412046",
                            },
                            {
                                id: 2,
                                name: "Березнегуватська центральна районна лікарня",
                                tel: "0516892063",
                                city_id: 4,
                                city_name: "смт. Березнегувате",
                                address: "вул. Лермонтова, 1",
                                gps: "---",
                                invoice: "1998377",
                            },
                            {
                                id: 3,
                                name: "Центр первинної медико-санітарної допомоги Баштанського району",
                                tel: "(05158)2-76-37",
                                city_id: 5,
                                city_name: "м. Баштанкае",
                                address: "вул. Ювілейна, 3",
                                gps: "---",
                                invoice: "38313781",
                            },
                        ];

                        console.log(this.hospitals);
                        //////////////////////////////////////////
                    })
            },

            setHospital(hospital) {
                this.$store.state.hospital = hospital;
                console.log(hospital)
                this.$router.push({name: "hospital"});
            },

            requestAreas() {
                axios.get(
                    "https://helpmedic.atlant-mega.com/ajax/areas"
                )
                    .then((response) => {
                        this.areas = response.data;
                        console.log(this.areas);
                    })
                    .catch((error) => {
                        console.log("Ошибка!");
                        console.log(error);
                    })
            },

            // getCities() {
            //     axios.get('https://helpmedic.atlant-mega.com/ajax/cities'//,
            //         // {
            //         // params: {
            //         //     id: 1//this.district.id
            //         // }}
            //     )
            //         .then((response) => {
            //             this.cities = response.data;
            //             console.log(response.data);
            //         })
            //         .catch((error) => {
            //             console.log("Ошибка! населенка");
            //             console.log(error);
            //         })
            // },
        }
    }
</script>

<style lang="scss" scoped>
    @import './src/styles/_variable';

    * {
        margin: 0;
        padding: 0;
    }

    section.find_hospitals.container {
        margin: auto;
        padding-top: 40px;
        h3 {
            text-align: center;
            margin-bottom: 25px;
        }
        ul {
            width: 100%;
            list-style-type: circle;
            li {
                border-bottom: 1px solid #020202;
                margin-bottom: 30px;
                h4 {
                    font-size: 1.5rem;
                    padding: 0 15px;
                }

            }
        }

        ol {
            width: 100%;
            list-style-type: none;
            li {
                border-bottom: 1px solid #dddddd;
                color: $font_color;
                p, a {
                    padding: 10px;
                    font-size: 1rem;
                }
            }
        }
    }

</style>