#!/usr/bin/env node

////////////////////
//
// Author: osdiomar
// Description: This is the first exercise in the course. We just want to interact with files
// Date: 23/06/2013
//
////////////////////

var fs = require('fs');

var ini_number = 2;
var primes_to_show = 100; 
var prime_counter = 0;
var i = ini_number;
var outfile = "primes.txt";

function is_Prime(number)
{
    var result = true;
    for ( var j = ini_number; j < number; j++)
    {
        if ( number % j == 0 )
            result = false;
    }
    return result;
}

while ( prime_counter < primes_to_show )
{
    result = is_Prime(i);
    if (result == true)
    {
        prime_counter++;
        if (prime_counter <= primes_to_show )
            if ( i == 2 )
                fs.writeFileSync (outfile, i);
            else
                fs.appendFileSync(outfile, "," + i);
         else
            break;
    }
    i++;
}
