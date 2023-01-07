document.addEventListener("DOMContentLoaded", function () {
    var newTextInput = document.getElementById("text-field");
    var addButton = document.getElementById("add-button");
    var todoList = document.getElementById("todo-list");
    var form = document.getElementById("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
    });

    addButton.addEventListener("click", function () {
        var newText = newTextInput.value.trim();
        newTextInput.classList.remove("invalid");

        if (newText.length === 0) {
            newTextInput.classList.add("invalid");
            return;
        }

        function setEditMode() {
            todoItem.innerHTML = "<input class='edit-todo-item' type='text'>\
                <button class='save-button' type='button'>Save</button>\
                <button class='cancel-button' type='button'>Cancel</button>\
                <div class='error-message'>Field is required</div>";

            todoItem.querySelector(".edit-todo-item").value = newText;

            todoItem.querySelector(".cancel-button").addEventListener("click", function () {
                setViewMode();
            });

            todoItem.querySelector(".save-button").addEventListener("click", function () {
                var editedTextInput = todoItem.querySelector(".edit-todo-item");
                var editedText = editedTextInput.value.trim();
                editedTextInput.classList.remove("invalid");

                if (editedText.length === 0) {
                    editedTextInput.classList.add("invalid");
                    return;
                }

                newText = editedText;
                setViewMode();
            });
        }

        function setViewMode() {
            todoItem.innerHTML = "<span class='todo-item-text'></span>\
                <button class='edit-button' type='button'>Edit</button>\
                <button class='delete-button' type='button'>Delete</button>";

            todoItem.querySelector(".todo-item-text").textContent = newText;

            todoItem.querySelector(".delete-button").addEventListener("click", function () {
                todoItem.remove();
            });

            todoItem.querySelector(".edit-button").addEventListener("click", function () {
                setEditMode();
            });
        }

        var todoItem = document.createElement("li");
        todoItem.classList.add("todo-item");

        setViewMode();

        todoList.appendChild(todoItem);

        newTextInput.value = "";
    });
});