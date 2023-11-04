// Function to load content into the main content area
function loadContent(pageName) {
    // Define the path to the content file based on the pageName argument
    const contentPath = `${pageName}-content.html`;

    fetch(contentPath)
        .then(response => {
            // Check if the request was successful
            if (response.ok) {
                return response.text();
            }
            throw new Error('Network response was not ok.');
        })
        .then(html => {
            // Inject the HTML content into the main content area
            document.getElementById('main-content').innerHTML = html;
        })
        .catch(error => {
            console.error('Error fetching the content:', error);
        });
}

// Load the default content when the page loads
document.addEventListener('DOMContentLoaded', () => {
    loadContent('home');
});
