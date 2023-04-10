import {DateTime} from 'luxon';

export function get30daysago(){
    return DateTime.now().plus({days:30}).toISO();

};

export function get6monthsAgo(){
    return DateTime.now().plus({days:180}).toISO();
};

export function getOneYearAgo(){
    return DateTime.now().plus({days:365}).toISO();
};

console.log(get30daysago());