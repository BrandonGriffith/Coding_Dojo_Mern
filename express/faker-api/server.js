const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');
//npm init -y
app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) );

class User {
    constructor() {
        this.id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}console.log(new User());

class Company {
    constructor() {
        this.id = faker.datatype.uuid();
        this.company = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipcode: faker.address.zipCodeByState(),
            country: faker.address.country()
        }
    }
}console.log(new Company());

app.get("/api/users/new", (_req,res)=>{
    let fakeUser = new User();
    res.json({fakeUser})
});

app.get("/api/company/new", (_req,res)=>{
    let fakeCompany = new Company();
    res.json({fakeCompany})
});

app.get("/api/user/company", (_req,res)=>{
    let fakeUser = new User();
    let fakeCompany = new Company();
    res.json({fakeUser, fakeCompany})
});

app.listen( port, () => {} );
