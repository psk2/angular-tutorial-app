import { Routes, RouterModule } from '@angular/router';
import { StateDetailsComponent } from './state-details/state-details.component';
import { HomeComponent } from './home/home.component';
import { StatesComponent } from './states/states.component';
import { FormsComponent } from './forms/forms.component';
import { FormsNewComponent } from './forms-new/forms-new.component';
import { ParentComponent } from './parent/parent.component';
import { ChildParentComponent } from './parent/child-parent/child-parent.component';


export const appRoutes: Routes = [
    {
        path:'states',
        component: StatesComponent
    },
    {
        path:'state/:stateId',
        component:StateDetailsComponent
    },
    {
        path:"home",
        component : HomeComponent
    },
    {
        path:"forms",
        component:FormsComponent
    },
    {
        path:"new-form",
        component: FormsNewComponent
    },
    {
        path:"parent",
        component: ParentComponent
    },
    {
        path:"child-parent",
        component: ChildParentComponent
    },
    {
        path: '**', 
        redirectTo: 'home', 
        pathMatch: 'full'
    }
]   