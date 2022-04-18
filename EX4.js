"use strict";
const exp = {
    data: {
        user: {
            id: 100,
            name: "string",
            age: 21,
        },
        pagination: 5,
    },
    error: ["Error1"],
};
// Replicate an API response that will have the following structure:
// {
//   data: {
//     [any keys of string type]: Generic type;
//     pagination: number;
//   }
//   errors: string[]
// }
