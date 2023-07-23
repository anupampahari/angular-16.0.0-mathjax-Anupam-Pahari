import { Component ,ViewChild} from '@angular/core';
import {MathjaxComponent} from './mathjax/mathjax.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild(MathjaxComponent) childView: MathjaxComponent;

  name = 'Mathjax '; 
  mathContent = `\[Y = \frac{{[10a\left(\frac{1}{{\sqrt{b}}}-\frac{1}{{\sqrt{c}}}\right)d]}}{{I \cdot m \cdot g \cdot b}}\]`
}
