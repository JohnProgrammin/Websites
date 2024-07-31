const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

// Mock data for PDF guides (replace with your actual data)
const pdfGuides = [
  { title: 'Smart Savings: A Practical Guide', url: 'smart-savings-guide.pdf' },
  { title: 'Investing 101: Beginner’s Guide', url: 'investing-guide.pdf' },
  // Add more PDF guides as needed
];

// Function to perform search and display results
function performSearch(query) {
  const filteredGuides = pdfGuides.filter(guide =>
    guide.title.toLowerCase().includes(query.toLowerCase())
  );

  displayResults(filteredGuides);
}

// Function to display search results
function displayResults(results) {
  searchResults.innerHTML = ''; // Clear previous results

  if (results.length === 0) {
    searchResults.innerHTML = '<p>No results found.</p>';
    return;
  }

  results.forEach(guide => {
    const guideLink = document.createElement('a');
    guideLink.href = guide.url;
    guideLink.textContent = guide.title;
    guideLink.target = '_blank'; // Open link in new tab

    const listItem = document.createElement('div');
    listItem.classList.add('search-result');
    listItem.appendChild(guideLink);

    searchResults.appendChild(listItem);
  });
}

// Event listener for form submission
searchForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  const searchTerm = searchInput.value.trim();
  if (searchTerm !== '') {
    performSearch(searchTerm);
  }
});
