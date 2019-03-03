<template>
  <div class="infos">
    <h2 class="editprofil">Éditer mon profil</h2>
    <hr>
    <div>
      <div class="form-group">
        <span>Entity: {{user.entityCap.name}}</span>
        <input
          type="text"
          v-model="user.entityCap.name"
          v-if="isEditing"
          @keyup.enter="$emit('update')"
        >
      </div>
      <div class="form-group">
        <span>Nom: {{user.name}}</span>
        <input type="text" v-model="user.name" v-if="isEditing" @keyup.enter="$emit('update')">
      </div>

      <div class="form-group">
        <span>Email: {{user.email}}</span>
        <input type="email" v-model="user.email" v-if="isEditing" @keyup.enter="$emit('update')">
      </div>

      <div class="form-group">
        <span>Prénom: {{user.lastName}}</span>
        <input type="text" v-model="user.lastName" v-if="isEditing" @keyup.enter="$emit('update')">
      </div>

      <div class="form-group">
        <span>Télephone: {{user.phoneNumber}}</span>
        <input
          type="tel"
          v-model="user.phoneNumber"
          v-if="isEditing"
          @keyup.enter="$emit('update')"
        >
      </div>

      <div class="form-group">
        <span>Ville: {{user.city.name}}</span>
        <input type="text" v-model="user.city.name" v-if="isEditing" @keyup.enter="$emit('update')">
      </div>

      <!--
            <div class="form-group">
                <label for="Entity">Entity: {{user.entityCap.name}}</label>
                <input id="Entity" type="text" class="form-control" :value="user.entityCap.name">
            </div>
      -->
      <button @click="edit()" class="btn btn-primary btn-lg rounded">Valider</button>
    </div>

    {{user}}
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "editInfo",
  data() {
    return {
      user: [],
    };
  },
  methods: {
    onLoad() {
      axios
        .get("/api/users/current")
        .then(response => {
          this.user = response.data;
          console.log("Axios Get", this.user);
        })
        .catch(response => {
          // this.user= response.data
          console.log("null", response);
        });
    },
    edit() {
      //e.preventDefault();
      console.log("en attente...", this.user);
      axios
        .put("/api/users/", this.user)
        .then(response => {
          //console.log(this.user, response);
          console.log("gg2", response);
        })
        .catch(response => {
          console.log("nul", response);
        });
    }
  },
  mounted() {
    this.onLoad();
    this.isEditing = true;
  }
};
</script>


<style>
.infos {
  flex: 10;
  top: 5%;
  position: relative;
}

/*
    span {
        padding: 10px;
        font-weight: bold;
        font-size: 20px;
        padding: 15px;
        display: flex;
        position: relative;
        left: 10%;
    }
*/

hr {
  height: 1px;
  background: #005380;
}
</style>
