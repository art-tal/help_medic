<template>
    <section class="container-fluid">
        <header class="text-center">
            <h1>Що необхідно</h1>
        </header>

        <div class="body">

            <div class="row setting">

                <article class="filters col-lg-9 col-12">
                    <form name="body">
                        <header>
                            <h1>Фільтри
                                <input type="reset"
                                       class="btn btn-dark"
                                       @click.prevent="reset()"
                                       value="Скинути усі фільтри">
                            </h1>

                        </header>

                        <div class="row wrap">
                            <div class="select city col-lg-3 col-md-6 col-12">
                                <label for="city" class="font-weight-bold">Місто</label>
                                <select name="city" id="city"
                                        v-model="filterCity"
                                >
                                    <option value="Не обрано" disabled selected>Не обрано</option>
                                    <option
                                            v-for="(city, key) in cities"
                                            :key="key"
                                            :value="city.name"
                                    >{{city.name}}</option>
                                </select>
                            </div>

                            <div class="select hospital col-lg-3 col-md-6 col-12">
                                <label for="hospital" class="font-weight-bold">Лікарні</label>
                                <select name="hospital" id="hospital"
                                        v-model="filterHospital"
                                >
                                    <option value="Не обрано" disabled selected>Не обрано</option>
                                    <option
                                            v-for="(hosp, key) in hospitals"
                                            :key="key"
                                            :value="hosp.name"
                                    >{{hosp.name}}</option>
                                </select>
                            </div>

                            <div class="select type col-lg-3 col-md-6 col-12">
                                <label for="type" class="font-weight-bold">Тип препарату</label>
                                <select name="type" id="type"
                                        v-model="filterType"
                                        @change="selectedFilter()"
                                >

                                    <option value="Не обрано" disabled selected>Не обрано</option>
                                    <option
                                            v-for="(type, key) in types"
                                            :key="key"
                                            :value="type.name"
                                    >{{type.name}}</option>
                                </select>
                            </div>

                            <div class="first_need col-lg-3 col-md-6 col-12">
                                <input id="first_need" type="checkbox" v-model="filterFirstNeed" value="1">
                                <label for="first_need" class="font-weight-bold">
                                    Є першою необхідністю
                                    <span><i class="fas fa-check"></i></span>
                                </label>
                            </div>

                        </div>

                    </form>
                </article>


                <div class="col-lg-3 col-12 row sort p-0">

                    <form name="sort" class="col-lg-9 col-md-10 col-10 pl-0">
                        <label for="sort" class="font-weight-bold">Сортувати</label>
                        <select name="sortOf"
                                id="sort"
                                v-model="sortCallBack"
                                @change="sortCallBack()">
                            <option selected="selected" disabled="disabled">Не сортовано</option>
                            <option :value="sortHospital">За лікарнями</option>
                            <option :value="sortName">За назвою</option>
                            <option :value="sortCountry">За країною виробництва</option>
                            <option :value="sortVendor">За постачальником</option>
                            <option :value="sortType">За типом</option>
                        </select>


                    </form>

                    <div class="col-2 text-center">
                        <button class="btn btn-dark" @click="sortReverseNeeds(sortCallBack)" title="Звернути сортування"><i class="fas fa-history"></i></button>
                    </div>
                </div>

            </div>





            <div class="row header font-weight-bold">
                <div class="col-2 text-center">Лікарня</div>
                <div class="col-2 text-center">Назва</div>
                <div class="col-1 text-center">Країна походження</div>
                <div class="col-1 text-center">Постачальник</div>
                <div class="col-1 text-center">Тип</div>
                <div class="col-2 text-center">Опис</div>
                <div class="col-1 text-center">Наявнівсть, шт.</div>
                <div class="col-1 text-center">Необхідно, шт.</div>
                <div class="col-1 text-center">Орієнтовна вартість, грн. ($)</div>
            </div>

            <div class="row" v-for="(need, key) in filtered" :key="key">
                <div class="col-5 sub_header">Лікарня</div>
                <div class="col-lg-2 col-7">
                    <a @click.prevent="setHospital(need.hospital_id)">{{need.hospital_name}}</a>,
                    <span class="city">{{need.city_name}},</span>
                    <span class="address">{{need.address}},</span>
                    <span class="tel">{{need.tel}}</span>
                </div>
                <div class="col-5 sub_header">Назва</div>
                <div class="col-lg-2 col-7">{{need.medication_name}}</div>

                <div class="col-5 sub_header">Країна походження</div>
                <div class="col-lg-1 col-7 text-center">{{need.vendor_country}}</div>

                <div class="col-5 sub_header">Постачальник</div>
                <div class="col-lg-1 col-7 text-center">{{need.vendor_name}}</div>

                <div class="col-5 sub_header">Тип</div>
                <div class="col-lg-1 col-7 text-center">{{need.type_drug_name}}</div>

                <div class="col-5 sub_header">Опис</div>
                <div class="col-lg-2 col-7">{{need.description}}</div>

                <div class="col-5 sub_header">Наявнівсть, шт.</div>
                <div class="col-lg-1 col-7 text-center">{{need.count_available}}</div>

                <div class="col-5 sub_header">Необхідно, шт.</div>
                <div class="col-lg-1 col-7 text-center">{{need.count_needed}}</div>

                <div class="col-5 sub_header">Орієнтовна вартість, грн. ($)</div>
                <div class="col-lg-1 col-7 text-center">
                    {{need.cost_hrn | formattedPrice}} &#8372;<br/>
                    <strong>(${{need.cost_doll | formattedPrice}})</strong>
                </div>
            </div>

        </div>

    </section>
</template>

<script>
    import axios from "axios"
    import formattedPrice from "../filters/price_format";
    import mixinSort from "../mixins/mixinSort";

    export default {
        name: "Need",

        data() {
            return {
                needs: null,
                sortCallBack: null,

                types: [],
                cities: [],
                hospitals: [],

                filterType: "Не обрано",
                filterCity: "Не обрано",
                filterHospital: "Не обрано",
                filterFirstNeed: 0,

            }
        },

        metaInfo: {
            title: 'HelpMedic | Потреби всіх лікарень Миколаївської області',
            meta: [
                {
                    vmid: "description",
                    name: "description",
                    content: `Лікарні Миколаївської області потребують допомоги в придбанні необхідних засобів для запобігання та боротьби з covid-19`
                },
                {
                    vmid: "keywords",
                    name: "keywords",
                    content: `Терміново необхідно, Миколаївська область, необхідні засоби, епідемія, covid-19`
                },
            ],
        },

        filters: {
            formattedPrice
        },

        mixins: [
            mixinSort,
        ],

        computed: {
            filtered() {
                return this.needs
                    .filter( need => {
                        return this.filterCity  === "Не обрано" || need.city_name.indexOf(this.filterCity) > -1  })
                    .filter( need => {
                        return this.filterHospital  === "Не обрано" || need.hospital_name.indexOf(this.filterHospital) > -1  })
                    .filter( need => {
                        return this.filterType  === "Не обрано" || need.type_drug_name.indexOf(this.filterType) > -1  })
                    .filter( need => {
                        return +this.filterFirstNeed === 0 || need.first_need > 0
                    } )
            },
        },

        watch: {
            sortCallBack() {
                return this.sortCallBack;
            },
        },

        created() {
            this.getNeeds();
            this.getCities();
        },

        mounted() {
            this.getType();
            this.getHospitals();
        },

        methods: {
            getNeeds() {
                axios.get(
                    "https://helpmedic.atlant-mega.com/ajax/need/all"
                )
                .then( (response) => {
                    this.needs = response.data;
                } )
                .catch( (error) => {
                    console.log("Ошибка!");
                    console.log(error);
                } );
            },

            getType() {
                axios.get("https://helpmedic.atlant-mega.com/ajax/medication/all_type")
                    .then( (response) => {
                        this.types = response.data;
                    } )
                    .catch( (error) => {
                        console.log("Ошибка типов препаратов");
                        console.log(error);
                    } )
            },

            getCities() {
                axios.get('https://helpmedic.atlant-mega.com/ajax/cities/all' )
                    .then( (response) => {
                        this.cities = response.data;
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
                    } )
                    .catch( (error) => {
                        console.log("Ошибка Загрузки данных");
                        console.log(error);
                    } )
            },

            reset() {
                this.filterCity = "Не обрано";
                this.filterHospital = "Не обрано";
                this.filterType = "Не обрано";
                this.filterFirstNeed = 0;
            },

            setHospital(hospital) {
                this.$store.state.hospital = hospital;
                this.$router.push({name: "hospital", params: {id: hospital}});
            },

        },
    }
</script>

<style lang="scss" scoped>
    @import '../styles/_variable';

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

            .row.setting {

                article.filters {
                    padding: 10px;
                    margin-bottom: 15px;
                    border: 1px solid #00AEEF;
                    border-radius: 10px;
                    box-sizing: border-box;
                    form {
                        header {
                            display: inline-block;
                            width: auto;
                            background: none;
                            height: auto;
                            border-bottom: 1px solid #aaaaaa;
                            h1 {
                                font-size: 1.75rem;
                                margin-bottom: 15px;
                                padding: 0;
                                display: inline-block;
                                input[type='reset'] {
                                    @include button;
                                    width: auto;
                                    display: inline-block;
                                }
                            }



                        }
                        .wrap.row {
                            border: none;
                            .select {
                                border: none;
                                label {
                                    margin-bottom: 5px;
                                }
                                select {
                                    @include select;
                                    width: 100%;
                                    margin-bottom: 0;
                                }
                            }
                            .first_need {
                                border: none;
                                label {
                                    width: 250px;
                                    margin-bottom: 5px;
                                    display: inline-block;
                                    span {
                                        vertical-align: middle;
                                        margin: 0;
                                        margin-left: 15px;
                                        padding: 0;
                                        width: 18px;
                                        height: 18px;
                                        border: 1px solid #aaaaaa;
                                        border-radius: 4px;
                                        display: inline-block;
                                        i {
                                            display: none;
                                            color: forestgreen;
                                            font-size: 1.5rem;
                                            position: relative;
                                            top: -7px;
                                            left: -1px;
                                        }
                                    }
                                }
                                input[type='checkbox'] {
                                    display: none;
                                    &:checked + label > span > i {
                                        display: inline;
                                    }
                                }
                            }
                        }


                    }
                }

                .row.sort {
                    border: none;
                    margin-bottom: 30px;
                    align-items: flex-end;
                    justify-content: space-between;
                    form {
                        border: none;
                        label {
                            margin-bottom: 5px;
                            margin-left: 10px;
                        }
                        select {
                            @include select;
                            margin: 0 10px;
                        }
                    }
                    div {
                        border: none;
                        button {
                            @include button;
                            height: 47px;
                            width: 47px;
                        }
                    }
                }
            }


            .row {
                div {
                    padding: 5px;
                    border: 1px solid #aaaaaa;
                    font-size: 1.2vw;
                    span {
                        display: block;
                        margin-top: 5px;
                    }
                    &.sub_header {
                        display: none;
                    }
                    a {
                        color: darkblue;
                        cursor: pointer;
                    }
                }
                &.header {
                    div {
                        font-size: 1vw;
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
                    &.header {
                        div {
                            font-size: 1vw;
                        }
                    }

                }
            }
        }
    }

    @media (min-width: 992px) and (max-width: 1199.9px) {
        section.container-fluid {
            .body {
                .row.setting {

                    article.filters {
                        form {
                            .wrap.row {
                                .first_need {
                                    label {
                                        text-align: center;
                                        width: auto;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    @media (min-width: 576px) and (max-width: 991.9px) {
        section.container-fluid {
            min-width: 400px;
            padding-bottom: 40px;
            header {
                h1 {
                    font-size: 3.5rem;
                }
            }

            .body {

                .row.setting {
                    border: none;
                    padding: 0;
                    article.filters {
                        form {
                            .wrap.row {
                                .first_need {
                                    text-align: center;
                                    padding-top: 45px;
                                    label {
                                        width: auto;
                                    }
                                }
                            }
                        }
                    }

                    .row.sort {
                        form {
                            label {
                                margin-left: 0;
                            }
                            select {
                                margin: 0;
                            }
                        }
                    }
                }

                .row {
                    border: 2px solid #aaaaaa;
                    border-radius: 15px;
                    margin-bottom: 15px;
                    padding: 15px;
                    div {
                        font-size: 1.2rem;
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

    @media (max-width: 575.9px) {
        section.container-fluid {
            min-width: 400px;
            padding-bottom: 40px;
            header {
                h1 {
                    font-size: 2.5rem;
                }
            }

            .body {

                .row.setting {
                    border: none;
                    padding: 0;
                    article.filters {
                        form {
                            .wrap.row {
                                .first_need {
                                    text-align: center;
                                    padding-top: 45px;
                                    label {
                                        width: auto;
                                    }
                                }
                            }
                        }
                    }

                    .row.sort {
                        form {
                            label {
                                margin-left: 0;
                            }
                            select {
                                margin: 0;
                            }
                        }
                    }
                }

                .row {
                    border: 2px solid #aaaaaa;
                    border-radius: 15px;
                    margin-bottom: 15px;
                    padding: 15px;
                    div {
                        font-size: 1.0rem;
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