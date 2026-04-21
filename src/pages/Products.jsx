import { useEffect, useState } from "react";
import { getProducts, createProduct, deleteProduct } from "../api/productApi";

function Products() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const loadProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error("Lỗi lấy sản phẩm:", error);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createProduct({
        name,
        price: Number(price),
      });

      setName("");
      setPrice("");
      loadProducts();
    } catch (error) {
      console.error("Lỗi thêm sản phẩm:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      loadProducts();
    } catch (error) {
      console.error("Lỗi xoá sản phẩm:", error);
    }
  };

  return (
    <div className="container" style={{ padding: "60px 0" }}>
      <h1 style={{ fontSize: "38px", marginBottom: "20px" }}>
        Danh sách sản phẩm
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{
          marginBottom: "30px",
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        <input
          type="text"
          placeholder="Tên sản phẩm"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "10px", minWidth: "220px" }}
        />
        <input
          type="number"
          placeholder="Giá"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{ padding: "10px", minWidth: "180px" }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 16px",
            background: "#1565f8",
            color: "white",
            borderRadius: "8px",
          }}
        >
          Thêm sản phẩm
        </button>
      </form>

      <div style={{ display: "grid", gap: "16px" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              background: "white",
              padding: "16px",
              borderRadius: "12px",
              border: "1px solid #ddd",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h3>{product.name}</h3>
              <p>{product.price} ₫</p>
            </div>

            <button
              onClick={() => handleDelete(product.id)}
              style={{
                background: "#ef4444",
                color: "white",
                padding: "10px 14px",
                borderRadius: "8px",
              }}
            >
              Xóa
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
