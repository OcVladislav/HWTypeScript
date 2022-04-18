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

enum Persons {
  A,
  B,
  C,
}

function ClassDecorator(decorFn: Function) {
  //console.log(decorFn)
}

function PropertyDecorator(target: Object, propertyKey: string | symbol) {
  //console.log(propertyKey)
}

function MethodDecorator(p: {
  A: number,
  B: number,
  C: number,
}) {
  return (target: object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const result = originalMethod.apply(this, args);
      Object.keys(p).filter(key => !isNaN(Number(key))).forEach((key) => {
        if (Number(key) === 0) {
          console.log(ParameterDecorator.call(this, this, propertyKey, result))
        } else console.log(ParameterDecorator.call(this, this, propertyKey, result * 50))
      })
    };
  }
}


function ParameterDecorator(target: Object, propertyKey: string | symbol, value: number): any {
  return value + " " + "some text";
}


@ClassDecorator
class Users {
  @PropertyDecorator
  property1: string
  constructor(public name: string, property1: string) {
    this.property1 = property1;
  }
  @MethodDecorator(Persons)
  public getPass(@ParameterDecorator param1: number) {
    console.log('this is our message');
    return param1;
  }
}

const user = new Users("Vlad", "abc")

user.getPass(100);
