import { Order } from "./Order";
import { User } from "./User";

export interface Results {
  data:  Notification[];
  links: Links;
  meta:  Meta;
}

export interface Notification {
    id:        string;
    type:      string;
    created_at: string;
    message:   null | string;
    user:      User;
    order:     Order;
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

  export interface UserParams {
    page?: number;
    perPage?: number;
    search?: string;
    isActive?: boolean;
  }