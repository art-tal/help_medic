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

        metaInfo: {
            title: "HelpMedic | Лікарні Миколаївської області",
            meta: [
                {
                    vmid: "description",
                    name: "description",
                    content: `Допомога лікарням Миколаївської області в придбанні необхідних засобів для запобігання та боротьби з covid-19`
                },
                {
                    vmid: "keywords",
                    name: "keywords",
                    content: `Миколаїв, Миколаївська область, лікарні Миколаївської області, допомога лікарням, covid-19, епідемія, пандемія`
                },
            ],
        },

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