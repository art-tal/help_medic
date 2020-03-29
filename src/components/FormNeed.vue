<template>
    <article class="add_need">


        <form name="add_need">

            <header>
                <h1 class="text-center">Необхідно зараз</h1>
            </header>

            <i class="far fa-window-close" @click="close()"></i>

            <div class="body">

                <!--            <div class="row">-->
                <!--                <div class="col-5">Лікарня</div>-->
                <!--                <div class="col-7">{{this.hospital.hospital_name}}</div>-->
                <!--            </div>-->

                <div class="row">
                    <div class="col-5">Назва необхідного</div>
                    <div class="col-7">
                        <select name="med" id="med">
                            <option
                                    v-for="(med, key) in medications"
                                    :key="key"
                                    :value="med.name"
                            >{{med.name}}</option>
                        </select>
<!--                        <input type="text" v-model="medication.medication_name">-->
                    </div>
                </div>

                <div class="row">
                    <div class="col-5">Тип необхідної речі</div>
                    <div class="col-7">
                        <input type="text" v-model="medication.type_drug_name">
                    </div>
                </div>

                <div class="row">
                    <div class="col-5">Форма відпуску</div>
                    <div class="col-7">
                        <input type="text" v-model="medication.description">
                    </div>
                </div>

                <div class="row">
                    <div class="col-5">Навність, шт.</div>
                    <div class="col-7">
                        <input type="text" v-model="need.count_available">
                    </div>
                </div>

                <div class="row">
                    <div class="col-5">Необхідно, шт.</div>
                    <div class="col-7">
                        <input type="text" v-model="need.count_needed">
                    </div>
                </div>

                <div class="row">
                    <div class="col-5">Орієнтовна вартість, грн.</div>
                    <div class="col-7">
                        <input type="text" v-model="medication.cost_hrn">
                    </div>
                </div>

                <div class="row">
                    <div class="col-5">Орієнтовна вартість, грн.</div>
                    <div class="col-7">
                        <input type="text" v-model="medication.cost_doll">
                    </div>
                </div>

                <div class="row">
                    <div class="col-5">"Є першою необхідністю"</div>
                    <div class="col-7">
                        <input type="text" v-model="medication.first_need">
                    </div>
                </div>

                <div class="row">
                    <div class="col-6">
                        <button class="btn btn-dark">Скинути</button>
                    </div>
                    <div class="col-6">
                        <button class="btn btn-dark">Відправити</button>
                    </div>
                </div>




            </div>
        </form>

    </article>

</template>

<script>
    import {eventEmitter} from "@/main";

    export default {
        name: "FormNeed",

        data() {
            return {

                hospital: null,

                need: {
                    hospital_name: "",
                    hospital_id: null,
                    count_available: null,
                    count_needed: null,
                    last_update: null,
                },

                medication: {
                    medication_name: "",
                    type_drug_name: "",
                    description: "",
                    cost_hrn: null,
                    cost_doll: null,
                    first_need: false,
                },

                medications: [],
            }
        },

        created() {},

        computed: {},

        methods: {
            close() {
                eventEmitter.$emit("closeFormNeed");
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

    article.add_need {
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,0.5);
        form {
            width: 700px;
            margin: 70px auto;
            position: sticky;
            top: 70px;
            background-color: #fff;
            padding: 40px;
            border-radius: 10px;
            header {
                h1 {
                    font-size: 2rem;
                }
                i {
                    display: block;
                    position: absolute;
                    top: 20px;
                    right: 20px;
                }
                .body {
                    .row {
                        padding-bottom: 10px;
                        div {

                        }
                    }

                    select {
                        margin-bottom: 15px;
                        border: 1px solid #00AEEF;
                        padding: 10px 15px;
                        border-radius: 10px;
                    }
                }
            }
        }
    }



</style>