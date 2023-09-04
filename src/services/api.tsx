import axios from "axios";



export const columns = [
    { field: 'id', headerName: "Nº", width: 100 },
    { field: 'area', headerName: "Área", width: 200 },
    { field: 'objetivo', headerName: "Objetivo", width: 200 },
    { field: 'classificacaoIndicador', headerName: "Classificação do Indicador", width: 200 },
    { field: 'categoriaIndicador', headerName: "Categoria do Indicador" },
    { field: 'tipoIndicador', headerName: "Tipo de Indicador" },
    { field: 'descricaoIndicador', headerName: "Descrição do Indicador", width: 250 },
    { field: 'descricao', headerName: "Descrição da Meta", width: 250 },
    { field: 'prazo', headerName: "Prazo", width: 100 },
    { field: 'unidadeResponsavel', headerName: "Unidade Responsavel", width: 200 },
    { field: 'unidadeCoResponsavel', headerName: "Unidade Co-Responsavel", width: 250 }
];


export const api = axios.create({
    baseURL: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTDX4Iiart_C_hlcFQeBl-GyGMInu9s7wr24yETCoJkStH5ZPlUOrfQw2yTw6Zv9vBNCbw2jKIElCDv/pub?gid=0&single=true&output=tsv'
});

export const fetchData = async (setData: any) => {
    try {
        const response = await api.get('');
        const events = tsvToJSON(response.data);
        setData(events);
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
    }
};


function tsvToJSON(tsv: string) {
    const lines = tsv.split('\r\n');
    const result: Record<string, string>[] = [];
    const headers = lines[0].split('\t');
    for (let i = 1; i < lines.length; i++) {
        if (!lines[i]) {
            continue;
        }
        const obj: Record<string, string> = {};
        const currentline = lines[i].split('\t');
        for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }
        result.push(obj);
    }
    return result;
}