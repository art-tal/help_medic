<template>
    <section class="container-fluid">
        <header class="text-center">
            <h1>Що необхідно</h1>
        </header>

        <div class="body">

<!--            <button class="btn btn-dark">Cортувати за найбільшою потребою</button>-->

            <div class="row header font-weight-bold">
                <div class="col-3 text-center">Лікарня</div>
                <div class="col-3 text-center">Назва</div>
                <div class="col-1 text-center">Тип</div>
                <div class="col-2 text-center">Пакування</div>
                <div class="col-1 text-center">Наявнівсть, шт.</div>
                <div class="col-1 text-center">Необхідно, шт.</div>
                <div class="col-1 text-center">Орієнтовна вартість, грн.</div>
            </div>

            <div class="row" v-for="(need, key) in needs" :key="key">
                <div class="col-5 sub_header">Лікарня</div>
                <div class="col-lg-3 col-7">
                    <a @click.prevent="setHospital(hosp)">{{need.hospital_name}}</a>
                </div>
                <div class="col-5 sub_header">Назва</div>
                <div class="col-lg-3 col-7">{{need.medication_name}}</div>
                <div class="col-5 sub_header">Тип</div>
                <div class="col-lg-1 col-7">{{need.type_drug_name}}</div>
<!--                <div class="col-5 sub_header">Форма відпуску</div>-->
                <div class="col-5 sub_header">Пакування</div>
                <div class="col-lg-2 col-7">{{need.description}}</div>
                <div class="col-5 sub_header">Наявнівсть, шт.</div>
                <div class="col-lg-1 col-7">{{need.count_available}}</div>
                <div class="col-5 sub_header">Необхідно, шт.</div>
                <div class="col-lg-1 col-7">{{need.count_needed}}</div>
                <div class="col-5 sub_header">Орієнтовна вартість, грн.</div>
                <div class="col-lg-1 col-7">{{need.cost_hrn}}</div>
            </div>

        </div>

    </section>
</template>

<script>
    import axios from "axios"

    export default {
        name: "Need",

        data() {
            return {
                needs: null,
            }
        },

        created() {
            this.getNeeds();
        },

        methods: {
            getNeeds() {
                axios.get(
                    "https://helpmedic.atlant-mega.com/ajax/need/all"
                )
                .then( (response) => {
                    this.needs = response.data;
                    console.log(this.needs);
                } )
                .catch( (error) => {
                    console.log("Ошибка!");
                    console.log(error);
                } );
               // this.gettingHospital();
            //
            },


            // gettingHospital() {
            //     axios.get(
            //         "https://helpmedic.atlant-mega.com/ajax/hospitals",
            //         {params: {id: 1}},
            //     )
            //         .then((response) => {
            //             this.getHospital = response.data;
            //             console.log(this.hospital);
            //         })
            //         .catch((error) => {
            //             console.log("Ошибка нет Больницы");
            //             console.log(error);
            //         });
            // },





            setHospital(hospital) {
                this.$store.state.hospital = hospital;
                // console.log(hospital)
                this.$router.push({name: "hospital", params: {id: hospital.id}});
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

    section.container-fluid {
        padding-bottom: 40px;
        header {
            box-sizing: border-box;
            background-image: url(../image/med-1.webp);
            background-repeat: no-repeat;
            -webkit-background-size: 100%;
            background-size: 100%;
            background-position: center 0;
            height: 30vh;
            h1 {
                padding: 40px 0;
                font-size: 4.5rem;
            }
        }

        .body {
            padding: 30px;
            .row {
                div {
                    padding: 5px;
                    border: 1px solid #aaaaaa;
                    &.sub_header {
                        display: none;
                    }
                    a {
                        color: darkblue;
                    }
                }

            }
        }
    }

    @media (min-width: 992px) and (max-width: 1199.9px) {
        section.container-fluid {
            .body {
                .row {
                    div {
                        font-size: 1.3vw;
                    }

                }
            }
        }
    }

    @media (max-width: 991.9px) {
        section.container-fluid {
            min-width: 470px;
            padding-bottom: 40px;
            header {
                h1 {
                    font-size: 3.5rem;
                }
            }

            .body {
                .row {
                    border: 2px solid #aaaaaa;
                    border-radius: 15px;
                    margin-bottom: 15px;
                    padding: 15px;
                    div {
                        padding: 5px;
                        border: none;
                        border-bottom: 1px solid #aaaaaa;
                        &.sub_header {
                            display: block;
                            border-right: 1px solid #aaaaaa;
                            font-weight: bold;
                        }
                    }
                    &.header {
                        display: none;
                    }

                }
            }
        }
    }

</style>