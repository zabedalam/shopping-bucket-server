const morgan =require("morgan")
const rfs=require("rotating-file-stream")
const fs=require("fs")
const path=require("path")

module.exports =function(app){
//    Format
const format=process.env.NODE_ENV === "production" ? "combined": "dev";

// Create a write stream (in append mode)
const accessLogStream200=rfs.createStream("access200.log",{
    path:path.join(__dirname,"../..", "logs"),
    interval:"1d",
    size:"25MB"
});

const accessLogStream400=rfs.createStream("access400.log",{
    path:path.join(__dirname,"../..", "logs"),
    interval:"1d",
    size:"25MB",
});

// Status code 400 and 500
app.use(
    morgan(format,{
        skip:(req,res)=>{
            return res.statusCode <400
        },
        stream:
        process.env.NODE_ENV==="production"
        ? accessLogStream400
        :process.stderr
    })
)

// Status code 200 and 300
app.use(
    morgan(format,{
        skip:(req,res)=>res.statusCode>=400,
        stream:
        process.env.NODE_ENV==="production"
        ? accessLogStream200
        :process.stdout
    })
)

}