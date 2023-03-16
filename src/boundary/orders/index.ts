export interface Products{
    id?: string;
    name?: string;
    description?: string;
    picture?: string;
    cost?: number;
    categories?: string[];
}

export interface Orders {
    id: string;
    productIds:Products[];
    userId: string;
    totalCost: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface AddOrder {
    userId: string;
    totalCost: number;
    productIds: string[];
  }

export interface UpdateOrders{
    productIds?:string[];
    userId?: string;
    totalCost?: number;
    createdAt?: Date;
    updatedAt?: Date;
}