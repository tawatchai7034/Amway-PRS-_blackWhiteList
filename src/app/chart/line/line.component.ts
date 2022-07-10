import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.sass']
})
export class LineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public multi = [
    {
      "name": "Mobiles",
      "series": [
        {
          "name": "2009",
          "value": 7500000
        },
        {
          "name": "2010",
          "value": 8948000
        },
        {
          "name": "2011",
          "value": 4325593
        }
        ,
        {
          "name": "2012",
          "value": 3625871
        }
      ]
    },
  
    {
      "name": "Laptop",
      "series": [
        {
          "name": "2009",
          "value": 7874000
        },
        {
          "name": "2010",
          "value": 8276000
        },
        {
          "name": "2011",
          "value": 6325457
        },
        {
          "name": "2012",
          "value": 9205450
        }
      ]
    },
    {
      "name": "AC",
      "series": [
        {
          "name": "2009",
          "value": 5004002
        },
        {
          "name": "2010",
          "value": 5804000
        },
        {
          "name": "2011",
          "value": 2533658
        },
        {
          "name": "2012",
          "value": 7500000
        }
      ]
    },
    {
      "name": "Headset",
      "series": [
        {
          "name": "2009",
          "value": 7620235
        },
        {
          "name": "2010",
          "value": 7832540
        },
        {
          "name": "2011",
          "value": 8000055
        },
        {
          "name": "2012",
          "value": 5532146
        }
      ]
    },
    {
      "name": "Fridge",
      "series": [
        {
          "name": "2009",
          "value": 7900025
        },
        {
          "name": "2010",
          "value": 4362558
        },
        {
          "name": "2011",
          "value": 8932582
        },
        {
          "name": "2012",
          "value": 9963523
        }
      ]
    }
  ];
   view: any[] = [700, 400];
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    showXAxisLabel = true;
    xAxisLabel = 'Number';
    showYAxisLabel = true;
    yAxisLabel = 'data';
    timeline = true;
     colorScheme = {
      domain: ['#E91E63', '#CDDC39', '#3F51B5', '#AAAAAA']
    };
}
