// const express = require("express"); 

// const app = express();

// let requestCount = 0;

// function requestIncreaser(req, res, next) {
//     requestCount = requestCount + 1 ;
//     console.log("Total number of request = " + requestCount);
//     if () {
//         res.json({
//             mesage: "Total number of request on the server is"
//         });
//     }else {
//         next()
//     }
//     next();
// }

// function realSumHandler(req, res) {
//     requestIncreaser();
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);

//     res.json({
//         ans: a + b
//     });
// }

// app.get("/sum", requestIncreaser , realSumHandler);


// // better routing add database, middleware 
// // app.get("/multiply", requestIncreaser , function(req, res) {
// //    // main logic 
// //     const a = parseInt(req.query.a);
// //     const b = parseInt(req.query.b);

// //     res.json({
// //         ans: a * b
// //     });
// // });

// app.use(requestIncreaser)

// app.get("/sum", realSumHandler);

// app.get("/mltiply", realSumHandler);

// app.get("/dvide", realSumHandler);

// app.listen(3000); 