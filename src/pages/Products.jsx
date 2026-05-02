import { useEffect, useState } from "react";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../api/productApi";
import "./Products.css";

const initialForm = {
  name: "",
  price: "",
};

function Products() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const isEditing = editingId !== null;

  const loadProducts = async () => {
    setIsLoading(true);

    try {
      const data = await getProducts();
      setProducts(data);
      setErrorMessage("");
    } catch (error) {
      console.error("Lỗi lấy sản phẩm:", error);
      setErrorMessage("Không thể tải danh sách sản phẩm từ API.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setForm(initialForm);
    setEditingId(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.name.trim() || form.price === "") {
      setErrorMessage("Vui lòng nhập tên sản phẩm và giá.");
      return;
    }

    const product = {
      name: form.name.trim(),
      price: Number(form.price),
    };

    try {
      if (isEditing) {
        await updateProduct(editingId, { id: editingId, ...product });
      } else {
        await createProduct(product);
      }

      resetForm();
      await loadProducts();
    } catch (error) {
      console.error("Lỗi lưu sản phẩm:", error);
      setErrorMessage("Không thể lưu sản phẩm. Vui lòng kiểm tra backend.");
    }
  };

  const handleEdit = (product) => {
    setEditingId(product.id);
    setForm({
      name: product.name,
      price: String(product.price),
    });
    setErrorMessage("");
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);

      if (editingId === id) {
        resetForm();
      }

      await loadProducts();
    } catch (error) {
      console.error("Lỗi xóa sản phẩm:", error);
      setErrorMessage("Không thể xóa sản phẩm. Vui lòng kiểm tra backend.");
    }
  };

  return (
    <div className="container products-page">
      <h1 className="products-title">Danh sách sản phẩm</h1>

      <form className="product-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Tên sản phẩm"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Giá"
          value={form.price}
          onChange={handleChange}
          min="0"
          required
        />

        <button className="primary-action" type="submit">
          {isEditing ? "Cập nhật sản phẩm" : "Thêm sản phẩm"}
        </button>

        {isEditing && (
          <button className="secondary-action" type="button" onClick={resetForm}>
            Hủy
          </button>
        )}
      </form>

      {errorMessage && <p className="form-error">{errorMessage}</p>}

      {isLoading ? (
        <p>Đang tải sản phẩm...</p>
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <article className="product-row" key={product.id}>
              <div>
                <h3>{product.name}</h3>
                <p>{Number(product.price).toLocaleString("vi-VN")} đ</p>
              </div>

              <div className="row-actions">
                <button
                  className="edit-action"
                  type="button"
                  onClick={() => handleEdit(product)}
                >
                  Sửa
                </button>
                <button
                  className="delete-action"
                  type="button"
                  onClick={() => handleDelete(product.id)}
                >
                  Xóa
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
