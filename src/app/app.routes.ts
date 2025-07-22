import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { MainLayout } from './layouts/main-layout/main-layout';
import { AboutPage } from './pages/about-page/about-page';
import { InstallPage } from './pages/install-page/install-page';
import { McpsPage } from './pages/mcps-page/mcps-page';
import { ExamplePage } from './pages/example-page/example-page';
import { ConfigPage } from './pages/config-page/config-page';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,
        children:[
            { path: 'home', component: HomePage },
            { path: 'about', component: AboutPage },
            { path: 'install',component: InstallPage },
            { path: 'config', component: ConfigPage},
            { path: 'mcps', component: McpsPage },
            { path: 'example', component: ExamplePage},

            { path: '**', redirectTo: 'home', pathMatch: 'full' }
            
        ]
    }
];
