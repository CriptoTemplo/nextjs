import GlobalStore from "@/stores/GlobalStore";
import { ILanding } from "@/definitions/definitions";
import Toast from "@/components/toast";
import { createRef } from "react";

export default class GlobalCache {
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
    static toast: React.RefObject<Toast> = createRef();
}
