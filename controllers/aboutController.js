import connection from "../db.js";

export default function aboutController(req, res) {
  const query = "SELECT * FROM ourvalues";
  connection.query(query, (err, rows) => {
    if (err) throw err;
    console.log(rows)
    return res.render("about", {
      user: {
        name: "username",
      },
      ourValues: rows,
    });
  });

  console.log("result", )


}
