import { Files } from "./Files/Files";
import { HomeComponent } from "./Home/Home";
import type { Route } from "./Model/Route";

export const routes: Route[] = [
    {
        path: "/Home",
        Component: HomeComponent,
        children: []
    }, 
    {
        path: "Files",
        Component: Files,
        children: []
    },
    
]