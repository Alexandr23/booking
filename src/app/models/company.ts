export interface ICompany {
    id: number;
    title: string;
    description: string;
    isFavorite?: boolean;
    address: string;
    phone: string;
    schedule?: string[];
    rating: number;
}