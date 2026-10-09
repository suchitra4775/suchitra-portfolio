import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectComponent } from './project/project.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"home",component:HomeComponent},
    {path:"about", component:AboutComponent},
    {path:"contact",component:ContactComponent},
    {path:"resume",component:ResumeComponent},
    {path:"project",component:ProjectComponent},
    {path:"**", component:PagenotfoundComponent},
    
];


