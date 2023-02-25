export enum EHost {
    develop = "http://localhost:8082",
    deploy = "https://empezarainvertir.com/api" 
}

export enum EHostFront {
    develop = "http://localhost:3000",
    deploy = "https://empezarainvertir.com" 
}

export default class Global {
    static host = EHost.develop;
    static hostFront = EHostFront.deploy;
}

export interface IHeader {
    Header: IHeaderDropdown[];
}

export interface IHeaderDropdown {
    main: TDropwdown,
    dropdown: [TDropwdown]
}

export type TStringDuple = [string, string];
export type TStringTriple = [string, string, string];

export type TDropwdown = TStringDuple | TStringTriple;
