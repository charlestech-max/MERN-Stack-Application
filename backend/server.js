const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());  

const usersRoute = require('./routes/users');
const blogRoute = require('./routes/blog');
const dataAnalysisRoute = require('./routes/dataAnalysis');


app.use('/data-analysis', dataAnalysisRoute);
app.use('/users', usersRoute);
app.use('/posts', blogRoute);  

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
