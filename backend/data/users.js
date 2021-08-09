import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'aslı eker',
        email: 'aslı@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'beyza',
        email: 'beyza@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users 