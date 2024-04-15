import { getConnection } from "./../database/database";

const getPersonas = async (req, res) => {
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT id, Nombre, Dni, FechaNacimiento FROM persona");
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};

const getPersona = async (req, res) => {
    try{
        console.log(req.params);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id, Nombre, Dni, FechaNacimiento FROM persona WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};

const addPersona = async (req, res) => {
    try{
        const { nombre, dni, fechanacimiento} = req.body;
        
        if(nombre===undefined || dni===undefined || fechanacimiento===undefined){
            res.status(400).json({message:"Bad request. Please fill all the fields."});
        }

        const persona={ nombre, dni, fechanacimiento };
        console.log(req.body);
        const result = await connection.query("INSERT INTO persona SET ?", persona); 
        const connection = await getConnection();
        
        res.json({message: "Datos añadidos"});
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};

const deletePersona = async (req, res) => {
    try{
        console.log(req.params);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM persona WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};

export const methods = {
    getPersonas,
    getPersona,
    addPersona,
    deletePersona
};