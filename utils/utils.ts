import GlobalCache from "../definitions/cache";

export default class Utils {

    public static isObjectEmpty(object: Object): boolean {
        return !Object.keys(object).length;
    }

    public static formatNumber(value: number): string {
        if (!value) return "-";
        return GlobalCache.numberFormatter.format(value);
    }

    // TODO la comparacion es un if ridiculo
    public static formatNumberWithDollar(value: number): string {
        if (!value) return "-";
        return GlobalCache.numberFormatter.format(value) + "$";
    }

    public static formatNumberNonNullCheck(value: number): string {
        return GlobalCache.numberFormatter.format(value);
    }

    // TODO la comparacion es un if ridiculo
    public static formatNumberWithDollarNonNullCheck(value: number): string {
        return GlobalCache.numberFormatter.format(value) + "$";
    }

    // Output: 14 Dic, 2022
    public static formatDateDayShortMonthYear(date: string): string {
        const auxDate: Date = new Date(date);
        const options: Intl.DateTimeFormatOptions = {
            month: "short"
        }
        let month: string = auxDate.toLocaleDateString("es-ES", options);
        month = month.charAt(0).toUpperCase() + month.slice(1);

        return (auxDate.getDate() + " " + month + "," + " " + auxDate.getFullYear())
    }

    public static roundToTwo(number: number) {
        return +(Math.round((number + "e+2") as unknown as number) + "e-2");
    }

    public static roundToOne(number: number) {
        return +(Math.round((number + "e+2") as unknown as number) + "e-1");
    }

    public static idGeneratorFromString(string: string): string {
        // Replace spaces with "-"
        string = string.replace(/\s+/g, "-");

        // Remove Spanish accents
        string = string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        return string;
    }

    public static loadTwitterScript(): void {
        if (typeof window !== 'undefined') {
            const scriptId = 'twitter-widgets';

            if (document.getElementById(scriptId)) {
                return; // The script is already loaded
            }

            const script = document.createElement('script');
            script.id = scriptId;
            script.src = 'https://platform.twitter.com/widgets.js';
            script.async = true;
            script.charset = 'utf-8';
            document.body.appendChild(script);
        }
    }
}
