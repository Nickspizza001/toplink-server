require(dotenv).config();
const express = require(express);
const cors = require(cors);
const morgan = require(morgan);

const app = express();
app.use(cors);
app.use(morgan);

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`app started on port ${PORT}`);
});