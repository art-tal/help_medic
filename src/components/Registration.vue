<template>
    <form name="registration">

        <label for="last_name">Прізвище</label>
        <input id="last_name" type="text">

        <label for="first_name">Ім'я</label>
        <input id="first_name" type="text">

        <label for="second_name">Побатькові</label>
        <input id="second_name" type="text">

        <label for="phone">Телефон</label>
        <input id="phone" type="tel">

        <label for="login">E-mail</label>
        <input id="text" type="text">

        <label for="login">Логін</label>
        <input id="login" type="text">

        <label for="password">Пароль</label>
        <input id="password" type="password">

        <label for="confirm_password">Підтвердити пароль</label>
        <input id="confirm_password" type="password">

        <div class="wrap row">
            <div class="col-6">
                <button class="btn btn-dark">Відправити</button>
            </div>

            <div class="col-6">
                <input type="reset" class="btn btn-dark" value="Скинути">
            </div>
        </div>


    </form>
</template>

<script>
    export default {
        name: "Registration"
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
            margin-bottom: 10px;
        }
        input {
            padding: 10px 15px;
            margin-bottom: 15px;
            border-radius: 10px;
            border: 1px solid #00AEEF;
            background-color: #fff;
        }

        .wrap.row {
            div.col-6 {
                padding-left: 10px;
                &:first-child {
                    padding-left: 0;
                    padding-right: 10px;
                }
            }

        }

        button, input[type="reset"] {
            @include button;
        }
    }

</style>