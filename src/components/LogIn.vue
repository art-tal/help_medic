<template>
    <form name="login">
        <label for="mail">E-mail</label>
        <span>{{checkEmail}}</span>
        <input id="mail" type="email" v-model="eMail">

        <label for="password">Пароль</label>
        <span>{{checkPassword}}</span>
        <input id="password" type="password" v-model="password">

        <button class="btn btn-dark">Відправити</button>
    </form>
</template>

<script>
    export default {
        name: "LogIn",

        data() {
            return {
                regexpEmail: /.+@.+\..+/i,
                regexpPassword: /[A-Za-z_0-9]{6,}/,

                eMail: "",
                password: "",

                messageInvalidEmail: "",
                messageInvalidPassword: "",

                showMessageEmail: "",
                showMessagePassword: "",
            }
        },

        computed: {
            checkEmail() {
                if (!this.regexpEmail.test(this.eMail)) {
                    console.log(this.regexpEmail.test(this.eMail));
                    return 'Електронна адреса не відповідає вимогам';
                }
                 return "";
            },

            checkPassword() {
                if (!this.regexpPassword.test(this.password)) {
                    console.log(this.regexpPassword.test(this.password));
                    return '  Пароль не відповідає вимогам';
                }
                return "";
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
        label {
            /*font-size: 1.2rem;*/
            margin-bottom: 10px;
        }
        input {
            padding: 10px 15px;
            /*font-size: 1.2rem;*/
            margin-bottom: 15px;
            border-radius: 10px;
            border: 1px solid #00AEEF;
            background-color: #fff;
        }
        button {
            @include button;
        }
    }

    @media (min-width: 768px) and (max-width: 991.9px) {

    }

</style>