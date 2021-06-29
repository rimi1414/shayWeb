<template>
<q-card class="backBlack">
  <q-card-section>
    <q-card class="text-h4  backBlack  a-title">הפרופילים שלנו</q-card>

    <div class="text-subtitle2">לחץ להכנס לפרופיל</div>
  </q-card-section>
</q-card>

</template>

<script>
export default {
  name: "profilesHeader"
}
</script>

<style >

.backBlack{
  background-color: rgba(0,0,0, 0.7); /* Black w/opacity/see-through */
}

.a-title {
  height: 1%;
  color: aliceblue;
  font-family: "Guttman Kav";
  width: 64%;
  padding: 3%
}
@media screen and (max-width:600px) {
  .a-title{
    font-size: 30px;
    padding-top: 7%;
    padding-bottom: 7%;
    width: 150%;
  }

}
</style>