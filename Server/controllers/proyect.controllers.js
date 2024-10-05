import {pool} from "../db.js";
// getProyect,updateProyect,deleteProyect 
export const createProyect=async(req,res)=>{
    try{
        const {user_id,table_name}=req.body;
        const [result]=await pool.query('INSERT INTO tables (user_id,table_name) VALUES(?,?)',
            [user_id,table_name]
        );
        res.json({
            id:result.insertId,
            user_id,
            table_name
        })
        return res.status(201);
    }catch(error){
        console.error(error)
        return res.status(500).json({message:error.message});
    }
}

export const getProyect=async(req,res)=>{
    try{
        const[result]=await pool.query('SELECT * FROM tables WHERE id=?',[req.params.id]);
        if(result.length===0){
            return res.status(404).json({message:"there are no tables created yet"});
        }
        res.json(result[0]);
    }catch(error){
        return res.status(500).json({message:error.message});
    }

}

export const getProyects=async(req,res)=>{
    try{
        const [result]=await pool.query("SELECT * FROM tables ORDER BY created_at ASC");
        res.json(result);
    }catch(error){
        console.error(error);
        return res.status(500).json({message:error.message})
    }
}

export const updateProyect=async(req,res)=>{
    try{
        const result=await pool.query("UPDATE tables SET ? WHERE id=?",[req.body,req.params.id]);
    }catch(error){
        return res.status(500).json({message:error.message});
    }
} 

export const deleteProyect=async(req,res)=>{
    try{
        const [result]=await pool.query("DELETE FROM tables WHERE id=?",[req.params.id]);
        if(result.affectedRows===0){
            return res.status(404).json({message:"table not found"})
        }
        return res.sendStatus(204);
    }catch(error){
        return res.status(500).json({message:error.message});
    }
}