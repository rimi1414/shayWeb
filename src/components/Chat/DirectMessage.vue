<template>
  <q-card class="flex q-pa-md">
    <q-list class="full-width">

      <q-input flat bottom-slots v-model="text" label="Search" :dense="dense">
        <template v-slot:before>
          <q-btn v-go-back.single round dense flat icon="arrow_back_ios"/>
          <q-tooltip>Back</q-tooltip>
        </template>
        <template v-slot:append>
          <q-btn round dense flat icon="search" />
          <q-tooltip>Search</q-tooltip>
        </template>
      </q-input>

      <q-item-label header class="q-mr-sm">A-z
      </q-item-label>

      <q-item
        v-for="user in users"
        :key="user.id"
        to="/b/chat-page"
        class="q-mb-sm"
        clickable
        v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <img :src="`https://cdn.quasar.dev/img/${user.avatar}`">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ user.name }}</q-item-label>
          <q-item-label caption lines="1">{{ 'last message' }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-badge color="red">
            99+
          </q-badge>
        </q-item-section>
      </q-item>

    </q-list>
  </q-card>
</template>

<script>
export default {
  name: "DirectMessage"
}
</script>

<style scoped>

</style>
