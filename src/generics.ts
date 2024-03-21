function getFirstElement<T>(data: T[]): T | null{
    if(!data.length){
        return null
    }

    const [firstElement] = data //desestruturando array

    return firstElement
}

const stringArray: string[] = ['lucas', 'joão', 'maria', 'gabriel']

const numberArray: number[] = [1, 2, 3, 4]

console.log(getFirstElement<string>(stringArray))
console.log(getFirstElement<number>(numberArray))