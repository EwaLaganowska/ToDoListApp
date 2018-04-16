var todoService = (function(service) {
    let _data = (localStorage.getItem('todoMemmory')) ? JSON.parse(localStorage.getItem('todoMemmory')) : {
        todoes: []
    };

    service.addTodo = function(todo) {
        console.log(_data);        
        _data.todoes.push(todo);
        console.log(_data.todoes);
    };

    return service;

})(todoService || {});