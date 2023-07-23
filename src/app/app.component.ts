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
      "eqGuid": "A679F79B-F9E6-4430-B175-23CE1D83615B",
      "eqName": "Equa_1",
      "eqDescription": "Equation Description",
      "eqVersion": 1,
      "statusGuid": "6BDF2B74-ECDA-4110-BF20-9F9234773E78",
      "eqFormula": "\\[Y = e^{-\\frac{{N(t)}}{{C(t)}} \\cdot\\  t}\\]"
    },
    {
      "eqGuid": "84877BD1-DC51-4C5C-A099-862C193F6E5F",
      "eqName": "Equa_1",
      "eqDescription": "Equation Description",
      "eqVersion": 2,
      "statusGuid": "6BDF2B74-ECDA-4110-BF20-9F9234773E78",
      "eqFormula": "\\[ Y = \\frac{{m(p) \\cdot t1}}{{m(f) \\cdot t2}} \\]"
    },
    {
      "eqGuid": "4AF14994-037E-445E-B987-AB2A323D43D4",
      "eqName": "Equa_2",
      "eqDescription": "Equation Description",
      "eqVersion": 1,
      "statusGuid": "6BDF2B74-ECDA-4110-BF20-9F9234773E78",
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
