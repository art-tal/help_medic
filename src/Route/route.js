import VueRouter from "vue-router"
import Mykolaiv from "@/components/Mykolaiv";
import Settlements from "@/components/Settlements";
import Hospital from "@/components/Hospital";
import Hospitals from "@/components/Hospitals";
import Home from "@/components/Home";

export default new VueRouter({
    routes: [
        {
            path: "/home",
            name: "home",
            component: Home,
        },

        {
            path: '/mykolaiv',
            name: 'mykolaiv',
            component: Mykolaiv,
        },

        {
            path: '/settlements',
            name: 'settlements',
            component: Settlements,
        },

        {
            path: '/hospital/:id',
            name: 'hospital',
            component: Hospital,
        },

        {
            path: '/mykolaiv/hospitals',
            name: 'hospitals',
            component: Hospitals
        },

    ],
    mode: 'history',
})