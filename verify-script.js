function searchCertificate() {
    const code = document.getElementById('certificateCode').value.trim();
    const resultDiv = document.getElementById('certificateResult');
    
    // For demo purposes, show results for any input
    if (code) {
        resultDiv.classList.remove('hidden');
    } else {
        alert('Please enter a certificate code');
        resultDiv.classList.add('hidden');
    }
}

// Allow search on Enter key press
document.getElementById('certificateCode').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchCertificate();
    }
});