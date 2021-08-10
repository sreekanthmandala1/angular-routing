import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';


@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'welcome', component: WelcomeComponent },
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            { path: '**', component: PageNotFoundComponent }
        ],
            // { useHash: true }, 
            { enableTracing: true })
    ],

    exports: [
        RouterModule
    ],
    declarations: [
        WelcomeComponent,
        PageNotFoundComponent
    ]
})
export class AppRoutingModule { }
