<template>
  <div  >

    <AddProfile  :tableName="'profiles'" class="addProf" />


  </div>
</template>

<script>
import AddProfile from "@/components/allOfProfiles/AddProfile";



export default {
  name: 'Home',
  components: {
    AddProfile
  },
  data: () => ({
    isReload: false,
  }),
created() {
  // if (!window.user){
  //   this.$router.push('/login')
  // }
}
}
</script>

<style lang="sass">

</style>