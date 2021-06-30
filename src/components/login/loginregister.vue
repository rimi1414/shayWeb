<template>
<q-form>



  <!--  <p-if="tab == 'register'"></p>-->
  <q-input v class="q-mb-md" outlined v-model="inputdata.name" label="Name" />
  <q-input class="q-mb-md"  outlined type="email" v-model="inputdata.email" label="Email">
    <template v-slot:prepend>
      <q-icon name="email" />
    </template>
  </q-input>
  <q-input class="q-mb-md" outlined v-model="inputdata.password" label="Password" >
  <template v-slot:prepend>
    <q-icon name="lock" />
  </template>
  </q-input>
  <q-card-section>
    <div class="text-center q-pa-md q-gutter-md" >
      <q-btn class="glossy" @click="login()" label="G" round color="indigo-7">
        <q-icon name="fab fa-facebook-f" size="1.2rem" />
      </q-btn>
<!--      <q-btn round color="red-8">-->
<!--        <q-icon name="fab fa-google-plus-g" size="1.2rem" />-->
<!--      </q-btn>-->
<!--      <q-btn round color="light-blue-5">-->
<!--        <q-icon name="fab fa-twitter" size="1.2rem" />-->
<!--      </q-btn>-->
    </div>
  </q-card-section>
<!--  <q-btn v-if="tab == 'login'" @click="submitForm()"  label="Get Started" />-->
<div class="row">
  <q-space/>
  <q-btn v-if="tab == 'register'" @click="submitForm()" unelevated size="lg" color="red-5" class="text-white" label="Get Started" />
  <q-btn v-if="tab == 'login'" @click="submitForm()" unelevated size="lg" color="red-5" class="text-white" label="Sign In" />
</div>

</q-form>
</template>

<script>
import {mapMutations, mapState, mapActions} from 'vuex';
export default {
  props: [ 'tab', ],
name: "loginregister",
  data(){
    return{
      inputdata :{
        name:'',
        email: '',
        password: '',

      }
    }
  },
  methods:{
...mapActions('logUser',['registerUser', 'loginUser']),

    submitForm(){
      if(this.tab == 'login'){
        this.loginUser(this.inputdata).then(()=>{
          this.$router.push('/');
        })
      }else {
        this.registerUser(this.inputdata).then(()=>{
          this.$router.push({ path: '/' })

        })
      }
    }
  }
}

</script>

<style >



</style>