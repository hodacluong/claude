# Phản Xạ Tiếng Trung — Ôn luyện & thi HSK

Nền tảng tự học tiếng Trung để ôn luyện và chuẩn bị thi chứng chỉ HSK: luyện
phản xạ dịch Việt → Trung (gõ phím hoặc ghép từ), học từ vựng bằng flashcard,
và học/ôn ngữ pháp kèm bài tập trắc nghiệm. Chạy hoàn toàn trên trình duyệt,
không cần backend hay đăng ký tài khoản.

## Tính năng

- **Khóa học theo cấp độ HSK 1–6** (HSK1–4 đã có nội dung, HSK5–6 đang được bổ sung)
- Mỗi bài học có tối thiểu 30 câu luyện dịch Việt → Trung, phân theo chủ đề
- Hai chế độ luyện tập cho mỗi câu:
  - **⌨️ Gõ Phím** — gõ lại câu bằng chữ Hán
  - **🧩 Ghép Từ** — chạm chọn các từ theo đúng thứ tự để ghép thành câu
- Câu trả lời sai được xếp lại vào cuối hàng đợi để luyện lại ngay trong phiên học
- Đếm combo (chuỗi trả lời đúng liên tiếp), tiến độ bài học, độ chính xác tổng
- Phát âm thanh tiếng Trung bằng Web Speech API có sẵn trên trình duyệt
- **Từ vựng**: flashcard lật xem nghĩa theo từng cấp độ, đánh dấu từ đã thuộc
- **Ngữ pháp**: điểm ngữ pháp kèm giải thích, ví dụ và bài tập trắc nghiệm
- Giao diện sáng/tối, lưu tiến độ & thống kê vào `localStorage`

## Chạy thử ở máy local

Không cần bước build, chỉ là HTML/CSS/JS thuần.

```bash
python3 -m http.server 8000
# rồi mở http://localhost:8000
```

Nên dùng trình duyệt nền Chromium (Chrome, Edge) để có giọng đọc tiếng Trung
tốt nhất.

## Cấu trúc dự án

```
index.html         Khung trang (sidebar + khu vực nội dung SPA)
css/style.css       Giao diện (sáng/tối, sidebar, thẻ bài học, màn luyện tập...)
js/app.js           Toàn bộ logic: router, luyện tập, flashcard, ngữ pháp, tiến độ
data/courses.js     Ngân hàng câu luyện dịch theo HSK 1–6 (câu, pinyin, phân đoạn từ)
data/vocab.js       Danh sách từ vựng theo cấp độ
data/grammar.js     Điểm ngữ pháp + bài tập trắc nghiệm theo cấp độ
```

## Thêm nội dung

- Thêm câu luyện dịch: sửa `data/courses.js`, thêm object
  `{ vi, hanzi, pinyin, segments }` vào mảng `sentences` của bài học tương ứng
  (`segments` là mảng các cụm từ dùng cho chế độ Ghép Từ, ghép lại đúng bằng `hanzi`).
- Thêm từ vựng: sửa `data/vocab.js`, thêm `{ hanzi, pinyin, vi, pos }`.
- Thêm điểm ngữ pháp: sửa `data/grammar.js`, thêm object có `title`,
  `explanation`, `examples` và `exercises` (câu hỏi trắc nghiệm).

## Lộ trình tiếp theo

- Bổ sung thêm bài học/chủ đề cho HSK1–4 (mỗi cấp độ hiện có 1–2 bài, 30 câu/bài)
- Xây dựng nội dung đầy đủ cho HSK5–6
- Mở rộng ngân hàng từ vựng và điểm ngữ pháp theo khung chương trình HSK chính thức
