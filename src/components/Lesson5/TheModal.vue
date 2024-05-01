<script setup>
import {fixDate} from "@/helpers/date.js";
import {useNewsList} from "@/stores/news.js";

const itemOpen = useNewsList()
</script>

<template>
  <teleport to="body">
  <div :class="{'d-block': itemOpen.modal}" class="modal">
    <div @click.prevent="itemOpen.modal = false; itemOpen.modalContent = null" class="modal-backdrop">
    </div>
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <img class="mr-3" v-if="itemOpen.modalContent?.image" width="50" :src="itemOpen.modalContent?.image" :alt="itemOpen.modalContent?.title">
          <img v-else class="mr-3" width="50" src="/load-photo.png" alt="no-photo">
          <h5 class="title">{{itemOpen.modalContent?.title}}</h5>
          <button @click.prevent="itemOpen.modal = false; itemOpen.modalContent = null" type="button" class="btn-light btn-close"> ☓ </button>
        </div>
        <div v-if="itemOpen.modalContent?.description" v-html="itemOpen.modalContent?.description" class="modal-body">
        </div>
        <div class="modal-body" v-else>Описание отсутствует</div>
        <div class="modal-footer justify-content-between">
          <div>
            <a target="_blank" :href="itemOpen.modalContent?.link">Перейти в источник</a>
          </div>
          <div>
            {{fixDate(itemOpen.modalContent?.pubDate)}}
          </div>
        </div>
      </div>
    </div>
  </div>

  </teleport>

</template>

<style scoped>

</style>