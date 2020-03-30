<template>
    <section class="hospital container-fluid">
        <header>
            <h1 class="text-center">{{hospital.name}}</h1>
        </header>

        <div class="body">
            <div class="data_hospital row">

                <article class="filters col-lg-6 col-12">
                    <header>
                        <h1>Фільтри</h1>

                        <div class="filter_list row">
                            <h5 class="col-12">Обрані фільтри:</h5>
                            <div class="filter_item col-md-4 col-5" v-for="(filtItem, key) in filters" :key="key">
                                <span>{{filtItem}}</span>
                                <i class="far fa-times-circle" @click="deleteFilter(filtItem, key)"></i>
                            </div>
                        </div>
                    </header>

                    <form name="body">

                        <div class="type">
                            <label for="type" class="font-weight-bold">Тип препарату</label>
                            <select name="type" id="type"
                                    v-model="filterType"
                                    @change="selectedFilter(filterType)">
                                <option value="Не обрано" disabled selected>Не обрано</option>
                                <option
                                        v-for="(type, key) in types"
                                        :key="key"
                                        :value="type.name"
                                >{{type.name}}</option>
                            </select>
                        </div>

                        <div class="first_need">
                            <input id="first_need" type="checkbox" v-model="filterFirstNeed" :value="filterFirstNeed" @change="checkFilter('Є першою необхідністю')">
                            <label for="first_need" class="font-weight-bold">
                                Є першою необхідністю
                                <span><i class="fas fa-check"></i></span>
                            </label>
                        </div>

                        <div class="reset">
                            <input type="reset"
                                   class="btn btn-dark"
                                   @click="reset()"
                                   value="Скинути усі фільтри">
                        </div>



                    </form>

                </article>

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

<!--                <div class="row add p-0">-->
<!--                    <div class="col-lg-3 col-md-5 pl-0">-->
<!--                        <button class="btn btn-dark" @click="showFormNeed()">Додати необхідне</button>-->
<!--                    </div>-->
<!--                </div>-->


                <div class="row header font-weight-bold" v-if="needs.length > 0">
                    <div class="col-2 text-center">Назва</div>
                    <div class="col-1 text-center">Країна походження</div>
                    <div class="col-1 text-center">Постачальник</div>
                    <div class="col-1 text-center">Тип</div>
                    <div class="col-3 text-center">Опис</div>
                    <div class="col-1 text-center">Наявнівсть, шт.</div>
                    <div class="col-1 text-center">Необхідно, шт.</div>
                    <div class="col-1 text-center">Орієнтовна вартість, грн.</div>
                    <div class="col-1 text-center"></div>
                </div>

                <div class="row" v-for="(need, key) in needs" :key="key" @click="startEdit(edit)">
                    <div class="sub_header col-5 font-weight-bold">Назва</div>
                    <div class="col-lg-2 col-7">{{need.medication_name}}</div>

                    <div class="sub_header col-5 font-weight-bold">Країна походження</div>
                    <div class="col-lg-1 col-7 text-center">{{need.vendor_country}}</div>

                    <div class="sub_header col-5 font-weight-bold">Постачальник</div>
                    <div class="col-lg-1 col-7 text-center">{{need.vendor}}</div>

                    <div class="sub_header col-5 font-weight-bold">Тип</div>
                    <div class="col-lg-1 col-7 text-center">{{need.type_drug_name}}</div>

                    <div class="sub_header col-5 font-weight-bold">Опис</div>
                    <div class="col-lg-3 col-7 text-center">{{need.description}}</div>

                    <div class="sub_header col-5 font-weight-bold">Наявнівсть, шт.</div>
                    <div class="col-lg-1 col-7 text-center">
                        <span v-if="need.edit">{{need.count_available}}</span>
                        <input type="text" v-model="need.count_available" v-else pattern="/d">
<!--                        <i class="fas fa-pencil-alt" @click="startEdit(need, need.count_available)" v-if="editField"></i>-->
<!--                        <i class="far fa-check-circle" @click="endEdit(need, need.count_available)" v-else></i>-->
                    </div>

                    <div class="sub_header col-5 font-weight-bold">Необхідно, шт.</div>
                    <div class="col-lg-1 col-7 text-center">
                        <span v-if="need.edit" @click="startEdit(need)">{{need.count_needed}}</span>
                        <input type="text" v-model="need.count_needed" v-if="!need.edit" pattern="/d">
<!--                        <i class="fas fa-pencil-alt" @click="startEdit(need.count_needed)" v-if="editField"></i>-->
<!--                        <i class="far fa-check-circle" @click="endEdit(need, need.count_available)" v-else></i>-->
                    </div>

                    <div class="sub_header col-5 font-weight-bold">Орієнтовна вартість, грн.</div>
                    <div class="col-lg-1 col-7 text-center">{{need.cost_hrn}}</div>


                    <div class="col-1 text-center">
                        <i class="fas fa-pencil-alt" @click="startEdit(need) " title="Редактувати" v-if="need.edit"></i>
                        <i class="far fa-check-circle" @click="endEdit(need) " title="Зберегти" v-else></i>
                    </div>

                </div>
            </div>


        </div>
    </section>
</template>

<script>
    import axios from "axios"
    // import {eventEmitter} from "@/main";

    export default {
        name: "Hospital",

        components: {

        },

        data() {
            return {
                area: "",
                city: "",
                hospitalId: "",
                hospital: {},
                needs: [],

                types: [],

                filters: [],
                // filters: new Map,
                filterType: "Не обрано",
                filterFirstNeed: false,
            }
        },

        computed: {
            filtered() {
                return 0;
            }
        },

        created() {
            this.hospitalId = this.$route.params.id;
            this.gettingHospital();
            this.getNeeds();
            this.findCity();
        },

        mounted() {
            this.getType();
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
                    this.needs.forEach( (n) => { this.$set(n, "edit", true) } );

                } )
                .catch( (error) => {
                    console.log("Ошибка, нет потребностей");
                    console.log(error);
                } )
            },

            startEdit(need) {
                need.edit = false;
                console.log(need);
            },

            endEdit(need) {
                axios({
                    methods: 'get',
                    url:`https://helpmedic.atlant-mega.com/ajax/need/edit?id= ${parseInt(need.id)}&count_available=${parseInt( need.count_available )}&count_needed=${parseInt( need.count_needed )}`,
                    data: {
                        id: parseInt(need.id),
                        count_available: parseInt( need.count_available ),
                        count_needed: parseInt( need.count_needed )
                    }
                })
                        .then( (response) => {
                            console.log("Данные переданы успешно");
                            console.log(response);
                        } )
                        .catch( (error) => {
                            console.log("Ошибка передачи данных");
                            console.log(error);
                        } );
                need.edit = true;
            },

            getType() {
                axios.get("https://helpmedic.atlant-mega.com/ajax/medication/all_type")
                .then( (response) => {
                    this.types = response.data;
                    console.log(this.types);
                } )
                .catch( (error) => {
                    console.log("Ошибка типов препаратов");
                    console.log(error);
                } )
            },

            selectedFilter(filt) {
                if (this.filters.indexOf(filt) < 0) {
                    this.filters.push(filt);
                }
            },

            checkFilter(filt) {
                if (this.filters.indexOf(filt) < 0) {
                    this.filters.push(filt);
                } else {
                    let index = this.filters.indexOf(filt);
                    this.filters.splice(index, 1);
                }
            },

            deleteFilter(filt, key) {
                console.log(this.filterType);
                switch (filt) {
                    case 'Обладнання':
                    case 'Захист':
                    case 'Транспорт':
                        this.filterType = "Не обрано";
                        break;
                    case 'Є першою необхідністю':
                        this.filterFirstNeed = false;
                        break;
                }
                this.filters.splice(key, 1);
            },

            reset() {
                this.filters = [];
                this.filterType = "";
                this.filterFirstNeed = false;
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

        },
    }
</script>

<style lang="scss" scoped>
    @import './src/styles/_variable';

    * {
        margin: 0;
        padding: 0;
    }

    section.hospital.container-fluid {
        margin: 30px 0px 60px;
        padding: 0 30px;
        header {
            margin-bottom: 30px;
            h1 {
                font-size: 2rem;
                text-decoration: underline;
            }
        }

        .body {
            .data_hospital.row {
                width: 1024px;
                margin: 0 auto;
                .filters {
                    padding: 25px 20px 0 0;
                    header {
                        h1 {
                            font-size: 1.75rem;
                            margin-bottom: 15px;
                        }
                        .filter_list {
                            h5 {
                                margin-bottom: 10px;
                            }
                            .filter_item {
                                padding: 5px;
                                border: 1px solid #aaaaaa;
                                border-radius: 5px;
                                margin: 5px;
                                position: relative;
                                span {display: inline-block;}
                                i {
                                    display: inline-block;
                                    position: absolute;
                                    top: 5px;
                                    right: -140px;
                                }
                            }
                        }

                    }

                    form {
                        .type {
                            label {
                                margin-bottom: 5px;
                            }
                            select {
                                @include select;
                                width: 60%;
                            }
                        }
                        .first_need {
                            label {
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
                        .reset {
                            margin-top: 15px;
                            input[type='reset'] {
                                @include button;
                                width: 60%;
                            }


                        }
                    }
                }

                .data {
                    padding-top: 25px;
                    .field.row {
                        border-bottom: 1px solid #dddddd;
                        padding: 20px 0;
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
                .row.header {
                    font-size: 1vw;
                }
                .row {
                    font-size: 1.2vw;
                    div {
                        border: 1px solid #aaaaaa;
                        padding: 5px;
                        .fas.fa-pencil-alt {
                            color: blue;
                            cursor: pointer;
                        }
                        .far.fa-check-circle {
                            color: forestgreen;
                            cursor: pointer;
                        }

                        /*&:first-child {*/
                        /*    padding-left: 15px;*/
                        /*}*/
                        &.sub_header {
                            display: none;
                        }
                    }
                }
            }
        }
    }

    @media (min-width: 992px) and (max-width: 1199.9px) {
        section.hospital.container-fluid {
            .body {
                .data_hospital.row {
                    .filters {
                        header {
                            .filter_list {
                                .filter_item {
                                    i {
                                        position: absolute;
                                        top: 5px;
                                        right: -140px;
                                    }
                                }
                            }
                        }
                    }
                }

                .needs {
                    .row.header {
                        font-size: 1vw;
                    }
                    .row {
                        font-size: 1.3vw;
                        div {
                            border: 1px solid #aaaaaa;
                            padding: 5px;
                            .fas.fa-pencil-alt {
                                color: blue;
                                cursor: pointer;
                            }
                            .far.fa-check-circle {
                                color: forestgreen;
                                cursor: pointer;
                            }

                            /*&:first-child {*/
                            /*    padding-left: 15px;*/
                            /*}*/
                            &.sub_header {
                                display: none;
                            }
                        }
                    }
                }
            }
        }
    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        section.hospital.container-fluid {
            min-width: 470px;
            header {
                h1 {
                    text-align: center;
                }
            }



            .body {
                .data_hospital.row {
                    width: 100%;
                    .filters {
                        header {
                            .filter_list {
                                justify-content: space-around;
                                .filter_item {
                                    i {
                                        width: 100%;
                                        height: 100%;
                                        top: 0;
                                        right: 0px;
                                        vertical-align: top;
                                        opacity: 0;
                                        cursor: pointer;
                                    }
                                }
                            }
                        }

                        form {
                            text-align: center;

                            .type {
                                label {
                                    margin-bottom: 5px;
                                }
                                select {
                                    @include select;
                                    width: 60%;
                                }
                            }
                            .first_need {
                                label {
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
                            .reset {
                                margin-top: 15px;
                                input[type='reset'] {
                                    @include button;
                                    width: 60%;
                                }


                            }
                        }
                    }

                    .data {
                        order: -1;
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
                                margin-bottom: 20px;
                            }
                        }
                    }


                    .row {
                        border: 2px solid #aaaaaa;
                        border-radius: 15px;
                        padding: 15px;
                        div {
                            font-size: 1.2rem;
                            border: none;
                            border-bottom: 1px solid #aaaaaa;
                            padding: 5px;
                            text-align: center;
                            &:first-child {
                                padding-left: 5px;
                            }
                            &:nth-child(15), &:nth-child(16) {
                                border-bottom: none;
                            }
                            &:last-child {
                                border: none;
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

    @media (min-width: 576px) and (max-width: 767.9px) {
        section.hospital.container-fluid {
            min-width: 470px;
            header {
                h1 {
                    text-align: center;
                }
            }

            .body {
                .data_hospital.row {
                    width: 100%;
                    .filters {
                        padding-right: 0;
                        header {
                            .filter_list {
                                justify-content: space-around;
                                .filter_item {
                                    i {
                                        width: 100%;
                                        height: 100%;
                                        top: 0;
                                        right: 0px;
                                        vertical-align: top;
                                        opacity: 0;
                                        cursor: pointer;
                                    }
                                }
                            }
                        }

                        form {
                            .type {
                                margin-bottom: 30px;
                                select {
                                    width: 100%;
                                }
                            }
                            .first_need {
                                label {
                                    margin-bottom: 30px;
                                    span {
                                        width: 26px;
                                        height: 26px;
                                        i {
                                            font-size: 2rem;
                                            top: -8px;
                                            left: 1px;
                                        }
                                    }
                                }
                            }
                            .reset {
                                input[type='reset'] {
                                    width: 100%;
                                }


                            }
                        }
                    }

                    .data {
                        order: -1;
                    }
                }

                .needs {
                    .header {
                        display: none;
                    }
                    .row {
                        font-size: 1.2rem;
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
                            &:nth-child(15), &:nth-child(16) {
                                border-bottom: none;
                            }
                            &:last-child {
                                border: none;
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
        section.hospital.container-fluid {
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
                    width: 100%;
                    .filters {
                        justify-content: space-around;
                        padding-right: 0;
                        header {
                            .filter_list {
                                .filter_item {
                                    span {
                                        display: inline;
                                    }
                                    i {
                                        width: 100%;
                                        height: 100%;
                                        top: 0;
                                        right: 0px;
                                        vertical-align: top;
                                        opacity: 0;
                                        cursor: pointer;
                                    }
                                }
                            }
                        }

                        form {
                            .type {
                                margin-bottom: 30px;
                                select {
                                    width: 100%;
                                }
                            }
                            .first_need {
                                label {
                                    margin-bottom: 30px;
                                    span {
                                        width: 26px;
                                        height: 26px;
                                        i {
                                            font-size: 2rem;
                                            top: -8px;
                                            left: 1px;
                                        }
                                    }
                                }
                            }
                            .reset {
                                input[type='reset'] {
                                    width: 100%;
                                }


                            }
                        }
                    }

                    .data {
                        order: -1;
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
                        font-size: 1.2rem;
                        div {
                            border: none;
                            border-bottom: 1px solid #aaaaaa;
                            padding: 5px;
                            text-align: center;
                            &:first-child {
                                padding-left: 5px;
                            }
                            &:nth-child(15), &:nth-child(16) {
                                border-bottom: none;
                            }
                            &:last-child {
                                border: none;
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