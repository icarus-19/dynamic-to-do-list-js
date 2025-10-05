// Wait for DOM to load before executing script
document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add new tasks
    function addTask() {
        // Get and trim the task text from input field
        const taskText = taskInput.value.trim();
        
        // Check if input is empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }
        
        // Create new list item for the task
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        
        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';
        
        // Add click event to remove button
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
        };
        
        // Append remove button to list item
        listItem.appendChild(removeButton);
        
        // Append list item to task list
        taskList.appendChild(listItem);
        
        // Clear the input field
        taskInput.value = '';
    }

    // Event listener for Add Task button
    addButton.addEventListener('click', addTask);
    
    // Event listener for Enter key in input field
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
// Wait for DOM to load before executing script
document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Initialize tasks array from Local Storage or empty array
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Function to load tasks from Local Storage
    function loadTasks() {
        // Clear current task list
        taskList.innerHTML = '';
        
        // Create DOM elements for each task
        tasks.forEach((task, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = task;
            
            // Create remove button
            const removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            removeButton.className = 'remove-btn';
            
            // Add click event to remove button
            removeButton.onclick = function() {
                removeTask(index);
            };
            
            // Append remove button to list item
            listItem.appendChild(removeButton);
            
            // Append list item to task list
            taskList.appendChild(listItem);
        });
    }

    // Function to add new tasks
    function addTask() {
        // Get and trim the task text from input field
        const taskText = taskInput.value.trim();
        
        // Check if input is empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }
        
        // Add task to tasks array
        tasks.push(taskText);
        
        // Save updated tasks to Local Storage
        saveTasks();
        
        // Reload tasks to update DOM
        loadTasks();
        
        // Clear the input field
        taskInput.value = '';
    }

    // Function to remove tasks
    function removeTask(index) {
        // Remove task from tasks array
        tasks.splice(index, 1);
        
        // Save updated tasks to Local Storage
        saveTasks();
        
        // Reload tasks to update DOM
        loadTasks();
    }

    // Function to save tasks to Local Storage
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Load tasks when page loads
    loadTasks();

    // Event listener for Add Task button
    addButton.addEventListener('click', addTask);
    
    // Event listener for Enter key in input field
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
