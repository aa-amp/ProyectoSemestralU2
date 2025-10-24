export function showToast(message = "Producto agregado al carrito") {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;

  Object.assign(toast.style, {
    position: "fixed",
    top: "20px",
    right: "20px",
    backgroundColor: "#333",
    color: "#fff",
    padding: "12px 20px",
    borderRadius: "5px",
    opacity: "0",
    transition: "opacity 0.5s ease",
    zIndex: "1000",
    fontFamily: "'Montserrat', sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
  });

  document.body.appendChild(toast);

  setTimeout(() => (toast.style.opacity = "1"), 100);
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 500);
  }, 3000);
}