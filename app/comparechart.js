import * as d3 from 'd3';
import * as c3 from 'c3';

class compareChart { 

  constructor(target) {
    this.target = target;
    this.chartCounts = null;
  }

  render() {
    var self = this;

    var  padding = {
      top: 20,
      right: 40,
      bottom: 20,
      left: 60,
      };
    
    self.chartCounts = c3.generate({
        bindto: self.target,
        padding: padding,
        data: {
              // x: 'x',
              columns: [
                  // ['votes', 235808, 678336, 637581, 10358],
                  ['votes', 14516, 2678]
              ],
          type: 'bar',
          labels: {
              format: {
                  'votes': d3.format(',')
              }
          },
          color: function (color, d) {
            switch (d.x) {
                case 0 : return '#556E7F';
                case 1 : return '#9E403C';
            }
          }
        },
          tooltip: {
              show: false
          },
          legend: {
            show: false
          },
          point: {
            //   show: true,
            //   r: function(d) { if (d.x == 2018) { return 6;} else { return 0; } }
          },
          axis: {
                // rotated: true,
                y: {
                      max: 20000,
                      min: 0,
                      padding: {bottom: 0, top: 0},
                      tick: {
                       count: 4,
                       values: [0,5000,10000,15000,20000],
                       format: d3.format(',')
                      }
                  },
              x: {
                type: 'category',
                // categories: ["2014","2016","2018","2020 Primary"],
                categories: ["DFL","GOP"],
                padding: {right: 0, left: 0},
                      tick: {
                    //    rotate: -75,
                       multiline: false
                      },
                    //   height: 40
              }
          },
          grid: {
            y: {
              lines: [
                    // {value: 3818, text: '2014 WK 1', position: 'end', class:'powerline'}
              ]
    
            }
          }
  });

  }
}

export { compareChart as default }