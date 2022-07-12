import { isPlatformServer } from '@angular/common';
import { Component, Inject, Optional, PLATFORM_ID } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'poc-ssr';
  private isServer = false;
  constructor(@Optional() @Inject('body') public body: any,  private tstate: TransferState,@Inject(PLATFORM_ID) platformId: Object,) {
    this.isServer = isPlatformServer(platformId);
    if(this.isServer) {
      this.tstate.set(makeStateKey('body'), body)
    }
    this.body = this.tstate.toJson()
  }
}
