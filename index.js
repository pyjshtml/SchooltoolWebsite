const express = require('express');
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/static",express.static(`${__dirname}/public`));
app.get("/",(req,res)=>{
  res.sendFile(`${__dirname}/sites/index.html`);
});
app.get("/configure",(req,res)=>{
  res.redirect("/settings");
})
app.get("/settings",(req,res)=>{
  res.sendFile(`${__dirname}/sites/settings.html`);
})
app.listen(80);
