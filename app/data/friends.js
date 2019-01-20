// You should save your application's data inside of app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below.

// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendList = [
    {
        "name": "Homer",
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy3KdJTUnfmP-_SqMeRkXu7gX3uU06m7NZmdZmW8CbSpPXxHGq",
        "scores":
            [1, 1, 2, 3, 5, 2, 1, 4, 5, 1]
    },
    {
        "name": "Marge",
        "photo": "http://media.cleveland.com/ent_impact_home/photo/marge-simpsonjpg-bdb66c2b4eec0cc2_medium.jpg",
        "scores":
            [5, 1, 4, 2, 3, 2, 1, 2, 4, 1]
    },
    {
        "name": "Waylon Smithers",
        "photo": "https://img.discogs.com/tEDaPcTvoHNhhjAK1-HIB-6SiiE=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-1770045-1273644180.jpeg.jpg",
        "scores":
            [1, 2, 2, 4, 5, 3, 5, 1, 2, 5]
    },

    {
        "name": "Ned Flanders",
        "photo": "https://upload.wikimedia.org/wikipedia/en/8/84/Ned_Flanders.png",
        "scores": [5, 2, 4, 2, 5, 1, 4, 1, 3, 4]
    }
]


// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendList;