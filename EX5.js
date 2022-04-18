"use strict";
// EX 5 ------------------------------
// Write a class decorator, method decorator and parameter decorator functions for any Class the logic inside each decorator is up to you e.g.:
/*
@ClassDecorator
class SomeClass {
  @PropertyDecorator
  property1: string;
  @MethodDecorator(PASS_SOME_ENUM)
  someMethod(@ParameterDecorator someParameter: number) {
    // If PASS_SOME_ENUM value === 0 => Print parameter decorator value + some text from @ParameterDecorator
    // Else Print parameter decorator value * 50 + some text from @ParameterDecorator
    console.log('this is our message');
  }
}
 */
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
var __param =
  (this && this.__param) ||
  function (paramIndex, decorator) {
    return function (target, key) {
      decorator(target, key, paramIndex);
    };
  };
var Persons;
(function (Persons) {
  Persons[(Persons["A"] = 0)] = "A";
  Persons[(Persons["B"] = 1)] = "B";
  Persons[(Persons["C"] = 2)] = "C";
})(Persons || (Persons = {}));
function ClassDecorator(decorFn) {
  //console.log(decorFn)
}
function PropertyDecorator(target, propertyKey) {
  //console.log(propertyKey)
}
function MethodDecorator(p) {
  return (target, propertyKey, descriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
      const result = originalMethod.apply(this, args);
      Object.keys(p)
        .filter((key) => !isNaN(Number(key)))
        .forEach((key) => {
          if (Number(key) === 0) {
            console.log(
              ParameterDecorator.call(this, this, propertyKey, result)
            );
          } else
            console.log(
              ParameterDecorator.call(this, this, propertyKey, result * 50)
            );
        });
    };
  };
}
function ParameterDecorator(target, propertyKey, value) {
  return value + " " + "some text";
}
let Users = class Users {
  constructor(name, property1) {
    this.name = name;
    this.property1 = property1;
  }
  getPass(param1) {
    console.log("this is our message");
    return param1;
  }
};
__decorate(
  [PropertyDecorator, __metadata("design:type", String)],
  Users.prototype,
  "property1",
  void 0
);
__decorate(
  [
    MethodDecorator(Persons),
    __param(0, ParameterDecorator),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0),
  ],
  Users.prototype,
  "getPass",
  null
);
Users = __decorate(
  [ClassDecorator, __metadata("design:paramtypes", [String, String])],
  Users
);
const user = new Users("Vlad", "abc");
user.getPass(100);
