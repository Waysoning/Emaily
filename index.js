const express = require('express');
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log('Example app listening on port 4000!');
});
