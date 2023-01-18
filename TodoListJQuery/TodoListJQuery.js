$(function () {
    var newTextInput = $("#text-field");
    var addButton = $("#add-button");
    var todoList = $("#todo-list");
    var form = $("#form");

    form.submit(function (e) {
        e.preventDefault();
    });

    addButton.click(function () {
        var newText = newTextInput.val().trim();
        newTextInput.removeClass("invalid");

        if (newText.length === 0) {
            newTextInput.addClass("invalid");
            return;
        }

        function setEditMode() {
            todoItem.html("<input class='edit-todo-item' type='text'>\
                <button class='save-button' type='button'>Save</button>\
                <button class='cancel-button' type='button'>Cancel</button>\
                <div class='error-message'>Field is required</div>");

            todoItem.find(".edit-todo-item").val(newText);

            todoItem.find(".cancel-button").click(function () {
                setViewMode();
            });

            todoItem.find(".save-button").click(function () {
                var editedTextInput = todoItem.find(".edit-todo-item");
                var editedText = editedTextInput.val().trim();
                editedTextInput.removeClass("invalid");

                if (editedText.length === 0) {
                    editedTextInput.addClass("invalid");
                    return;
                }

                newText = editedText;
                setViewMode();
            });
        }

        function setViewMode() {
            todoItem.html("<span class='todo-item-text'></span>\
                <button class='edit-button' type='button'>Edit</button>\
                <button class='delete-button' type='button'>Delete</button>");

            todoItem.find(".todo-item-text").text(newText);

            todoItem.find(".delete-button").click(function () {
                todoItem.remove();
            });

            todoItem.find(".edit-button").click(function () {
                setEditMode();
            });
        }

        var todoItem = $("<li>").addClass("todo-item");

        setViewMode();

        todoList.append(todoItem);

        newTextInput.val("");
    });
});