export interface ILang {
    galininkas:string,
    kilmininkas:string,
    vardininkas:string,
    vietininkas:string
}

export interface IWord {
    uid: string,
    word: string
}

export interface ICountry {
    name: string
}

export interface IDrop {
    id: string,
    word: IWord,
    index: number
}