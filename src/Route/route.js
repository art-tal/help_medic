import VueRouter from "vue-router"
import Mykolaiv from "@/components/Mykolaiv";
import Hospital from "@/components/Hospital";
// import Hospitals from "@/components/Hospitals";
import Home from "@/components/Home";
import Need from "@/components/Need";
import About from "@/components/About";

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

        // {
        //     path: '/mykolaiv/hospitals',
        //     name: 'hospitals',
        //     component: Hospitals
        // },

        {
            path: '/hospital/:id',
            name: 'hospital',
            component: Hospital,
        },

        {
            path: "/need",
            name: "need",
            component: Need,
        },

        {
            path: "/about",
            name: "about",
            component: About,
        },

    ],
    mode: 'history',
})