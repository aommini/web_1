// โหลด menu.html เข้าไปใน #menu แล้วไฮไลต์เมนูของหน้าปัจจุบัน
fetch("menu.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("menu").innerHTML = html;
    const current = location.pathname.split("/").pop() || "Home.html";
    document.querySelectorAll("#menu .nav-link").forEach(a => {
      if (a.getAttribute("href").toLowerCase() === current.toLowerCase()) {
        a.classList.add("active");
      }
    });
  })
  .catch(err => console.error("โหลด menu.html ไม่สำเร็จ (ต้องรันผ่านเซิร์ฟเวอร์ เช่น Live Server)", err));
