const cl=console.log;
const app=require("./app");
const PORT=5000;



app.listen(5000, () => {
    cl(`Server is running on port ${PORT}`);
});