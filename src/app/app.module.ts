import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MazeBoxComponent } from './maze-box/maze-box.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [AppComponent, MazeBoxComponent, DialogBoxComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule, FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
     MatButtonModule],
  providers: [],
  entryComponents: [DialogBoxComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
