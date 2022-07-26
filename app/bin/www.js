
const app = require('../app.js')

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`${PORT} 포트에서 서버가 작동되었습니다.`);
});
