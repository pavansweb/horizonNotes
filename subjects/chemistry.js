function showSubjectContent(container) {
    container.innerHTML = `
        <h2>Chemistry Lessons</h1>
        <div class="lesson-menu">
            <button onclick="loadLesson('lesson1')">Chapter 1 : Periodic Table and Periodic Properties </button>
            <button onclick="loadLesson('lesson2')">Chapter 2 : Chemical Bonding </button>
            <button onclick="loadLesson('lesson4')">Chapter 3 : Acids, Bases and Salts</button>
            <button onclick="loadLesson('lesson5')">Chapter 12: Organic Chemistry </button>
        </div>
        <div id="lessonContent" class="lesson-content">
            <p>Select a lesson to view its content.</p>
        </div>
    `;
}

function loadLesson(lesson) {
    let content = '';
    switch (lesson) {
        // case 'lesson1':
        //     content = `
               
        //     `;
        //     break;
        
        // Add cases for other lessons

        default:
            content = `<p>Lesson content not available yet.</p>`;
    }

    // Hide the lesson menu after a lesson is clicked
    document.querySelector('.lesson-menu').style.display = 'none';

    // Display the lesson content
    document.getElementById('lessonContent').innerHTML = content;
}
