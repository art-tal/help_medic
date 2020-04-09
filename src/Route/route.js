import VueRouter from "vue-router"
import Mykolaiv from "../components/Mykolaiv";
import Hospital from "../components/Hospital";
import Home from "../components/Home";
import Need from "../components/Need";
import About from "../components/About";
import Authorization from "../components/Authorization";
import LogIn from "../components/LogIn";
import Registration from "../components/Registration";

export default new VueRouter({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },

        {
            path: '/mykolaiv',
            name: 'mykolaiv',
            component: Mykolaiv,
        },

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

        {
            path: "/authorization",
            name: "authorization",
            component:Authorization,
            children: [
                {
                    path: "/authorization/login",
                    name: "login",
                    component: LogIn,
                },
                {
                    path: "/authorization/registration",
                    name: "registration",
                    component: Registration,
                },
            ],
        },

    ],
    mode: 'history',
})