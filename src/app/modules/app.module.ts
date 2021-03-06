// Import Angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from '../routers/routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

// Import custom modules
import { LoginModule } from './login.module';
import { RegisterModule } from './register.module';
import { ConfigModule } from './config.module';

// Import custom components
import { AppComponent } from '../components/app.component';

// Import reducers
import { session } from '../reducers/session.reducer';


/*
* @NgModule: AppModule
*
* An NgModule is a class adorned with the @NgModule decorator function. @NgModule takes a metadata
* object that tells Angular how to compile and run module code. It identifies the module's own 
* components, directives, and pipes, making some of them public so external components can use them.
* @NgModule may add service providers to the application dependency injectors.
* 
* This module is the root/parent module for all other modules.
*/

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    RegisterModule,
    ConfigModule,
    StoreModule.forRoot({
      session: session
    })
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
