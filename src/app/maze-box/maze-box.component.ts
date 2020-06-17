import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-maze-box',
  templateUrl: './maze-box.component.html',
  styleUrls: ['./maze-box.component.scss'],
})
export class MazeBoxComponent implements OnInit {
  height = 11;
  width = 8;
  countOfGreens = this.height > this.width ? this.height : this.width;
  midHeight = this.height % 2 === 0 ? (this.height / 2) - 1 : ((this.height + 1) / 2) - 1;
  midWidth = this.width % 2 === 0 ? (this.width / 2) - 1 : ((this.width + 1) / 2) - 1;
  hashArray = [];
  currentPos = 'count_' + this.midHeight + '_' + this.midWidth;
  totalMoves = 0;
  constructor() {}

  ngOnInit() {
    this.createHashMap(this.height, this.width);
    this.randomize();
  }

  public createHashMap(height, width) {
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        this.hashArray['count_' + i + '_' + j] = false;
      }
    }
  }

  public randomize() {
    let i = 0;
    while (i < this.countOfGreens) {
      this.hashArray[this.getRandomIndex()] = true;
      i++;
    }
  }

  public getRandomIndex() {
    const random = (
      'count_' +
      Math.floor(Math.random() * this.height) +
      '_' +
      Math.floor(Math.random() * this.width)
    );
    return random !== this.currentPos && !this.hashArray[random] ? random : this.getRandomIndex()
  }

  @HostListener('document:keydown', ['$event']) onArrowUpHandler(
    event: KeyboardEvent
  ) {
    this.captureNavigation(event);
  }

  public captureNavigation(event) {
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
    }
    this.totalMoves += 1;
    if (this.countOfGreens === 0) {
      alert(this.totalMoves);
    }
  }
}
