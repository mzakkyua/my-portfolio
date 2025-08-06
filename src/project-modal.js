document.addEventListener('DOMContentLoaded', () => {
    const projectModal = document.getElementById('project-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalImageGallery = document.getElementById('modal-image-gallery');
    const techList = document.getElementById('tech-list');
    const modalLinks = document.getElementById('modal-links');

    // Data Proyek Anda
    const projectsData = [
        {
            id: 1,
            title: "BacaPoint",
            description: "Fitur utamanya mencakup sistem reward point, penukaran point, marketplace buku, e-wallet dengan integrasi QRIS(rencana)reading tracker, challenge & reward, komunitas & diskusi, sertarekomendasi AI.",
            images: [
                "public/bacapointl.png",
                "public/bacapointp.png",
            ],
            tech: ["Tailwind CSS", "Laravel", "Laragon", "MySQL"],
            liveUrl: "#",
            githubUrl: "https://github.com/mzakkyua/bacapoint-l.git"
        },
        {
            id: 2,
            title: "PrintaGo",
            description: "Printago adalah aplikasi berbasis Desktop yang saya dan tim kembangkan untuk memudahkan proses pencetakan dokumen secara online. Pengguna dapat mengunggah file, memilih jenis kertas dan ukuran cetak, lalu mengirimkannya ke percetakan yang terdaftar. Saya berperan dalam sebagian besar pengembangan backend dan frontend aplikasi ini, termasuk integrasi form upload, sistem antrian file, serta pengelolaan data percetakan.",
            images: [
                "public/printagob.png",
                "public/printagom.png",
            ],
            tech: ["Visual Basic .NET", "MySQL", "WinForms"],
            liveUrl: "#",
            githubUrl: "https://github.com/mzakkyua/PrintaGo.git"
        },
        // Tambahkan proyek lain di sini
    ];

    document.querySelectorAll('.view-project-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const projectId = parseInt(e.target.dataset.projectId);
            const project = projectsData.find(p => p.id === projectId);
            
            if (project) {
                // Mengisi modal dengan data proyek
                modalTitle.textContent = project.title;
                modalDescription.textContent = project.description;

                modalImageGallery.innerHTML = project.images.map(imgSrc => `
                    <img src="${imgSrc}" alt="${project.title}" class="rounded-lg object-cover w-full">
                `).join('');

                techList.innerHTML = project.tech.map(tech => `
                    <li class="bg-blue-500 text-white text-sm font-semibold px-2 py-1 rounded-full">${tech}</li>
                `).join('');

                modalLinks.innerHTML = `
                    <a href="${project.liveUrl}" target="_blank" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Live Demo</a>
                    <a href="${project.githubUrl}" target="_blank" class="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full">Kode di GitHub</a>
                `;

                // Menampilkan modal
                projectModal.classList.remove('hidden');
                projectModal.classList.add('flex');
            }
        });
    });

    closeModalBtn.addEventListener('click', () => {
        projectModal.classList.add('hidden');
        projectModal.classList.remove('flex');
    });
});