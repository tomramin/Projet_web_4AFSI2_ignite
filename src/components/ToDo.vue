<template>
  <v-container>
    <v-layout>
      <v-form v-model="valid">
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="title"
                label="Title"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="content"
                label="Content"
                required
              ></v-text-field>
            </v-col>
            <v-col>
              <v-btn v-on:click="addTodo">Add</v-btn>
            </v-col>
            <v-col cols="12" md="4">
              <ol>
                <li v-for="(item,i) in todoList" :key="i">
                  Title : {{ item.title }}, Content : {{ item.content }}
                  <v-col>
                    <v-btn v-on:click="delTodo(i)">Del</v-btn>
                  </v-col>
                </li>
              </ol>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    title: '',
    content: '',
    todoList: []
  }),
  methods: {
    addTodo () {
      // TODO
      this.todoList.push({
        title: this.title,
        content: this.content
      })
      console.log(JSON.stringify(this.todoList))
    },
    delTodo (i) {
      this.todoList.splice(i, 1)
    }
  }
}
</script>
