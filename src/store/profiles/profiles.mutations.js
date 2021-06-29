
export default {

    setSerarch:((state, searchByName)=> state.searchByName = searchByName),

    setProfiles: ((state, profiles)=> state.profiles = profiles),
    setMyLoves: ((state, profiles)=> state.allMyLove = profiles),

    setProfile: ((state, profile)=>
        state.profile = profile),

    setMyProfile: ((state, profile)=>
        state.myProfile = profile),

    setEditedProfileId: ((state , id)=> state.edtedProfileId = id),

    setIsLove: ((state , bool)=> state.isLove = bool),

    setLev: ((state , model3)=> state.model3 = model3),

    setProfileId: ((state , id)=> {

        state.profileId = id
    }),

    setEditedProfile: ((state, profile) => {

        state.editedProfile = profile
    }),


    // resetProfileId: ((state) => state.ProfileId = null),

    resetEditedProfileId: ((state) => state.editedProfileId = ''),

    resetMyProfile: ((state) => state.myProfile = null),

    resetsearchByName: ((state) => state.searchByName = null),

    resetProfile: ((state) => state.profile = null),

    resetEditedProfile: ((state) => {
        for (const key in state.editedProfile){
            state.editedProfile[key] = '';
        }
       delete state.editedProfile.id;
    }),

    editProfile: ((state , profile) => {
        const index = state.profiles.findIndex(p => p.id === profileId)
        state.profiles.splice(index , 1 , profile)
    }),
    deleteProfile: ((state , profileId) => {
        const  index = state.profile.findIndex(p => p.id === profile.id)
        state.profiles.splice(index, 1);
    }),
    insertProfile: ((state , profile) => {

        state.profiles.push(profile);
    })
}