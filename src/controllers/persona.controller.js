import { getConnection } from "./../database/database";

const getPersona = async (req, res) => {
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT id, Nombre, Dni, FechaNacimiento FROM persona");
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};

export const methods = {
    getPersona
};