<template>
    <form name="login" @submit.prevent="onSubmit()">

        <div class="errors text-center" v-show="showErrorMsg">
            Електронна адреса або пароль невірні.
        </div>

        <label for="mail">E-mail</label>
<!--        <span>{{checkEmail}}</span>-->
        <input id="mail"
               type="email"
               class="form-control"
               :class="{'is-invalid' : $v.eMail.$error}"
               @blur="$v.eMail.$touch()"
               v-model="eMail">
        <div class="invalid-feedback" v-if="!$v.eMail.required">
            Обов'язково для заповнення.
        </div>
        <div class="invalid-feedback" v-if="!$v.eMail.email">
            Не відповідає вимогам email адреси.
        </div>




        <label for="password">Пароль</label>
<!--        <span>{{checkPassword}}</span>-->
        <input id="password"
               type="password"
               class="form-control"
               v-model="password">

<!--        :class="{'is-invalid' : $v.password.$error}"-->
<!--        @blur="$v.password.$touch()"-->

        <div class="invalid-feedback" v-if="!$v.password.$minLegth">
            Не відповідає вимогам для поля паролю.
        </div>

        <button class="btn btn-dark" type="submit" :disabled="$v.$invalid">Відправити</button>
    </form>
</template>

<script>
    import axios from "axios"
    import { required, email, minLength } from 'vuelidate/lib/validators'
    import {eventEmitter} from "@/main";
    // import jQuery from "jquery"
    //
    // const $ = jQuery;




    export default {
        name: "LogIn",

        data() {
            return {
                // regexpEmail: /.+@.+\..+/i,
                // regexpPassword: /[A-Za-z_0-9]{6,}/,

                eMail: "",
                password: "",

                showErrorMsg: false,

                allowEdits: false,

            }
        },

        validations: {
            eMail: {
                required,
                email
            },
            password: {
                minLength: minLength(6),
                required
            },
        },

        computed: {
            // checkEmail() {
            //     if (!this.regexpEmail.test(this.eMail)) {
            //         console.log(this.regexpEmail.test(this.eMail));
            //         return 'Електронна адреса не відповідає вимогам';
            //     }
            //      return "";
            // },

            // checkPassword() {
            //     if (!this.regexpPassword.test(this.password)) {
            //         console.log(this.regexpPassword.test(this.password));
            //         return '  Пароль не відповідає вимогам';
            //     }
            //     return "";
            // },
        },

        methods: {
            onSubmit() {
                console.log(this.eMail, this.password);
                axios.get(
                   // `https://helpmedic.atlant-mega.com/ajax/auth?email=${this.eMail}&password=${this.password}`,
                   `https://helpmedic.atlant-mega.com/ajax/auth`,
                    {params:  {
                        email: this.eMail,
                        password: this.password
                    }},
            )
                .then( (response) => {
                    this.allowEdits = response.data;
                    this.$store.state.allowEdits = response.data;
                    this.$store.state.user = this.eMail;
                   // $.cookie("allowEdits", this.allowEdits);
                    document.cookie = `allowEdits=${this.allowEdits}`;
                    // $.cookie("user", this.eMail);
                    document.cookie = `user=${this.eMail}`;
                    console.log( this.allowEdits );
                    if(this.allowEdits) {
                        eventEmitter.$emit("closeLogin");
                    } else {
                        this.showErrorMsg = true;
                        setTimeout( () => {this.showErrorMsg = false},5000);
                    }
                } )
                .catch( (error) => {
                    console.log("Ошибка авторизации");
                    this.allowEdits = false;
                    console.log(error);
                } );





                // $.post(
                //     `https://helpmedic.atlant-mega.com/ajax/auth`,
                //     {
                //             "email": this.eMail,
                //             "password": this.password
                //         },
                //     (data) => {
                //         console.log(data);
                //     }
                // )




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

    form {
        padding: 40px;
        background-color: rgba(255,255,255,0.9);
        border: 2px solid #00AEEF;
        border-top: none;
        .errors {
            color: #dc3545;
            margin-bottom: 15px;
        }

        label {
            /*font-size: 1.2rem;*/
            margin-top: 15px;
            margin-bottom: 5px;
        }
        input {
            padding: 10px 15px;
            /*font-size: 1.2rem;*/
            /*margin-bottom: 15px;*/
            border-radius: 10px;
            border: 1px solid #00AEEF;
            background-color: #fff;
        }
        .invalid-feedback {
            margin-bottom: 15px;
        }
        button {
            @include button;
            margin-top: 30px;
        }
    }

    @media (min-width: 768px) and (max-width: 991.9px) {

    }

</style>