<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label for="userName">Username: </label>
                    <input id="userName" type="text" class="form-control" name="name" v-model="user.username">
                </div>
                <div class="form-group">
                    <label for="email">Email: </label>
                    <input id="email" type="text" class="form-control" name="email" v-model="user.email">
                </div>
                <button class="btn btn-primary" type="submit" @click="submitForm">Submit</button>
                <hr>
                <input id="node" type="text" class="form-control" name="node" v-model="node">
                <br><br>
                <button class="btn btn-primary" type="button" @click="fetchData">Get Data</button>
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item" v-for="(u, index) in users" :key="index">{{ u.username }} - {{ u.email }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        email: ""
      },
      users: [],
      resource: {},
      node: "data"
    };
  },
  methods: {
    submitForm() {
      //   this.$http.post("data.json", this.user).then(
      //     response => {
      //       console.log(response);
      //     },
      //     error => {
      //       console.log(error);
      //     }
      //   );
      // this.resource.save({}, this.user);
      this.resource.saveAlt(this.user);
    },
    fetchData() {
      //   this.$http
      //     .get("data.json")
      //     .then(response => {
      //       return response.json();
      //     })
      //     .then(
      //       data => {
      //         const resultArray = [];
      //         for (let key in data) {
      //           resultArray.push(data[key]);
      //         }
      //         this.users = resultArray;
      //       },
      //       err => {
      //         console.error(err);
      //       }
      //     );
      this.resource
        .getData({ node: this.node })
        .then(response => {
          return response.json();
        })
        .then(
          data => {
            const resultArray = [];
            for (let key in data) {
              resultArray.push(data[key]);
            }
            this.users = resultArray;
          },
          err => {
            console.error(err);
          }
        );
    }
  },
  created() {
    const customActions = {
      saveAlt: { method: "POST", url: "alternative.json" },
      getData: { method: "GET" }
    };
    this.resource = this.$resource("{node}.json", {}, customActions);
  }
};
</script>

<style>

</style>
