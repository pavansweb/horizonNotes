function showSubjectContent(container) {
    container.innerHTML = `
        <h2>Computer Lessons</h1>
        <div class="lesson-menu">
        
            <button onclick="loadLesson('lesson3')">Chapter 3: Values and Data Types</button>
            <button onclick="loadLesson('lesson4')">Chapter 4: Operators in Java</button>
            <button onclick="loadLesson('lesson5')">Chapter 5: Input in Java </button>
            <button onclick="loadLesson('lesson6')">Chapter 6: Mathematical Library Methods</button>
            <button onclick="loadLesson('lesson7')">Chapter 7: Conditional Construct in Java</button>
            
        </div>

        <div id="lessonContent" class="lesson-content">
            <p>Select a lesson to view its content.</p>
    `;
}

function loadLesson(lesson) {
    let content = '';
    switch (lesson) {
        case 'lesson1':
            content = `

            `;
            break;
        case 'lesson2':
            content = `

            `;
            break;
        // Add cases for other lessons

        default:
            content = `<p>Lesson content not available yet.</p>`;
    }

    // Hide the lesson menu after a lesson is clicked
    document.querySelector('.lesson-menu').style.display = 'none';

    // Display the lesson content
    document.getElementById('lessonContent').innerHTML = content;
}
