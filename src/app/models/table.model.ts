export interface TableModel {
    team:{name:string};
    position:number,
    points:number,
    goalsScored:number,
    goalsConceded:number,
    wins:number,
    draws:number,
    loses:number,
    year:number,
    round:string,
    stage:{name:string, position:number}
}