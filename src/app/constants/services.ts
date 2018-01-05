import {IService} from '../models/service';

const DESCRIPTION = 'Тут должно быть описание услуги наверное...';

export const SERVICE_LIST = [
    {id: 1, title: 'Стрижка мужская', description: DESCRIPTION},
    {id: 2, title: 'Под машинку', description: DESCRIPTION},
    {id: 3, title: 'Стрижка бороды', description: DESCRIPTION},
    {id: 4, title: 'Стрижка усов', description: DESCRIPTION},
    {id: 5, title: 'Стрижка + борода', description: DESCRIPTION},
] as IService[];
