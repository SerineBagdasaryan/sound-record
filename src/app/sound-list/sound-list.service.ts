import { Injectable } from '@angular/core';
import {ISoundRecording} from "../interfaces/sound-recording.interface";

@Injectable({
  providedIn: 'root'
})
export class SoundListService {

  constructor() { }

  getSoundRecordings(): ISoundRecording[] {
    return [
      { id: 1, soundName: 'Sound 1', soundFileName: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3' },
      { id: 2, soundName: 'Sound 2', soundFileName: 'https://webaudioapi.com/samples/metering/sounds/chrono.mp3' },
      { id: 3, soundName: 'Sound 3', soundFileName: 'https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3' },
    ];
  }
}
