export interface Estado {
    id:number;
    estado:string;
}

export let ListaEstado:Array<Estado>=[
    {
        id:1,
        estado:"iniciado"
    },
    {
        id:2,
        estado:"En proceso"
    },
    {
        id:3,
        estado:"terminado"
    }
]