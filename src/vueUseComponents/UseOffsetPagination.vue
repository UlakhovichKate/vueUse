<script setup lang="ts">
import type { Ref } from 'vue'
import { ref } from 'vue'
import { useOffsetPagination } from '@vueuse/core'

interface User {
  id: number
  name: string
}
const database = ref([]) as Ref<User[]>

for (let i = 0; i < 80; i++)
  database.value.push({ id: i, name: `user ${i}` })

function fetch(page: number, pageSize: number) {
  return new Promise<User[]>((resolve, reject) => {
    const start = (page - 1) * pageSize
    const end = start + pageSize
    setTimeout(() => {
      resolve(database.value.slice(start, end))
    }, 100)
  })
}

const data: Ref<User[]> = ref([])

const page = ref(1)
const pageSize = ref(10)

fetchData({
  currentPage: page.value,
  currentPageSize: pageSize.value,
})

function fetchData({ currentPage, currentPageSize }: { currentPage: number; currentPageSize: number }) {
  fetch(currentPage, currentPageSize).then((responseData) => {
    data.value = responseData
  })
}

const {
  currentPage,
  currentPageSize,
  pageCount,
  isFirstPage,
  isLastPage,
  prev,
  next,
} = useOffsetPagination({
  total: database.value.length,
  page: 1,
  pageSize,
  onPageChange: fetchData,
  onPageSizeChange: fetchData,
})
</script>

<template>
  <h2>Use Offset Pagination</h2>
  <div class="list-grid">
    <div opacity="50">
      total:
    </div>
    <div>{{ database.length }}</div>
    <div opacity="50">
      pageCount:
    </div>
    <div>{{ pageCount }}</div>
    <div opacity="50">
      currentPageSize:
    </div>
    <div>{{ currentPageSize }}</div>
    <div opacity="50">
      currentPage:
    </div>
    <div>{{ currentPage }}</div>
    <div opacity="50">
      isFirstPage:
    </div>
    <div>{{ isFirstPage }}</div>
    <div opacity="50">
      isLastPage:
    </div>
    <div>{{ isLastPage }}</div>
  </div>
  <div class="my-4 pagination">
    <button :disabled="isFirstPage" @click="prev" class="btn btn-primary">
      prev
    </button>
    <button
        v-for="item in pageCount"
        :key="item"
        :disabled="currentPage === item"
        @click="currentPage = item"
        class="btn btn-primary"
    >
      {{ item }}
    </button>
    <button :disabled="isLastPage" @click="next"  class="btn btn-primary">
      next
    </button>
  </div>

  <table>
    <thead>
    <tr>
      <td>id</td>
      <td>name</td>
    </tr>
    </thead>
    <tr v-for="d in data" :key="d.id">
      <td>{{ d.id }}</td>
      <td>{{ d.name }}</td>
    </tr>
  </table>
</template>

<style>
.list-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
}

.pagination {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
</style>
