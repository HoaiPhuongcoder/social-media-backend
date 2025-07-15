# Social Media Backend API

Một hệ thống backend mạnh mẽ, có khả năng mở rộng được xây dựng cho một ứng dụng mạng xã hội hiện đại. API này cung cấp các chức năng cốt lõi bao gồm xác thực người dùng, tạo bài viết, tương tác (thích, bình luận), theo dõi người dùng và nhiều hơn nữa.

## Tính năng

1. Xác thực & Phân quyền: Đăng ký, đăng nhập, đăng xuất an toàn bằng JSON Web Tokens (JWT).

2. Quản lý người dùng: CRUD thông tin cá nhân, ảnh đại diện, ảnh bìa.

3. Hệ thống Theo dõi: Theo dõi và hủy theo dõi người dùng khác.

4. Bài viết: Tạo, xem, cập nhật, xóa bài viết (hỗ trợ văn bản và hình ảnh).

5. Tương tác: Thích/bỏ thích và bình luận trên các bài viết.

6. Bảng tin (News Feed): API để tạo bảng tin cá nhân hóa cho người dùng.

7. Tìm kiếm: Tìm kiếm người dùng và bài viết.

8. (Tùy chọn) Real-time: Thông báo và chat thời gian thực bằng WebSockets.

##🚀 Công nghệ sử dụng
- Ngôn ngữ: TypeScript

- Framework: Express.js

- Cơ sở dữ liệu: MongoDB với Mongoose ODM

- Xác thực: JSON Web Token (JWT), bcrypt

- Validation: express-validator

- Upload File: Multer

- Real-time: Socket.IO (Tùy chọn)

- Containerization: Docker (Tùy chọn)
