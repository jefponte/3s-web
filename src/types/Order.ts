import { Division } from "./Division";
import { OrderMessage } from "./OrderMessage";
import { OrderStatusLog } from "./OrderStatusLog";
import { Service } from "./Service";
import { User } from "./User";

export interface Results {
    data:  Order[];
    links: Links;
    meta:  Meta;
}
export interface Result {
    data:  Order;
}
export interface Order {
    id:             number;
    division_id:     number;
    service_id:      number;
    division_sig_id:  number;
    customer_user_id: number;
    description:    string;
    campus:         string;
    tag:            string | null;
    phone_number:    null | string;
    division_sig:    string;
    solution:       null | string;
    rating:         null | string;
    email:          null | string;
    created_at:      string;
    service_at:      string | null;
    finished_at:     string | null;
    committed_at:    string | null;
    provider_user_id: number | null;
    attachment:     string | null;
    place:          string | null;
    priority:       string | null;
    updated_at:      string | null;
    status:         string;
    service: Service;
    customer: User;
    provider: User;
    division: Division;
    status_logs: OrderStatusLog[];
    messages: OrderMessage[];
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

  export interface OrderParams {
    page?: number;
    perPage?: number;
    search?: string;
    isActive?: boolean;
  }