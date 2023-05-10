import knex from "../database/connection";
import bcrypt from "bcrypt";

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
        return user[0]
    }
    
    async create(name: string, email: string, password: string)
    {
        try {
            var hash = await bcrypt.hash(password, 10)
            await knex.insert({email, password: hash, name, role: 0}).table("users")
        } catch (error) {
            console.log(error)
        }
    }

    async update(id: number, name: string, email: string, password: string, role: number)
    {

    }

    async delete(id: number)
    {

    }

    async findEmail(email: string)
    {
        try {
            var result = await knex.select("*").from('users').where({email: email})
            if(result.length > 0){
                return true
            }else{
                return false
            }
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async selectByEmail(email: string)
    {
        var user = await knex.select("*").from("users").where({email: email})
        return user[0]
    }
}

export default new User()