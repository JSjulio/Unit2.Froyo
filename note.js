//TODAY WE: 

//Key value structure of objects, 
// how objects are used to store data, 
// looped ojbects,
//  modified objecst,
//   distinguished between dot notation and bracket notation, 
//   and used JSON


const fruit = { 
    name: "banana",
    color: ["green", "yellow", "brown"],
    sugar: 14, 
    isAvailable: true, 
    };

    const shoe = { 
        brand: "converse",
        hasLaces: true,
        hasVelcro: false,
        color: "green",
        price: 50,
        activityType: "basketball"
    }; 

    // MY FIRST OBJECT!!!!!
    
    console.log(shoe.color)
        // dot notation: a way to acces properties within objects using a statis, previously known key

    const car = { 
        color: 'blue',
        brand: 'honda',
        trim: 'sport',
        weight: '1577kg',
    };

// ! review screenshot to learn how to add values to a table, remove values from table , and call the table 

    // console.log(car.color);
    // const property = "color"
    // console.log(car[property]);

        // bracket notation is a meas to access properties within objects usually with a dynamic, varibale key(meaning they change)


    for ( const key in car ) {
        // console.log(car.{"key"});
        //key is a varibale so you need bracket location...So in for loops you need bracket location to access changing values
    }

    // ! review nested arrays 

    let array = Object.values(fruit); 

    console.log(array[1]);

// !  JSON : Javascripit Object Notation

// https://www.w3schools.com/js/js_json_intro.asp

//This is useful because you can transmit data across the internet with api's 
    //api's translate data into string form to send it anywhere within the internet

//JSON.parse: creates a string into an object 
//JSON.Stringify:  creates the object into string 
// ! screenshot 

