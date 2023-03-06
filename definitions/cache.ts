import { Converter } from 'showdown';
import GlobalStore from "../stores/GlobalStore";
import { ILanding } from "./definitions";

export default class GlobalCache {
    static converter = new Converter();
    static numberFormatter = new Intl.NumberFormat('es-ES');
    static numberFormatter2decimals = new Intl.NumberFormat('es-ES', { 
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    static numberFormatter0decimals = new Intl.NumberFormat('es-ES', { 
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    static cryptoTemplate: Promise<ILanding> = GlobalStore.getCryptoTemplate();
    static dateFormatter = new Intl.DateTimeFormat('es-ES');
}
