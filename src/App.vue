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
      }
    };
  },
  methods: {
    submitForm() {
      console.log(this.user);
    }
  }
};
</script>

<style>

</style>
