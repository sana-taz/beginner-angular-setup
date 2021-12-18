const dbConn = require( "../config")
module.exports = class Admin {
  static getStudents(req, res) {
    dbConn.query(
      "SELECT * FROM student",

      (err, result) => {
        if (err) {
          console.log(err);
          return res.json({
            success: false,
            message: "Unable to get student",
          });
        }
        // else(result.length > 0)
        //   console.log(result[0].students);
        //   IdUtente = result[0].students;

        return res.json({
          success: true,
          students:result,
        });
      }
    );
  }


}