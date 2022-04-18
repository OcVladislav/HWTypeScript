// EX 4 ------------------------------------------------
//Having two interfaces:
interface User {
  id: number;
  name: string;
  age: number;
}
interface Car {
  id: number;
  color: string;
  numberOfDoors: number;
}

type DataType<T> = {
  data: {
    [key: string]: T | number;
    pagination: number;
  };
  error: string[];
};

const exp: DataType<User> = {
  data: {
    users: {
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
