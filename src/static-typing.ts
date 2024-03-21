let animal: string = 'cat'

function sum (a: number, b: number): number {
    return a + b
}

console.log(sum(1, 2))


function greetings(Fullname: string): string | void {

    if(Fullname){
        return `Hello, ${Fullname}`
    }
}

function stringOrNumberSize(value: string | number): number {

    if( typeof value === 'string'){
        return value.length
    }

    return value
}

console.log(stringOrNumberSize('hello'))
console.log(stringOrNumberSize(3))

