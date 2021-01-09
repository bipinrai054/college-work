exports.typeDefs = `
  type Car {
    _id: ID!
    brand: String!
    model: String!
    imageUrl: String
    category: String!
    description: String!
    ac: Boolean!
    isAvailable: Boolean!
    seat: Int!
    price: Int!
    age: String!
  }

  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    role: String!
    age: Int!
    phone:String
    favourites: [Car]
  }

  type Query {
    getAllCars: [Car]
    getCar(_id:ID!):Car

    getCurrentUser: User
  }

  type Token {
    token: String!
  }



  type Mutation {
    addCar(brand: String!, model: String!,category: String!, description: String!, ac: Boolean!, isAvailable: Boolean!,seat: Int!,price: Int!, age: String!): Car!
    signinUser(email: String!, password: String!): Token
    signupUser(firstName: String!, lastName: String!, email: String!, password: String!, age: String!, phone: String): Token

  }


`;
