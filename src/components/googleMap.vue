<template>
    <article class="g_map">
        <GmapMap
                :center="{lat:10, lng:10}"
                :zoom="7"
                map-type-id="terrain"
                style="width: 500px; height: 300px"
                :options="{
   zoomControl: true,
   mapTypeControl: false,
   scaleControl: false,
   streetViewControl: false,
   rotateControl: false,
   fullscreenControl: true,
   disableDefaultUi: false
 }"
        >
            <GmapMarker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="m.position"
                    :clickable="true"
                    :draggable="true"
                    @click="center=m.position"
            />
        </GmapMap>
    </article>
</template>

<script>
    import { gmapApi } from 'vue2-google-maps';

    export default {
        name: "GoogleMap",
        data() {
            return {

            };
        },



        computed: {
            google: gmapApi
        },
        methods: {

        }
    }
</script>

<style scoped>
    .google-map {
        width: 640px;
        height: 480px;
        margin: 0 auto;
        background: gray;
    }
</style>