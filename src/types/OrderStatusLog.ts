import { User } from "./User";

export interface Results {
    data:  OrderStatusLog[];
    links: Links;
    meta:  Meta;
}
export interface Result {
    data:  OrderStatusLog;
}
export interface OrderStatusLog {
    id:        number;
    order_id:   number;
    message:   string | null;
    user_id:    number;
    created_at: string | null;
    updated_at: string | null;
    status:    string;
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

  export interface OrderStatusLogParams {
    page?: number;
    perPage?: number;
    search?: string;
    isActive?: boolean;
  }