import { DepartmentStats, Dispatch, Assistant, Driver } from './types';

const departmentStats: DepartmentStats[] = [
    {
        name: 'DEPARTMENT1',
        point: 15847,
        leader: 'leader1',
        dispatch: 4,
        assistant: 6,
        driver: 15,
        score: 4.3
    },
    {
        name: 'DEPARTMENT2',
        point: 57391,
        leader: 'leader2',
        dispatch: 5,
        assistant: 3,
        driver: 20,
        score: 5.4
    }
];

const dispatch: Dispatch[] =[
    {
        name: 'dispatch1',
        age: 28
    },
    {
        name: 'dispatch2',
        age: 33
    },
    {
        name: 'dispatch3',
        age: 23
    },
    {
        name: 'dispatch4',
        age: 33
    },
    {
        name: 'dispatch5',
        age: 31
    },
    {
        name: 'dispatch6',
        age: 40
    },
];

const assistant: Assistant[] =[
    {
        name: 'Assistant1'
    },
    {
        name: 'Assistant2'
    },
    {
        name: 'Assistant3'
    },
    {
        name: 'Assistant4'
    },
    {
        name: 'Assistant5'
    }
];

const driver: Driver[] =[
    {
        name: 'Driver1'
    },
    {
        name: 'Driver2'
    },
    {
        name: 'Driver3'
    },
    {
        name: 'Driver4'
    },
    {
        name: 'Driver5'
    }
]

export {departmentStats, dispatch, assistant, driver};