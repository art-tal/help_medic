<template>
    <section class="necessity">
        <header>
            <h1>Что необходимо приобрести сейчас?</h1>
        </header>

        <div class="body container">
            <div class="row">
                <div class="col-7 font-weight-bold">Что необходимо приобрести</div>
                <div class="col-2 font-weight-bold">К-во, шт</div>
                <div class="col-2 font-weight-bold">Ориентиров. стоимость</div>
            </div>
            <div class="row" v-for="(neces, key) in necessities" :key="key">
                <div class="col-7">{{neces.buy}}</div>
                <div class="col-2">{{neces.quant}}</div>
                <div class="col-2">{{neces.cost}}</div>
            </div>
        </div>
    </section>
</template>

<script>
    import axios from "axios"

    export default {
        name: "Necessity",

        data() {
            return {
                necessities: null,
                url: "",
            }
        },

        create() {
            this.getNecessities();
        },

        methods: {
            getNecessities() {
                axios.get(
                    "url"
                )
                .then( (response) => {
                    this.necessities = response.data;
                    console.log(this.necessities);
                } )
                .catch( (error) => {
                    console.log('Ошибка, невозможно загрузить ресурс');
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

</style>