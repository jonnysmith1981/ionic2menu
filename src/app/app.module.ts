import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AccountPage } from '../pages/account/account';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    AccountPage,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccountPage,
    HomePage
  ],
  providers: [
  ]
})
export class AppModule {}
