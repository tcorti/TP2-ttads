export class Match {
    public equipo1: string;
    public equipo2: string;
    public resultado: string;
    public fecha_hora_inicio: string;
    public eventos: string [];

    constructor(equipo1: string, equipo2: string, resultado: string, fecha_hora_inicio: string, eventos: string []){
        this.equipo1 = equipo1;
        this.equipo2 = equipo2;
        this.resultado = resultado;
        this.fecha_hora_inicio = fecha_hora_inicio;
        this.eventos = eventos;
    }
}