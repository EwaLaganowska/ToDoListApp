var todoView = (function(view) {

    let _addTodoInput = document.querySelector("#item");

    view.addTodo = function() {
        let text = _addTodoInput.value;
        let todoModel = new TodoModel(text);
        todoService.addTodo(todoModel);
        todoRenderer.addItem(todoModel);
    };

    return view;

})(todoView || {});

