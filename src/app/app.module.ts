import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MathjaxComponent } from './mathjax/mathjax.component';
import { GlobalService } from './global.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MathjaxComponent ],
  bootstrap:    [ AppComponent ],
  providers: [GlobalService]
})
export class AppModule { }
