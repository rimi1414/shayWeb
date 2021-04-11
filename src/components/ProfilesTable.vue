<template>
  <div >
<div class="bg-grey-9">

<!--  <<heder>>>-->
  <div  style=" margin-top: -60px">

    <div class="bg-grey-9" v-if="profile" >
      <br>   <br>
<!--    <p  v-if="profile" class="tableTitle pic7 "> פרופיל אישי: </p>-->
      <p   class="tableTitle pic7 "> הפרופיל של {{profile.name}}</p>
      <br>
      <div v-if="(profileid != x)">
      <br>  <br>   <br>
      </div>
    </div>
  </div>
  <!--  <<heder>>>-->


  <!--    << setting>>-->
    <div class="sett bg-grey-9"  v-if="(profileid == x)" >
      <div class="q-pa-md sett "  >
        <q-btn color="gray" label="Settings" >
          <q-menu :content-style="{ backgroundColor: '#eee', color: 'blue'}">
            <div class="row no-wrap q-pa-md bg-grey-5">
              <div class="column ">
                <div class="text-h6 q-mb-md">Settings</div>
                <q-list style="min-width: 100px">
                  <q-item clickable>
                    <q-item-section @click="aricha">עריכת פרופיל</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>עריכת תמונות</q-item-section>
                  </q-item>
                  <q-separator />
                  <q-item clickable>
                    <q-item-section>פייבוריטים</q-item-section>
                  </q-item>
                </q-list>
              </div>


              <q-separator vertical inset class="q-mx-lg" />
              <div class="column items-center">
                <q-avatar size="72px">
                  <img :src="profile.pic">
                </q-avatar>

                <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

                <q-btn
                    color="primary"
                    label="Logout"
                    push
                    size="sm"
                    v-close-popup
                />
              </div>
            </div>
          </q-menu>
        </q-btn>
      </div>

    </div>
    <!--    << setting>>-->



    <div v-if="!profile">
      <br>   <br>   <br>    <br>
      <p  class="tableTitle pic7   "> פרופילי טונדה: </p>
      <br>   <br>   <br>    <br>
    </div>

<!--  //profileTable///-->
    <div class="q-pa-md bg-grey-9 " v-if="profile">
<!--      <q-item :to="'/chat/'+ profileId"-->
<!--              v-if="profileId"-->
<!--              clickable v-ripple>-->
<!--        <q-item-section side>-->
<!--          <q-badge-->
<!--              :color="users.profileId.online ? 'light-green-6' : 'grey-8'">-->
<!--            {{ users[profileId].online ? 'online' :'offline' }}-->
<!--          </q-badge>-->
<!--        </q-item-section>-->

<!--      </q-item>-->


      <q-table
          title="" style="background-color:black"
          :data="[profile]"
          :columns="columns"
          row-key="name"
          selection="multiple"
          :selected.sync="selected"
          :filter="filter"
          grid
          hide-header
          class="pic"
      >

        <!--        <template v-slot:top-right v-if="profile">-->
        <!--          <q-input borderless dense debounce="300" style="background-color:gray" v-model="searchByName" placeholder="חיפוש">-->
        <!--            <template v-slot:append>-->
        <!--              <q-icon name="search"/>-->
        <!--            </template>-->
        <!--          </q-input>-->
        <!--        </template>-->

        <template v-slot:item="props">
          <!--          xxxx-->
          <div
              class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition table "
              :style=" props.selected ? 'transform: scale(0.95);' : ''"
          >
            <q-card class="bbb text-white ">
              <q-card-section >

                <img  :src="props.row.pic"
                     style=" height: 80px ; width: 80px; border-radius: 25px;">
                <p class="name text-blue-2">{{profile.name}}</p>
<!--                <q-checkbox dense v-model="props.selected" :label="props.row.name"/>-->
                <q-btn v-if="(profileid == x)" :profile="profile" class="del222" icon="delete" @click="remove(props.row.id)">
                </q-btn>
                <q-btn v-if="(profileid != x)" :profile="profile" class="del222" icon="mail" @click="send()">
                </q-btn>
                <div v-if="(profileid != x)" style=" margin-right: 30%; margin-top: 2%;  position: absolute ">
                  <q-rating @click="lev(profileId)"
                      v-model="model3"
                      max="1"
                      size="3em"
                      color="red"
                      color-selected="red-9"
                      icon="favorite_border"
                      icon-selected="favorite"
                      icon-half="favorite"
                      no-dimming
                  />
                </div>
                <q-item style="max-width: 80px" v-for="(user, key) in users" :key="key"
                        :to="'/chat/'+ key"
                        v-if="$route.params.id === key"
                        clickable v-ripple>

                  <q-item-section side style="max-width: 50px" >
                    <q-badge style="max-width: 50px"
                        :color="user.online ? 'light-green-6' : 'grey-8'">
                      {{ user.online ? 'online' :'offline' }}
                    </q-badge>
                  </q-item-section>
                </q-item>

              </q-card-section>



              <q-separator/>
              <q-list dense>
                <q-item class="text-black " v-for="col in props.cols.filter(col => col.name !== 'desc')" :key="col.name">
                  <q-item-section>
                    <q-item-label >{{ col.label }}</q-item-label>
                  </q-item-section>
                  <q-item-section side >
                    <q-item-label caption class="text-blue-3 text-bold">{{ col.value }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
              <div v-if="(profileid != x)" style=" margin-right: 30%;   position: absolute ">
                <q-rating @click="lev(profileId)"
                    v-model="model3"
                    max="1"
                    size="2em"
                    color="red"
                    color-selected="red-9"
                    icon="favorite_border"
                    icon-selected="favorite"
                    icon-half="favorite"
                    no-dimming
                />
              </div>
            </q-card>
          </div>

        </template>

      </q-table>
    </div>
  <!--  //profileTable///-->





  <div v-if="!profile" class=" q-pa-md row items-start q-gutter-md" style="margin-right: 50px; max-width: 1200px; ">
    <q-card dark bordered class="pic1 my-card">
      <q-card-section>
        <div class="text-h6">הפרופילים שלנו</div>
        <q-input borderless dense debounce="300" style="background-color:gray; margin-right: 65%"
                 v-model="searchByName" placeholder="חיפוש על פי שם או גיל">
          <template v-slot:append>
            <q-btn class="serch" @click="search(this.$route.params.id)">
              <q-icon name="search"/>
            </q-btn>
          </template>
        </q-input>
        <div class="text-subtitle2">לחץ להכנס לפרופיל</div>
      </q-card-section>

      <q-separator dark inset style="color: #C10015; background-color: black"/>

      <q-card-section>
        <carusel/>
        <template>
          <div class="q-pa-lg flex flex-center">
              <q-pagination
                  v-model="current"
                  :max="5"
              >
              </q-pagination>
            </div>
          </template>
        </q-card-section>
      </q-card>
    </div>
  </div>
  </div>

</template>

<script>
import carusel from "@/components/carusel";
import {mapMutations, mapState, mapActions} from 'vuex';
//
// import firebaseDatabase from '../Driver/firebase/database';
import profiles from "@/views/profiles";

export default {
  name: "ProfilesTable",
  components: {carusel},
  props: ['tableName'],

  data() {
    return {
      current: 1,
      // model3: false,
      // yyyyy :0,
      // forSerch : false,
      searchByName:null,
      // localSearch:null,
      slide: 1,
      x: null,
      profileid: 2,
      filter: '',
      selected: [],
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'profile Name',
          align: 'center',
          field: row => row.name,

          sortable: true
        },
        {name: 'date', align: 'date', label: 'תאריך', field: 'date', sortable: true},
        {name: 'color', label: 'צבע עיניים', field: 'color', sortable: true},
        {name: 'body', label: 'סגנון גוף', field: 'body'},
        // {name: 'bodyt', label: 'סגנון שריר', field: 'bodyt'},
        {name: 'height', label: 'גובה', field: 'height'},
        {name: 'religion', label: 'דת', field: 'religion'},
        {name: 'onme', label: 'על עצמי', field: 'onme'},
      ]

    }
  },
  computed: {...mapState('profiles', ['editedProfileId', 'profiles', 'profile' ,'profileId', 'model3']),
    ...mapState('chat', ['users' ,'userDetails'])},

  methods: {
    ...mapActions('profiles', ['deleteProfile', 'getProfiles','postLevProfile', 'getLove']),
    ...mapMutations('profiles', ['setSerarch', 'resetsearchByName' ,'setLev']),


    aricha(){
this.$emit('update')
    },
    gomyProfile(id) {
      // this.$router.push({name: 'profile', params:`${props.row.id}`});
      //this.$store.commit('profiles/setProfileId', id)
      this.$router.push(`/profile/${id}`);

    },

    remove(id){
      this.deleteProfile(id)
        this.$router.push('/profiles');

    },
    search(){
      this.setSerarch(this.searchByName);
      this.getProfiles()
    },
    send(id){
      this.$router.push('/chat/' + this.profileid);
    },
    lev(id){
      if(this.model3 == false){
        this.postLevProfile(id).then(()=>{
          const b = true
          this.setLev(b)
        })
      }

    },
    kaftor(){
      this.getLove()
    }


  },


  created() {

    if (this.$route.params.id) {
      // for (let prof in this.profiles){
      // }


// this.resetProfileId;
    }else {
      // this.getProfiles();
    }



    this.x = `${window.user.uid}`;
    this.profileid = this.$route.params.id
  },


watch:{
  current(){
    if(this.current){
      this.getProfiles(this.current)
    }
  }
}

}
</script>

<style scoped>
.sett{
  position: relative;
  margin-right: 60%;

}
.table{
  margin-right: 5%;
}
.pic{
  background-image: url("https://mail.google.com/mail/u/0?ui=2&ik=b9425fd237&attid=0.1.1&permmsgid=msg-f:1692946777727311395&th=177e8e1fee141e23&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ_uOM5bYKHf0mHkpYCsVOyIBLkS6-VQ1qw4SHm-sQ_pzL_7k_Og5jTt9OrzbYS78jD1pQ_A0Z1nKCjPug0tUmEZqPTFXJLvcv3-LeIjGfK9dHvNtHIrzesWlSQ&disp=emb");
  background-size:50%;
  backdrop-filter: blur(8px);


}
.pic1{
  background-image: url("https://mail.google.com/mail/u/0?ui=2&ik=b9425fd237&attid=0.1&permmsgid=msg-a:r-2818125448641862777&th=177da7f9710ff0e6&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ_3UqhB-LH6BzgnroJQ_DUjHv54OQRoTgR4KFWC4XSZWisl0vK4xrswvhvC-IA_KiZcCyukpmvF_SSrHMGkEvYuWQQCOZLT5yeYugzuEbv7b03Zfy6lI-E8cI8&disp=emb&realattid=177da7f1de5207cf5f03");
  background-size:100%;
}
.pic7{
  background-image: url("https://mail.google.com/mail/u/0?ui=2&ik=b9425fd237&attid=0.4&permmsgid=msg-a:r-2818125448641862777&th=177da7f9710ff0e6&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ_BsVZa248L0W5Gi_NeqwKa5RuKKGJMVLQFLvsBRj_dvRwjGX_cLGThpL7xtKi1VkiUSaRwLQGjOE1aeKMg3TPYPK8_OI-KMkh5uQJYAUqiGa6TZBVuInSEIcc&disp=emb&realattid=177da7ee39b207cf5f01");
  background-size:100%;
  backdrop-filter: blur(8px);
}
.del222 {
  width: 70px;
  color: #1D1D1D;
  background-color: darkred;
  margin-right: 70%;
}

.serch {
  color: #1D1D1D;
  background-color: darkred;
  margin-right: 10%;
}

.tableTitle {
position: absolute;
  margin-right: 2%;
  padding: 0px 120px 0px 120px;
  opacity: 0.85;
  font-size: 40px;
  text-align: center;
  border-radius: 20px;

  background-color: black;
  color: white;
  margin-top: 20px;

  display: inline-block;

  border-style: solid;
  border-color: darkred;


}

.images {
  width: 300px;
  height: 300px;
  margin-top: -35%;
  margin-right: 40%;
  border-radius: 40%;
}

.card {
  width: 100%;
  max-width: 250px;
  border-radius: 50%;


}
.name {
  ;
  font-weight: bold;
  font-size: 20px;
  font-family: Arial;
  position: absolute;
  margin-top: -15%;
  margin-right: 40%;
}
.card1 {
  width: 100%;
  max-width: 250px;
  border-radius: 50%;

}

.bbb {
  background-color: grey;
  border-radius: 20%;
  height: 430px;
}
</style>