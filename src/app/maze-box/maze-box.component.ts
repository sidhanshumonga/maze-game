import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-maze-box',
  templateUrl: './maze-box.component.html',
  styleUrls: ['./maze-box.component.scss'],
})
export class MazeBoxComponent implements OnInit {
  height = 0;
  width = 0;
  start = false;
  countOfGreens = 0;
  midHeight = 0;
  midWidth = 0;
  hashArray = [];
  currentPos = '';
  totalMoves = 0;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.openDialog();
  }

  public createHashMap(height, width) {
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        this.hashArray['count_' + i + '_' + j] = false;
      }
    }
    this.randomize();
  }

  public randomize() {
    let i = 0;
    while (i < this.countOfGreens) {
      this.hashArray[this.getRandomIndex()] = true;
      i++;
    }
  }

  public getRandomIndex() {
    const random =
      'count_' +
      Math.floor(Math.random() * this.height) +
      '_' +
      Math.floor(Math.random() * this.width);
    return random !== this.currentPos && !this.hashArray[random]
      ? random
      : this.getRandomIndex();
  }

  @HostListener('document:keydown', ['$event']) onArrowUpHandler(
    event: KeyboardEvent
  ) {
    this.captureNavigation(event);
  }

  public captureNavigation(event) {
    if (!this.start || this.countOfGreens === 0) { return; }
    switch (event.code) {
      case 'ArrowRight': {
        this.midWidth < this.width - 1
          ? (this.midWidth += 1)
          : (this.midWidth = this.midWidth);
        this.updateCurrentPos();
        break;
      }
      case 'ArrowUp': {
        this.midHeight > 0
          ? (this.midHeight -= 1)
          : (this.midHeight = this.midHeight);
        this.updateCurrentPos();
        break;
      }
      case 'ArrowLeft': {
        this.midWidth > 0
          ? (this.midWidth -= 1)
          : (this.midWidth = this.midWidth);
        this.updateCurrentPos();
        break;
      }
      case 'ArrowDown': {
        this.midHeight < this.height - 1
          ? (this.midHeight += 1)
          : (this.midHeight = this.midHeight);
        this.updateCurrentPos();
        break;
      }
    }
  }

  public updateCurrentPos() {
    this.currentPos = 'count_' + this.midHeight + '_' + this.midWidth;
    if (this.hashArray[this.currentPos]) {
      this.hashArray[this.currentPos] = false;
      this.countOfGreens -= 1;
      this.playAudio('../../assets/sounds/eat.mp3');
    }
    this.totalMoves += 1;
    this.playAudio('../../assets/sounds/step.mp3');
    if (this.countOfGreens === 0) {
      this.endGame();
      this.playAudio('../../assets/sounds/end.mp3');
    }
  }

  playAudio(path) {
    const audio = new Audio();
    audio.src = path;
    audio.load();
    audio.play();
  }

  setupDimensions() {
    this.countOfGreens = this.height > this.width ? this.height : this.width;
    this.midHeight = this.height % 2 === 0 ? this.height / 2 - 1 : (this.height - 1) / 2;
    this.midWidth = this.width % 2 === 0 ? this.width / 2 - 1 : (this.width - 1) / 2;
    this.currentPos = 'count_' + this.midHeight + '_' + this.midWidth;
    this.createHashMap(this.height, this.width);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '40%',
      data: { height: this.height, width: this.width },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.width = result.width;
      this.height = result.height;
      this.setupDimensions();
      this.start = true;
    });
  }

  endGame(): void {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '40%',
      data: { steps: this.totalMoves },
    });
  }
}
