function loadComponent(id, file) {
    fetch(file)
        .then(response => {
            if (!response.ok) throw new Error("Gagal memuat file: " + file);
            return response.text();
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;

            // PENTING: Inisialisasi navbar HANYA setelah file header masuk ke DOM
            if (id === "header") {
                initNavbar(); 
            }
        })
        .catch(error => console.error(error));
}

// Panggil fungsi pemuat
loadComponent("header", "components/header.html");
loadComponent("footer", "components/footer.html");