var model = {
    listTodo: [],

    //將資料丟入陣列並繪製view
    pushList(content) {
        var allTodo = this.listTodo;
        allTodo.push(content);
        view.displayList(allTodo);
        console.log(this.listTodo);
    },
    //將陣列的資料清除並繪製view
    clearAllTodo() {
        this.listTodo.splice(0, this.listTodo.length);
        view.displayList(this.listTodo);
    },
    //刪除單筆陣列資料並繪製view
    clearOneTodo(e) {
        var todoID = e.target.id;
        var list = model.listTodo;
        list.forEach(function(item, i){
            if(i == todoID){
                list.splice(i, 1);
                view.displayList(list);
            }
        })
    }
};

//繪製資料
var view = {
    displayList(list) {
        var todoList = document.getElementById('todoList');
        var taskCount = document.getElementById('taskCount');
        todoList.innerHTML = "";
        list.forEach(function (item, i) {
            todoList.innerHTML += `<li class="px-3 d-flex justify-content-between border-bottom align-items-center"><div><input type="checkbox" class="checkOk mr-3"><span>${item}</span></div><button type="button" class="clearOne btn btn-danger" id="${i}">刪除</button></li>`;
        });
        taskCount.innerHTML = list.length;

        //資料繪製完後監聽每個刪除鍵
        addTodoClear();
    },
};


var controller = {
    //判斷是否有輸入內容有的話將資料送至model
    parseTodo(content) {
        if (content) {
            model.pushList(content);
        } else {
            alert("請輸入任務");
        }
    }
}

function contentTodo() {
    var newTodo = document.getElementById('newTodo');
    var contentTodo = newTodo.value;
    controller.parseTodo(contentTodo);
    newTodo.value = "";
}
function clearAllTodo() {
    alert("這是沒有取消的");
    model.clearAllTodo();
}
function addTodoClear() {
    model.listTodo.forEach(function (item, i) {
        document.getElementById(i).onclick = model.clearOneTodo;
    });
}



//按下enter觸發新增
function handleKeyPress(e) {
    var addTodo = document.getElementById("addTodo");

    if (e.keyCode === 13) {
        addTodo.click();
        return false;
    }
}


// init - called when the page has completed loading
window.onload = init;

function init() {
    var addTodo = document.getElementById('addTodo');
    addTodo.addEventListener('click', contentTodo);

    //監聽keyboard
    var enterAddTodo = document.getElementById('newTodo');
    enterAddTodo.addEventListener('keypress', handleKeyPress);

    var clearTask = document.getElementById('clearTask');
    clearTask.addEventListener('click', clearAllTodo);
}