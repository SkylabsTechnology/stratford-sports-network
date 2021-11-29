import { Component } from '@angular/core';
import { Browser, OpenOptions } from '@capacitor/browser';

@Component({
  selector: 'app-social',
  templateUrl: 'social.page.html',
  styleUrls: ['social.page.scss']
})
export class SocialPage {

  constructor() {}

  async socialLink(type: string) {
    if(type == "facebook") {
      let options: OpenOptions = {
        url: "https://www.facebook.com/StratfordSportsNetwork",
        presentationStyle: "fullscreen"
      }
      await Browser.open(options);
    }
    else if (type == "web") {
      let options: OpenOptions = {
        url: "https://stratfordsportsnetwork.com/",
        presentationStyle: "fullscreen"
      }
      await Browser.open(options);
    }
  }

}
