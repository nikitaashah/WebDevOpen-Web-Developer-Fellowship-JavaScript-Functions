// ====== Code ====== //

function availableCampsites(campgrounds) {

    let currentlyAvailableCampsites = [];

    for (let i = 0; i < campgrounds.length; i++) {
        if (campgrounds[i].isReserved === false) {
            currentlyAvailableCampsites.push(campgrounds[i].number);
        }
    }

    return currentlyAvailableCampsites;
}

let campgrounds = [
    {
        isReserved : true,
        number : 111
    },
    {
        isReserved : true,
        number : 114
    },
    {
        isReserved : false,
        number : 235
    },
    {
        isReserved : false,
        number : 456
    }
];

let totalAvailableCampsites = availableCampsites(campgrounds);

console.log(`Total available campsites are as follows: ${totalAvailableCampsites}`);



//===================================== //



// ====== Output ====== //

/*

Total available campsites are as follows: 235,456

=== Code Execution Successful ===

*/