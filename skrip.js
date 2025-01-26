document.addEventListener('DOMContentLoaded', function() {
    const karyaList = document.getElementById('karya-list');

    const karyaTulis = [
        { title: 'Karya Tulis 1', description: 'Deskripsi singkat karya tulis 1' },
        { title: 'Karya Tulis 2', description: 'Deskripsi singkat karya tulis 2' },
        { title: 'Karya Tulis 3', description: 'Deskripsi singkat karya tulis 3' },
    ];

    karyaTulis.forEach(karya => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <h2>${karya.title}</h2>
            <p>${karya.description}</p>
        `;
        karyaList.appendChild(listItem);
    });
});