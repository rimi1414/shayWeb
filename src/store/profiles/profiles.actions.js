import database from '../../Driver/firebase/database/index'

export default {
    getProfiles: async ({state, commit}, current) => {

        const xx = await database.get({entity: 'profiles'});

        const serchSome = xx
        const profiles = []
        if(state.searchByName){
            for(let i=0; i<serchSome.length; i++) {
                if (state.searchByName == serchSome[i].name) {
                  const  profiles =   [serchSome[i]]
                    commit('setProfiles', profiles)

                }
            }
        }else {
            if(!current || current ==1){
                for (let j= 0; j<3; j++){
                    profiles.push(xx[j])

                }
                commit('setProfiles', profiles)
            }
            if(current ==2 ){
                for (let t= 0; t< 1; t++){
                    profiles.push(xx[t])

                }commit('setProfiles', profiles)
            }


        }


    },
    getOneProfile: async ({state ,commit}) => {

        const profile = await database.getmyprofile({entity: 'profiles' ,id:state.profileId});

        commit('setProfile', profile)
    },

    deleteProfile: async ({state, commit}) => {

        await database.deleteprofile({entity: 'profiles', id: state.profileId});

        const profileId = state.editedProfileId;

        commit('restEditedProfileId')

        commit('deleteProfile', profileId)
    },

    updateProfile: async ({state, commit}) => {
        const profile = {}
        Object.assign(profile, state.editedProfile)
        profile.id = state.profileId;

        // save in DB
        await database.updateprofile({entity: 'profiles' , id: state.profileId, newProfile: profile})
   // save in store
        commit('resetEditedProfile')
        commit('resetEditedProfileId')

        commit('editProfile', profile)

    },
insertProfile: async ({state , commit}) =>{

        const profile ={};
        Object.assign(profile, state.editedProfile)

    // save in DB
      await database.post({entity: 'profiles', profile})

    // save in storeg
    commit('restEditedProfile')

    commit('insertProfile', profile)

},
    setEditProfileById: async ({state , commit}) => {
        let profile ={};
        if (state.profiles.length && state.profiles.find(profile => profile.id === state.editedProfileId)){
            profile = state.profiles.find(profile => profile.id === state.editedProfileId);
        }else {
            profile = await database.getById({entity: 'profiles', id: state.editedProfileId})

        }
        commit('setEditedProfile' , profile);
},
    postLevProfile: async ({state , commit}, id) => {

        const lev =[];
        lev.push(id)

        // save in DB
        await database.postLev({entity: 'profiles', lev:lev})

        // save in storeg
        // commit('restEditedProfile')
        //
        // commit('insertProfile', profile)


    },
    getLove: async ({state , commit}) => {

        const allOf = await database.get({entity: 'profiles'});


        for (let i =0; i< allOf.length; i++){
          if(allOf[i].id ==  `${window.user.uid}` ){
             const oneLove = allOf[i].lev
              for (const key in oneLove){

          }
        }
        const profiles = []
        if(state.searchByName){
            for(let i=0; i<serchSome.length; i++) {
                if (state.searchByName == serchSome[i].name) {
                    const  profiles =   [serchSome[i]]
                    commit('setProfiles', profiles)

                }
            }
        }

        }
        commit('setProfiles', profiles)

    }

}