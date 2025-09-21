lib/ = nơi để các module dùng chung, cấu hình, helper lớn, SDK.

Không chứa business cụ thể (không viết taskService, userService ở đây).

Mọi domain (Task, User, Project…) chỉ import từ lib/ để dùng, ví dụ:

httpClient → gọi API.

API_ENDPOINTS → định nghĩa endpoint.

auth.ts → parse token.

db/prisma.ts → kết nối DB.

env.ts -> lấy env từ .env