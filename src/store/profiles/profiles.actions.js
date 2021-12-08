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

set: ({state, commit}, x) =>{
      database.setT(x);
},
    setC: ({state, commit}, x) =>{
      database.setCC(x);
},




}