// Import Angular modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import custom components
import { ConfigComponent } from '../components/config.component';

// Import custom services
import { HttpService } from '../services/http.service';

// Define routes
const routes: Routes = [
  { path: '', redirectTo: '/config', pathMatch: 'full' },
  { path: 'config', component: ConfigComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ HttpService ]
})
export class AppRoutingModule { }