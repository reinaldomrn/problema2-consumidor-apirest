import { Routes } from "@angular/router";

//Componentes
import { IndexComponent } from "./components/index/index.component";


export const APP_ROUTES: Routes = [
  { path: "", component: IndexComponent },  
  { path: "**", pathMatch: "full", redirectTo: "" },
];

