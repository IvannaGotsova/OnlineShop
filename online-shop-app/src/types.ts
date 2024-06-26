import { HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";

export interface Options {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: 'body';
    context?: HttpContext;
    params?: HttpParams | {
        [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
    transferCache?: {
        includeHeaders?: string[];
    } | boolean;
}

export interface Items {
    items: Item[];
    total: number;
    page: number;
    perPage: number;
    totalPages: number;

}

export interface Item {
    id?: number;
    name: string;
    product: string;
    type: string;
    ingredients: string;
    fragrance: string;
    description: string;
    quantity: number;
    volume: number;
    price: string;
    time: number;
    photo: string;
}

export interface PaginationParams {
       [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    page: number;
    perPage: number;
}