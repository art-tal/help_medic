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
                        <div class="col-7">{{getHospital.area}}</div>
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
                <div class="row row_header">
                    <div class="col-6">Найменування</div>
                    <div class="col-2">Наявна кількість, шт</div>
                    <div class="col-2">Необхідна кількість, шт</div>
                    <div class="col-2">Орієнтовна вартість, грн</div>
                </div>

                <div class="row" v-for="(thing, key) in things" :key="key">
                    <div class="col-6">{{thing.thing_name}}</div>
                    <div class="col-2">{{thing.quantity_available}} шт</div>
                    <div class="col-2">{{thing.required_amount}} шт</div>
                    <div class="col-2">{{thing.estimated_cost}} грн</div>
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
                things: null,
            }
        },

        computed: {
            getHospital() {
                return this.$store.getters.getHospital;
            }
        },

        created() {
            this.getThings();
        },

        methods: {
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
                            thing_name:'маска',
                            quantity_available: 5,
                            required_amount: 150,
                            estimated_cost: 10,
                        },
                        {
                            thing_name:'спирт',
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
        margin: auto;
        header {
            margin: 25px 0 30px;
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
                            font-size: 1.3rem;
                            color: $font_color;
                            i {
                                margin-right: 10px;
                                display: inline-block;
                            }
                            h5 {
                                display: inline;
                            }

                        }
                    }
                }
            }
        }
    }

</style>