import { Component, OnInit } from '@angular/core';
import {ISoundRecording} from "../interfaces/sound-recording.interface";
import {SoundListService} from "./sound-list.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-sound-list',
  templateUrl: './sound-list.component.html',
  styleUrls: ['./sound-list.component.scss']
})
export class SoundListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'soundName', 'soundFileName'];
  soundRecordings$!: Observable<ISoundRecording[]>;
  selectedSound: string | null = null;

  playSound(soundFileName: string): void {
    this.selectedSound = soundFileName;
  }

  constructor(private readonly _soundListService: SoundListService) { }

  initializeSoundRecords(): void {
    this.soundRecordings$ = this._soundListService.getSoundRecordings();
  }
  ngOnInit(): void {
    this.initializeSoundRecords();
  }

}
