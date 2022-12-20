document.addEventListener("DOMContentLoaded", function () {
    var newTextInput = document.getElementById("textField");
    var addButton = document.getElementById("addButton");
    var todoList = document.getElementById("todoList");
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
            todoItem.innerHTML = "<input class='editTodoItem' type='text'>\
                <button class='saveButton' type='button'>Save</button>\
                <button class='canselButton' type='button'>Cansel</button>\
                <br>\
                <div class=\"errorMessage\">Field is required</div>";

            todoItem.querySelector(".editTodoItem").value = newText;

            todoItem.querySelector(".canselButton").addEventListener("click", function () {
                setViewMode();
            });

            todoItem.querySelector(".saveButton").addEventListener("click", function () {
                var editedTextInput = todoItem.querySelector(".editTodoItem");
                var editedText = editedTextInput.value.trim();
                todoItem.querySelector(".editTodoItem").classList.remove("invalid");

                if (editedText.length === 0) {
                    editedTextInput.classList.add("invalid");
                    return;
                }

                newText = editedText;
                setViewMode();
            });
        }

        function setViewMode() {
            todoItem.innerHTML = "<span class='todoItemText'></span>\
                <button class='editButton' type='button'>Edit</button>\
                <button class='deleteButton' type='button'>Delete</button>";

            todoItem.querySelector(".todoItemText").textContent = newText;

            todoItem.querySelector(".deleteButton").addEventListener("click", function () {
                todoItem.remove();
            });

            todoItem.querySelector(".editButton").addEventListener("click", function () {
                setEditMode();
            });
        }

        var todoItem = document.createElement("li");
        todoItem.classList.add("todoItem");

        setViewMode();

        todoList.appendChild(todoItem);

        newTextInput.value = "";
    });
});