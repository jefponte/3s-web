interface Service {
    id: string;
    name: string;
    description: string | null;
    sla: string | null;
    role: string | null;
    division_id: string | null;
    details: string | null;
    created_at: string | null;
    updated_at: string | null;
}


const service : Service = {
    "id": "454",
    "name": "Tira-dúvidas sobre suporte a Banco de Dados",
    "description": "Serviço utilizado para tirar dúvidas sobre banco de dados.",
    "sla": "2",
    "role": "disabled",
    "division_id": "1",
    "details": "{\"type\": \"Indefinido\", \"service_group\": \"Indefinido\"}",
    "created_at": null,
    "updated_at": null
}

const services = [
    service,
    {...service, id: "1", name: "ABC"},
    {...service, id: "2", name: "DEF"},
    {...service, id: "3", name: "GH!"},
];

export const initialState = {
    services: []
}