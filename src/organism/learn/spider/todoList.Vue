<template>
  <div class="todoList">
    <header>
      <h1 class="todoList__title">todos</h1>
      <input class="todoList__input todoList__input--add"
        autofocus autocomplete="off"
        placeholder="What needs to be done?"
        v-model="newTodo"
        @keyup.enter="addTodo">
    </header>
    <section class="todoList__main" v-show="todos.length">
      <input id="toggle-all" class="toggleAllBtn" type="checkbox" v-model="allDone">
      <label for="toggle-all" class="toggleAllBtn toggleAllBtn--label"></label>
      <ul class="todoList__list">
        <li v-for="todo in filteredTodos"
          class="todoList__item"
          :key="todo.id"
          :class="{ completed: todo.completed, editing: todo == editedTodo }">
          <div class="view">
            <input class="toggle" type="checkbox" v-model="todo.completed">
            <label @dblclick="editTodo(todo)">{{ todo.title }}</label>
            <button class="deleteBtn" @click="removeTodo(todo)"></button>
          </div>
          <input class="todoList__input todoList__input--edit" type="text"
            v-model="todo.title"
            v-todo-focus="todo == editedTodo"
            @blur="doneEdit(todo)"
            @keyup.enter="doneEdit(todo)"
            @keyup.esc="cancelEdit(todo)">
        </li>
      </ul>
    </section>
    <footer class="todoList__footer" v-show="todos.length">
      <span class="todo-count">
        <strong>{{ remaining }}</strong> {{ remaining | pluralize }} left
      </span>
      <ul class="filters">
        <li>
          <a href="#/all" :class="{ selected: visibility == 'all' }">All</a>
        </li>
        <li>
          <a href="#/active" :class="{ selected: visibility == 'active' }">Active</a>
        </li>
        <li>
          <a href="#/completed" :class="{ selected: visibility == 'completed' }">Completed</a>
        </li>
      </ul>
      <button class="clear-completed" @click="removeCompleted" v-show="todos.length > remaining">
        Clear completed
      </button>
    </footer>
  </div>
</template>

<script>
const STORAGE_KEY = 'todos-vuejs-2.0'
const todoStorage = {}

var filters = {
  all (todos) {
    return todos
  },
  active (todos) {
    return todos.filter(function (todo) {
      return !todo.completed
    })
  },
  completed (todos) {
    return todos.filter(function (todo) {
      return todo.completed
    })
  }
}

const onHashChange = () => {
  const visibility = window.location.hash.replace(/#\/?/, '')
  if (filters[visibility]) {
    app.visibility = visibility
  } else {
    window.location.hash = ''
    app.visibility = 'all'
  }
}

window.addEventListener('hashchange', onHashChange)
onHashChange()

export default {
  data () {
    return {
      todos: (() => { // 即時関数であればメソッドを定義できる
        const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
        todos.forEach(function (todo, index) {
          todo.id = index
        })
        todoStorage.uid = todos.length
        return todos
      })(),
      newTodo: '',
      editedTodo: null,
      visibility: 'all'
    }
  },

  watch: {
    todos: {
      handler (todos) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
      },
      deep: true
    }
  },

  computed: {
    filteredTodos () {
      return filters[this.visibility](this.todos)
    },
    remaining () {
      return filters.active(this.todos).length
    },
    allDone: {
      get () {
        return this.remaining === 0
      },
      set (value) {
        this.todos.forEach(function (todo) {
          todo.completed = value
        })
      }
    }
  },

  filters: {
    pluralize (n) {
      return n === 1 ? 'item' : 'items'
    }
  },

  methods: {
    addTodo () {
      var value = this.newTodo && this.newTodo.trim()
      if (!value) {
        return
      }
      this.todos.push({
        id: todoStorage.uid++,
        title: value,
        completed: false
      })
      this.newTodo = ''
    },

    removeTodo (todo) {
      this.todos.splice(this.todos.indexOf(todo), 1)
    },

    editTodo (todo) {
      this.beforeEditCache = todo.title
      this.editedTodo = todo
    },

    doneEdit (todo) {
      if (!this.editedTodo) {
        return
      }
      this.editedTodo = null
      todo.title = todo.title.trim()
      if (!todo.title) {
        this.removeTodo(todo)
      }
    },

    cancelEdit (todo) {
      this.editedTodo = null
      todo.title = this.beforeEditCache
    },

    removeCompleted () {
      this.todos = filters.active(this.todos)
    }
  },

  directives: {
    'todo-focus': function (el, binding) {
      if (binding.value) {
        el.focus()
      }
    }
  }
}
</script>

<style lang="scss">
.todoList {
  margin: 40px auto 20px;
  width: 600px;

  &__title {
    font-size: 30px;
    text-align: center;
  }

  &__main {
    position: relative;
    z-index: 2;
    border-top: 1px solid #e6e6e6;

    &::after {
      content: '';
      border-top: 1px solid #e6e6e6;
      display: block;
      height: 50px;
      margin-bottom: 20px;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),
                  0 8px 0 -3px #f6f6f6,
                  0 9px 1px -3px rgba(0, 0, 0, 0.2),
                  0 16px 0 -6px #f6f6f6,
                  0 17px 2px -6px rgba(0, 0, 0, 0.2);
    }
  }

  &__input {
    position: relative;
    margin: 0;
    width: 100%;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    color: inherit;
    padding: 6px;
    border: 1px solid #999;
    box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
    box-sizing: border-box;

    &--add {
      padding: 16px 16px 16px 60px;
      border: none;
      background: rgba(0, 0, 0, 0.003);
      box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
    }

    &--edit {
      display: none;
    }
  }

  &__item {
    position: relative;
    font-size: 24px;
    border-bottom: 1px solid #ededed;
    &:last-child {
      border-bottom: none;
    }
  }

  &__footer {
    color: #777;
    display: flex;
    justify-content: center;
  }
}

.deleteBtn {
  display: none;
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  width: 40px;
  height: 40px;
  margin: auto 0;
  font-size: 30px;
  color: #cc9a9a;
  margin-bottom: 11px;
  transition: color 0.2s ease-out;

  &:hover {
    color: #af5b5e;
  }

  &::after {
    content: '×';
  }
}

.toggleAllBtn {
  width: 1px;
  height: 1px;
  border: none; /* Mobile Safari */
  opacity: 0;
  position: absolute;
  right: 100%;
  bottom: 100%;

  &:checked {
    .toggleAllBtn--label {
      &::before {
        color: #737373;
      }
    }
  }

  &--label {
    width: 60px;
    height: 34px;
    font-size: 0;
    opacity: 1;
    position: absolute;
    top: -52px;
    left: -13px;
    transform: rotate(90deg);

    &::before {
      content: '❯';
      font-size: 22px;
      color: #e6e6e6;
      padding: 10px 27px 10px 27px;
    }
  }
}

.todoList__list li.editing {
    border-bottom: none;
    padding: 0;
}

.todoList__list li.editing .edit {
    display: block;
    width: calc(100% - 43px);
    padding: 12px 16px;
    margin: 0 0 0 43px;
}

.todoList__list li.editing .view {
    display: none;
}

.todoList__list li .toggle {
    text-align: center;
    width: 40px;
    /* auto, since non-WebKit browsers doesn't support input styling */
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    border: none; /* Mobile Safari */
    -webkit-appearance: none;
    appearance: none;
}

.todoList__list li .toggle {
    opacity: 0;
}

.todoList__list li .toggle + label {
    /*
        Firefox requires `#` to be escaped - https://bugzilla.mozilla.org/show_bug.cgi?id=922433
        IE and Edge requires *everything* to be escaped to render, so we do that instead of just the `#` - https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7157459/
    */
    background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');
    background-repeat: no-repeat;
    background-position: center left;
}

.todoList__list li .toggle:checked + label {
    background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');
}

.todoList__list li label {
    word-break: break-all;
    padding: 15px 15px 15px 60px;
    display: block;
    line-height: 1.2;
    transition: color 0.4s;
}

.todoList__list li.completed label {
    color: #d9d9d9;
    text-decoration: line-through;
}

.todoList__list li:hover .deleteBtn {
    display: block;
}

.todoList__list li.editing:last-child {
    margin-bottom: -1px;
}

.todo-count strong {
    font-weight: 300;
}

.filters li {
    display: inline;
}

.filters li a {
    color: inherit;
    margin: 3px;
    padding: 3px 7px;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 3px;
}

.filters li a:hover {
    border-color: rgba(175, 47, 47, 0.1);
}

.filters li a.selected {
    border-color: rgba(175, 47, 47, 0.2);
}

.clear-completed,
.clear-completed:active, {
    float: right;
    position: relative;
    line-height: 20px;
    text-decoration: none;
    cursor: pointer;
}

.clear-completed:hover {
    text-decoration: underline;
}
</style>
