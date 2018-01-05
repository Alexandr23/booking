import {ICompany} from '../models/company';

const DESCRIPTION = 'Тут должно быть описание компании. Тут должно быть описание компании. Тут должно быть описание компании. Тут должно быть описание компании. ';

export const COMPANY_LIST = [
    {id: 1, title: 'Парикмахерская Елена', description: DESCRIPTION, isFavorite: true},
    {id: 2, title: 'Столовка Колобок', description: DESCRIPTION, isFavorite: true},
    {id: 3, title: 'Салон красоты', description: DESCRIPTION, isFavorite: true},
    {id: 4, title: 'СТО Коней', description: DESCRIPTION},
    {id: 5, title: 'Парикмахерская', description: DESCRIPTION},
    {id: 6, title: 'Салон красоты', description: DESCRIPTION},
    {id: 7, title: 'СТО', description: DESCRIPTION},
    {id: 8, title: 'Парикмахерская', description: DESCRIPTION},
    {id: 9, title: 'Салон красоты', description: DESCRIPTION},
    {id: 10, title: 'СТО', description: DESCRIPTION},
    {id: 11, title: 'Парикмахерская', description: DESCRIPTION},
] as ICompany[];
