<template>
  <div >
    <div>
      <div style="background-color: black; height: 100vh; margin-top: -6%">
        <div class="backBlack">


          <!--    << setting>>-->
          <setting :profile="profile" @update="updateProfile"/>
          <!--    << setting>>-->


          <!--  //profileTable///-->
          <div v-if="profile">
            <br>
            <q-table :style="screenSize <600?  'margin-top: 15%' : ''"
                :data="[profile]"
                :columns="columns"
                row-key="name"
                selection="multiple"
                :selected.sync="selected"
                :filter="filter"
                grid
                hide-header
            >

              <template v-slot:item="props">
                <div class="q-pa-x col-xs-12 col-sm-6 col-md-4 n ">
                  <q-card class="onProfile ">
                    <q-card-section>
                      <br> <br> <br>

                      <p class="name text-blue-2" :style="screenSize <600 ? 'margin-top: -20%' : ''">{{ profile.name }}</p>
                      <q-btn v-if="(profileId == me)" :profile="profile" class="dellOrMessage" icon="delete"
                             @click="remove(props.row.id)"/>

                      <q-btn v-if="(profileId != me)" :profile="profile" class="dellOrMessage" icon="mail"
                             @click="send()"/>


                      <!--                favorite-->
                      <profilesFavorite class="btn-favorite"/>
                      <!--                favorite-->


                      <!--chat-->
                      <profilesOnline class="btn-online"/>
                      <!--chat-->

                    </q-card-section>
                    <!--                    todo:delete this:&ndash;&gt;-->
                    <q-separator color="red"/>
                    <br> <br> <br>
                    <q-list dense>
                      <q-item class="text-blue-3 " v-for="col in props.cols.filter(col => col.name !== 'desc')"
                              :key="col.name">
                        <q-item-section>
                          <q-item-label>{{ col.label }}</q-item-label>
                        </q-item-section>
                        <q-item-section side>
                          <q-item-label caption class="text-blue-3 text-bold">{{ col.value }}</q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-card>
                </div>

              </template>

            </q-table>
          </div>
          <!--  //profileTable///-->


        </div>


      </div>
    </div>
  </div>

</template>

<script>
import carusel from "@/components/profiles/carusel";
import {mapState, mapActions} from 'vuex';
import setting from "@/components/profile/setting";
import profilesOnline from "@/components/profiles/profilesOnline";
import profilesFavorite from "@/components/profiles/profilesFavorite";

export default {
  name: "ProfilesTable",
  components: {carusel, setting, profilesOnline, profilesFavorite},
  props: ['tableName'],

  data() {
    return {
      screenSize: window.innerWidth,
      current: 1,
      searchByName: null,
      slide: 1,
      me: null,
      profileId: null,
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
        {name: 'date', align: 'date', label: 'גיל', field: 'date', sortable: true},
        {name: 'color', label: 'צבע עיניים', field: 'color', sortable: true},
        {name: 'body', label: 'סגנון גוף', field: 'body'},
        // {name: 'bodyt', label: 'סגנון שריר', field: 'bodyt'},
        {name: 'height', label: 'גובה', field: 'height'},
        {name: 'religion', label: 'דת', field: 'religion'},
        {name: 'onme', label: 'על עצמי', field: 'onme'},
      ]

    }
  },
  computed: {
    ...mapState('profiles', ['editedProfileId', 'profiles', 'profile', 'isLove']),
    ...mapState('logUser', ['users', 'userDetails'])
  },

  methods: {
    ...mapActions('profiles', ['deleteProfile', 'postLevProfile', 'getLove', 'deleteThisLove', 'getProfileLove']),


    updateProfile() {
      this.$emit('update')
    },

    remove(id) {
      this.deleteProfile(id)
      this.$router.push('/profiles');

    },


    send() {
      this.$router.push('/chat/' + this.profileId);
    },


    lev(id) {
      if (this.isLove === false) {
        this.postLevProfile(id)
      } else {
        this.deleteThisLove(this.$route.params.id)
      }
    },


  },


  created() {
    // this.getLove(this.$route.params.id)
// this.getProfileLove()
    this.me = `${window.user.uid}`;
    this.profileId = this.$route.params.id
  },

// todo: this: current
// watch:{
//   current(){
//     if(this.current){
//       this.getProfiles(this.current)
//     }
//   }
// }

}
</script>

<style scoped>
.backBlack {
  background-color: rgba(0, 0, 0, 0.6); /* Black w/opacity/see-through */
}

.phoneMobile {
  /*max-width: 100%;*/
  margin: auto;

}

.constrain {
  max-width: 70%;
  margin: auto;
}

.picAdd {
  background-image: url("https://mail.google.com/mail/u/2?ui=2&ik=b9425fd237&attid=0.1&permmsgid=msg-a:r-2818125448641862777&th=177da7f9710ff0e6&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ9q7dkbX7ytUqIVZANF1adk8dYf9Hz-gEt7FYV3ZKG8vFp4KIHsW33AcWpQvQycRGxEnvAY5iu4bQsvOfosscVQcnDSBXd_sAvO3QbhwaUStAVIvLIJ63jsBk0&disp=emb&realattid=177da7f1de5207cf5f03");
  background-repeat: no-repeat;
  background-size: 100%;
}

.picAddMobile {
  background-image: url("https://firebasestorage.googleapis.com/v0/b/tonda-datind.appspot.com/o/%D7%9C%D7%91%D7%91%D7%95%D7%AA.png?alt=media&token=6e0a5c80-b1e7-47cc-aa77-40c897743512");
  background-repeat: no-repeat;
  background-size: 100%;
}

.a-title {
  height: 1%;
  color: aliceblue;
  font-family: "Guttman Kav";
  width: 50%;
  padding: 2%

}

.onProfile {
  background-color: black;
  margin-right: 50%;
  border-radius: 20%;
  height: 90%;
  width: 200%;
  margin-top: 30%;
}


.btn-favorite {
  margin-top: -3%;
  position: absolute
}


.btn-online {
  position: absolute;
  margin-right: 35%;
  margin-top: -3%;
  height: 20px
}

.dellOrMessage {
  color: #1D1D1D;
  background-color: darkred;
  margin-right: 75%;
  position: absolute;
  margin-top: -3%;
  z-index: 1;
}


.name {
  font-weight: bold;
  font-size: 30px;
  font-family: Arial;
  position: absolute;
  margin-top: -12% ;
  margin-right: 39%;
  /*position: absolute;*/
}


@media screen and (max-width: 600px) {
  .onProfile {
    margin-top: 0%;
    background-color: black;
    margin-right: 5%;
    border-radius: 20%;
    height: 110%;
    width: 90%
  }
.name{
  margin-top: -30%;
}
.dellOrMessage{
  margin-top: -6%;
}
.btn-online{
  margin-top: -6%;
  margin-right: 30%;
}
.btn-favorite{
  margin-top: -6%;
}

}
</style>