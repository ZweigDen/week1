//view
var view = {
    displayMessage: function (msg) {
        var messageArea = document.getElementById('todoList');
        messageArea.innerHTML = msg;
    },
    displayTaskNum: function (count) {
        var taskCount = document.getElementById('taskCount');
        taskCount.innerHTML = count;
    }
};

//model
var model = {
    todoList: [],
    msg:"",
    taskMessage: function () {
        this.msg="";
        for(var i=0;i<this.todoList.length;i++){
            this.msg += this.todoList[i];
        }
        view.displayMessage(this.msg);
        view.displayTaskNum(this.todoList.length);
        
    },
};

//controller
var controller = {
    userTask: function (inputMessage) {
        if (inputMessage != '') {
            model.todoList.push('<li class="my-2"><input type="checkbox" class="mx-2">' + inputMessage + '<i class="fas fa-times-circle text-danger float-right"></i></li>');
            model.taskMessage();
        }
    },
    clearTask:function(e){
        e.preventDefault();
        model.todoList = [];
        model.taskMessage();
    }
};


function init() {
    var btnTask = document.getElementById("addTodo");
    btnTask.onclick = taskInput;
    var overAllTask = document.getElementById("clearTask");
    overAllTask.onclick = controller.clearTask;
};

function taskInput() {
    var newTodo = document.getElementById("newTodo");
    var todo = newTodo.value;
    controller.userTask(todo);
    newTodo.value = "";
};


window.onload = init;

