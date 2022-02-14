import { ExpressRoute } from './route.interface';
import createRecord from '../services/createRecord';
import readRecord from '../services/readRecord';
import readRecords from '../services/readRecords';
import updateRecord from '../services/updateRecord';
import deleteRecord from '../services/deleteRecord';

export const MainRoutes: ExpressRoute[] = [
    {
        path: '/wine',
        method: 'get',
        action: readRecords,
    },
    {
        path: '/wine/:id',
        method: 'get',
        action: readRecord,
    },
    {
        path: '/wine',
        method: 'post',
        action: createRecord,
    },
    {
        path: '/wine/:id',
        method: 'put',
        action: updateRecord,
    },
    {
        path: '/wine/:id',
        method: 'delete',
        action: deleteRecord,
    },
];
