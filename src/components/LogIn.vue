<template>
    <form name="login">
        <label for="mail">E-mail</label>
        <input id="mail" type="email">

        <label for="password">Пароль</label>
        <input id="password" type="password">

        <button class="btn btn-dark">Відправити</button>
    </form>
</template>

<script>
    export default {
        name: "LogIn",

        data() {
            return {
                eMail: "",
                password: ""
            }
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

</style>