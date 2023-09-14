export interface Results {
    meta: Meta;
    links: Links;
    data: Service[];
  }

  export interface Result {
    data: Service;
    meta: Meta;
    links: Links;
  }

  export interface Service {
    id: string;
    name: string;
    description: null | string;
    role: string;
    division_id: number;
    details: null | string;
    created_at: null | string;
    updated_at: null | string;
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

  export interface ServiceParams {
    page?: number;
    perPage?: number;
    search?: string;
    isActive?: boolean;
  }