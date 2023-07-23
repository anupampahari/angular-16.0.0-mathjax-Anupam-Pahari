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
    statusCode: 200,
    success: 'true',
    payload: [
      {
        eqGuid: 'A679F79B-F9E6-4430-B175-23CE1D83615B',
        eqName: 'Equa_1',
        eqDescription: 'Equation Description',
        eqVersion: 1,
        statusGuid: '6BDF2B74-ECDA-4110-BF20-9F9234773E78',
        eqFormula:
          '\\[Y = \\frac{{[10a\\left(\\frac{1}{{\\sqrt{b}}}-\\frac{1}{{\\sqrt{c}}}\\right)d]}}{{I \\cdot m \\cdot G \\cdot b}}\\]',
      },
      {
        eqGuid: '04BA3049-31EE-4EC9-B52C-24BC98CDEC97',
        eqName: 'BallMillReliability',
        eqDescription:
          "Probability that an asset will survive beyond time 't' without failure = exp(-lambda*t) where lambda = N(t) / C(t)\n",
        eqVersion: 1,
        statusGuid: null,
        eqFormula:
          '\\[Y = \\frac{{[10a\\left(\\frac{1}{{\\sqrt{b}}}-\\frac{1}{{\\sqrt{c}}}\\right)d]}}{{I \\cdot m \\cdot G \\cdot b}}\\]',
      },
      {
        eqGuid: '738535D8-3387-4E0F-A922-41D9EAC27984',
        eqName: 'BallMillGrindingEfficiency',
        eqDescription:
          ' Grinding efficiency is calculated using formula-\n Quantity of Mill Product of Target Size / Total Quantity of Mill Feed',
        eqVersion: 1,
        statusGuid: null,
        eqFormula:
          '\\[Y = \\frac{{[10a\\left(\\frac{1}{{\\sqrt{b}}}-\\frac{1}{{\\sqrt{c}}}\\right)d]}}{{I \\cdot m \\cdot G \\cdot b}}\\]',
      },
      {
        eqGuid: '347ABF7B-3C39-49DD-AB03-4EE0E06A8C8F',
        eqName: 'ParameterRatio',
        eqDescription:
          'This is a generic equation that calculates the ratio of any two parameters e.g. gear ratio, efficiency,... ',
        eqVersion: 1,
        statusGuid: null,
        eqFormula:
          '\\[Y = \\frac{{[10a\\left(\\frac{1}{{\\sqrt{b}}}-\\frac{1}{{\\sqrt{c}}}\\right)d]}}{{I \\cdot m \\cdot G \\cdot b}}\\]',
      },
      {
        eqGuid: 'A9F628F1-7BA3-4DA0-A312-538C8D0E3C22',
        eqName: 'BallMillPowerEfficiency2',
        eqDescription:
          'This equation calculates power efficiency based on this formula- \nTheoretical Power Required / Actual Power Consumed where actual power consumed is Input Power to Motor x Motor Efficiency x Gearbox Efficiency x Bull Gear-Pinion Efficiency.',
        eqVersion: 1,
        statusGuid: null,
        eqFormula:
          '\\[Y = \\frac{{[10a\\left(\\frac{1}{{\\sqrt{b}}}-\\frac{1}{{\\sqrt{c}}}\\right)d]}}{{I \\cdot m \\cdot G \\cdot b}}\\]',
      },
      {
        eqGuid: 'A716500A-6790-4256-8EE3-6618C6F98D6C',
        eqName: 'ParameterProduct',
        eqDescription:
          'This is a generic equation that calculates the product of the two dissimilar parameters  e.g. power, which is product of voltage and current ',
        eqVersion: 1,
        statusGuid: null,
        eqFormula:
          '\\[Y = \\frac{{[10a\\left(\\frac{1}{{\\sqrt{b}}}-\\frac{1}{{\\sqrt{c}}}\\right)d]}}{{I \\cdot m \\cdot G \\cdot b}}\\]',
      },
      {
        eqGuid: '84877BD1-DC51-4C5C-A099-862C193F6E5F',
        eqName: 'Equa_1',
        eqDescription: 'Equation Description',
        eqVersion: 2,
        statusGuid: '6BDF2B74-ECDA-4110-BF20-9F9234773E78',
        eqFormula:
          '\\[Y = \\frac{{[10a\\left(\\frac{1}{{\\sqrt{b}}}-\\frac{1}{{\\sqrt{c}}}\\right)d]}}{{I \\cdot m \\cdot G \\cdot b}}\\]',
      },
      {
        eqGuid: '245F6A94-AEEF-4E9B-8A5A-87C826A1A659',
        eqName: 'BallMillThroughputRate',
        eqDescription:
          'Measured on weighscale in tph or lb/h,Weighscale is located on conveyor carrying mill product',
        eqVersion: 1,
        statusGuid: null,
        eqFormula:
          '\\[Y = \\frac{{[10a\\left(\\frac{1}{{\\sqrt{b}}}-\\frac{1}{{\\sqrt{c}}}\\right)d]}}{{I \\cdot m \\cdot G \\cdot b}}\\]',
      },
      {
        eqGuid: '09AF2769-07EF-4BE3-83F1-8DB9A2CBE7D1',
        eqName: 'ParameterDifference',
        eqDescription:
          'This is a generic equation that calculates the difference between the two parameters which are of same type and in same units e.g. temperature difference, etc',
        eqVersion: 1,
        statusGuid: null,
        eqFormula:
          '\\[Y = \\frac{{[10a\\left(\\frac{1}{{\\sqrt{b}}}-\\frac{1}{{\\sqrt{c}}}\\right)d]}}{{I \\cdot m \\cdot G \\cdot b}}\\]',
      },
      {
        eqGuid: 'E44A91B5-B0B9-461F-A08E-AAA51F65620C',
        eqName: 'BallMillPowerEfficiency3',
        eqDescription:
          'This equation calculates power efficiency based on this formula-\nTheoretical Power Required / Actual Power Consumed and Motor Efficiency = Torque x rpm x 2 x pi / (60*Voltage x Current)',
        eqVersion: 1,
        statusGuid: null,
        eqFormula:
          '\\[Y = \\frac{{[10a\\left(\\frac{1}{{\\sqrt{b}}}-\\frac{1}{{\\sqrt{c}}}\\right)d]}}{{I \\cdot m \\cdot G \\cdot b}}\\]',
      },
      {
        eqGuid: '4AF14994-037E-445E-B987-AB2A323D43D4',
        eqName: 'Equa_2',
        eqDescription: 'Equation Description',
        eqVersion: 1,
        statusGuid: '6BDF2B74-ECDA-4110-BF20-9F9234773E78',
        eqFormula:
          '\\[Y = \\frac{{[10a\\left(\\frac{1}{{\\sqrt{b}}}-\\frac{1}{{\\sqrt{c}}}\\right)d]}}{{I \\cdot m \\cdot G \\cdot b}}\\]',
      },
      {
        eqGuid: '99A12237-A29B-4B6A-BA02-AD9885CCBE4E',
        eqName: 'kTimesParameter',
        eqDescription:
          'This is a generic equation that multiplies a constant to any parameter. ',
        eqVersion: 1,
        statusGuid: null,
        eqFormula:
          '\\[Y = \\frac{{[10a\\left(\\frac{1}{{\\sqrt{b}}}-\\frac{1}{{\\sqrt{c}}}\\right)d]}}{{I \\cdot m \\cdot G \\cdot b}}\\]',
      },
      {
        eqGuid: 'AD57F1B1-EBBB-4367-B6D7-B4DFAF810B46',
        eqName: 'BallMillHealthIndex',
        eqDescription:
          'Health Index= 100 -  Risk Score where Risk Score is computed using Risk Score Algorithm based on FMEA based Rule Engine & Parameter Limits ',
        eqVersion: 1,
        statusGuid: null,
        eqFormula:
          '\\[Y = \\frac{{[10a\\left(\\frac{1}{{\\sqrt{b}}}-\\frac{1}{{\\sqrt{c}}}\\right)d]}}{{I \\cdot m \\cdot G \\cdot b}}\\]',
      },
      {
        eqGuid: '282F965B-8C3A-4D81-8466-EAE6B934860F',
        eqName: 'ParameterSum',
        eqDescription:
          'This is a generic equation that calculates the sum of the two parameters which are of same type and in same units e.g. total head',
        eqVersion: 1,
        statusGuid: null,
        eqFormula:
          '\\[Y = \\frac{{[10a\\left(\\frac{1}{{\\sqrt{b}}}-\\frac{1}{{\\sqrt{c}}}\\right)d]}}{{I \\cdot m \\cdot G \\cdot b}}\\]',
      },
      {
        eqGuid: '5BD7DFA1-4DA4-4620-B41B-FF38CCA51F88',
        eqName: 'BallMillPowerEfficiency1',
        eqDescription:
          'This equation calculates power efficiency based on this formula- \nTheoretical Power Required / Actual Power Consumed, where actual power consumed is a measured quantity.',
        eqVersion: 1,
        statusGuid: null,
        eqFormula:
          '\\[Y = \\frac{{[10a\\left(\\frac{1}{{\\sqrt{b}}}-\\frac{1}{{\\sqrt{c}}}\\right)d]}}{{I \\cdot m \\cdot G \\cdot b}}\\]',
      },
    ],
  };

  mathContent = `\[Y = \frac{{[10a\left(\frac{1}{{\sqrt{b}}}-\frac{1}{{\sqrt{c}}}\right)d]}}{{I \cdot m \cdot g \cdot b}}\]`;

  onChange(value: any) {
    // let index = value.target.selectedIndex;
    // this.selected_fruit = index;
    // this.mathContent = this.arr.payload[index].eqFormula;
  }
}
