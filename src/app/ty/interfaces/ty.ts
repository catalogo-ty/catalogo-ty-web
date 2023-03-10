export interface TyResponse {
    total: number;
    ty:    Ty[];
}

export interface CategoryResponse {
    total: number;
    categories: Category[];
}

export interface Ty {
    _id:       string;
    name:      string;
    color:     string;
    user:      User ;
    category:  Category;
    createdAt: Date;
    updatedAt: Date;
    img:       string;
}

/* export interface TyNuevo {
    name: string;
    color: string;
    category: string;
} */

export interface Category {
    _id:  string;
    name: string;
}

export interface User {
    _id: string;
    name: string;
}