// EX 2 ------------------------------------------------
/*
/*HW
1. Create an interface Id that has property id of type number
2. Create an interface Name that has property name of type string
3. Create a new type IdOrName and pass in a generic type
* If passed in type extends Id, IdOrName - will be of type number
* Else If passed in type extends Name, IdOrName - will be of type string
* Else passed in type extends Anything Else, IdOrName - will be of type {age: boolean}
 */

interface Id {
  id: number;
}
interface Name {
  name: string;
}

type IdOrName<T> = T extends Id
  ? number
  : T extends Name
  ? string
  : { age: boolean };

  
  //My tests
//=====================================================

type N = IdOrName<Id>;

type S = IdOrName<Name>;

type Bo = IdOrName<{abc: number[]}>
