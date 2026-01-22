// Hàm xử lý bấm vào câu hỏi để xổ bài viết ra
function toggleFaq(button) {
  const card = button.parentElement;
  card.classList.toggle("active");

  // Xoay cái icon mũi tên
  const icon = button.querySelector("i");
  if (card.classList.contains("active")) {
    icon.style.transform = "rotate(180deg)";
  } else {
    icon.style.transform = "rotate(0deg)";
  }
}

function selectCourse(type) {
  const data = {
    "Hạng B": {
      title: "THÔNG TIN CHI TIẾT KHÓA ĐÀO TẠO LÁI XE HẠNG B (Cơ khí/Tự động)",
      content: `
                <h3>1. Tổng quan về giấy phép lái xe Hạng B</h3>
                <p>Hạng B là loại bằng lái phổ biến nhất hiện nay, cho phép điều khiển xe ô tô chở người đến 9 chỗ ngồi và xe tải dưới 3,5 tấn. Tại Thầy Khang Academy, chúng tôi phân loại rõ ràng: <strong>B1 (Số tự động)</strong> dành cho nhu cầu gia đình và <strong>B2 (Số sàn)</strong> dành cho cả nhu cầu gia đình lẫn kinh doanh vận tải.</p>
                
                <h3>2. Lộ trình đào tạo thực tế</h3>
                <ul>
                    <li><strong>Giai đoạn 1: Làm quen xe và kỹ thuật cơ bản.</strong> Học viên được hướng dẫn về cấu tạo xe, cách điều chỉnh ghế lái, gương chiếu hậu và tư thế ngồi chuẩn. Đối với số sàn, Thầy tập trung kỹ vào việc phối hợp "côn - phanh - ga".</li>
                    <li><strong>Giai đoạn 2: Tập lái trong sa hình.</strong> Đây là giai đoạn quan trọng nhất với 11 bài thi sát hạch liên hoàn. Thầy sẽ chỉ rõ các "điểm căn" trên xe và mặt đường để học viên không bị trừ điểm ở các bài khó như Dừng xe ngang dốc hay Ghép xe vào nơi đỗ.</li>
                    <li><strong>Giai đoạn 3: Lái xe đường trường (DAT).</strong> Học viên hoàn thành đủ số km quy định trên đường thực tế dưới sự giám sát của Thầy, giúp làm quen với áp lực giao thông thật.</li>
                </ul>

                <h3>3. Cam kết về cơ sở vật chất và chi phí</h3>
                <p>Chúng tôi sử dụng dàn xe Toyota, Hyundai, Suzuki,... đời mới, trang bị máy lạnh 100%. Học phí 17 triệu đồng đã bao gồm toàn bộ lệ phí hồ sơ, xăng xe và công thầy kèm 1-1. Thầy Khang cam kết không có tình trạng "bồi dưỡng" thêm trong quá trình học để học viên giữ tâm lý thoải mái nhất.</p>
                
                <h3>4. Kinh nghiệm thi cử</h3>
                <p>Không chỉ dạy lái xe, Thầy còn chia sẻ mẹo làm bài lý thuyết 600 câu và 120 tình huống mô phỏng giúp học viên tiết kiệm thời gian học mà vẫn đạt kết quả cao.</p>
            `,
    },
    "Hạng C1": {
      title: "THÔNG TIN CHI TIẾT KHÓA ĐÀO TẠO LÁI XE HẠNG C1 (XE TẢI)",
      content: `
                <h3>1. Đặc thù của bằng lái Hạng C</h3>
                <p>Giấy phép lái xe hạng C1 (thường gọi là bằng xe tải) cho phép điều khiển xe tải trên 3,5 tấn và các loại xe thuộc hạng B1, B2. Đây là sự lựa chọn hàng đầu cho những học viên có định hướng hành nghề lái xe chuyên nghiệp hoặc kinh doanh vận tải nặng.</p>
                
                <h3>2. Nội dung đào tạo chuyên sâu</h3>
                <ul>
                    <li><strong>Kỹ thuật điều khiển xe thân dài:</strong> Học cách căn chỉnh không gian khi vào cua và lùi xe tải - kỹ năng khó nhất đối với người mới.</li>
                    <li><strong>Hệ thống phanh hơi và vận hành tải trọng lớn:</strong> Thầy sẽ hướng dẫn sự khác biệt giữa xe con và xe tải về hệ thống phanh, giúp học viên đảm bảo an toàn khi xuống dốc hoặc chở hàng nặng.</li>
                    <li><strong>Lý thuyết chuyên sâu:</strong> Ngoài 600 câu hỏi luật, hạng C đòi hỏi hiểu biết về quy định vận tải hàng hóa và đạo đức người lái xe kinh doanh.</li>
                </ul>

                <h3>3. Môi trường học tập</h3>
                <p>Học viên được tập luyện trên sân tập chuẩn quy hoạch của Sở GTVT. Xe tập lái là các dòng xe tải đời mới có trợ lực lái nhẹ nhàng, cabin rộng rãi, sạch sẽ. Thầy Khang trực tiếp kèm sát, chỉnh sửa từng lỗi nhỏ về cảm giác lái và tầm nhìn gương cầu lồi.</p>
                
                <h3>4. Giá trị sau khóa học</h3>
                <p>Mức học phí 19 triệu đồng là trọn gói cho một lộ trình dài hơi. Mục tiêu của Thầy không chỉ là giúp học viên lấy được tấm bằng mà còn phải "vững nghề", có thể tự tin cầm lái các dòng xe tải thực tế ngay sau khi tốt nghiệp để phục vụ công việc kinh doanh cá nhân hoặc doanh nghiệp.</p>
            `,
    },
  };

  const art = data[type];
  const newTab = window.open("", "_blank");
  newTab.document.write(`
        <html>
        <head>
            <title>${art.title}</title>
            <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;700&display=swap" rel="stylesheet">
            <style>
                body { font-family: 'Lexend', sans-serif; line-height: 1.8; padding: 40px; color: #334155; max-width: 900px; margin: auto; background: #f1f5f9; }
                .content-box { background: #fff; padding: 40px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
                h1 { color: #00bcd4; font-size: 1.8rem; border-bottom: 2px solid #eee; padding-bottom: 15px; margin-bottom: 30px; }
                h3 { color: #1e293b; margin-top: 30px; border-left: 5px solid #00bcd4; padding-left: 15px; }
                p, li { font-size: 1.1rem; text-align: justify; }
                ul { padding-left: 20px; }
                li { margin-bottom: 15px; }
                .footer-note { margin-top: 40px; padding: 20px; background: #fff9c4; border-radius: 10px; font-style: italic; font-size: 0.95rem; }
            </style>
        </head>
        <body>
            <div class="content-box">
                <h1>${art.title}</h1>
                ${art.content}
                <div class="footer-note">
                    * Lưu ý: Nội dung trên dựa trên chương trình đào tạo thực tế tại Thầy Khang Academy. Chúng tôi ưu tiên dạy thực chất - học thực chất để học viên có kỹ năng an toàn nhất.
                </div>
            </div>
        </body>
        </html>
    `);
}

// Xử lý gửi Form (Formspree)
document
  .getElementById("enrollForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    const btn = document.getElementById("submitBtn");
    btn.innerText = "ĐANG GỬI...";
    btn.disabled = true;

    const response = await fetch(this.action, {
      method: "POST",
      body: new FormData(this),
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      const name = document.getElementById("userName").value;
      alert(
        `Chào ${name}! Thầy Khang đã nhận được thông tin. Thầy sẽ gọi tư vấn cho bạn ngay lập tức!`,
      );
      this.reset();
    } else {
      alert("Lỗi kết nối. Thầy Khang xin lỗi, bạn hãy thử lại nhé!");
    }
    btn.innerText = "GỬI YÊU CẦU NGAY";
    btn.disabled = false;
  });
function openArticle(id) {
  // Nội dung bài viết chi tiết cho từng bước
  const articles = {
    1: {
      title: "BƯỚC 1: TƯ VẤN & TIẾP NHẬN HỒ SƠ TẬN NƠI",
      content: `Khởi đầu hành trình chinh phục tay lái chưa bao giờ dễ dàng đến thế cùng Thầy Khang Academy. Chúng tôi hiểu rằng quỹ thời gian của học viên là vô cùng quý giá, vì vậy Thầy cung cấp dịch vụ hỗ trợ thu hồ sơ tận nhà hoặc nơi làm việc hoàn toàn miễn phí. Quy trình pháp lý được thực hiện minh bạch, nhanh gọn chỉ trong 10 phút. Thầy sẽ trực tiếp tư vấn lộ trình học phù hợp nhất với năng lực và mục tiêu của bạn, đồng thời hỗ trợ trọn gói từ khâu chụp ảnh thẻ, photo giấy tờ đến khám sức khỏe chuyên dụng cho người lái xe, giúp bạn an tâm bắt đầu mà không cần lo lắng về thủ tục rườm rà.`,
    },
    2: {
      title: "BƯỚC 2: ĐÀO TẠO LÝ THUYẾT & MẸO NHỚ ĐỘC QUYỀN",
      content: `Học lý thuyết không còn là cơn ác mộng với bộ đề 600 câu hỏi và 120 tình huống mô phỏng. Tại đây, Thầy Khang không chỉ dạy luật mà còn truyền đạt hệ thống 'mẹo nhớ nhanh' độc quyền, giúp học viên nhận diện đáp án đúng chỉ trong 5-10 giây. Bạn sẽ được cung cấp tài liệu tinh gọn cùng phần mềm luyện tập thông minh trên điện thoại để học mọi lúc mọi nơi. Thầy cam kết đồng hành, giải đáp mọi thắc mắc 24/7 qua Zalo cho đến khi bạn nắm vững 100% kiến thức và tự tin bước vào phòng thi với tâm thế đậu tuyệt đối.`,
    },
    3: {
      title: "BƯỚC 3: THỰC HÀNH 1 KÈM 1 TRÊN XE ĐỜI MỚI",
      content: `Đây là giai đoạn tạo nên sự khác biệt của Thầy Khang Academy. Học viên được trực tiếp cầm lái trên dàn xe Vios đời mới, trang bị đầy đủ máy lạnh và hệ thống phanh phụ an toàn. Với phương pháp đào tạo 'Cầm tay chỉ việc', Thầy sẽ theo sát từng động tác đánh lái, cách kiểm soát chân côn, chân ga và kỹ năng quan sát thực tế. Không chỉ bó hẹp trong sân tập sa hình, Thầy còn đưa bạn trải nghiệm các cung đường trường tại Cần Thơ để rèn luyện tâm lý vững vàng và kỹ năng xử lý tình huống giao thông thực tế - những kinh nghiệm quý báu không có trong sách vở.`,
    },
    4: {
      title: "BƯỚC 4: SÁT HẠCH & NHẬN BẰNG CHÍNH QUY",
      content: `Giai đoạn 'hái quả ngọt' sau quá trình nỗ lực bền bỉ. Trước ngày thi, học viên được tổ chức các buổi tập xe cảm biến trên sân sát hạch để làm quen áp lực và sơ đồ thi. Thầy Khang sẽ trực tiếp đưa đón và cổ vũ tinh thần cho bạn tại sân thi. Sau khi hoàn thành xuất sắc bài thi Sát hạch do Sở Giao thông Vận tải tổ chức, bạn sẽ nhận bằng lái chính quy sau khoảng 15 ngày làm việc. Thầy không chỉ trao cho bạn tấm bằng, mà còn trao cho bạn sự tự tin và trách nhiệm của một bác tài thực thụ trên mọi nẻo đường.`,
    },
  };

  const article = articles[id];

  // Tạo nội dung trang mới
  const newWindow = window.open("", "_blank");
  newWindow.document.write(`
        <html>
        <head>
            <title>${article.title}</title>
            <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;700&display=swap" rel="stylesheet">
            <style>
                body { font-family: 'Lexend', sans-serif; line-height: 1.8; padding: 50px; color: #333; max-width: 800px; margin: auto; background: #f9f9f9; }
                h1 { color: #00bcd4; border-bottom: 3px solid #00bcd4; padding-bottom: 10px; }
                p { font-size: 1.2rem; text-align: justify; }
                .back-btn { display: inline-block; margin-top: 30px; padding: 10px 20px; background: #00bcd4; color: white; text-decoration: none; border-radius: 5px; font-weight: bold; }
            </style>
        </head>
        <body>
            <h1>${article.title}</h1>
            <p>${article.content}</p>
            <a href="javascript:window.close()" class="back-btn">Đóng trang bài viết</a>
        </body>
        </html>
    `);
}
