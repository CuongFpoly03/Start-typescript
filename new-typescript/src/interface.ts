export interface Products{
    _id: string,
    title: string,
    price: number,
    description: string,
}

export interface DataSigin {
    email: string,
    password: string,
}

export interface DataSigup {
    username: string,
    email: string,
    password: string,
    confirmPw: string,
}

export interface FormhookProduct {
    title: string,
    price: number,
    description: string,
    categoryId: string
}

export interface Category {
    _id: string,
    name: string
}