/* eslint-disable max-len */
import { Component } from '@angular/core';
import { CommonService } from './services/common.service';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    private network: Network,
    private common: CommonService
  ) {
    this.network.onChange().subscribe((val) => {
      this.common.isOnline = (val === 'connected') ? true : false;
    });
  }
}
