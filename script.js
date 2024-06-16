//script.js
const content = document.getElementById('content');
const menu = document.getElementById('menu');
const backButton = document.getElementById('backButton');
const subjectStyle = document.getElementById('subjectStyle');

function loadSubject(subject) {
    // Hide menu and show back button
    menu.style.display = 'none';
    backButton.style.display = 'block';

    // Load subject content
    loadSubjectContent(subject);

    // Load subject-specific CSS
    subjectStyle.href = `styles/${subject}.css`;
}

function loadSubjectContent(subject) {
    // Remove any existing content
    content.innerHTML = '';

    // Dynamically load subject script
    const script = document.createElement('script');
    script.src = `subjects/${subject}.js`;
    script.onload = () => {
        // Assuming showSubjectContent(subjectContent) is defined in each subject's JS file
        if (typeof showSubjectContent === 'function') {
            showSubjectContent(content);
        } else {
            content.innerHTML = `<p>Error loading subject content.</p>`;
        }
    };
    script.onerror = () => {
        content.innerHTML = `<p>Error loading subject content.</p>`;
    };
    document.body.appendChild(script);
}

function showMenu() {
    // Clear content and show menu
    content.innerHTML = `<p>Welcome to the Study App. Select a subject to get started.</p>`;
    menu.style.display = 'flex';
    backButton.style.display = 'none';

    // Remove subject-specific CSS
    subjectStyle.href = '';

    // Remove subject-specific script
    const subjectScripts = document.querySelectorAll('script[src^="subjects/"]');
    subjectScripts.forEach(script => script.remove());
}
