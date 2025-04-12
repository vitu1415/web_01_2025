"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataUtils = void 0;
var dataUtils = /** @class */ (function () {
    function dataUtils() {
    }
    dataUtils.formatarData = function (data, formato) {
        var dia = String(data.getDate());
        var mes = String(data.getMonth() + 1);
        var ano = data.getFullYear();
        switch (formato) {
            case 'dd/mm/yyyy':
                return "".concat(dia, "/").concat(mes, "/").concat(ano);
            case 'yyyy-mm-dd':
                return "".concat(ano, "-").concat(mes, "-").concat(dia);
            default:
                return 'Formato de data não suportado';
        }
    };
    dataUtils.diferencaEmDias = function (data1, data2) {
        var difData = 0;
        var porDia = 1000 * 60 * 60 * 24;
        if (data1 > data2) {
            difData = data1.getTime() - data2.getTime();
            return Math.floor(difData / porDia);
        }
        else if (data1 < data2) {
            difData = data2.getTime() - data1.getTime();
            return Math.floor(difData / porDia);
        }
        else {
            console.log("Data sao equivalentes");
            return difData;
        }
    };
    return dataUtils;
}());
exports.dataUtils = dataUtils;
var hoje = new Date();
console.log(dataUtils.diferencaEmDias(new Date("2025-04-01"), hoje));
