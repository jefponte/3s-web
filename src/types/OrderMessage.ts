import { User } from "./User";

export interface Results {
    data: OrderMessage[];
    links: Links;
    meta: Meta;
}
export interface Result {
    data: OrderMessage;
}

export interface OrderMessage {
    id: number;
    orderid: number;
    message: string;
    userid: number;
    created_at: string | null;
    updated_at: string | null;
    type: string;
    user: User;
}


export interface Links {
    prev: string;
    last: string;
    next: string;
    first: string;
}

export interface Meta {
    to: number;
    from: number;
    path: string;
    total: number;
    per_page: number;
    last_page: number;
    current_page: number;
}

export interface OrderMessageLogParams {
    page?: number;
    perPage?: number;
    search?: string;
    isActive?: boolean;
}