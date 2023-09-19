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
    divisionID:     number;
    serviceID:      number;
    divisionSigID:  number;
    customerUserID: number;
    description:    string;
    campus:         string;
    tag:            null;
    phoneNumber:    null | string;
    divisionSig:    string;
    solution:       null | string;
    rating:         null | string;
    email:          null | string;
    createdAt:      string;
    serviceAt:      string | null;
    finishedAt:     string | null;
    committedAt:    string | null;
    providerUserID: number | null;
    attachment:     null;
    place:          null;
    priority:       null;
    updatedAt:      null;
    status:         string;
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