export interface Results {
    currentPage:  number;
    data:         Service[];
    firstPageURL: string;
    from:         number;
    lastPage:     number;
    lastPageURL:  string;
    links:        Link[];
    nextPageURL:  string;
    path:         string;
    perPage:      number;
    prevPageURL:  null;
    to:           number;
    total:        number;
}

export interface Service {
    id:          string;
    name:        string;
    description: string;
    sla:         string;
    role:        string;
    divisionID:  string;
    details:     string;
    createdAt:   null;
    updatedAt:   null;
}


export interface Link {
    url:    null | string;
    label:  string;
    active: boolean;
}
