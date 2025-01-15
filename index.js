const express = require("express");
const PORT = 4851;
const app = express();
const { runMe } = require("./Services/cmd-service");

app.use(express.json());

app.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`);
  await runMe(); // חיבור למונגו והפעלת לוגיקת הבסיס
});
