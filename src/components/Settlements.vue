<template>
    <section class="settlements">

        <ul class="distr">
            <li class="distr_item" v-for="(area,key) in areas" :key="key">
                <h4>{{area.area_name}}</h4>
                <ol class="settl">
                    <li class="local row" v-for="(city, key) in cities" :key="key">
                        <p class="col-3">{{city.name}}</p>
                        <p class="col-6">{{city.hospital}}</p>
                        <p class="col-3">{{city.hospital_address}}</p>
                    </li>
                </ol>
            </li>
        </ul>

    </section>
</template>

<script>
    import axios from "axios";

    export default {
        name: "Settlements",

        data() {
            return {
                areas: null,
                area: null,
                cities: null,
            }
        },

        created() {
            this.getAreas();
            this.getCities()
        },

        methods: {
            getAreas() {
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

            getCities() {
                axios.get('https://helpmedic.atlant-mega.com/ajax/cities'//,
                    // {
                    // params: {
                    //     id: 1//this.district.id
                    // }}
                )
                    .then((response) => {
                        this.cities = response.data;
                        console.log(response.data);
                    })
                    .catch((error) => {
                        console.log("Ошибка! населенка");
                        console.log(error);
                    })
            },
        }
    }
</script>

<style scoped>

</style>