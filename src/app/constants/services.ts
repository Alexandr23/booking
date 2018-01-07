import {IService} from '../models/service';

const DESCRIPTION = 'Тут должно быть описание услуги наверное...';

export const SERVICE_LIST = [
    {id: 1, title: 'Стрижка мужская', description: DESCRIPTION, cost: 600},
    {id: 2, title: 'Под машинку', description: DESCRIPTION, cost: 1200},
    {id: 3, title: 'Стрижка бороды', description: DESCRIPTION, cost: 500},
    {id: 4, title: 'Стрижка усов', description: DESCRIPTION, cost: 1800},
    {id: 5, title: 'Стрижка + борода', description: DESCRIPTION, cost: 900},
] as IService[];
