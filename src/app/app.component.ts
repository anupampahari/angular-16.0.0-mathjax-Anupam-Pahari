import { Component, ViewChild } from '@angular/core';
import { MathjaxComponent } from './mathjax/mathjax.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(MathjaxComponent) childView: MathjaxComponent;

  name = 'Mathjax ';
  selected_fruit = 'Banana';
arr = {
  "statusCode": 200,
  "success": "true",
  "payload": [
    {
      "eqFormula": "\\[Y = e^{-\\frac{{N(t)}}{{C(t)}} \\cdot\\  t}\\]"
    },
    {
      "eqFormula": "\\[ Y = \\frac{{m(p) \\cdot t1}}{{m(f) \\cdot t2}} \\]"
    },
    {
      "eqFormula": "\\[Y = \\frac{{[10a\\left(\\frac{1}{{\\sqrt{b}}}-\\frac{1}{{\\sqrt{c}}}\\right)d]}}{{I \\cdot m \\cdot g \cdot b}}\\]"
    }
  ]
};


  mathContent = `\[Y = \frac{{[10a\left(\frac{1}{{\sqrt{b}}}-\frac{1}{{\sqrt{c}}}\right)d]}}{{I \cdot m \cdot g \cdot b}}\]`;

  onChange(value: any) {
    let index = value.target.selectedIndex;
    this.selected_fruit = index;
    console.log(this.arr.payload[index].eqFormula);
    this.mathContent = this.arr.payload[index].eqFormula;
  }
}
