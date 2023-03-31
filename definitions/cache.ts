import GlobalStore from "@/stores/GlobalStore";
import { ILanding } from "@/definitions/definitions";
import Toast from "@/components/toast";
import { createRef } from "react";
import DOMPurify from "isomorphic-dompurify";
import Global from "./global";

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

    static addSanitizeHook = () => {
        DOMPurify.addHook('afterSanitizeAttributes', function (node) {
            // set all elements owning target to target=_blank
            if ('target' in node) {
                const href: string = node.getAttribute("href") ?? "";
                const isInternal: boolean = href.startsWith(Global.hostFront);
                if (isInternal) return;
    
                let rel: string = node.getAttribute("rel") ?? "";
                if (!rel) {
                    node.setAttribute("rel", "noopener noreferrer nofollow");
                }
                else if (!rel.includes("noopener noreferrer")) {
                    node.setAttribute("rel", "noopener noreferrer nofollow")
                }

                node.setAttribute('target', '_blank');
            }
        });
    }
}
