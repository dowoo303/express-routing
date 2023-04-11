const express = require("express"); // import

const router = express.Router(); // 라우터 불러오기

router.get("/:id", (req, res) => {
  // 동적 라우팅 경로 부여
  res.send("유저 조회");
});

router.post("/", (req, res) => {
  res.send("신규 유저 생성");
});

router.put("/:id", (req, res) => {
  res.send("회원 정보 수정");
});

router.delete("/:id", (req, res) => {
  res.send("회원 정보 삭제");
});

module.exports = router; // export
