import database from '../../Driver/firebase/database/index'

export default {
    getProfiles: async ({state, commit}, current) => {

        const getProfs = await database.get({entity: 'profiles', myId: `${window.user.uid}`});


        if (state.myProfile.hisGender === 'זכר') {
            const profiles = getProfs.filter(profile => profile.myGender === 'זכר');
            commit('setProfiles', profiles)
        } else {

            const profiles = getProfs.filter(getProf => getProf.myGender === 'נקבה');
            commit('setProfiles', profiles)
        }


        //
        // for( let i =0 ; i < getProf.length ; i ++){
        //     if(state.myProfile.hisGender === 'זכר') {
        //     if(getProf[i].myGender === 'נקבה'){
        //         serchSome.push(getProf[i])
        //     }
        // }
        //     if(state.myProfile.hisGender === 'נקבה') {
        //         if(getProf[i].myGender === 'זכר'){
        //             serchSome.push(getProf[i])
        //         }
        //     }
// }
// getProf = serchSome
//         const profiles = []

        //     if(!current || current == 1){
        //         for (let j= 0; j<getProf.length; j++){
        //             profiles.push(getProf[j])
        //         }
        //         commit('setProfiles', profiles)
        //     }
        //     if(current == 2){
        //         for (let t= 0; t< 1; t++){
        //             profiles.push(getProf[t])
        //         }commit('setProfiles', profiles)
        //
        // }
    },


    getMyProfile: async ({state, commit}, bool) => {

        const profile = await database.getThisProfile({entity: 'profiles', id: window.user.uid});

        commit('setMyProfile', profile)

    },

    getOneProfile: async ({state, commit}) => {

        const profile = await database.getThisProfile({entity: 'profiles', id: state.profileId});

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
        await database.updateprofile({entity: 'profiles', id: state.profileId, newProfile: profile})
        // save in store
        commit('resetEditedProfile')
        commit('resetEditedProfileId')

        commit('editProfile', profile)

    },
    insertProfile: async ({state, commit}) => {

        const profile = {};
        Object.assign(profile, state.editedProfile)

        // save in DB
        await database.post({entity: 'profiles', profile})

        // save in storeg
        commit('restEditedProfile')

        commit('insertProfile', profile)

    },
    setEditProfileById: async ({state, commit}) => {
        let profile = {};
        if (state.profiles.length && state.profiles.find(profile => profile.id === state.editedProfileId)) {
            profile = state.profiles.find(profile => profile.id === state.editedProfileId);
        } else {
            profile = await database.getById({entity: 'profiles', id: state.editedProfileId})

        }
        commit('setEditedProfile', profile);
    },
    postLevProfile: async ({state, commit}, id) => {

        const lev = [];
        lev.push(id)

        // save in DB
        await database.postLev({entity: 'profiles', lev: lev})


        // save in store
        // commit('restEditedProfile')
        //
        // commit('insertProfile', profile)


    },
    getLove: async ({state, dispatch, commit}, id) => {
        const myProfile = await database.getThisProfile({entity: 'profiles', id: window.user.uid});
        var bool = false
        var arr = []
        for (const key in myProfile.lev) {
            arr.push(myProfile.lev[key][0])
            if (myProfile.lev[key].includes(id)) {
                commit('setIsLove', 1)
                bool = true
            }
        }
        if (bool === false) {
            commit('setIsLove', 0)
        }

        dispatch('getProfileLove', arr)


    },
    deleteThisLove: async ({}, id) => {
        const myProfile = await database.getThisProfile({entity: 'profiles', id: window.user.uid});
        ;
        const result = []
        for (const key in myProfile.lev) {
            result.push(myProfile.lev[key].filter(lev => lev != id))
        }

        database.setLoveAfterDell(result)
        // postLevProfile(result)

    },
    getProfileLove: async ({commit}, arr) => {
        // const myProfile = await database.getThisProfile({entity: 'profiles' , id: window.user.uid});
        const getProfs = await database.get({entity: 'profiles', myId: `${window.user.uid}`});
        const profilesLove = []
if(arr.length != 0 && arr != undefined) {
    let bool = false
    for (var i = 0; i < getProfs.length; i++) {
        for (var key in arr) {
            if (arr[key] === getProfs[i].id) {
                profilesLove.push(getProfs[i])
                bool = true
            }
        }
    }
    if (bool === true) {
        commit('setProfiles', profilesLove)
        return
    }

}
else {
    commit('setProfiles', null)
}
    }


}