import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {ListadoComponent} from './listado/listado.component'
import { RegisterComponent } from './register/register.component';
export const routes: Routes = [

    {path:"", component:LoginComponent},

    {path:"listado", component:ListadoComponent},

    {path:"register", component:RegisterComponent}

];
