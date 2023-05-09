import knex from "../database/connection";

class User
{
    async selectAll()
    {
        var users = await knex.table("users").select('id','name','email','role','createdAt','updatedAt')
        return users
    }

    async selectById(id: number)
    {
        var user = await knex.table("users").select('id','name','email','role','createdAt','updatedAt').where({id: id})
        return user
    }
    
    async create(name: string, email: string, password: string, role: number)
    {

    }

    async update(id: number, name: string, email: string, password: string, role: number)
    {

    }

    async delete(id: number)
    {

    }

    async findEmail(email: string){

    }
}

export default new User()