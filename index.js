#!/usr/bin/env node
const { getCode, getName} = require('country-list');
const axios = require('axios').default;

let countryDate = process.argv.slice(2);
let country = getCode(countryDate[0]);
let year = countryDate[1];

console.log(countryDate);
console.log(country);
console.log("Hello, Node.JS! it's a test.");

axios
    .get('https://date.nager.at/Api/v2/PublicHolidays/' + year + '/' + country)
    .then(
        (response) => {
             console.log(response.data);
            console.log('');
            console.log('');
            console.log('');
            console.log('Holidays in  for the year ' + year);
            console.log('* * * * * * * * * * * * * * * * ');
            response.data.forEach((element) => {
                // console.log(element.date + ' ' + element.name);
                console.log('');
                console.log('Date : ' + element.date);
                console.log('Name : ' + element.name);
                console.log('Local Name : ' + element.localName);
                console.log('');
                console.log(' * * * * * * * * * * * * * * * *');
            });
        },
        (error) => {
            console.log(error);
        }
    );

