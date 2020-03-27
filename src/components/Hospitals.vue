<template>
    <section class="find_hospitals container">
        <h3>Знайдені медичні заклади</h3>


        <ul class="area">
            <li class="area_item" v-for="(ar,key) in areas" :key="key">
                <h4>{{ar.area_name}}</h4>
                <ol class="cities">
                    <li class="cit_item"
                        v-for="(city, key) in cities.filter( cit => cit.area_id === ar.area_id)"
                        :key="key">
                        <ul class="hospital"
                            v-for="(hosp, key) in hospitals.filter( hosp => hosp.city_id === city.id )"
                            :key="key"
                        >
                            <li class="hosp_item row">
                                <p class="col-2">{{city.name}}</p>
                                <a class="col-8" @click.prevent="setHospital(hosp)">{{hosp.name}}</a>
                                <p class="col-2">{{hosp.address}}</p>
                            </li>
                        </ul>
                    </li>
                </ol>
            </li>
        </ul>

    </section>
</template>

<script>
    import axios from "axios";

    export default {
        name: "Hospitals",

        data() {
            return {
                areas: null,
                cities: null,
                area: null,
                hospitals: null,
            }
        },

        created() {
            this.getAreas();
            this.getCities();
            this.getHospitals();
        },

        computed: {
          getArea() {
              console.log(this.$store.getters.getArea);
              return this.$store.getters.getArea
          },

            getCity() {
                console.log(this.$store.getters.getCity);
              return this.$store.getters.getCity;
            },
        },

        watch: {
            getArea() {
                if (this.$store.getters.getArea) {
                    this.areas = [this.$store.getters.getArea];
                    this.filterHospital();
                } else {
                    this.getAreas();
                    this.getCities();
                    this.getHospitals();
                }
                return this.getArea;
            },
        },

        methods: {

            getAreas() {
                axios.get(
                    "https://helpmedic.atlant-mega.com/ajax/areas"
                )
                    .then((response) => {
                        this.areas = response.data;
                        // console.log(this.areas);
                    })
                    .catch((error) => {
                        console.log("Ошибка!");
                        console.log(error);
                    })
            },

            getCities() {
                axios.get('https://helpmedic.atlant-mega.com/ajax/cities/all'

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

            getHospitals() {
                axios.get(
                    "https://helpmedic.atlant-mega.com/ajax/hospitals/all"
                )
                    .then( (response) => {
                        this.hospitals = response.data;
                        console.log(this.hospitals);
                    } )
                    .catch( (error) => {
                        console.log("Ошибка Загрузки данных");
                        console.log(error);
                    } )
            },

            filterHospital() {

                if (this.getCity.name) {
                    this.cities = [this.getCity]
                } else {
                    let tempCities = this.cities.filter( city => city.area_id === this.getArea.area_id );
                    this.cities = tempCities;
                }
            },

            setHospital(hospital) {
                this.$store.state.hospital = hospital;
                // console.log(hospital)
                this.$router.push({name: "hospital", params: {id: hospital.id}});
            },
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
        ul.area {
            width: 100%;
            list-style-type: circle;
            li.area_item {
                margin-bottom: 30px;
                h4 {
                    font-size: 1.5rem;
                    padding: 0 15px 10px;
                    border-bottom: 1px solid #020202;
                }
                ol.cities {
                    width: 100%;
                    list-style-type: none;
                    li.cit_item {
                        ul.hospital {
                            li.hosp_item.row {
                                border-bottom: 1px solid #dddddd;
                                color: $font_color;
                                p, a {
                                    padding: 10px;
                                    font-size: 1rem;
                                }
                                a {
                                    cursor: pointer;
                                    color: darkblue;
                                }
                            }
                        }

                    }
                }
            }
        }








    }

</style>