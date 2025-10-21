(() => {
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const isbnInput = document.getElementById('isbn');
    const submitBtn = document.getElementById('submit');
    const bookList = document.getElementById('book-list');

    // Handle book addition
    submitBtn.addEventListener('click', () => {
        const title = titleInput.value;
        const author = authorInput.value;
        const isbn = isbnInput.value;

        if (title && author && isbn) {
            // Create a new table row
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${title}</td>
                <td>${author}</td>
                <td>${isbn}</td>
                <td><button class="delete-btn">Delete</button></td>
            `;
            bookList.appendChild(row);

            // Clear input fields
            titleInput.value = '';
            authorInput.value = '';
            isbnInput.value = '';

            // Add delete functionality
            const deleteBtn = row.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', () => {
                bookList.removeChild(row);
            });
        } else {
            alert('Please fill in all fields');
        }
    });
})();