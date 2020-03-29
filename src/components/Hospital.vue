<template>
    <section class="hospital container">
        <header>
            <h1>{{hospital.name}}</h1>
        </header>

        <div class="body">
            <div class="data_hospital row">
                <div class="map col-lg-6 col-12">
<!--                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d821116.2854233051!2d31.588305633583683!3d47.4672520037775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c59abab155d4c9%3A0x9382d10df151ad2e!2z0J3QuNC60L7Qu9Cw0LXQstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGM!5e0!3m2!1sru!2sua!4v1585406198748!5m2!1sru!2sua" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>-->
                </div>
                <div class="data col-lg-6 col-12">

<!--                    <div class="field row">-->
<!--                        <div class="col-4">-->
<!--                            <i class="fas fa-map"></i>-->
<!--                            <h5>Район:</h5>-->
<!--                        </div>-->
<!--                        <div class="col-8">{{area.area_name}}</div>-->
<!--                    </div>-->

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
                        <div class="col-8">{{hospital.address}}</div>
                    </div>

                    <div class="field row">
                        <div class="col-4">
                            <i class="fas fa-phone-square-alt"></i>
                            <h5>Телефон:</h5>
                        </div>
                        <div class="col-8">{{hospital.tel}}</div>
                    </div>




                    <div class="field row">
                        <div class="col-4">
                            <i class="fas fa-book-open"></i>
                            <h5>ЄДРПОУ:</h5>
                        </div>
                        <div class="col-8">{{hospital.invoice}}</div>
                    </div>

                </div>
            </div>

            <div class="needs">

                <h2 class="text-center"  v-if="needs.length > 0">Що нам необхідно</h2>
                <h2 class="text-center"  v-else>Немає даних</h2>

                <div class="row add p-0">
                    <div class="col-lg-3 col-md-5 pl-0">
                        <button class="btn btn-dark" @click="showFormNeed()">Додати необхідне</button>
                    </div>
                </div>


                <div class="row header font-weight-bold" v-if="needs.length > 0">
                    <div class="col-2 text-center">Назва</div>
                    <div class="col-1 text-center">Тип</div>
                    <div class="col-2 text-center">Пакування</div>
                    <div class="col-2 text-center">Наявнівсть, шт.</div>
                    <div class="col-2 text-center">Необхідно, шт.</div>
                    <div class="col-2 text-center">Орієнтовна вартість, грн.</div>
                    <div class="col-1 text-center"></div>
                </div>

                <div class="row" v-for="(need, key) in needs" :key="key">
                    <div class="sub_header col-5 font-weight-bold">Назва</div>
                    <div class="col-lg-2 col-7">{{need.medication_name}}</div>

                    <div class="sub_header col-5 font-weight-bold">Тип</div>
                    <div class="col-lg-1 col-7 text-center">{{need.type_drug_name}}</div>

                    <div class="sub_header col-5 font-weight-bold">Пакування</div>
                    <div class="col-lg-2 col-7 text-center">{{need.description}}</div>

                    <div class="sub_header col-5 font-weight-bold">Наявнівсть, шт.</div>
                    <div class="col-lg-2 col-7 text-center">
<!--                        {{need.count_available}}-->
                        <input type="text" v-model="need.count_available" :disabled="!need.show" >
<!--                        <i class="fas fa-pencil-alt" @click="startEdit(need, need.count_available)" v-if="editField"></i>-->
<!--                        <i class="far fa-check-circle" @click="endEdit(need, need.count_available)" v-else></i>-->
                    </div>

                    <div class="sub_header col-5 font-weight-bold">Необхідно, шт.</div>
                    <div class="col-lg-2 col-7 text-center">
<!--                        {{need.count_needed}}-->
                        <input type="text" v-model="need.count_needed" :disabled="'needitem' + key">
<!--                        <i class="fas fa-pencil-alt" @click="startEdit(need.count_needed)" v-if="editField"></i>-->
<!--                        <i class="far fa-check-circle" @click="endEdit(need, need.count_available)" v-else></i>-->
                    </div>

                    <div class="sub_header col-5 font-weight-bold">Орієнтовна вартість, грн.</div>
                    <div class="col-lg-2 col-7 text-center">{{need.cost_hrn}}</div>


                    <i class="fas fa-pencil-alt col-1" @click="startEdit('needitem' + key)" v-if="'needitem' + key"></i>
                    <i class="far fa-check-circle col-1" @click="endEdit('needitem' + key)" v-else></i>

                </div>
            </div>
<!--            v-if="getShowForm"-->
<!--            <div class="form" >-->
<!--                <form-need></form-need>-->
<!--            </div>-->

        </div>
    </section>
</template>

<script>
    import axios from "axios"
    // import FormNeed from "@/components/FormNeed";
    // import {eventEmitter} from "@/main";

    export default {
        name: "Hospital",

        components: {
            // FormNeed,
        },

        data() {
            return {
                // showForm: false,
                area: null,
                city: null,
                hospitalId: null,
                hospital: null,
                needs: null,

                editField: true,
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
            // getShowForm() {
            //     return this.showForm;
            // },
        },

        created() {
            this.hospitalId = this.$route.params.id;
            this.gettingHospital();
            this.getNeeds();
            this.findCity();
            // this.findArea();
            // eventEmitter.$on("closeFormNeed", this.showFormNeed);
        },





        methods: {

            gettingHospital() {
                // axios.get(
                //     "https://helpmedic.atlant-mega.com/ajax/hospitals",// +  this.$route.params.id,
                //     {params: { hospital_id: this.hospitalId}}
                // )
                //     .then( (response) => {
                //         this.hospital = response.data;
                //         console.log("hospital");
                //         console.log(response.data);
                //         // this.findCity();
                //     } )
                //     .catch( (error) => {
                //         console.log("Ошибка нет Больницы");
                //         console.log(error);
                //     } );



                axios.get(
                    "https://helpmedic.atlant-mega.com/ajax/hospitals/all"
                )
                    .then( (response) => {
                        let hospitals = response.data;
                        this.hospital = hospitals.find( hosp => hosp.id === this.hospitalId );
                        console.log(this.hospital);
                    } )
                    .catch( (error) => {
                        console.log("Ошибка нет Больницы");
                        console.log(error);
                    } );


            },

            getNeeds() {
                axios.get(
                    'https://helpmedic.atlant-mega.com/ajax/need',
                    {params: { id: this.hospitalId}}
                )
                .then( (response) => {
                    this.needs = response.data;
                    console.log("needs");
                    console.log(this.needs);
                    /////////////
                    for (let i=0; i<10; ++i) {
                        this.needs.push(this.needs[0]);
                    }

                } )
                .catch( (error) => {
                    console.log("Ошибка, нет потребностей");
                    console.log(error);
                } )
            },

            findCity() {
                // axios.get(
                //     'https://helpmedic.atlant-mega.com/ajax/cities',
                // {params: {city_id: this.hospital.city_id}}
                // )
                //     .then( (response) => {
                //         let temp = response.data;
                //         this.city = temp[0];
                //         console.log("city");
                //         console.log(this.city);
                //         // this.findArea();
                //     } )
                //     .catch( (error) => {
                //         console.log('Ошибка, нет города');
                //         console.log(error);
                //     } );

                // this.findArea();



                axios.get(
                    'https://helpmedic.atlant-mega.com/ajax/cities/all'
                )
                    .then( (response) => {
                        let temp = response.data;
                        this.city = temp.find( c => c.id === this.hospital.city_id );
                    } )
                    .catch( (error) => {
                        console.log('Ошибка, нет города');
                        console.log(error);
                    } );


            },

            // findArea() {
            //     axios.get(
            //         // "https://helpmedic.atlant-mega.com/ajax/areas?area_id=" + this.city.area_id,
            //         "https://helpmedic.atlant-mega.com/ajax/areas",
            //         {params: {area_id: this.city.area_id}}
            //     )
            //         .then( (response) => {
            //             this.area = response.data;
            //             console.log("area");
            //             console.log(this.area);
            //         } )
            //         .catch( (error) => {
            //             console.log('Ошибка, нет района');
            //             console.log(error);
            //         } )



                // axios.get(
                //     "https://helpmedic.atlant-mega.com/ajax/areas"
                // )
                //     .then( (response) => {
                //         let temp = response.data;
                //         this.area = temp.find( ar => ar.area_id === this.city.area_id );
                //     } )
                //     .catch( (error) => {
                //         console.log('Ошибка, нет района');
                //         console.log(error);
                //     } )
            // },

            // showFormNeed() {
            //     this.showForm = !this.showForm;
            //     console.log(this.showForm);
            // },

            startEdit(need) {
                need.show = true;
                console.log(need);
                // return field;
            },

            endEdit(need) {
                need.show = false;
                console.log(need.show);
                // return field;
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

                .row.add{
                    border: none;
                    position: sticky;
                    top: 10px;
                    background-color: #fff;
                    div {
                        border: none;
                        padding: 0;
                        button.btn.btn-dark {
                            @include button;
                            /*width: 200px;*/
                            margin-bottom: 20px;
                        }
                    }
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

                    .row.add{
                        border: none;
                        background-color: #fff;
                        div {
                            padding: 0;
                            button.btn.btn-dark {
                                @include button;
                                /*width: 200px;*/
                                margin-bottom: 20px;
                            }
                        }
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

                    .row.add{
                        border: none;
                        background-color: #fff;
                        div {
                            button.btn.btn-dark {
                                @include button;
                            }
                        }
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