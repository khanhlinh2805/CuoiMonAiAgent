/**
 * CandyData AI - Realistic Enterprise Sample Datasets
 * 3 comprehensive datasets to immediately test cleaning, previewing, and analytics
 */

const SAMPLE_DATASETS = {
  sample1: {
    id: "sample1",
    name: "Doanh nghiệp Bán lẻ & Đơn hàng (Retail Sales)",
    tag: "Khuyên dùng cho Người mới",
    description: "Dữ liệu đơn hàng thực tế với các cột Ten_Khach_Hang, Kenh_Ban_Hang, So_Dien_Thoai và lỗi phổ biến: viết thường, thiếu dấu, số điện thoại lộn xộn, giá trị khuyết.",
    total_records: 30,
    data: [
      { "Mã Đơn": "dh-1001", "Ngày Đặt": "12/03/2026", "Ten_Khach_Hang": "  nguyen van an  ", "Kenh_Ban_Hang": "shopee", "So_Dien_Thoai": "912345678", "Sản Phẩm": "iPhone 15 Pro Max", "Số Lượng": 1, "Đơn Giá": 29990000, "Doanh Thu": " 29,990,000 đ ", "Khu Vực": "Hà Nội", "Trạng Thái": "Đã giao" },
      { "Mã Đơn": "dh-1002", "Ngày Đặt": "2026-03-12", "Ten_Khach_Hang": "tran thi mai", "Kenh_Ban_Hang": "tiktok shop", "So_Dien_Thoai": "'0987654321", "Sản Phẩm": "MacBook Air M2", "Số Lượng": 2, "Đơn Giá": 24500000, "Doanh Thu": "49000000", "Khu Vực": "TP.HCM", "Trạng Thái": "Đã giao" },
      { "Mã Đơn": "dh-1003", "Ngày Đặt": "13/03/2026", "Ten_Khach_Hang": "le hoang long", "Kenh_Ban_Hang": "tai cua hang", "So_Dien_Thoai": "+84905123456", "Sản Phẩm": "<b>Tai nghe AirPods Pro 2</b>", "Số Lượng": 1, "Đơn Giá": 5690000, "Doanh Thu": "#VALUE!", "Khu Vực": "Đà Nẵng", "Trạng Thái": "Đang giao" },
      { "Mã Đơn": "", "Ngày Đặt": null, "Ten_Khach_Hang": "   ", "Kenh_Ban_Hang": null, "So_Dien_Thoai": "", "Sản Phẩm": null, "Số Lượng": null, "Đơn Giá": null, "Doanh Thu": null, "Khu Vực": "", "Trạng Thái": "" }, // Blank row to be deleted
      { "Mã Đơn": "dh-1004", "Ngày Đặt": "14/03/2026", "Ten_Khach_Hang": "pham quynh chi", "Kenh_Ban_Hang": "lazada", "So_Dien_Thoai": "0934567890", "Sản Phẩm": "iPad Air 5 M1", "Số Lượng": 1, "Đơn Giá": 14990000, "Doanh Thu": 14990000, "Khu Vực": "Hải Phòng", "Trạng Thái": "Đã giao" },
      { "Mã Đơn": "dh-1004", "Ngày Đặt": "14/03/2026", "Ten_Khach_Hang": "pham quynh chi", "Kenh_Ban_Hang": "lazada", "So_Dien_Thoai": "0934567890", "Sản Phẩm": "iPad Air 5 M1", "Số Lượng": 1, "Đơn Giá": 14990000, "Doanh Thu": 14990000, "Khu Vực": "Hải Phòng", "Trạng Thái": "Đã giao" }, // Duplicate
      { "Mã Đơn": "dh-1005", "Ngày Đặt": "15-03-2026", "Ten_Khach_Hang": "VU DINH TRONG", "Kenh_Ban_Hang": "tiki", "So_Dien_Thoai": "918765432", "Sản Phẩm": "Apple Watch Series 9", "Số Lượng": 3, "Đơn Giá": 9890000, "Doanh Thu": 29670000, "Khu Vực": "Cần Thơ", "Trạng Thái": "Đã giao" },
      { "Mã Đơn": "dh-1006", "Ngày Đặt": "15/03/2026", "Ten_Khach_Hang": "  hoang thi bich ngoc ", "Kenh_Ban_Hang": "website", "So_Dien_Thoai": "0976543210", "Sản Phẩm": "Bàn phím Magic Keyboard", "Số Lượng": 1, "Đơn Giá": 3200000, "Doanh Thu": "#N/A", "Khu Vực": "Hà Nội", "Trạng Thái": "Chờ duyệt" },
      { "Mã Đơn": "dh-1007", "Ngày Đặt": "16/03/2026", "Ten_Khach_Hang": "do quang minh", "Kenh_Ban_Hang": "facebook", "So_Dien_Thoai": "0903214567", "Sản Phẩm": "Chuột Magic Mouse 2", "Số Lượng": 2, "Đơn Giá": 1950000, "Doanh Thu": "3.900.000", "Khu Vực": "TP.HCM", "Trạng Thái": "Đã giao" },
      { "Mã Đơn": "dh-1008", "Ngày Đặt": "16/03/2026", "Ten_Khach_Hang": "bui tuyet nhung", "Kenh_Ban_Hang": "shopee", "So_Dien_Thoai": "84945678901", "Sản Phẩm": "Mac mini M2", "Số Lượng": 1, "Đơn Giá": 14500000, "Doanh Thu": null, "Khu Vực": "Bình Dương", "Trạng Thái": "Đang giao" },
      { "Mã Đơn": "DH-1009", "Ngày Đặt": "17/03/2026", "Ten_Khach_Hang": "ngo dinh dung", "Kenh_Ban_Hang": "dai ly", "So_Dien_Thoai": "0961234890", "Sản Phẩm": "Màn hình Studio Display", "Số Lượng": 1, "Đơn Giá": 39990000, "Doanh Thu": 39990000, "Khu Vực": "Hà Nội", "Trạng Thái": "Đã giao" },
      { "Mã Đơn": "DH-1010", "Ngày Đặt": "17/03/2026", "Ten_Khach_Hang": "dinh huong ly", "Kenh_Ban_Hang": "sieu thi", "So_Dien_Thoai": "0988234567", "Sản Phẩm": "iPhone 15 Plus", "Số Lượng": 1, "Đơn Giá": 22490000, "Doanh Thu": 22490000, "Khu Vực": "Đà Nẵng", "Trạng Thái": "Đã giao" },
      { "Mã Đơn": "DH-1011", "Ngày Đặt": "18/03/2026", "Ten_Khach_Hang": "ly van thang", "Kenh_Ban_Hang": "tiktok shop", "So_Dien_Thoai": "933123456", "Sản Phẩm": "Sạc Anker 65W GaN", "Số Lượng": 4, "Đơn Giá": 850000, "Doanh Thu": 3400000, "Khu Vực": "Quảng Ninh", "Trạng Thái": "Đã giao" },
      { "Mã Đơn": "DH-1012", "Ngày Đặt": "18/03/2026", "Ten_Khach_Hang": "vuong thanh thao", "Kenh_Ban_Hang": "zalo", "So_Dien_Thoai": "0915678901", "Sản Phẩm": "Cáp Type-C Thunderbolt", "Số Lượng": 2, "Đơn Giá": 1150000, "Doanh Thu": 2300000, "Khu Vực": "TP.HCM", "Trạng Thái": "Đang giao" },
      { "Mã Đơn": "DH-1013", "Ngày Đặt": "19/03/2026", "Ten_Khach_Hang": "to ngoc anh", "Kenh_Ban_Hang": "hotline", "So_Dien_Thoai": "0908765432", "Sản Phẩm": "Ốp lưng da iPhone", "Số Lượng": 1, "Đơn Giá": 1490000, "Doanh Thu": 1490000, "Khu Vực": "Hà Nội", "Trạng Thái": "Đã giao" },
      { "Mã Đơn": "DH-1014", "Ngày Đặt": "19/03/2026", "Ten_Khach_Hang": "tran tuan anh", "Kenh_Ban_Hang": "shopee", "So_Dien_Thoai": "0977654321", "Sản Phẩm": "MacBook Pro 16 M3 Max", "Số Lượng": 1, "Đơn Giá": 89000000, "Doanh Thu": 89000000, "Khu Vực": "TP.HCM", "Trạng Thái": "Đã giao" }, // High Value Outlier
      { "Mã Đơn": "DH-1015", "Ngày Đặt": "20/03/2026", "Ten_Khach_Hang": "nguyen mai phuong", "Kenh_Ban_Hang": "tai cua hang", "So_Dien_Thoai": "0944123456", "Sản Phẩm": "Bút Apple Pencil 2", "Số Lượng": 2, "Đơn Giá": 2890000, "Doanh Thu": 5780000, "Khu Vực": "Đà Nẵng", "Trạng Thái": "Đã giao" },
      { "Mã Đơn": "DH-1016", "Ngày Đặt": "20/03/2026", "Ten_Khach_Hang": "le van duc", "Kenh_Ban_Hang": "online", "So_Dien_Thoai": "0982345678", "Sản Phẩm": "Hub USB-C đa năng", "Số Lượng": 1, "Đơn Giá": 1250000, "Doanh Thu": 1250000, "Khu Vực": "Hà Nội", "Trạng Thái": "Đang giao" },
      { "Mã Đơn": "DH-1017", "Ngày Đặt": "21/03/2026", "Ten_Khach_Hang": "ha kieu trang", "Kenh_Ban_Hang": "shopee", "So_Dien_Thoai": "909123456", "Sản Phẩm": "Giá đỡ nhôm Laptop", "Số Lượng": 1, "Đơn Giá": 650000, "Doanh Thu": null, "Khu Vực": "Nha Trang", "Trạng Thái": "Đã giao" },
      { "Mã Đơn": "DH-1018", "Ngày Đặt": "21/03/2026", "Ten_Khach_Hang": "phan quoc tuan", "Kenh_Ban_Hang": "tiktok shop", "So_Dien_Thoai": "0918888999", "Sản Phẩm": "Túi chống sốc Tomtoc", "Số Lượng": 2, "Đơn Giá": 790000, "Doanh Thu": 1580000, "Khu Vực": "TP.HCM", "Trạng Thái": "Đã giao" },
      { "Mã Đơn": "DH-1018", "Ngày Đặt": "21/03/2026", "Ten_Khach_Hang": "phan quoc tuan", "Kenh_Ban_Hang": "tiktok shop", "So_Dien_Thoai": "0918888999", "Sản Phẩm": "Túi chống sốc Tomtoc", "Số Lượng": 2, "Đơn Giá": 790000, "Doanh Thu": 1580000, "Khu Vực": "TP.HCM", "Trạng Thái": "Đã giao" }  // Duplicate
    ]
  },

  sample2: {
    id: "sample2",
    name: "Khách hàng & Hệ thống CRM (Customer Database)",
    tag: "Độ chính xác cao",
    description: "Cơ sở dữ liệu khách hàng có cột Ten_Khach_Hang, Kenh_Ban_Hang, So_Dien_Thoai với lỗi hoa/thường email, thiếu số 0 đầu SĐT, ngày sinh sai định dạng.",
    total_records: 25,
    data: [
      { "Mã KH": "KH-8801", "Ten_Khach_Hang": "  nguyen khanh vy  ", "Kenh_Ban_Hang": "shopee", "Email": "Vy.Nguyen@GMAIL.COM", "So_Dien_Thoai": "912345678", "Tỉnh Thành": "Hà Nội", "Hạng Thành Viên": "Kim Cương", "Điểm Thưởng": 8500 },
      { "Mã KH": "KH-8802", "Ten_Khach_Hang": "tran minh hoang", "Kenh_Ban_Hang": "tiktok shop", "Email": "hoang.tm@vnpay.vn", "So_Dien_Thoai": "0987654321", "Tỉnh Thành": "TP.HCM", "Hạng Thành Viên": "Vàng", "Điểm Thưởng": 3200 },
      { "Mã KH": "KH-8803", "Ten_Khach_Hang": "LE THU TRANG", "Kenh_Ban_Hang": "tai cua hang", "Email": "THUTRANG_98@YAHOO.COM", "So_Dien_Thoai": "905123456", "Tỉnh Thành": "Đà Nẵng", "Hạng Thành Viên": "Bạc", "Điểm Thưởng": null },
      { "Mã KH": "KH-8804", "Ten_Khach_Hang": "pham gia huy", "Kenh_Ban_Hang": "lazada", "Email": "huy.pham@gmail.com", "So_Dien_Thoai": "0934567890", "Tỉnh Thành": "Hải Phòng", "Hạng Thành Viên": "Bạc", "Điểm Thưởng": 1850 },
      { "Mã KH": "KH-8805", "Ten_Khach_Hang": "vu ngoc lan chi", "Kenh_Ban_Hang": "facebook", "Email": "Lanchi_vu@FPT.EDU.VN", "So_Dien_Thoai": "0918765432", "Tỉnh Thành": null, "Hạng Thành Viên": "Đồng", "Điểm Thưởng": 450 },
      { "Mã KH": "KH-8806", "Ten_Khach_Hang": "hoang tuan kiet", "Kenh_Ban_Hang": "website", "Email": "kiet.ht@techcombank.com.vn", "So_Dien_Thoai": "976543210", "Tỉnh Thành": "Hà Nội", "Hạng Thành Viên": "Vàng", "Điểm Thưởng": 4100 },
      { "Mã KH": "KH-8807", "Ten_Khach_Hang": "do my linh", "Kenh_Ban_Hang": "dai ly", "Email": "mylinh.do@gmail.com", "So_Dien_Thoai": "0903214567", "Tỉnh Thành": "TP.HCM", "Hạng Thành Viên": "Kim Cương", "Điểm Thưởng": 99000 }, // Outlier points
      { "Mã KH": "KH-8808", "Ten_Khach_Hang": "bui van nam", "Kenh_Ban_Hang": "shopee", "Email": "nambui_sales@viettel.com.vn", "So_Dien_Thoai": "0945678901", "Tỉnh Thành": "Bình Dương", "Hạng Thành Viên": "Vàng", "Điểm Thưởng": 2900 },
      { "Mã KH": "KH-8808", "Ten_Khach_Hang": "bui van nam", "Kenh_Ban_Hang": "shopee", "Email": "nambui_sales@viettel.com.vn", "So_Dien_Thoai": "0945678901", "Tỉnh Thành": "Bình Dương", "Hạng Thành Viên": "Vàng", "Điểm Thưởng": 2900 }, // Duplicate
      { "Mã KH": "KH-8809", "Ten_Khach_Hang": "ngo thi dieu huong", "Kenh_Ban_Hang": "hotline", "Email": "dieu_huong@gmail.com", "So_Dien_Thoai": "961234890", "Tỉnh Thành": "Huế", "Hạng Thành Viên": "Bạc", "Điểm Thưởng": 1200 },
      { "Mã KH": "KH-8810", "Ten_Khach_Hang": "dinh bao tram", "Kenh_Ban_Hang": "sieu thi", "Email": "tram.dinh@outlook.com", "So_Dien_Thoai": "0988234567", "Tỉnh Thành": null, "Hạng Thành Viên": "Đồng", "Điểm Thưởng": 600 }
    ]
  },

  sample3: {
    id: "sample3",
    name: "Quản trị Kho & Chuỗi Cung Ứng (Supply Chain)",
    tag: "Chuyên sâu",
    description: "Dữ liệu kiểm kê kho chứa lỗi âm tồn kho, mã phân loại trống, đơn giá tính toán ngoại lai, chênh lệch thực tế.",
    total_records: 20,
    data: [
      { "Mã Kho": "KHO-HN01", "Mặt Hàng": "Tủ lạnh Inverter 400L", "Danh Mục": "Điện Lạnh", "Tồn Hệ Thống": 45, "Tồn Thực Tế": 45, "Đơn Giá Nhập": 12500000, "Trạng Thái": "Đạt chuẩn" },
      { "Mã Kho": "KHO-HN01", "Mặt Hàng": "Máy giặt cửa trước 10kg", "Danh Mục": "Điện Lạnh", "Tồn Hệ Thống": 30, "Tồn Thực Tế": 28, "Đơn Giá Nhập": 9800000, "Trạng Thái": "Hụt kho" },
      { "Mã Kho": null, "Mặt Hàng": "Tivi OLED 65 inch 4K", "Danh Mục": "Điện Tử", "Tồn Hệ Thống": 15, "Tồn Thực Tế": 15, "Đơn Giá Nhập": 28900000, "Trạng Thái": "Đạt chuẩn" },
      { "Mã Kho": "KHO-HCM02", "Mặt Hàng": "Lò vi sóng điện tử 25L", "Danh Mục": "Gia Dụng", "Tồn Hệ Thống": 80, "Tồn Thực Tế": 80, "Đơn Giá Nhập": 2200000, "Trạng Thái": "Đạt chuẩn" },
      { "Mã Kho": "KHO-HCM02", "Mặt Hàng": "Nồi chiên không dầu 6L", "Danh Mục": "Gia Dụng", "Tồn Hệ Thống": 120, "Tồn Thực Tế": 115, "Đơn Giá Nhập": 1450000, "Trạng Thái": "Hụt kho" },
      { "Mã Kho": "KHO-DN01", "Mặt Hàng": "Robot hút bụi lau nhà", "Danh Mục": "Thông Minh", "Tồn Hệ Thống": 50, "Tồn Thực Tế": 50, "Đơn Giá Nhập": 7500000, "Trạng Thái": "Đạt chuẩn" },
      { "Mã Kho": "KHO-DN01", "Mặt Hàng": "Máy lọc không khí HEPA", "Danh Mục": null, "Tồn Hệ Thống": 40, "Tồn Thực Tế": 42, "Đơn Giá Nhập": 4300000, "Trạng Thái": "Thừa kho" },
      { "Mã Kho": "KHO-HN02", "Mặt Hàng": "Bếp từ đôi cao cấp", "Danh Mục": "Gia Dụng", "Tồn Hệ Thống": 25, "Tồn Thực Tế": 25, "Đơn Giá Nhập": 8900000, "Trạng Thái": "Đạt chuẩn" }
    ]
  }
};
