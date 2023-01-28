// use the path of your model
const registration = require('../models/user');
const Flight = require('../models/addFlightModels')
const Hotel = require('../models/addHotelModels')
const mongoose = require('mongoose');
// use the new name of the database
const url = 'mongodb://localhost:27017/Flight_testing';
beforeAll(async () => {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true
    });
});
afterAll(async () => {
    await mongoose.connection.close();
});
// describe ('SAMPLE TESTING', () => {
//     it('should be true ===true',()=>{
//         expect(true).toBe(true)
//     })

// })


// ...........................FLIGHT..............
// describe('Flight Schema Testing', () => {
//     /////////////the code for insert testing/
//     it("Add flight testtin anything", () => {
//         const flight = {
//             userId: "6062b123279c2e2c90d45a3d",
//             flightid: "60767aa737624c056c6868e4",
//             cname: "pokhara",
//             image: "path",
//             price: "100",
//             duration:"1245",
//             arrival:"2112",
//             depature: "2121"

//         };
//         return Flight.create(flight).then((pro_ret) => {
//             expect(pro_ret.cname).toEqual('pokhara');
//         });
//     });

// });

// describe('User Schema test anything', () => { // the code below is for insert testing
//     it('Add User testing anything', () => {
//         const register = {

            
//             'username': 'testuser10',
//             'email': 'testuser@gmail.com',
//             "password": "password",
//             "phone": "986347812"
//         };
//         return registration.create(register).then((pro_ret) => {
//             expect(pro_ret.username).toEqual('testuser10');
//         });
//     });
  
// });


// Update Flight//
// it("testing flight Update",async()=>
// {
//     return Flight.findOneAndUpdate(
//         { _id: Object("607e830451855a4dc83ea36a") },
//             {$set: {cname:"lalitpur"}}////updating packages name
//     ).then((pp)=>{
//         expect(pp.cname).toEqual("pokhara");
//     });
// });



//Delete Flight
// it('to test the delete flight is working or not', async() =>
// {
//     return Flight.deleteMany();
//     { _id: Object("607d85f2e362a90a181add7d") }
//     conststatus= await packages.deleteMany();
//     expect(status.ok).toBe(1);});



//Hotel Add
    describe('User Schema test anything', () => { // the code below is for insert testing
    it('Add hotel testing anything', () => {
        const hotel = {
                            userId: "6062b123279c2e2c90d45a3d",
                            hotelid: "606e9220b35ccc0e5c9ce67b",
                            hname: "kathmandu guest house",
                            himage: "path",
                            hprice: "1000",
                            description: "this is our guest house"
                
        };
        return Hotel.create(hotel).then((pro_ret) => {
            expect(pro_ret.hname).toEqual('kathmandu guest house');
        });
    });
  
});


// Update Hotel//
it("testing flight Update",async()=>
{
    return Hotel.findOneAndUpdate(
        { _id: Object("607e83f685cdc109e8b7084a") },
            {$set: {hname:"lalitpur house"}}////updating packages name
    ).then((pp)=>{
        expect(pp.hname).toEqual("kathmandu guest house");
    });
});

//Delete hotel
// it('to test the delete hotel is working or not', async() =>
// {
//     return Hotel.deleteMany();
//     { _id: Object("607d85f2e362a90a181add7d") }
//     conststatus= await hotel.deleteMany();
//     expect(status.ok).toBe(1);});
