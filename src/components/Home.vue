<template>
    <section class="home container-fluid">
        <promo></promo>
        <mykolaiv></mykolaiv>
        <hospitals></hospitals>
    </section>
</template>

<script>
    import Promo from "../components/Promo";
    import Mykolaiv from "../components/Mykolaiv";
    import Hospitals from "../components/Hospitals";

    export default {
        name: "Home",

        components: {
            Promo,
            Mykolaiv,
            Hospitals,
        }
    }
</script>

<style lang="scss" scoped>
    @import '../styles/_variable';

    * {
        margin: 0;
        padding: 0;
    }

    section.home.container-fluid {
        padding-bottom: 30px;
        margin: 0 auto;

    }

</style>