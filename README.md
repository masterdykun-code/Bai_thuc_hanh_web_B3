# TechStore React + ASP.NET Core API

BT thực hành b3 CRUD sản phẩm với:

- Frontend: React + Vite + Axios.
- Backend: ASP.NET Core Web API.
- Database: SQL Server `SQLEXPRESS`.
- ORM: Entity Framework Core.

## Mức đáp ứng yêu cầu

| Yêu cầu                                                            | Trạng thái | Vị trí                                                        |
| ------------------------------------------------------------------ | ---------- | ------------------------------------------------------------- |
| Tạo project API backend bằng ASP.NET Core                          | Đã có      | `MyBackendAPI`                                                |
| Tạo controller và endpoint `GET`, `POST`, `PUT`, `DELETE`          | Đã có      | `MyBackendAPI/Controller/ProductsController.cs`               |
| Frontend gọi backend bằng Axios với `GET`, `POST`, `PUT`, `DELETE` | Đã có      | `src/api/productApi.js`, `src/pages/Products.jsx`             |
| Cấu hình kết nối database ở backend                                | Đã có      | `MyBackendAPI/appsettings.json`, `MyBackendAPI/Program.cs`    |
| Cài đặt EF Core và tạo migration                                   | Đã có      | `MyBackendAPI/MyBackendAPI.csproj`, `MyBackendAPI/Migrations` |

## Chạy SQL Server

Trước khi chạy backend, bật service:

```text
SQL Server (SQLEXPRESS)
```

Hoặc mở PowerShell bằng quyền Administrator và chạy:

```powershell
Start-Service -Name 'MSSQL$SQLEXPRESS'
```

## Chạy backend

```bash
cd MyBackendAPI
dotnet restore
dotnet ef database update
dotnet run --launch-profile https
```

Backend chạy tại:

- `https://localhost:7224`
- `http://localhost:5141`

API sản phẩm:

```text
https://localhost:7224/api/products
```

## Chạy frontend

```bash
npm install
npm run dev
```

Frontend mặc định gọi backend tại:

```text
https://localhost:7224/api
```

Nếu cần đổi URL backend, tạo file `.env` ở thư mục gốc:

```env
VITE_API_BASE_URL=https://localhost:7224/api
```

## Cấu hình database

Connection string nằm trong `MyBackendAPI/appsettings.json`:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=.\\SQLEXPRESS;Database=ProductDB;Trusted_Connection=True;TrustServerCertificate=True;"
  }
}
```

Nếu SQL Server instance trên máy khác tên `SQLEXPRESS`, đổi phần `Server=...`.

## EF Core migration

Cài EF Core CLI nếu máy chưa có:

```bash
dotnet tool install --global dotnet-ef
```

Tạo migration mới sau khi sửa model:

```bash
cd MyBackendAPI
dotnet ef migrations add TenMigration
dotnet ef database update
```
