import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, NavController } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { AccountPage } from '../pages/account/account';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('nav') nav : NavController;
  rootPage = HomePage;
  pages = [];

  constructor(public platform: Platform, public menu: MenuController) {

    this.pages = [
      { title: 'My Account', icon: 'lock', component: AccountPage },
      { title: 'Order History', icon: 'filing', component: AccountPage },
      { title: 'Help', icon: 'help-circle', component: AccountPage },
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    this.menu.close()
    this.nav.push(page.component);
  };
}
