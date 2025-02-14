import app from "../app";
import connection from "../db";


const query = "SELECT * FROM ourvalues";

app.get("/values", (req, res)=>{



        connection.query(query, (err, rows, fields) => {
            if (err) throw err

            console.log('result: ', rows)
        })

        connection.end()
})