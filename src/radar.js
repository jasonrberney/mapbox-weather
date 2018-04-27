// var axios = require('axios');

export default class Radar {

  constructor() {
    this._name = 'Radar';
    this.colorRamp = undefined;
  }

  get name() {
    return this._name;
  }

  fetchColorRamp() {
    fetch('<Your WDT URL>').then(response =>
      response.json().then(data => ({
        colorRamp: data
      })
      ).then(res => {
        this.colorRamp = res.colorRamp;
        console.log(this.colorRamp);

        let colorRampDict = {};

        for (let i = 0; i < res.colorRamp.drawingInfo.renderer.uniqueValueInfos.length; i++) {
          let r = res.colorRamp.drawingInfo.renderer.uniqueValueInfos[i].symbol.color[0];
          let g = res.colorRamp.drawingInfo.renderer.uniqueValueInfos[i].symbol.color[1];
          let b = res.colorRamp.drawingInfo.renderer.uniqueValueInfos[i].symbol.color[2];
          let hexColor = this.rgbToHex(r, g, b);

          colorRampDict[res.colorRamp.drawingInfo.renderer.uniqueValueInfos[i].value] = hexColor;
        }
        console.log(colorRampDict);
      })
    );
  }

  componentToHex(c) {
    const hex = c.toString(16);

    return hex.length === 1 ? '0' + hex : hex;
  }

  rgbToHex(r, g, b) {
    return '#' + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
  }

//   fetchColorRamp() {
//     axios.get('<Your WDT URL>').then(function (response) {
//       console.log(response);
//     })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }
}
