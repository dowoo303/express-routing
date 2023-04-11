const express = require("express"); // import

const router = express.Router(); // 라우터 불러오기

router.get("/", (req, res) => {
  res.send("전체 게시물 조회");
});

router.get("/:id", (req, res) => {
  console.log(req.params);
  // 동적 라우팅 경로 부여
  res.send("특정 게시물 조회");
});

router.post("/", (req, res) => {
  res.send("게시물 생성");
});

router.put("/:id", (req, res) => {
  res.send("게시물 수정");
});

router.delete("/:id", (req, res) => {
  res.send("게시물 삭제");
});

module.exports = router; // export
