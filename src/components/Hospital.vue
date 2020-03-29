<template>
    <section class="hospital container">
        <header>
            <h1>{{getHospital.name}}</h1>
        </header>

        <div class="body">
            <div class="data_hospital row">
                <div class="map col-lg-6 col-12">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d821116.2854233051!2d31.588305633583683!3d47.4672520037775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c59abab155d4c9%3A0x9382d10df151ad2e!2z0J3QuNC60L7Qu9Cw0LXQstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGM!5e0!3m2!1sru!2sua!4v1585406198748!5m2!1sru!2sua" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
                <div class="data col-lg-6 col-12">

                    <div class="field row">
                        <div class="col-4">
                            <i class="fas fa-map"></i>
                            <h5>Район:</h5>
                        </div>
                        <div class="col-8">{{area.area_name}}</div>
                    </div>

                    <div class="field row">
                        <div class="col-4">
                            <i class="far fa-map"></i>
                            <h5>Місто:</h5>
                        </div>
                        <div class="col-8">{{city.name}}</div>
                    </div>

                    <div class="field row">
                        <div class="col-4">
                            <i class="fas fa-map-marked-alt"></i>
                            <h5>Адреса:</h5>
                        </div>
                        <div class="col-8">{{getHospital.address}}</div>
                    </div>

                    <div class="field row">
                        <div class="col-4">
                            <i class="fas fa-phone-square-alt"></i>
                            <h5>Телефон:</h5>
                        </div>
                        <div class="col-8">{{getHospital.tel}}</div>
                    </div>




                    <div class="field row">
                        <div class="col-4">
                            <i class="fas fa-book-open"></i>
                            <h5>ЄДРПОУ:</h5>
                        </div>
                        <div class="col-8">{{getHospital.invoice}}</div>
                    </div>

                </div>
            </div>

            <div class="needs">

                <h2 class="text-center"  v-if="needs.length > 0">Що нам необхідно</h2>
                <h2 class="text-center"  v-else>Немає даних</h2>

                <div class="row header font-weight-bold" v-if="needs.length > 0">
                    <div class="col-2 text-center">Назва</div>
                    <div class="col-2 text-center">Тип</div>
                    <div class="col-2 text-center">Пакування</div>
                    <div class="col-2 text-center">Наявнівсть, шт.</div>
                    <div class="col-2 text-center">Необхідно, шт.</div>
                    <div class="col-2 text-center">Орієнтовна вартість, грн.</div>
                </div>

                <div class="row" v-for="(need, key) in needs" :key="key">
                    <div class="sub_header col-5 font-weight-bold">Назва</div>
                    <div class="col-lg-2 col-7">{{need.medication_name}}</div>
                    <div class="sub_header col-5 font-weight-bold">Тип</div>
                    <div class="col-lg-2 col-7 text-center">{{need.type_drug_name}}</div>
                    <div class="sub_header col-5 font-weight-bold">Пакування</div>
                    <div class="col-lg-2 col-7 text-center">{{need.description}}</div>
                    <div class="sub_header col-5 font-weight-bold">Наявнівсть, шт.</div>
                    <div class="col-lg-2 col-7 text-center">{{need.count_available}}</div>
                    <div class="sub_header col-5 font-weight-bold">Необхідно, шт.</div>
                    <div class="col-lg-2 col-7 text-center">{{need.count_needed}}</div>
                    <div class="sub_header col-5 font-weight-bold">Орієнтовна вартість, грн.</div>
                    <div class="col-lg-2 col-7 text-center">{{need.cost_hrn}}</div>

                </div>
            </div>


        </div>
    </section>
</template>

<script>
    import axios from "axios"
    export default {
        name: "Hospital",

        data() {
            return {
                area: null,
                city: null,
                hospitalId: null,
                getHospital: null,
                needs: null,
            }
        },

        computed: {
            // getHospital() {
            //     return this.$store.getters.getHospital;
            // },

            // getHospitalId() {
            //     console.log(this.route.params.id);
            //   return this.route.params.id;
            // }
        },

        created() {
            this.hospitalId = this.$route.params.id;
            this.gettingHospital();
            this.getNeeds();
            this.findCity();
            this.findArea();
        },

        methods: {

            gettingHospital() {
                axios.get(
                    "https://helpmedic.atlant-mega.com/ajax/hospitals/all"
                )
                    .then( (response) => {
                        let hospitals = response.data;
                        this.getHospital = hospitals.find( hosp => hosp.id === this.hospitalId );
                        console.log(this.hospital);
                    } )
                    .catch( (error) => {
                        console.log("Ошибка нет Больницы");
                        console.log(error);
                    } )
            },

            getNeeds() {
                axios.get(
                    'https://helpmedic.atlant-mega.com/ajax/need',
                    {params: { id: this.hospitalId}}
                )
                .then( (response) => {
                    this.needs = response.data;
                    console.log(this.things);
                } )
                .catch( (error) => {
                    console.log("Ошибка, нет потребностей");
                    console.log(error);
                    /////////////////////////////////////////
                    // this.things = [
                    //     {
                    //         thing_name:'Маска',
                    //         quantity_available: 5,
                    //         required_amount: 150,
                    //         estimated_cost: 10,
                    //     },
                    //     {
                    //         thing_name:'Спирт',
                    //         quantity_available: 10,
                    //         required_amount: 500,
                    //         estimated_cost: 35,
                    //     },
                    //     {
                    //         thing_name:'Парацетомол',
                    //         quantity_available: 12,
                    //         required_amount: 350,
                    //         estimated_cost: 13,
                    //     },
                    // ];
                    /////////////////////////////////////////
                } )
            },

            findCity() {
                axios.get(
                    'https://helpmedic.atlant-mega.com/ajax/cities/all'
                )
                    .then( (response) => {
                        let temp = response.data;
                        this.city = temp.find( c => c.id === this.getHospital.city_id );
                    } )
                    .catch( (error) => {
                        console.log('Ошибка, нет города');
                        console.log(error);
                    } )
            },

            findArea() {
                axios.get(
                    "https://helpmedic.atlant-mega.com/ajax/areas"
                )
                    .then( (response) => {
                        let temp = response.data;
                        this.area = temp.find( ar => ar.area_id === this.city.area_id );
                    } )
                    .catch( (error) => {
                        console.log('Ошибка, нет района');
                        console.log(error);
                    } )
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

    section.hospital.container {
        margin: 30px auto 60px;
        header {
            margin-bottom: 30px;
            h1 {
                font-size: 2rem;
            }
        }

        .body {
            .data_hospital.row {
                .map {
                    padding: 10px 30px 10px 0;
                }
                .data {
                    padding-top: 25px;
                    .field.row {
                        border-bottom: 1px solid #dddddd;
                        padding: 15px 0;
                        div {
                            font-size: 1.3rem;
                            color: $font_color;
                            i {
                                margin-right: 15px;
                                display: inline;
                            }
                            h5 {
                                display: inline;
                            }

                        }
                    }
                }
            }

            .needs {
                margin-top: 50px;
                h2 {
                    margin-bottom: 30px;
                }
                .row.header, .row {
                    font-size: 1.2rem;
                    div {
                        border: 1px solid #aaaaaa;
                        padding: 5px;
                        &:first-child {
                            padding-left: 15px;
                        }
                        &.sub_header {
                            display: none;
                        }
                    }
                }
            }
        }
    }

    @media (min-width: 575.9px) and (max-width: 992px) {
    /*@media (max-width: 992px) {*/
        section.hospital.container {
            min-width: 470px;
            header {
                h1 {
                    text-align: center;
                }
            }
            .body {
                .data_hospital.row {
                    .map {
                        padding: 0;
                    }
                }

                .needs {
                    .header {
                        display: none;
                    }
                    .row {
                        border: 2px solid #aaaaaa;
                        border-radius: 15px;
                        padding: 15px;
                        div {
                            border: none;
                            border-bottom: 1px solid #aaaaaa;
                            padding: 5px;
                            text-align: center;
                            &:first-child {
                                padding-left: 5px;
                            }
                            &:last-child, &:nth-child(11) {
                                border-bottom: none;
                            }
                            &.sub_header {
                                text-align: left;
                                display: block;
                                font-weight: bold;
                                border-right: 1px solid #aaaaaa;

                            }

                        }
                    }
                }
            }
        }
    }

    @media (max-width: 576px) {
        section.hospital.container {
            min-width: 470px;
            padding-left: 20px;
            padding-right: 20px;
            header {
                h1 {
                    text-align: center;
                }
            }
            .body {
                .data_hospital.row {
                    .map {
                        padding: 0;
                    }
                }

                .needs {
                    .header {
                        display: none;
                    }
                    .row {
                        border: 2px solid #aaaaaa;
                        border-radius: 15px;
                        padding: 15px;
                        div {
                            border: none;
                            border-bottom: 1px solid #aaaaaa;
                            padding: 5px;
                            text-align: center;
                            &:first-child {
                                padding-left: 5px;
                            }
                            &:last-child, &:nth-child(11) {
                                border-bottom: none;
                            }
                            &.sub_header {
                                text-align: left;
                                display: block;
                                font-weight: bold;
                                border-right: 1px solid #aaaaaa;

                            }

                        }
                    }
                }
            }
        }
    }

</style>