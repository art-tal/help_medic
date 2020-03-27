<template>
    <section class="hospital container">
        <header>
            <h1>{{getHospital.name}}</h1>
        </header>

        <div class="body">
            <div class="data_hospital row">
                <div class="map col-5"></div>
                <div class="data col-7">

                    <div class="field row">
                        <div class="col-4">
                            <i class="fas fa-phone-square-alt"></i>
                            <h5>Телефон:</h5>
                        </div>
                        <div class="col-8">{{getHospital.tel}}</div>
                    </div>

                    <div class="field row">
                        <div class="col-4">
                            <i class="fas fa-map-marker-alt"></i>
                            <h5>Район:</h5>
                        </div>
                        <div class="col-8">{{getHospital.area}}</div>
                    </div>

                    <div class="field row">
                        <div class="col-4">
                            <i class="far fa-map"></i>
                            <h5>Адреса:</h5>
                        </div>
                        <div class="col-8">{{getHospital.address}}</div>
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

                <h2 class="text-center">Що нам необхідно</h2>

                <div class="row row_header">
                    <div class="col-6 font-weight-bold text-center">Найменування</div>
                    <div class="col-2 font-weight-bold text-center">Наявна кількість, шт</div>
                    <div class="col-2 font-weight-bold text-center">Необхідна кількість, шт</div>
                    <div class="col-2 font-weight-bold text-center">Орієнтовна вартість, грн</div>
                </div>

                <div class="row" v-for="(thing, key) in things" :key="key">
                    <div class="col-6">{{thing.thing_name}}</div>
                    <div class="col-2 text-center">{{thing.quantity_available}} шт</div>
                    <div class="col-2 text-center">{{thing.required_amount}} шт</div>
                    <div class="col-2 text-center">{{thing.estimated_cost}} грн</div>
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
                hospitalId: null,
                getHospital: null,
                things: null,
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
            this.getThings();
        },

        methods: {

            gettingHospital() {
                axios.get(
                    "https://helpmedic.atlant-mega.com/ajax/hospitals/all"
                )
                    .then( (response) => {
                        let hospitals = response.data;
                        this.getHospital = hospitals.find( hosp => hosp.id == this.hospitalId );
                        console.log(this.hospital);
                    } )
                    .catch( (error) => {
                        console.log("Ошибка Загрузки данных");
                        console.log(error);
                    } )
            },

            getThings() {
                axios.get(
                    'https://helpmedic.atlant-mega.com/ajax/--------',
                    {params: { hospital_id: this.getHospital}}
                )
                .then( (response) => {
                    this.things = response.data;
                    console.log(this.things);
                } )
                .catch( (error) => {
                    console.log("Ошибка товара");
                    console.log(error);
                    /////////////////////////////////////////
                    this.things = [
                        {
                            thing_name:'Маска',
                            quantity_available: 5,
                            required_amount: 150,
                            estimated_cost: 10,
                        },
                        {
                            thing_name:'Спирт',
                            quantity_available: 10,
                            required_amount: 500,
                            estimated_cost: 35,
                        },
                        {
                            thing_name:'Парацетомол',
                            quantity_available: 12,
                            required_amount: 350,
                            estimated_cost: 13,
                        },
                    ];
                    /////////////////////////////////////////
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
                font-size: 1.5rem;
            }
        }

        .body {
            .data_hospital.row {
                .data {
                    .field.row {
                        border-bottom: 1px solid #dddddd;
                        padding: 10px 0;
                        div {
                            font-size: 1.2rem;
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
                .row.row_header, .row {
                    font-size: 1.2rem;
                    div {
                        border: 1px solid #dddddd;
                        padding: 5px;
                        &:first-child {
                            padding-left: 15px;
                        }
                    }
                }
            }
        }
    }

</style>