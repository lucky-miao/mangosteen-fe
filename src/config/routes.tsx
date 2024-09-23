import { RouteRecordRaw } from "vue-router";
import { Bar } from "../components/Bar";
import { Footer } from "../components/Footer";
import { Second } from "../views/Second";
import { First } from "../views/First";
import { Welcome } from "../views/welcome";

export const routes:RouteRecordRaw[] = [
    { path: '/footer', component: Footer },
    { path: '/bar', component: Bar },
    { path: '/welcome',component: Welcome,
         children:[
            { path: '1', component: First },
            { path: '2', component: Second },
        ]
    }
]