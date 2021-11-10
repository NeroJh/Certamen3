export interface Tarea {
    id:number;
    titulo:string;
    idEstado:number;
}

export let ListaTarea:Array<Tarea>=[
    {
        id:1,
        titulo:"hacer prueba",
        idEstado:1
    },
    {
        id:2,
        titulo:"hacer tarea",
       idEstado:2
    },
    {
        id:3,
        titulo:"hacer cama",
        idEstado:3
    }
]