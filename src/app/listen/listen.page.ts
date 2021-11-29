import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-listen',
  templateUrl: 'listen.page.html',
  styleUrls: ['listen.page.scss']
})
export class ListenPage implements AfterViewInit {

  @ViewChild('audioElement') audioElement: ElementRef<HTMLAudioElement>;

  streamUrl: string = `https://streaming403.network1sports.com/ssnogg`;
  // streamUrl: string = 'https://streaming403.network1sports.com/azsportsnetwork2ogg';
  notStreamingMessage: string = 'Stratford Sports Network is not streaming right now. Please check back later';

  loadAudioInterval;

  constructor() {}

  ngAfterViewInit() {
    this.CheckAudioDuration(this.audioElement.nativeElement.duration);
    this.audioElement.nativeElement.onloadedmetadata = this.LoadedMetaData.bind(this);
  }

  LoadedMetaData(event: Event) {
    console.log("loadedmetadata event fired");
    this.CheckAudioDuration(this.audioElement.nativeElement.duration);
  };

  CheckAudioDuration(duration: number) {
    if(isNaN(duration)) {
      this.notStreamingMessage = 'Stratford Sports Network is not streaming right now. Please check back later';
      this.TryToLoadAudio();
    }
    else {
      this.notStreamingMessage = '';
      if(this.loadAudioInterval) {
        clearInterval(this.loadAudioInterval);
      }
    }
  }

  TryToLoadAudio() {
    // let count = 0;
    this.loadAudioInterval = setInterval(() => {
      this.audioElement.nativeElement.load();
      // count++;
      // if(count == 3) {
      //   this.streamUrl = 'https://streaming403.network1sports.com/azsportsnetwork2ogg';
      // }
    }, 10000);
  }

}
