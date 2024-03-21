type User = {
    id: number,
    username: string,
    password: string,
    createdAt: Date,
    updatedAt: Date

}

const user: User = {
    id: 1,
    username: 'Renan Jr',
    password: 'frost123',
    createdAt: new Date(),
    updatedAt: new Date()
    
}

type PartialUser = Partial<User>  //Partial (use com cuidado)

const user2: PartialUser = {
    id: 2
}

const user3: PartialUser = {
    username: 'Renato'
}

type NewUser = Omit<User, 'id' | 'username'>  // Omit vai omitir o campo especificado no segundo argumento como o 'id'

const user1: NewUser = {
    password: '123',
    createdAt: new Date(),
    updatedAt: new Date()
}

type SearchUser = Pick<User, 'username'> // Pick vai especificar exatamento o tipo que você quer naquele objeto

const acharUsuário: SearchUser = {
    username: 'Renato'
}