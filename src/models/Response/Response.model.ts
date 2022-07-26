export interface ResponseModel<T> {
    total: number;
    limit: number;
    skip: number;
    data: T
}