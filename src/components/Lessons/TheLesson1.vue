<script setup>
import {computed, ref} from "vue";
import {useCount} from "@/stores/index.js";
const store = useCount()
const array = ref([
  {
    name: 'Задача по умолчанию',
    done: false
  },
  {
    name: 'Вторая по умолчанию',
    done: false
  },
  {
    name: 'Третья по умолчанию',
    done: false
  },
  {
    name: 'Четвертая по умолчанию',
    done: false
  }
]);
const arrayAdd = ref([
  {
    name: 'Задача по умолчанию',
    done: false
  },
  {
    name: 'Вторая по умолчанию',
    done: false
  },
  {
    name: 'Третья по умолчанию',
    done: false
  },
  {
    name: 'Четвертая по умолчанию',
    done: false
  }
]);
const arrayRadio = ref([
  {
    name: 'Задача по умолчанию',
    done: false
  },
  {
    name: 'Вторая по умолчанию',
    done: false
  },
  {
    name: 'Третья по умолчанию',
    done: false
  },
  {
    name: 'Четвертая по умолчанию',
    done: false
  }
]);


const selected = ref('')
const selected2 = ref([])
const text = ref('')

const picked = ref('')

const completed = computed(() => {
  return array.value.filter(item => item.done)
})

const unCompleted = computed(() => {
  return array.value.filter(item => !item.done)
})

const completed2 = computed(() => {
  return arrayAdd.value.filter(item => item.done)
})

const unCompleted2 = computed(() => {
  return arrayAdd.value.filter(item => !item.done)
})

const addTask = () => {
  arrayAdd.value.push({name: textTask.value, done: false});
  textTask.value = ''
}

const add = () => {
  store.increment()
}
const unAdd = () => {
  store.unIncrement()
}
const textTask = ref('')

</script>

<template>
  <div class="container">
    <div class="row p-4">
      <div class="header flex-1">
        <h2 class="text-center mb-4">Первая задача</h2>
        <div class="d-flex">
          <div class="flex-fill">
            <h3 >1-1</h3>
            <label class="form-check" :for="i" v-for="(item, i) in unCompleted" :key="item">
              <input class="form-check-input" :id="i" type="checkbox" v-model="item.done">
              {{ item.name }}
            </label>
          </div>
          <div class="flex-fill">
            <h3>Выполненные</h3>
            <div style="margin-bottom: 10px;" class="output" v-for="(item, i) in completed" :key="item">
              {{ item.name }}
            </div>
          </div>
        </div>
        <h3>1-2</h3>
        <select class="form-select form-select-sm" v-model="selected">
          <option disabled value="">выбрать</option>
          <option v-for="(item, i) in array" :key="i">{{ item.name }}</option>
        </select>
        <h3>{{ selected }}</h3>
        <div>
          <h3>1-3</h3>

        </div>
        <input class="input-group-text" type="text" v-model="text">
        <h3>Вывод: {{ text }}</h3>

        <h3>1-4 </h3>
        <div v-for="(item, i) in arrayRadio" :key="item">
          <label :for="i">
            {{ item.name }}
            <input type="radio" :id="i" :value="item" v-model="picked"/>
          </label>
        </div>
        <div>Выбрано: {{ picked.name }}</div>

        <h3>1-5</h3>
        <select v-model="selected2" multiple>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <h3>{{ selected2 }}</h3>
      </div>

      <div class="main flex-1">
        <h2 class="text-center mb-4">Вторая задача</h2>
        <form class="d-flex align-items-center mb-4" @submit.prevent="addTask()">
          <input class="input-group-text" type="text" placeholder="Введите текст задачи" v-model="textTask">
          <button class="btn btn-dark ml-3">Добавить</button>
        </form>

        <ul class="list-unstyled">
          <h3 v-if="unCompleted2.length">Надо сделать</h3>
          <h2 v-else>Все выполнил!</h2>
          <li class="form-check" v-for="(item, i) in unCompleted2" :key="item">
            <label>
              <input class="form-check-input" type="checkbox" v-model="item.done">
              {{ item.name }}
            </label>
          </li>
        </ul>
        <ul class="list-unstyled">
          <h2 v-if="unCompleted2.length === 0">хорошо потрудился</h2>
          <h2 v-else-if="completed2.length >= 1">Пошло дело!</h2>
          <h3 v-else>Пусто, простой!</h3>
          <li class="form-check" v-for="(item, i) in completed2" :key="item">
            <label>
              <input class="form-check-input" type="checkbox" v-model="item.done">
              {{ item.name }}
            </label>
          </li>
        </ul>
        <button @click.prevent="unAdd" class="btn btn-dark mr-3">минусуем корзину</button>
        <button @click.prevent="add" class="btn btn-dark">плюсуем корзину</button>
      </div>

    </div>
  </div>
</template>

<style scoped>
.header, .main {
  padding: 20px;
  border-radius: 10px;
  background-color: #eee;
  flex: 1;
}

.row {
  gap: 20px;
}

main {
  display: flex;
  padding: 20px;
  gap: 20px;
}

select {
  min-width: 200px;
}

h2 {
  margin-bottom: 20px;
}

h2 {
  margin-bottom: 10px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

label {
  display: flex;
}

@media (min-width: 1024px) {


  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>