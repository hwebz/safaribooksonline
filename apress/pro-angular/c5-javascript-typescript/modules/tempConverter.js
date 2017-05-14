/*export class TempConverter {
    static convertFtoC(temp: number):string {
        return ((parseFloat(temp.toPrecision(2)) - 32)/1.8).toFixed(1);
    }
}*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TempConverter = (function () {
    function TempConverter() {
    }
    /*static convertFtoC(temp: number | string):string {
        // let value: number = (<number>temp).toPrecision ? <number>temp : parseFloat(<string>temp);
        let value: number = (temp as number).toPrecision ? temp as number : parseFloat(<string>temp);
        return ((parseFloat(value.toPrecision(2)) - 32)/1.8).toFixed(1);
    }*/
    TempConverter.convertFtoC = function (temp) {
        var value;
        if (temp.toPrecision) {
            value = temp;
        }
        else if (temp.indexOf) {
            value = parseFloat(temp);
        }
        else {
            value = 0;
        }
        return TempConverter.performCalculation(value).toFixed(1);
    };
    TempConverter.performCalculation = function (value) {
        return (parseFloat(value.toPrecision(2)) - 32) / 1.8;
    };
    return TempConverter;
}());
exports.TempConverter = TempConverter;
