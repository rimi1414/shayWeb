<template>
  <q-page  >


    <div id="wrapper" v-if="screenSize>600"  >


      <div id="outer" class="full-width fixed-top head" ></div>
<!--      <div id="inner" :style="screenSize === false? `margin-top: -5%; font-family: Arial; font-size: ${screenSize/94}px ` : `margin-top: -5%; font-family: Arial; font-size: ${screenSize/94}px; margin-right:-5%`" class="row" >-->

        <div class="row  fixed- " style="position: absolute; margin-top:-2%; width: 100%  ;z-index: 99999990999; ">

          <div class="containerT col-2"style=" margin-right: 5%;z-index: 1; ">

            <a @click="icon= true" class="btnT btn-1T" >
              <svg>
                <rect x="0" y="0" fill="none" width="100%" height="100%"/>
              </svg>
              Join Us
            </a>
          </div>
          <div class="containerT col-2"style=" z-index: 1;">

            <a @click="contact= true" class="btnT btn-1T">
              <svg>
                <rect x="0" y="0" fill="none" width="100%" height="100%"/>
              </svg>
              Contact Us
            </a>
          </div>
          <div class="containerT col-3"style=" z-index: 1;">

            <a href="#services" class="btnT btn-1T">
              <svg>
                <rect x="0" y="0" fill="none" width="100%" height="100%"/>
              </svg>
              services
            </a>
          </div>
          <div class="containerT col-2"style="z-index: 1; ">

            <a href="#about" class="btnT btn-1T">
              <svg>
                <rect x="0" y="0" fill="none" width="100%" height="100%"/>
              </svg>
              about us
            </a>
          </div>

        </div>

        <img  class="fixed-left zuz"  style="width: 8%;z-index: 999999; margin-top: -0.5%" src="../image/logoshay.png" alt="">

<!--      </div>-->

    </div>

    <div id="wrapper"  v-if="screenSize<600" >

      <div id="" class="full-width fixed-top head" ></div>

      <div id="inner" :style=" `margin-top: -10%;  font-family: Arial;font-size: ${screenSize/50}px; margin-right:${screenSize/63}% `" class="row" >

        <div class="containerT"style=" margin-left: 2%;  z-index: 1;  ">

          <a @click="icon= true" class="btnT btn-1T" >
            <svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%"/>
            </svg>
            Join Us
          </a>
        </div>
        <div class="containerT"style="margin-left: 2%; z-index: 1;">

          <a @click="contact= true" class="btnT btn-1T">
            <svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%"/>
            </svg>
            Contact Us
          </a>
        </div>
        <div class="containerT"style="margin-left: 2%; z-index: 1;">

          <a href="#services" class="btnT btn-1T">
            <svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%"/>
            </svg>
            services
          </a>
        </div>
        <div class="containerT"style="margin-left: 10%; z-index: 1; ">

          <a href="#about" class="btnT btn-1T">
            <svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%"/>
            </svg>
            about us
          </a>
        </div>


        <img  class="fixed-left zuz"  style="width: 18%; margin-top: 0%" src="../image/logoshay.png" alt="">

      </div>

    </div>

    <br >

    <div v-if="screenSize <1400"  style="margin-top: -1.5%">
    <br >
    </div>
    <div class="" style="background-color: white" >



<!--      "https://firebasestorage.googleapis.com/v0/b/tonda-datind.appspot.com/o/dGuPtWkKDYSTQTf380vTqBf2QHr2%2FVector_2646.jpg?alt=media&token=a7ec51e6-80b2-4095-b1de-233475ba3aea"-->

      <q-card flat >
        <div >
          <q-img
              :src=photo
                 :style="screenSize === false?  `width: ${screenSize}px` : `width: ${screenSize}px`"  >
            <br>

            <h2 class="title2 " :style="screenSize === false? `font-size:${screenSize/30}px ` : `font-size:${screenSize/30}px`" >Trust our expertise</h2>


                      <div class="column items-end title3" style="background-color:rgba(0,0,0, 0) "  >
                        <div v-if="screenSize >600" class="col" :style=" `font-size:${screenSize/75}px ;background-color: rgba(0,0,0, 0)`">
            <p>Boost your results with our experts team in affiliate marketing. </p>
            <p>Through hard work and perseverance, we worked our way up to the top.</p>
            <p>Join now the team that will have for priority : your performance and success</p>

            <br>
            <br>
            <br>
            <br>
            <div style="height: 100px" @click="icon =true" >
              <Addbtn :propsi="true" class="btn-a"   />


            </div>
            <br>
            <br>
                          <br>
                          <br>
            <br>
            <br>
            <br>
            <div >
              <p class="ccc" style="font-size: 20px;   font-style: italic;">  "shoot for the moon. Even if you miss, you'll land among the stars"</p>
              <p style="font-size: 17px; margin-left: 20%">Norman Vincent Peale</p>
            </div>

                        </div>
                        <div v-if="screenSize<600" class="col" :style=" `font-size:${screenSize/40}px ;background-color: rgba(0,0,0, 0); margin-top:-7%; margin-left:5%`">
                          <p>Boost your results with our experts team in affiliate marketing.
                            <br> Through hard work and perseverance, we worked our way up to the top.
                            <br>  Join now the team that will have for priority : your performance and success</p>

                          <br>
                          <br>
                          <br>
                          <div  @click="icon =true" >
                            <Addbtn :propsi="false" class="btn-a"   />


                          </div>

                          <div style="margin-top: -50%" >
                            <p class="ccc" style="font-size: 14px;   font-style: italic;">  "shoot for the moon. Even if you miss, you'll land among the stars"</p>
                            <p style="font-size: 17px; margin-left: 20%">Norman Vincent Peale</p>
                          </div>

                        </div>
                      </div>
          </q-img>
        </div>
      </q-card>





      <q-dialog v-model="icon" >
        <q-card class="constrain text-center" flat style="width: 200%">

          <q-tabs v-model="tab" class="text-primary" style="background-color: #59476f;">
            <q-tab label="apply as publisher" name="login"  :class="tab== 'login'? 'bg-positive  ' : 'bg-positive text-grey-2'" />
            <q-tab label="apply as advertiser" name="register"  :class="tab== 'login'? 'bg-positive  text-grey-2' : 'bg-positive '"/>
          </q-tabs>

          <q-separator/>

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="login">

              <q-input outlined v-model="join.name" label="What's Your Brand Name" class="q-ma-sm"  />
              <q-input outlined v-model="join.email" label="And Your Email" class="q-ma-sm"/>
              <q-input outlined v-model="join.number" label="Enter Phone Number" class="q-ma-sm"/>
              <q-input       v-model="join.text"            filled          type="textarea"              />
              <q-toggle v-model="acceptP" label="I accept the license and terms"/>
              <br>
              <q-btn v-if="acceptP === true" @click="xxx(join, true)" v-close-popup >apply now</q-btn>
              <q-btn v-else >apply now</q-btn>
            </q-tab-panel>

            <q-tab-panel name="register" class="q-ma-sm">

              <q-input outlined v-model="join.name" label="What's Your Name" class="q-ma-sm"  />
              <q-input outlined v-model="join.email" label="And Your Email" class="q-ma-sm"/>
              <q-input outlined v-model="join.number" label="skype/ telegram" class="q-ma-sm"/>
              <q-input       v-model="join.text"            filled          type="textarea"              />
              <q-toggle v-model="acceptA" label="I accept the license and terms"/>
              <br>
              <q-btn v-if="acceptP === true" @click="xxx(join, false)" v-close-popup >apply now</q-btn>
              <q-btn v-else >apply now</q-btn>
            </q-tab-panel>
          </q-tab-panels>
          <br><br><br>
        </q-card>
      </q-dialog>

          <br>



      <q-card flat v-if="screenSize>600">
        <p id="about" style="text-align: center; font-size: 30px; padding: 10px 0px 0px 0px; font-family:Arial;"><b>About us</b></p>
        <p style="text-align: center; width: 80%; margin: auto; direction: ltr; font-family: Arial; font-size: 18px "  >
          AFF-EX is a network that specializes in Crypto currencies and Financial offers. Our team is composed by passionate marketing analytics and technician using their extensive knowledge, expertise and hard work for many years to lead us to the top in this industry. Affiliate team works closely with advertisers and publishers to help them maximize their needs and profit.We consistently deliver high volumes of top performing traffic to more than 150 brokers, supporting 25+ countries and languages. We are dedicated to the success of each of our partner and make commitment for daily collaboration, hard work, 24/7 supports, transparency and results.
        </p>
        <br>
      </q-card>
      <q-card flat v-if="screenSize<600" >
        <p id="about" style="text-align: center; font-size: 16px; padding: 10px 0px 0px 0px; font-family:Arial;margin-top: -5% "><b>About us</b></p>
        <p class="full-width" style="text-align: center;margin: auto; width: 80%;  direction: ltr; font-family: Arial; font-size: 10px; margin-top: -3% "  >
          AFF-EX is a network that specializes in Crypto currencies and Financial offers. Our team is composed by passionate marketing analytics and technician using their extensive knowledge, expertise and hard work for many years to lead us to the top in this industry. Affiliate team works closely with advertisers and publishers to help them maximize their needs and profit.We consistently deliver high volumes of top performing traffic to more than 150 brokers, supporting 25+ countries and languages. We are dedicated to the success of each of our partner and make commitment for daily collaboration, hard work, 24/7 supports, transparency and results.
        </p>

      </q-card>

      <br>

      <div v-if="screenSize<600"  class="imageJP " style=" z-index: -1;  height: 300px" >
        <q-img src=
                   "https://firebasestorage.googleapis.com/v0/b/tonda-datind.appspot.com/o/dGuPtWkKDYSTQTf380vTqBf2QHr2%2F%D7%A1%D7%92%D7%95%D7%9C.jfif?alt=media&token=83879356-c8de-40ec-a1c3-5cfcffa6dea7"
               :style="`width: ${screenSize}px;height: 400px ` "  >
      <AddProfile  id="services" style="z-index: 3 ;position: absolute; margin-top: -10% ;margin-right: -1% " />
        </q-img>
    </div>
      <q-card flat>
        <div v-if="screenSize >600" style="   height: 400px">
          <q-img   src=
                     "https://firebasestorage.googleapis.com/v0/b/tonda-datind.appspot.com/o/dGuPtWkKDYSTQTf380vTqBf2QHr2%2F%D7%A1%D7%92%D7%95%D7%9C.jfif?alt=media&token=83879356-c8de-40ec-a1c3-5cfcffa6dea7"
                 :style="`width: ${screenSize}px; height: ${screenSize/2}px`"  >
            <div  style="background-color: rgba(0,0,0, 0)" >
              <AddProfile id="services" :prop="true" style="z-index: 1 ; margin-top: -8% "/>

            </div>
<!--            <div id="services" v-if="screenSize<600"  class="imageJP " style=" z-index: -1;  height: 300px" >-->

<!--              <AddProfile  style="z-index: 1 ;position: absolute; margin-top: -10%  " />-->

<!--            </div>-->
          </q-img>
        </div>

      </q-card>



      <br>

      <br>      <br>      <br>      <br>
      <br>      <br>      <br>      <br>
      <div v-if="screenSize<600">
      <br>      <br>      <br>      <br>
      </div>
      <div v-if="screenSize >1400">
      <br>      <br>    <br>    <br>     <br>
      <br>      <br>    <br>    <br>     <br>
      <br>      <br>

      </div>
      <q-card style="text-align: center; margin-top: -2%; color: #59476f; font-weight: bold" flat v-if="screenSize>600">
        <div >
          <q-img
              src=
                  "https://firebasestorage.googleapis.com/v0/b/tonda-datind.appspot.com/o/42QsdIGXD9YZdx3d2hUWDgkr9q13%2F%D7%9B%D7%A1%D7%A3.jfif?alt=media&token=dd146ded-2e50-404f-a8f2-3238bb94b932"
              :style="screenSize === false?  `width: ${screenSize/2.3}px ; float: left; border-radius: 20%` : `width: ${screenSize/2.3}px; float: left; border-radius: 20%`"  >
            <br>
          </q-img>
          <br style="">
          <br>
          <br>
          <div>
          <p :style=" `font-family: Arial; font-size: ${screenSize/42}px`  ">    Our priority : Monetize the traffic</p>
          <p :style=" `font-family: Arial; font-size: ${screenSize/75}px; width: 700px; margin-right: 4%; ` " >    Affiliates’ performance is our top priority. Our team using all their extensive knowledge on technological innovations and close connections within the key industry actors to offer highest possible returns for your traffic. Our team is present on every step and behind every lead</p>
          </div>
        </div>
        <div :style="screenSize== false? `` : `margin-top:${screenSize/90}%`">
        <q-img
            src=
                "https://firebasestorage.googleapis.com/v0/b/tonda-datind.appspot.com/o/42QsdIGXD9YZdx3d2hUWDgkr9q13%2F%D7%90%D7%99%D7%A9.jfif?alt=media&token=2b084a07-1ff5-40b2-b3e9-eca4bfb70437"
            :style="screenSize === false?  `width: ${screenSize/2.3}px ; float: right; border-radius: 20%` : `width: ${screenSize/2.3}px; float: right; border-radius: 20%`"  >
          <br>
        </q-img>
        <br>  <br>  <br>
        <br>  <br>  <br>

        <p :style="`font-family: Arial; font-size: ${screenSize/42}px`  ">    Our engagement : Transparency and Results</p>
        <p  :style="`direction: ltr ;font-family: Arial; font-size: ${screenSize/75}px; width: 700px; margin-right: ${screenSize/30}%` ">    Affiliate team cherish strong values and maintain full transparency with all of our affiliates. This is one of our main engagement when we start the partnership and we're all the time focusing on getting the highest results and do so with amiability, honesty, trust and integrity. Each of our partner is our reputation and we are working hard on it.</p>
        </div>
        <div :style="screenSize== false? `` : `margin-top:${screenSize/90}%`">
        <q-img
            src="https://firebasestorage.googleapis.com/v0/b/tonda-datind.appspot.com/o/42QsdIGXD9YZdx3d2hUWDgkr9q13%2F%D7%99%D7%93%D7%99%D7%99%D7%9D.jfif?alt=media&token=87adff81-d75e-42b4-83ee-bff259f2a41b"
            :style="screenSize === false?  `width: ${screenSize/2.3}px ; float: left; border-radius: 20%` : `width: ${screenSize/2.3}px; float: left; border-radius: 20%`"  >
          <br>
        </q-img>
        <br>  <br>  <br>
        <br >  <br>  <br>
        <p :style="`font-family: Arial; font-size: ${screenSize/42}px`  " > Our Services : Dedicated to each of our partner</p>
        <p :style="`direction: ltr; font-family: Arial; font-size: ${screenSize/75}px; width: 700px; margin-right: ${screenSize/600}%` "  > Our team of affiliate managers get to know each of their affiliates on a personal level. That way we know how to pair their type of platform and traffic to the right advertisers and solving complex problems in real-time and sharing performance-based insights. Affiliates and brands knows that we're tending for a long-term lucrative business partnerships and they deserve the best treatment.</p>
</div>

      </q-card>
      <q-card style="text-align: center; margin-top: -2%; color: #59476f; font-weight: bold" flat v-if="screenSize<600">
        <div >
          <q-img
              src=
                  "https://firebasestorage.googleapis.com/v0/b/tonda-datind.appspot.com/o/42QsdIGXD9YZdx3d2hUWDgkr9q13%2F%D7%9B%D7%A1%D7%A3.jfif?alt=media&token=dd146ded-2e50-404f-a8f2-3238bb94b932"
              :style="screenSize === false?  `width: ${screenSize/2.3}px ; float: left; border-radius: 20%` : `width: ${screenSize/2.3}px; float: left; border-radius: 20%`"  >
            <br>
          </q-img>

          <div>
            <p :style="`font-family: Arial; font-size: ${screenSize/35}px`  ">    Our priority : Monetize the traffic</p>
            <p :style="`font-family: Arial; font-size: ${screenSize/50}px; width: 175px; margin-right: 4%; text-align: left; margin-top: -3%` " >    Affiliates’ performance is our top priority. Our team using all their extensive knowledge on technological innovations and close connections within the key industry actors to offer highest possible returns for your traffic. Our team is present on every step and behind every lead</p>
          </div>
        </div>
        <br>
        <div :style=" `margin-top:${screenSize/90}%`">
          <q-img
              src=
                  "https://firebasestorage.googleapis.com/v0/b/tonda-datind.appspot.com/o/42QsdIGXD9YZdx3d2hUWDgkr9q13%2F%D7%90%D7%99%D7%A9.jfif?alt=media&token=2b084a07-1ff5-40b2-b3e9-eca4bfb70437"
              :style=" `width: ${screenSize/2.3}px; float: right; border-radius: 20%`"  >
            <br>
          </q-img>


          <p :style=" `font-family: Arial; font-size: ${screenSize/35}px `  ">    Our engagement : Transparency and Results</p>
          <p v-if="screenSize>600" :style=" `direction: ltr ;font-family: Arial; font-size: ${screenSize/50}px; margin-top: -2%`  ">     AFF-EX team cherish strong values and maintain full transparency with all of our affiliates.<br>This is one of our main engagement when we start the partnership and we're all the time focusing on
            <br>getting the highest results and do so with amiability,
            <br>honesty, trust and integrity. Each of our partner is our reputation and we are working hard on it.</p>
          <p v-if="screenSize<600" :style=" `direction: ltr ;font-family: Arial; font-size: ${screenSize/52}px; margin-top: -2%; text-align: left; margin-left:2%`  ">     AFF-EX team cherish strong values and maintain full transparency with all of our affiliates.<br>This is one of our main engagement when we start the partnership and we're all the time focusing on
            <br>getting the highest results and do so with amiability,
            <br>honesty, trust and integrity. Each of our partner is our reputation and we are working hard on it.</p>


        </div>
        <br>
        <div :style=" `margin-top:${screenSize/90}%`">
          <q-img
              src="https://firebasestorage.googleapis.com/v0/b/tonda-datind.appspot.com/o/42QsdIGXD9YZdx3d2hUWDgkr9q13%2F%D7%99%D7%93%D7%99%D7%99%D7%9D.jfif?alt=media&token=87adff81-d75e-42b4-83ee-bff259f2a41b"
              :style=" `width: ${screenSize/2.3}px; float: left; border-radius: 20%; `"  >
            <br>
          </q-img>

          <p :style="`font-family: Arial; font-size: ${screenSize/35}px`  " > Our Services : Dedicated to each of our partner</p>
          <p v-if="screenSize>600" :style="`direction: ltr ;font-family: Arial; font-size: ${screenSize/50}px; width: 700px; margin-right: ${screenSize/600}%; margin-top:-5%` "  > Our team of affiliate managers get to know each of their affiliates on a personal level. That way we know how to pair their type of platform and traffic to the right advertisers and solving complex problems in real-time and sharing performance-based insights. Affiliates and brands knows that we're tending for a long-term lucrative business partnerships and they deserve the best treatment.</p>
          <p v-if="screenSize<600" :style="`direction: ltr ;font-family: Arial; font-size: ${screenSize/50}px; width: 170px; margin-right: ${screenSize/70}%; margin-top:-3%; text-align: left` "  > Our team of affiliate managers get to know each of their affiliates on a personal level. That way we know how to pair their type of platform and traffic to the right advertisers and solving complex problems in real-time and sharing performance-based insights. Affiliates and brands knows that we're tending for a long-term lucrative business partnerships and they deserve the best treatment.</p>

        </div>

      </q-card>

      <br>  <br>
      <div v-if="screenSize>600">
        <br>  <br>  <br>  <br>  <br>  <br>
      </div>
      <br>



      <div v-if="screenSize<600" style="background-color: black; height: 100px; color: white; justify-content: center;   ">
<div style="display:flex;">
        <div class="containerT"style="margin-left: 2%; margin-right: 5%; z-index: 1;  ">

          <a  class="btnTB btn-1T" @click="cooki= true" style="font-size: 10px" >
            <svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%"/>
            </svg>

            Cookie policy
          </a>
        </div>
        <div class="containerT" style="margin-right: 5%; z-index: 1;">

          <a @click=" terms= true" class="btnTB btn-1T" style="font-size: 10px">
            <svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%"/>
            </svg>
            Terms and Conditions
          </a>
        </div>
        <div class="containerT"style="margin-right: 8%; z-index: 1;">

          <a @click="privacy = true" class="btnTB btn-1T" style="font-size: 10px">
            <svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%"/>
            </svg>
            Privacy Policy
          </a>
        </div>
        </div>
        <p   class="" style=" word-spacing: 6px; margin-right: 7%; margin-top: -3%  ">Copyrigth  ©  2021  AFF-EX  All  rights  reserved  </p>
        <div style="display: flex; justify-content: center;">
        <div class="containerT"style="margin-left: 10%; z-index: 1; ">

          <a @click="icon= true" class="btnTB btn-1T">
            <svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%"/>
            </svg>
            Join Us
          </a>
        </div>
        <div class="containerT"style="margin-right: 10%; z-index: 1;">

          <a @click="contact= true" class="btnTB btn-1T">
            <svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%"/>
            </svg>
            Contact Us
          </a>
        </div>
        </div>
      </div>

      <div v-if="screenSize>600" class="row" style=" ;background-color: black; height: 100px; color: white; justify-content: center;   ">


        <div class="containerT" :style="`margin-left: 2%; margin-right: 5%; z-index: 1; font-size: ${screenSize/130}px  `">

          <a  class="btnTB btn-1T" @click="terms= true" >
            <svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%"/>
            </svg>
            Terms and Conditions
          </a>
        </div>
        <div class="containerT" :style="`margin-left: 2%; z-index: 1; font-size: ${screenSize/130}px`">

          <a @click="cooki= true" class="btnTB btn-1T">
            <svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%"/>
            </svg>
            Cookie policy
          </a>
        </div>
        <div class="containerT" :style="`margin-left: 2%; z-index: 1; font-size: ${screenSize/130}px`">

          <a @click="privacy = true" class="btnTB btn-1T">
            <svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%"/>
            </svg>
            Privacy Policy
          </a>
        </div>
        <p class="" style="  margin: auto; margin-right: 5% ">Copyrigth © 2021 AFF-EX All rights reserved  </p>
        <div class="containerT"style="margin-left: 2%; z-index: 1; ">

          <a @click="icon= true" class="btnT btn-1T">
            <svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%"/>
            </svg>
            Join Us
          </a>
        </div>
        <div class="containerT"style="margin-left: 2%; z-index: 1;">

          <a @click="contact= true" class="btnT btn-1T">
            <svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%"/>
            </svg>
            Contact Us
          </a>
        </div>

      </div>
      <!--  <div style=" z-index: 1;background-color: black; color:#C10015; margin-top: 5%; height: 700px">-->
      <!--  </div>-->
      <q-dialog v-model="terms" >
        <q-card class="full-height" style="width: 300%">
          <q-card-section class="row items-center q-pb-none">
            <div class="text-h6" style="margin-left: 30%"> Terms and Conditions</div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>

          <q-card-section style="text-align: center">
            <p>Thank you for visiting our website (the “Website”) on which you found the link to these Terms and Conditions (the “Website”), and to our Privacy Policy (the “Privacy Policy”). The Website is our property (referred to collectively as “we”, “our” or “us”) and you may contact us at any time via email at: xxxxxxxxxxxxx.com.</p>
            <p>You agree to be bound by the Terms herein (“Terms of Use”), in their entirety, when you access the Website or order a product and/or service through the Website (“Vendor Services”, and together with the Subscription Services, as defined below, the “Services”), Privacy Policy (“Privacy Policy”), as well as any other operating rules, policies, price schedules and other supplemental terms and conditions or documents that may be published from time to time (collectively, the “Agreement”).</p>
            <p>Please review the complete terms of the Agreement carefully. If you do not agree to the Agreement in its entirety, you are not authorized to use the Services and/or Website in any manner or form. WE SPECIFICALLY DENY ACCESS TO THE WEBSITE AND/OR OUR SERVICES BY ANY INDIVIDUAL THAT IS COVERED BY THE CHILDREN’S ONLINE PRIVACY PROTECTION ACT OF 1998, AS AMENDED (“COPPA”), AND RESERVE THE RIGHT TO DENY ACCESS TO THE SERVICES AND/OR WEBSITE TO ANY INDIVIDUAL, IN ITS SOLE AND EXCLUSIVE DISCRETION.</p>
            <p style="text-transform: uppercase;"><b>SCOPE AND MODIFICATION OF THE AGREEMENT</b></p>
            <p>You hereby agree to the terms and conditions outlined in the Agreement with respect to your use of our Website. The Agreement constitutes the entire and only agreement between you and us with respect to your use of the Website and supersedes all prior or contemporaneous agreements, representations, warranties and/or understandings with respect to the Website.</p>
            <p>Please note that these Terms may change from time to time. If we change these Terms, we will advise you of the choices you may have as a result of such changes. We will also post a notice that these Terms have changed. Your continued use of the Website and/or our Services, imply that you fully agree to comply with all of the terms and conditions contained within the Agreement effective at that time. It is your responsibility to frequently check this page for updates and/or changes.</p>
            <p style="text-transform: uppercase;"> <b>REQUIREMENTS </b></p>
            <p>The Website and our Services are only available to individuals who can enter into legally binding contracts under applicable law. The Website and Services are not intended for use by individuals under the age of eighteen (18). If you are under the age of eighteen (18), you do not have the permission to use and/or access the Website and/or Services.</p>
            <p style="text-transform: uppercase;"> <b>DESCRIPTION OF THE SERVICES </b></p>
            <P>Subscription Services</P>
            <P>Subject to the terms and conditions of the Agreement, by registering on the Website and receiving approval from us, you can obtain, or attempt to obtain, for a fee or for no fee, the Subscription Services. The Subscription Services will provide you with e-mail content, text and other materials (“Subscription Content”) relevant to online marketing provided by us and third party partners (“Third Party Providers”). This is NOT investment advice. If you would like to discontinue receipt of the Subscription Content, simply email us. By using the Subscription Content and/or any Subscription Services, You hereby understand and agree that we are not responsible or liable in any manner whatsoever for the accuracy, completeness or appropriateness of the Subscription Content, the Subscription Services or your inability to use the Subscription Services and/or Subscription Content. You hereby understand, agree and confirm that we shall not be liable to you, any end-users or any third party, for any claim in connection with any of the Subscription Services.</P>
            <P>Vendor and Third Party Services</P>
            <P>By completing the applicable purchase order forms you can obtain, or attempt to obtain, certain products and/or services from the Website. The products and/or services featured on the Website may contain descriptions that are provided directly by the Third Party Provider manufacturers or distributors of such items. We do not represent or warrant that the descriptions of such items are accurate or complete. You hereby understand and agree that we are not responsible or liable in any manner whatsoever for your inability to obtain products and/or services from the Website or for any dispute with the product’s seller, distributor and end-user consumers. You understand and agree that we shall not be liable to you or any third party for any claim in connection with any of the products and/or services offered on the Website.</P>
            <P>General</P>
            <P>The information that you must supply in connection with registering for the Services may include, without limitation, some or all of the following: (a) your full name; (b) company name; (c) e-mail address; (d) mailing address (and billing address if different); (e) home telephone number; (f) work telephone number; (g) fax number; (h) credit card information; and/or (i) any other information requested on the applicable registration form (“Service Registration Data”). You agree to provide true, accurate, current and complete Service Registration Data. We have the right to reject any Service Registration Data where it is determined, in our sole and exclusive discretion, that: (i) you are in breach of any portion of the Agreement; and/or (ii) the Service Registration Data that you provided is incomplete, fraudulent, a duplicate or otherwise unacceptable. We may change the Registration Data criteria at any time, in our sole discretion.</P>
            <P>Unless explicitly stated otherwise, any future offer(s) made available to you on the Website that enhance(s) the current features of the Website shall be subject to the Agreement. You understand and agree that we are not responsible or liable in any manner whatsoever for your inability to use and/or qualify for the Services. You understand and agree that we shall not be liable to you or any third party for any modification, suspension or discontinuation of any Services or other product, service or promotion offered by us and/or any of our Third Party Providers. You understand and agree that refusal to use the Website is your sole right and remedy with respect to any dispute that you may have with us.</P>
            <P><b>LICENSE GRANT</b></P>
            <p>As a user of the Website, you are granted a non-exclusive, non-transferable, revocable and limited license to access and use the Website, Content and associated material in accordance with the Agreement. We may terminate this license at any time for any reason. You may use the Website and Content on one computer for your own personal, non-commercial use. No part of the Website, Content, and/or Services may be reproduced in any form or incorporated into any information retrieval system, electronic or mechanical. You may not use, copy, emulate, clone, rent, lease, sell, modify, decompile, disassemble, reverse engineer or transfer the Website, Content, and/or Services or any portion thereof. We reserve any rights not explicitly granted in the Agreement. You may not use any device, software or routine to interfere or attempt to interfere with the proper working of the Website. You may not take any action that imposes an unreasonable or disproportionately large load on our infrastructure. Your right to use the Website, Content, and/or Services is not transferable.</p>
            <p><b>PROPRIETARY RIGHTS</b></p>
            <p>The content, organization, graphics, design, compilation, magnetic translation, digital conversion, software, services and other matters related to the Website, Content, and Services are protected under applicable copyrights, trademarks and other proprietary (including, but not limited to, intellectual property) rights. The copying, redistribution, publication or sale by you of any part of the Website, Content, and/or Services is strictly prohibited. Systematic retrieval of material from the Website, Content, and/or Services by automated means or any other form of scraping or data extraction in order to create or compile, directly or indirectly, a collection, compilation, database or directory without written permission from we is prohibited. You do not acquire ownership rights to any content, document, software, services or other materials viewed at or through the Website, Content, and/or Services. The posting of information or material on the Website, or by and through the Services, by us does not constitute a waiver of any right in or to such information and/or materials. Our name and logo, and all associated graphics, icons and service names, are our trademarks. All other trademarks appearing on the Website or by and through the Services are the property of their respective owners. The use of any trademark without the applicable owner’s express written consent is strictly prohibited.</p>
            <p><b>CONFIDENTIAL INFORMATION</b></p>
            <p>Confidential information means all confidential and proprietary information of a party, whether oral or in writing, which is designated or identified as confidential or that reasonably should be understood to be confidential given the nature of the information and surrounding circumstances, but shall not include information that is (1) generally known to the public without breach hereunder; (2) was known prior to disclosure hereunder without restriction on disclosure; (3) independently developed without breach hereunder; or (4) is rightfully received from a third party without any restriction on disclosure. The parties shall only use confidential information for the purposes of performing the obligations hereunder. We will not sell first party data without consent.</p>
            <p>The duty to protect Confidential Information shall expire one (1) year from the date of termination of the Agreement.</p>
            <p><b>HYPERLINKING TO THE WEBSITE, CO-BRANDING, “FRAMING” AND/OR REFERENCING THE WEBSITE PROHIBITED</b></p>
            <p>Unless expressly authorized by us, no one may hyperlink the Website, or portions thereof (including, but not limited to, logotypes, trademarks, branding or copyrighted material), to their website or web venue for any reason. Furthermore, “framing” the Website and/or referencing the Uniform Resource Locator (”URL”) of the Website in any commercial or non-commercial media without our prior, express, written permission is strictly prohibited. You specifically agree to cooperate with the Website to remove or cease, as applicable, any such content or activity. You hereby acknowledge that you shall be liable for any and all damages associated therewith.</p>
            <p><b>EDITING, DELETING AND MODIFICATION</b></p>
            <p>We reserve the right in our sole discretion, without prior notice, to edit and/or delete any documents, information or other content appearing on the Website.</p>
            <p><b>DISCLAIMER</b></p>
            <p>THE WEBSITE, SERVICES, CONTENT, ANY THIRD PARTY PRODUCTS THAT YOU MAY RECEIVE FROM ONE OF OUR THIRD PARTY PROVIDERS, AND/OR ANY OTHER PRODUCTS AND/OR SERVICES THAT YOU MAY APPLY FOR THROUGH THE WEBSITE ARE PROVIDED TO YOU ON AN “AS IS” AND “AS AVAILABLE” BASIS AND ALL WARRANTIES, EXPRESS AND IMPLIED, ARE DISCLAIMED TO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW (INCLUDING, BUT NOT LIMITED TO, THE DISCLAIMER OF ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT OF INTELLECTUAL PROPERTY AND/OR FITNESS FOR A PARTICULAR PURPOSE). IN PARTICULAR, BUT NOT AS A LIMITATION THEREOF, WE MAKE NO WARRANTY THAT: (A) THE WEBSITE, SERVICES, CONTENT, ANY THIRD PARTY PRODUCTS THAT YOU MAY RECEIVE FROM ONE OF OUR THIRD PARTY PROVIDERS, AND/OR ANY OTHER PRODUCTS AND/OR SERVICES THAT YOU MAY APPLY FOR THROUGH THE WEBSITE WILL MEET YOUR REQUIREMENTS; (B) THE WEBSITE, SERVICES, CONTENT, ANY THIRD PARTY PRODUCTS THAT YOU MAY RECEIVE FROM ONE OF OUR THIRD PARTY PROVIDERS, AND/OR ANY OTHER PRODUCTS AND/OR SERVICES THAT YOU MAY APPLY FOR THROUGH THE WEBSITE WILL BE UNINTERRUPTED, TIMELY, SECURE OR ERROR-FREE; (C) YOU WILL QUALIFY FOR THE SERVICES; OR (D) THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE WEBSITE, SERVICES, CONTENT, ANY THIRD PARTY PRODUCTS THAT YOU MAY RECEIVE FROM ONE OF OUR THIRD PARTY PROVIDERS, AND/OR ANY OTHER PRODUCTS AND/OR SERVICES THAT YOU MAY APPLY FOR THROUGH THE WEBSITE WILL BE ACCURATE OR RELIABLE. THE WEBSITE, SERVICES, CONTENT, ANY THIRD PARTY PRODUCTS THAT YOU MAY RECEIVE FROM ONE OF OUR THIRD PARTY PROVIDERS, AND/OR ANY OTHER PRODUCTS AND/OR SERVICES THAT YOU MAY APPLY FOR THROUGH THE WEBSITE MAY CONTAIN BUGS, ERRORS, PROBLEMS OR OTHER LIMITATIONS. WE WILL NOT BE LIABLE FOR THE AVAILABILITY OF THE UNDERLYING INTERNET CONNECTION ASSOCIATED WITH THE WEBSITE. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM WE, ANY OF ITS THIRD PARTY PROVIDERS OR OTHERWISE THROUGH OR FROM THE WEBSITE, SHALL CREATE ANY WARRANTY NOT EXPRESSLY STATED IN THE AGREEMENT.</p>
            <p><b>DISCLAIMER FOR HARM CAUSED BY DOWNLOADS</b></p>
            <p>Visitors download information from the Website at their own risk. We make no warranty that such downloads are free of corrupting computer codes including, but not limited to, viruses and worms.</p>
            <p><b>LIMITATION OF LIABILITY</b></p>
            <p>YOU EXPRESSLY UNDERSTAND AND AGREE THAT WE SHALL NOT BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL AND/OR EXEMPLARY DAMAGES INCLUDING, BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA OR OTHER INTANGIBLE LOSSES (EVEN IF WE HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES), TO THE FULLEST EXTENT PERMISSIBLE BY LAW FOR: (A) THE USE OR THE INABILITY TO USE THE WEBSITE, SERVICES, CONTENT, ANY THIRD PARTY PRODUCTS THAT YOU MAY RECEIVE FROM ONE OF OUR THIRD PARTY PROVIDERS, AND/OR ANY OTHER PRODUCTS AND/OR SERVICES THAT YOU MAY APPLY FOR THROUGH THE WEBSITE; (B) THE COST OF PROCUREMENT OF SUBSTITUTE GOODS AND SERVICES RESULTING FROM ANY GOODS, DATA, INFORMATION AND/OR SERVICES PURCHASED OR OBTAINED FROM, OR TRANSACTIONS ENTERED INTO THROUGH, THE WEBSITE; (C) THE FAILURE TO QUALIFY FOR THE, SERVICES OR THIRD PARTY PRODUCTS FROM ANY OF OUR THIRD PARTY PROVIDERS, OR ANY SUBSEQUENT DENIAL OF THIRD PARTY PRODUCTS FROM SAME; (D) THE UNAUTHORIZED ACCESS TO, OR ALTERATION OF, YOUR REGISTRATION DATA; AND (E) ANY OTHER MATTER RELATING TO THE INABILITY TO USE THE WEBSITE, SERVICES, CONTENT, ANY THIRD PARTY PRODUCTS THAT YOU MAY RECEIVE FROM ONE OF OUR THIRD PARTY PROVIDERS, AND/OR ANY OTHER PRODUCTS AND/OR SERVICES THAT YOU MAY APPLY FOR THROUGH THE WEBSITE. THIS LIMITATION APPLIES TO ALL CAUSES OF ACTION, IN THE AGGREGATE INCLUDING, BUT NOT LIMITED TO, BREACH OF CONTRACT, BREACH OF WARRANTY, NEGLIGENCE, STRICT LIABILITY, MISREPRESENTATIONS AND ANY AND ALL OTHER TORTS. YOU HEREBY RELEASE US AND ALL OF OUR THIRD PARTY PROVIDERS FROM ANY AND ALL OBLIGATIONS, LIABILITIES AND CLAIMS IN EXCESS OF THE LIMITATION STATED HEREIN. IF APPLICABLE LAW DOES NOT PERMIT SUCH LIMITATION, OUR MAXIMUM LIABILITY TO YOU UNDER ANY AND ALL CIRCUMSTANCES WILL BE FIVE HUNDRED DOLLARS ($500.00). THE NEGATION OF DAMAGES SET FORTH ABOVE IS A FUNDAMENTAL ELEMENT OF THE BASIS OF THE BARGAIN BETWEEN YOU AND US. THE INABILITY TO USE THE WEBSITE, SERVICES, CONTENT, ANY THIRD PARTY PRODUCTS THAT YOU MAY RECEIVE FROM ONE OF OUR THIRD PARTY PROVIDERS, AND/OR ANY OTHER PRODUCTS AND/OR SERVICES THAT YOU MAY APPLY FOR THROUGH THE WEBSITE WOULD NOT BE PROVIDED TO YOU WITHOUT SUCH LIMITATIONS.</p>
            <p><b>INDEMNIFICATION</b></p>
            <p>You agree to indemnify and hold us, our parents, subsidiaries and affiliates, and each of their respective members, officers, directors, employees, agents, co-branders and/or other partners, harmless from and against any and all claims, expenses (including reasonable attorneys’ fees), damages, suits, costs, demands and/or judgments whatsoever, made by any third party due to or arising out of: (a) your use of the Website, Services, or Content; (b) your breach of the Agreement; and/or (c) your violation of any rights of another individual and/or entity. The provisions of this paragraph are for our and the benefit of, each of our parents, subsidiaries and/or affiliates, and each of their respective officers, directors, members, employees, agents, shareholders, licensors, suppliers and/or attorneys. Each of these individuals and entities shall have the right to assert and enforce these provisions directly against you on its own behalf.</p>
            <p><b>THIRD PARTY WEBSITES</b></p>
            <p>The Website may provide links to and/or refer you to other Internet websites and/or resources including, but not limited to, those owned and operated by Third Party Providers. Because we have no control over such third party websites and/or resources, you hereby acknowledge and agree that we are not responsible for the availability of such third party websites and/or resources. Furthermore, we do not endorse, and are not responsible or liable for, any terms and conditions, privacy policies, content, advertising, services, products and/or other materials at or available from such third party websites or resources, or for any damages and/or losses arising therefrom.</p>
            <p><b>PRIVACY POLICY/VISITOR INFORMATION</b></p>
            <p>Use of the Website, and all comments, feedback, information, Registration Data and/or materials that you submit through or in association with the Website, is subject to our Privacy Policy. We reserve the right to use all information regarding your use of the Website, and any and all other personally identifiable information provided by you, in accordance with the terms of our Privacy Policy and applicable data protection laws.</p>
            <p><b>LEGAL WARNING</b></p>
            <p>Any attempt by any individual, whether or not our customer, to damage, destroy, tamper with, vandalize and/or otherwise interfere with the operation of the Website, is a violation of criminal and civil law and we will diligently pursue any and all remedies in this regard against any offending individual or entity to the fullest extent permissible by law and in equity.</p>

            <p><b>CHOICE OF LAW AND VENUE</b></p>
            <p>This Agreement shall be governed by and construed in all respects in accordance with the laws of the UK. The Parties will attempt in good faith to negotiate a settlement to any claim or dispute between them arising out of or in connection with this Agreement. If the Parties fail to agree on the terms of settlement, the Parties will submit the dispute exclusively to confidential arbitration proceedings by a sole arbitrator under the ICC rules in London whose decision shall be final and binding. Neither party shall be allowed to file a claim with its local court of domicile or any other forum.</p>
            <p>Data Protection Addendum</p>
            <p>This Data Protection Addendum (“Addendum”) forms part of our Terms and Conditions (“Principal Agreement”).</p>
            <p>The terms used in this Addendum shall have the meanings set forth in this Addendum. Capitalized terms not otherwise defined herein shall have the meaning given to them in the Agreement. Except as modified below, the terms of the Agreement shall remain in full force and effect. In consideration of the mutual obligations set out herein, the parties hereby agree that the terms and conditions set out below shall be added as an Addendum to the Agreement. Except where the context requires otherwise, references in this Addendum to the Agreement are to the Agreement as amended by, and including, this Addendum.</p>
            <p style="text-align: left">1. Definitions <br>
              1.1 In this Addendum, the following terms shall have the meanings set out below and cognate terms shall be construed accordingly:
              <br>
              <br>
              1.1.1 “Applicable Laws” means (a) European Union or Member State laws with respect to any Personal Data in respect of which the data subject is subject to EU Data Protection Laws; and (b) any other applicable law with respect to any Personal Data which is subject to any other Data Protection Laws;
              <br>
              <br>
              1.1.2 “Controller” means the entity that determines the purposes and means of the processing of Personal Data.
              <br>
              <br>
              1.1.3 “Data Protection Laws” means EU Data Protection Laws and, to the extent applicable, the data protection or privacy laws of any other country;
              <br>
              <br>
              1.1.4 “EU Data Protection Laws” means EU Directive 95/46/EC, as transposed into domestic legislation of each Member State and as amended, replaced or superseded from time to time, including by the GDPR and laws implementing or supplementing the GDPR;
              <br>
              <br>
              1.1.5 “GDPR” means EU General Data Protection Regulation 2016/679;
              <br>
              <br>
              1.2 The terms, “Data Subject”, “Member State”, “Personal Data”, “Personal Data Breach”, and “Processing” shall have the same meaning as in the GDPR, and their cognate terms shall be construed accordingly.
              <br>
              <br>
                2. Collection and Processing of Personal Data
              <br>
              <br>
              2.1 we shall:
              <br>
              <br>
              2.1.1 comply with all applicable Data Protection Laws in the Processing of Personal Data;
              <br>
              <br>
              2.1.2 represents and warrants that it:
              <br>
              <br>
              2.1.2.1 has all necessary permissions and consents from the relevant data subjects on behalf of we in accordance with the Applicable Laws to lawfully allow we to collect, process and share Personal Data via the Services for the purposes contemplated by the Agreement including this Addendum.
              <br>
              <br>
              2.1.2.2 shall at all times make available a mechanism for obtaining such consent from data subjects and a mechanism for data subjects to withdraw such consent, all in accordance with the Applicable Laws.
              <br>
              <br>
              2.1.2.3 shall maintain a record and notify of all consent and withdrawal of consent of data subjects in accordance with the Applicable Laws.
              <br>
              <br>
              2.1.2.4 shall, post, maintain and abide by a publicly available privacy policy.
              <br>
              <br>
              2.1.2.5 acknowledges not to provide the Services to children under the age of eighteen (18).
              <br>
              <br>
                3. Security
              <br>
              <br>
              3.1 Taking into account the state of the art, the costs of implementation and the nature, scope, context and purposes of Processing as well as the risk of varying likelihood and severity for the rights and freedoms of natural persons, we shall implement appropriate technical and organizational measures to ensure a level of security appropriate to that risk, including, as appropriate, the measures referred to in Article 32(1) of the GDPR.
              <br>
              <br>
              3.2 In assessing the appropriate level of security, we shall take account in particular of the risks that are presented by Processing, in particular from a Personal Data Breach.
              <br>
              <br>
                4. Subprocessing
              <br>
              <br>
              4.1 Each Website User authorises us to appoint (and permit each Subprocessor appointed in accordance with this section to appoint) Subprocessors in accordance with this section and any restrictions in the Agreement.
              <br>
              <br>
              4.2 With respect to each Subprocessor appointed by us, we shall ensure that the arrangement between us and the Subprocessor, is governed by a written contract including terms which offer at least the same level of protection for Personal Data as those set out in this Addendum and meet the requirements of article 28(3) of the GDPR;
              <br>
              <br>
                5. Data Subject RightsTaking into account the nature of the Processing, we shall assist wherever possible, to respond to requests to exercise Data Subject rights under the Data Protection Laws.
              <br>
              <br>
                6. Personal Data Breach
              <br>
              <br>
              6.1 We shall immediately inform the Data Subject without undue delay, upon becoming aware of a Personal Data Breach affecting the Data Subject’s Personal Data, to inform Data Subjects of the Personal Data Breach under the Data Protection Laws. We shall also assist in the investigation, mitigation and remediation of each such Personal Data Breach.
              <br>
              <br>
                7. General Terms
              <br>
              <br>
              7.1 The parties to this Addendum hereby submit to the choice of jurisdiction stipulated in the Agreement with respect to any disputes or claims howsoever arising under this Addendum, including disputes regarding its existence, validity or termination or the consequences of its nullity; and this Addendum and all non-contractual or other obligations arising out of or in connection with it are governed by the laws of the country or territory stipulated for this purpose in the Agreement.
              <br>
              <br>
              7.2 Should any provision of this Addendum be invalid or unenforceable, then the remainder of this Addendum shall remain valid and in force. The invalid or unenforceable provision shall be either (i) amended as necessary to ensure its validity and enforceability, while preserving the parties’ intentions as closely as possible or, if this is not possible, (ii) construed in a manner as if the invalid or unenforceable part had never been contained therein.
              <br>
              <br>
              IN WITNESS WHEREOF, this Addendum is entered into and becomes a binding part of the Agreement with effect from the date first set out above.

            </p>



          </q-card-section>
        </q-card>
      </q-dialog>
      <q-dialog v-model="cooki" >
        <q-card class="full-height" style="width: 300%">
          <q-card-section class="row items-center q-pb-none">
            <div class="text-h6" style="margin-left: 35%"> Cookie Policy</div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>

          <q-card-section style="text-align: center">
            <p>Thank you for visiting our Website (the “Website”) on which you found the link to this Cookie Policy (the “Cookie Policy”), and to our Privacy Policy (the “Privacy Policy”). The Website is our property (referred to collectively as “we”, “our” or “us”) and you may contact us at any time via email at: info@algo-affiliates.com This Cookie Policy page explains how we, along with our subsidiaries, (hereinafter referred to as: the “Company” ‘we’, ‘us’, ‘our’) use cookies, what kind of data we collect, and why we collect such data.

              We take great care of your privacy and allow browsing most of our web pages without asking you to share any personal information. However, we still need such information in order to personalize your experience and provide you with the best user experience.

              Our Website and any other branded web pages, websites, or third-party platforms owned or managed by us (hereinafter referred to as: ‘Our Websites’), all function according to this Cookie Policy

              By navigating Our Websites, you accept the use of the cookies we collect. We keep the right to edit this Cookie Policy in part or in whole at any time.</p>
            <p><b>What are Cookies?</b></p>
            <p>Cookies are small text files that are placed on your computer or mobile device when you access websites on the internet. Cookies help Users navigate around our website and allow us to tailor the content of our site to fit the needs and preferences of Users. The cookies we use typically collect anonymous identifiers associated with your device, browser, referring site URLs, time or usage information, Website preferences and settings, etc. (as further provided in this Policy).</p>
            <p>Cookies play an important role. Without them, using our website would be a slow, complicated and frustrating experience. Cookies are standard to all company websites. So while they cannot be eliminated, we remain transparent about the purpose of cookies giving you the choice to consent to their use and adjust their parameters.</p>
            <p><b>Why do we use Cookies and similar technologies?</b></p>
            <p>We take advantage of the information collected via cookies and similar technologies like web beacons (embedded bits of data into targeted emails or images to keep record of your actions on a web page or email body) to recognize you, improve page navigation, remember your preferences, and show you relevant content. It also helps us enhance email and advertising campaigns, and allows us to refine our marketing strategy.</p>
            <p><b>What types of Cookies do we use?</b></p>
            <p>We use various cookies including the following:</p>
            <p>Strictly necessary cookies to ensure the information you access via Our Websites is properly browsed and all Our Websites function properly.</p>
            <p>Performance cookies to keep a record of Our Website pages you visited and URLs that brought you to Our Websites.</p>
            <p>Website session cookies to keep track of your actions during a browser session. The session starts the moment you access Our Website and ends right after you exit Our Website. When you close the browser, our session cookies are automatically <deleted class=""></deleted></p>
            <p>Targeting cookies to accumulate analytics about Our Websites usage as well as third-party cookies we get via social media channels or ads placed on third-party platforms.</p>
            <p><b>What third-party cookies do we collect?</b></p>
            <p>Please also note that we may enable third-party services to trace Performance and Targeting cookies for us to measure the effectiveness of our advertising campaigns and stay informed about your online activities on Our Websites. The third-party services may include but not be limited to Google AdWords, Google Analytics, etc., and may be subject to their Cookie policies, which are listed on their applicable websites. </p>
            <p><b>Who can access the data we collect?</b></p>
            <p>We are the only holders of the data gathered. It is kept confidential and safe under the regulations described in our Privacy Policy.</p>
            <p><b>What personal data do we gather?</b></p>
            <p>For further information, please refer to our Privacy Policy.</p>
            <p><b>How to block our Websites’ cookies?</b></p>
            <p>If you want to remove all the existing and future Websites cookies, you can do this at anytime by changing your browser settings. For more guidance, please go to www.allaboutcookies.org.</p>
            <p>Please note: Blocking the cookies will negatively affect your experience and navigation on Our Websites. Unless you block cookies in your browser before accessing Our Websites, we will place cookies on your computer or devices once you visit Our Websites or click the links leading to them.</p>
            <p><b>Contact information</b></p>
            pShould you have any concerns about our Cookie Policy or would like us to remove the data shared, please get in touch with us either via the Website contact form or this email.




          </q-card-section>
        </q-card>
      </q-dialog>
      <q-dialog v-model="privacy" >
        <q-card class="full-height" style="width: 300%">
          <q-card-section class="row items-center q-pb-none">
            <div class="text-h6" style="margin-left: 35%"> PRIVACY POLICY</div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>

          <q-card-section style="text-align: center">
            <p>Thank you for visiting our Website (the “Website”) on which you found the link to our Privacy Policy (the “Privacy Policy”). The Website is Our property (referred to collectively as “we”, “our” or “us”) and you may contact us at any time via email at: xxxxxxx.com</p>
            <p>We are hereby concerned with protecting the privacy of any personal information that you may choose to provide to us (“Personal Information”), and are committed to providing a safe, responsible and secure environment. It is our goal to ensure that the use of your Personal Information is compliant with the General Data Protection Regulation (EU) 2016/679 (“GDPR”). Accordingly, we issued this policy to inform you of our use of your Personal Information.</p>
            <p><b>1.Introduction</b></p>
            <br>
            <p style="text-align: left">1.1 This Privacy Policy sets out the way in which we collect and process Personal Information, as well as the steps we take to protect such information.
              <br>
              <br>
              1.2 By utilising our Services, you hereby acknowledge that you have read, and agree to, the terms of this Privacy Policy and that you consent to our use of your Personal Information for the purposes set out in paragraph 3 of this Privacy Policy. If you do not wish to provide your Personal Information on the basis set out in this Privacy Policy, you should not enter the relevant information on the Website or provide your Personal Information to us otherwise. However, if you do not provide your Personal Information, you may not be able to use all of the Services we offer.
              <br>
              <br>
              1.3 Capitalised terms not defined in this Privacy Policy shall be as defined in the Terms & Conditions.
              <br>
              <br>
              1.4 Definitions:
              <br>
              1.4.1 “You” means the user who is using our services.
              <br>
              1.4.2 “Personal Data” means information that specifically identifies an individual or that is linked to information that identifies a specific individual.
              <br>
              1.4.3 “Visitor” means an individual other than a user, who uses the public area, but has no access to the restricted areas of the Site or Service.
              <br>
              1.5 Principle:
              <br>
              <br>
              This policy is based on the following data protection principles:
              <br>
              <br>
              The processing of personal data shall take place in a lawful, fair and transparent way;
              <br>
              The collecting of personal data shall only be performed for specified, explicit and legitimate purposes and not further processed in a manner that is incompatible with those purposes;
              <br>
              The collecting of personal data shall be adequate, relevant and limited to what is necessary in relation to the purpose for which they are processed;
              <br>
              The personal data shall be accurate and where necessary, kept up to date;
              <br>
              Every reasonable step shall be taken to ensure that personal data that are inaccurate having regard to the purposes for which they are processed, are erased or rectified without delay;
              <br>
              Personal data shall be kept in a form which permits identification of the data subject for no longer than it is necessary for the purpose for which the personal data are processed;
              <br>
              All personal data shall be kept confidential and stored in a manner that ensures appropriate security;
              <br>
              Personal data shall not be shared with third parties except when necessary in order for them to provide services upon agreement;
              <br>
              Data subjects shall have the right to request access to and rectification or erasure of personal data, or restriction of processing, or to object to processing as well as the right of data portability.
              <br>
              <b>2.The information we collect</b>
              <br>
              <br>
              2.1 As part of providing you with the Services, we collect your Personal Information on registering an account. “Personal Information” means any information from which you can be personally identified.
              <br>
              (a) we may collect, store and use information about your computer, mobile device or other item of hardware through which you access the Website and your visits to and use of the Website (including without limitation your IP address, geographical location, browser/platform type and version, Internet Service Provider, operating system, referral source/exit pages, length of visit, page views, website navigation and search terms that you use;
              <br>
              (b) to the extent that we collect and process documentation on behalf of our contributing companies to assist them with complying with various statutory requirements including without limitation anti-money laundering, KYC procedures, we may collect a copy of your passport, director and shareholder information, driving licence and evidence of proof of address. These documents contain various elements of personal and company information.
              <br>
              (c) you may be given opportunities to provide us with other information from time to time;
              <br>
              (d) when you choose to subscribe to our service, and/or contact us by email, telephone or through any contact form provided on the Website, we may ask you to provide some or all of the following information:
              <br>
              (i) your name (first name and last name);
              <br>
              (ii) your address;
              <br>
              (iii) your IP address;
              <br>
              (iv) your email address;
              <br>
              (v) your phone number; and/or
              <br>
              (vi) details about your balance and/or sales status;
              <br>
              (vii) details of any search effected by you and/or any transaction executed by you with any partner.
              <br>
              2.4 Not all the personal information we hold about you will come always directly from you. We may also collect information from third parties such as our partners, service providers and publicly available websites (i.e social media platforms), to comply with our legal and regulatory obligations, offer Services we think may be of interest, to help us maintain data accuracy and provide and enhance the Services.
              <br>
              How we will use your Personal Information
              <br>
              3.1 We will process your Personal Information in accordance with the GDPR and to provide you with the Services. We will process your Personal Information to enable us to:
              <br>
              (a) to provide our services to you;
              <br>
              (b) to assist third party companies with providing their services to you;
              <br>
              (c) to enable you to use our services;
              <br>
              (d) to send you relevant and targeted promotional communications;
              <br>
              (e) to notify you of changes we have made or plan to make to the Website and / or our services;
              <br>
              (f) to send you emails as necessary;
              <br>
              (j) to analyze and improve the services offered on our Website.
              <br>
              3.2 If at any time you wish us to stop processing your Personal Information for the above purposes, then you must contact us via e-mail and we will take the appropriate steps to stop doing so. Please note that this may mean that your Account will be closed.
              <br>
              3.3 In the event that the purposes for processing change, then we will notify you as soon as practicable and seek any additional consent that may be required.
              <br>
              Disclosing your Personal Information
              <br>
              <br>
              4.1 Except as described in this Policy, we will not intentionally disclose the Personal Data that we collect or store on the Service to third parties without your prior explicit consent. We may disclose information to third parties in the following circumstances:
              <br>
              4.2 Except to the extent required by any applicable law or governmental or judicial body, we will only disclose such of your personal information to our third party companies as is required for us or them to perform our or their services to you.
              <br>
              4.3 We will use all reasonable endeavors to ensure that any companies to whom we disclose your confidential information is compliant with the Data Protection Act 1998 (or an equivalent standard) as regards its use and storage of your personal information.
              <br>
              4.4 In the event that we sell or buy any business or assets, we may disclose your personal data and transaction data to the prospective seller or buyer of such business or assets. If substantially all of our assets are acquired by a third party, personal data and transaction data held by it about its customers will be one of the transferred assets.
              <br>
              4.5 We will disclose your personal information if we are under a duty to disclose or share your personal data and transaction data in order to comply with any legal obligation, or in order to enforce or apply our Terms and Conditions and other agreements; or to protect the rights, property, our safety, our customers, or others. This includes exchanging information with other companies and organizations for the purposes of fraud protection and credit risk reduction.
              <br>
              4.6 If at any time you wish us to stop processing your Personal Information for the above purposes, then you must contact us and we will take the appropriate steps to stop doing so. Please note that this may mean that your Account will be closed.
              <br>
              Data Subject Rights
              <br>
              <br>
                5.1 We respect your privacy rights and provide you with reasonable access to the Personal Data that you may have provided through your use of the Services. Your principal rights under the GDPR are as follows:
              <br>
              the right for information;
              <br>
              the right to access;
              <br>
              the right to rectification;
              <br>
              the right to erasure; the right to be forgotten;
              <br> the right to restrict processing;
              <br> the right to object to processing;
              <br> the right to data portability;
              <br> the right to complain to a supervisory authority; and
              <br> the right to withdraw consent.
              <br>   5.2 If you wish to access or amend any other Personal Data we hold about you, or to request that we delete any information about you, you may contact us by sending an email. We will acknowledge your request within seventy-two (72) hours and handle it promptly. We will respond to these requests within a month, with a possibility to extend this period for particularly complex requests in accordance with Applicable Law. We will retain your information for as long as your account is active, as needed to provide you services, or to comply with our legal obligations, resolve disputes and enforce our agreements.

                5.3 You may update, correct, or delete your Account information and preferences at any time by accessing your Account. Please note that while any changes you make will be reflected in active user databases instantly or within a reasonable period of time, we may retain all information you submit for backups, archiving, prevention of fraud and abuse, analytics, satisfaction of legal obligations, or where we otherwise reasonably believe that we have a legitimate reason to do so.
              <br>
                5.4 You may decline to share certain Personal Data with us, in which case we may not be able to provide to you some or all of the features and functionality of the Service.
              <br>
                5.5 At any time, you may object to the processing of your Personal Data, on legitimate grounds, except if otherwise permitted by applicable law.
              <br>
                5.6 In accordance with Applicable Law, we reserve the right to withhold personal data if disclosing it would adversely affect the rights and freedoms of others.
              <br>
                5.7 We may use your personal data for the purposes of automated decision-making when displaying your activity and offers based on your trends and interest. When such processing takes place, we will request your explicit consent and provide you with the option to opt-out. We may also use automated decision making in order to fulfill obligations imposed by law, in which case we will inform you of any such processing. You have the right to object to the processing of your personal data for automated purposes at any time by contacting us via e-mail.
              <br>
              Advertising and Use of Cookies
              <br>   <br>
              We collect browser and cookie information when you first navigate to our websites. We use cookies to give you a better customer experience and for use of access. Certain cookies will allow you to leave and re-enter our Websites without re-entering your password. This will be monitored by a web server. For more information on the use of cookies, how you can control their use, and information relating to our internet-based and mobile advertising, please refer to our cookies policy for more detail.
              <br>
              Minors and Children’s Privacy
              <br>   <br>
              7.1 Protecting the privacy of minors is especially important. Our Service is not directed to children under the age of 18, and we do not knowingly collect Personal Data from children under the age of 18. If you are under 18 years of age, then please do not use or access the Service at any time or in any manner. If we learn that Personal Data has been collected on the Service from persons under 18 years of age, then we will take the appropriate steps to delete this information. If you are a parent or guardian and discover that your child under 18 years of age has obtained an Account on the Service, then you may alert us via e-mail and request that we delete your child’s Personal Data from our systems.
              <br>
              Security
              <br>   <br>
              8.1 We take appropriate security measures to protect against loss, misuse and unauthorized access, alteration, disclosure, or destruction of your information. We have taken steps to ensure the ongoing confidentiality, integrity, availability, and resilience of systems and services processing personal information, and will restore the availability and access to information in a timely manner in the event of a physical or technical incident.
              <br>
              8.2 No method of transmission over the Internet, or method of electronic storage, is 100% secure. We cannot ensure or warrant the security of any information you transmit to us or store on the Service, and you do so at your own risk. We also cannot guarantee that such information may not be accessed, disclosed, altered, or destroyed by breach of any of our physical, technical, or organisational safeguards. If you believe your Personal Data has been compromised, please contact us via e-mail.
              <br>
              8.3 If we learn of a security systems breach, we will inform you of the occurrence of the breach in accordance with applicable law.
              <br>
              Privacy Settings
              <br>   <br>
              9.1 Although we may allow you to adjust your privacy settings to limit access to certain Personal Data, please be aware that no security measures are perfect or impenetrable. Additionally, we cannot control the actions of other users with whom you may choose to share your information. We cannot and do not guarantee that information you post on or transmit to the Service will not be viewed by unauthorized persons. We have taken the necessary steps to protect your personal information as much as possible in transit by using technical and administrative security measures to reduce the risks of loss, misuse, unauthorized access, disclosure and alteration of personal data. Some of the safeguards we use are firewalls and very strict data encryption which include: 3 level of encryptions, physical access controls on every network point, and information access authorization controls. Such protection is currently obtained by using: database encryption aes-256 algorithms, physical access controls (PAC), and information access authorization controls.
              <br>
              Data Retention and International Transfers
              <br>   <br>
              10.1 The data that we collect from you may be transferred to, and stored at, a destination outside the European Economic Area (“EEA”). It may also be processed by staff operating outside the EEA who work for us or for one of our suppliers. By submitting your personal data, you agree to this transfer, storing or processing. We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this privacy policy.
              <br>
              10.2 All information you provide to us is stored on our secure servers.
              <br>
              10.3 Unfortunately, the transmission of information via the internet is not completely secure. Although we will do our best to protect your personal data, we cannot guarantee the security of your data transmitted through our Website; any transmission is at your own risk. Once we have received your information, we will use strict procedures and security features to try to prevent unauthorised access.
              <br>
              10.4 We transmit personal information using secure software which encrypts information you input. Further, to the extent that we collect any credit card or bank account information from you, we will only reveal the last four digits of your credit card number when confirming an order. We maintain physical, electronic and procedural safeguards in connection with the collection, storage and disclosure of personally identifiable customer information. Our security procedures mean that we may occasionally request proof of identity before we disclose personal information to you.
              <br>
              Data Protection Officer
              <br>   <br>
              11.1 We have appointed a Data Protection Officer (“DPO”) who is responsible for matters relating to privacy and data protection. Our DPO can be reached via e-mail.
              <br>
              Changes to this Privacy Policy
              <br>   <br>
              12.1 Please note that this Privacy Policy may change from time to time. If we change this Privacy Policy in ways that affect how we use your Personal Information, we will advise you of the choices you may have as a result of those changes. We will also post a notice that this Privacy Policy has changed.</p>

          </q-card-section>
        </q-card>
      </q-dialog>
      <q-dialog v-model="contact" >
        <q-card>
          <q-card-section class="row items-center q-pb-none">
            <div class="text-h6 full-width"><b>Feel free to contact us with any enquiry you may have</b></div>
            <div class="text-h8 full-width">Fill out the form below, and we'll get back to you ASAP!</div>
            <q-space />

          </q-card-section>

          <q-card-section>
            <p>Request type</p>
            <p style="margin-top: -2%">* required</p>
            <div class="">
              <q-option-group
                  v-model="contactUs.group"
                  :options="options"
                  color="primary"
                  inline
              />
              <q-input  outlined style="width: 300px" v-model="contactUs.name"  hint="* required" label="Name" />
              <br>
              <q-input outlined style="width: 300px" v-model="contactUs.email" hint="* required" label="Email" />
              <br>
              <q-input outlined style="width: 300px" v-model="contactUs.skype" hint="* required" label="Skype ID" />

              <q-input v-model="contactUs.text"
                       label="Message"
                       filled
                       type="textarea"
              />
              <br>
              <q-btn style="background-color:  #59476f; color: white" @click="yyy(contactUs)">submit</q-btn>
              <!--              <q-input outlined style="width: 300px"  hint="* required" label="Message" />-->

            </div>
          </q-card-section>
        </q-card>
      </q-dialog>

    </div>


  </q-page>
</template>

<script>

import photo from "../image/photo.jpg"
import AddProfile from "@/components/allOfProfiles/AddProfile";
import Addbtn from "../components/allOfProfiles/Addbtn";
import addPhoto from "../components/allOfProfiles/addPhoto";
import {mapActions} from "vuex";

export default {
  name: 'Home',

  components: {
    AddProfile, Addbtn, addPhoto,
  },
  data: () => ({
    photo:photo,
    isReload: false,
    screenSize: window.innerWidth,
    screen1 :100,
    icon:false,
    tab: 'login',
    tab1: true,
    acceptA: false,
    acceptP: false,
    terms: false,
    privacy: false,
    cooki:false,
    contact:false,

    join:{
      name:'',
      number:'',
      email:'',
      text:''
    },
    contactUs:{
      name:'',
      email:'',
      skype:'',
      text:'',
      group: '',
    },
    options: [
      {
        label: 'Brand',
        value: 'Brand'
      },
      {
        label: 'Affiliate',
        value: 'Affiliate'
      },
      {
        label: 'General',
        value: 'General'
      }
    ]
  }),
  methods: {
    ...mapActions('profiles',['set', 'setC']),

    xxx(j, x) {
      if(x === true){
        j.apply = 'publisher'
      }
      else {
        j.apply = 'advertiser'
      }
      this.set(j)
    },
    yyy(j){
      this.setC(j)
    },

  },
  created() {

  }


}
</script>

<style lang="scss" >
try2{
  margins:0 px;
  overflow:hidden;
}
.ccc{

  quotes: "„" "“" "‚" "‘";
}
#wrapper {
  position: relative;
  background-color: white;

}

#outer, #inner {
  height: 70px;
  //padding: 20px;
  //width: 100px;
}

#outer {
  //background: #027BE3;
  width: 7000px;
  opacity: 0.5;
}

#inner {
  z-index: 3;
  //margin-top: -2%;
  width: 1600px;
  position: absolute;
  top: 20px;  /* These values are based on the padding to offset correctly. */
  //right: 230px;
  color: #F2C037;
}
.containerT {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  //padding: 1em;
  text-align: center;


}



.btnT {
  color: #fff;
  cursor: pointer;
  // display: block;
  //font-weight: 400;
  line-height: 45px;
  margin: 0 0 2em;
  max-width: 160px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  width: 130%;




  &:hover { text-decoration: none; }

}

.btnTB {
  color: #fff;
  cursor: pointer;
  // display: block;

  //font-weight: 400;
  line-height: 45px;
  margin: 0 0 2em;
  max-width: 160px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  width: 130%;




  &:hover { text-decoration: none; }

}

.btn-1T {
  //background: darken(red, 1.5%);
  //font-weight: 100;

  svg {
    height: 45px;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  rect {
    //fill: none;
    stroke: #fff;
    stroke-width: 0;
    stroke-dasharray: 422, 0;
    transition: all 0.35s linear;
  }
}

.btn-1T:hover {
  //background: rgba($red, 0);
  //font-weight: 900;
  //letter-spacing: 1px;

  rect {
    stroke-width: 5;
    stroke-dasharray: 15, 310;
    stroke-dashoffset: 48;
    transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
  }
}
#grad1 {

  background-color: black; /* For browsers that do not support gradients */
  background-image: linear-gradient(to bottom , white, white, white );
}
#grad11 {


  background-color: black; /* For browsers that do not support gradients */
  background-image: linear-gradient(to top ,white,white, white);
}
.head{
  z-index: 2 ;direction: ltr ;opacity: 0.6 ;   background-color: rgb(230,230,255); height: 6%
}
.btn-a{
  //position: absolute;
  margin-top: -20%; margin-left: 30%;
  //margin-right: 15%; margin-top: 7%;
}
.title1{
  z-index: 3; margin-top: -2%; font-size: 5vh ; color: #111111; font-weight: bold;
}
.title2{
  color: white; margin-right: 15%;margin-top: 5%; font-family: Arial;
}
.title3{
  height: 150px; color: white;  margin-right: 2%; direction: ltr; font-family: Arial; text-align: center;
}
.jpH{
  /*z-index: -1;  height: 700px*/
}
.blackH{
  z-index: 1;background-color: #1D1D1D; margin-top: -30%; height: 500px
}
.imgeWo2{
  background-image: url("https://firebasestorage.googleapis.com/v0/b/tonda-datind.appspot.com/o/42QsdIGXD9YZdx3d2hUWDgkr9q13%2F%D7%A2%D7%95%D7%9C%D7%9D%201.jpg?alt=media&token=ed712d76-bbef-46c8-b598-b4e6aff15b90");
  background-repeat: no-repeat;
  background-size: 60%;
  filter: brightness(1.5);
  opacity: 0.8;
}
.try{
  color: red;
  //-webkit-background-clip: text;
  //-webkit-text-fill-color: transparent;
  background-image: url("https://firebasestorage.googleapis.com/v0/b/tonda-datind.appspot.com/o/42QsdIGXD9YZdx3d2hUWDgkr9q13%2F%D7%9E%D7%98%D7%91%D7%A2%D7%95%D7%AA.png?alt=media&token=3be7706e-f9fa-4495-91ff-b6c9e1036336");
  /*background-image: url("https://firebasestorage.googleapis.com/v0/b/tonda-datind.appspot.com/o/dGuPtWkKDYSTQTf380vTqBf2QHr2%2F%D7%A8%D7%A7%D7%A2%20%D7%A9%D7%99.jfif?alt=media&token=2012ac47-664a-42ef-b464-dd52f5f90ce7");*/
  background-repeat: no-repeat;
  background-size: 60%;

  /*background-position-y: 20%;*/


}
.imageMonny{
  background-image: url("https://firebasestorage.googleapis.com/v0/b/tonda-datind.appspot.com/o/42QsdIGXD9YZdx3d2hUWDgkr9q13%2F%D7%9E%D7%98%D7%91%D7%A2%D7%95%D7%AA.png?alt=media&token=3be7706e-f9fa-4495-91ff-b6c9e1036336");
  /*background-image: url("https://firebasestorage.googleapis.com/v0/b/tonda-datind.appspot.com/o/dGuPtWkKDYSTQTf380vTqBf2QHr2%2F%D7%A8%D7%A7%D7%A2%20%D7%A9%D7%99.jfif?alt=media&token=2012ac47-664a-42ef-b464-dd52f5f90ce7");*/
  background-repeat: no-repeat;
  /*background-position-y: 20%;*/
  background-size: 60%;
  /*background-position-x: 50%;*/
  opacity: 0.8;
  position: relative;
  border-radius: 40%;

}
.imageHands{
  background-image: url("https://firebasestorage.googleapis.com/v0/b/tonda-datind.appspot.com/o/42QsdIGXD9YZdx3d2hUWDgkr9q13%2FBB330C6A-DC5E-40B4-8708-8887A68465C8.jpeg?alt=media&token=2d4b0fab-a57a-430d-ae8c-faddb2e29ad5");
  /*background-image: url("https://firebasestorage.googleapis.com/v0/b/tonda-datind.appspot.com/o/dGuPtWkKDYSTQTf380vTqBf2QHr2%2F%D7%A8%D7%A7%D7%A2%20%D7%A9%D7%99.jfif?alt=media&token=2012ac47-664a-42ef-b464-dd52f5f90ce7");*/
  background-repeat: no-repeat;
  /*background-position-y: 20%;*/
  background-size: 60%;
  background-position-x: 0%;
  filter: brightness(1.3);
}




.btnNow{
  width: 20%;
  height: 100%;
  /*font-family:"Guttman Kav" ;*/
  margin-top: 5%;
  padding: 10px 100px 10px 100px;
  opacity: 0.95;
  font-size: 25px;
  text-align: center;
  border-radius: 20px;
  border: none;
  background-color: transparent;
  /*background-color: rgba(0,0,0, 0.2);*/
  backdrop-filter: blur(50px);
  color: white;
}
.cardclass{
  background-color: #9C27B0;
}
.imageBack{
  background-image: url(
  "https://firebasestorage.googleapis.com/v0/b/tonda-datind.appspot.com/o/dGuPtWkKDYSTQTf380vTqBf2QHr2%2FVector_2646.jpg?alt=media&token=a7ec51e6-80b2-4095-b1de-233475ba3aea"
  );
  /*background-image: url("https://firebasestorage.googleapis.com/v0/b/tonda-datind.appspot.com/o/dGuPtWkKDYSTQTf380vTqBf2QHr2%2F%D7%A8%D7%A7%D7%A2%20%D7%A9%D7%99.jfif?alt=media&token=2012ac47-664a-42ef-b464-dd52f5f90ce7");*/
  background-repeat: no-repeat;
  /*background-position-x: 20%;*/
  background-size: 100%;
  filter: brightness(1.70);
  z-index: 1 ;height: 115vh; direction: rtl;
}
.imageBackM{
  background-image: url("https://firebasestorage.googleapis.com/v0/b/tonda-datind.appspot.com/o/dGuPtWkKDYSTQTf380vTqBf2QHr2%2FVector_2646.jpg?alt=media&token=a7ec51e6-80b2-4095-b1de-233475ba3aea");
  /*background-image: url("https://firebasestorage.googleapis.com/v0/b/tonda-datind.appspot.com/o/dGuPtWkKDYSTQTf380vTqBf2QHr2%2F%D7%A8%D7%A7%D7%A2%20%D7%A9%D7%99.jfif?alt=media&token=2012ac47-664a-42ef-b464-dd52f5f90ce7");*/
  background-repeat: no-repeat;
  /*background-position-y: 20%;*/
  background-size: 100%;
  z-index: 1 ;height: 350px; direction: rtl; margin-top: 5%
}
.imageP{
  z-index: 0;
  filter: brightness(60%);
  background-image: url(
  "https://firebasestorage.googleapis.com/v0/b/tonda-datind.appspot.com/o/dGuPtWkKDYSTQTf380vTqBf2QHr2%2F%D7%A1%D7%92%D7%95%D7%9C.jfif?alt=media&token=83879356-c8de-40ec-a1c3-5cfcffa6dea7"
  );
  background-repeat: no-repeat;
  /*background-position-x: 50%;*/
  background-size: 100%;
  filter: brightness(1);

}
.imagePM{
  z-index: 0;
  filter: brightness(60%);
  background-image: url("https://firebasestorage.googleapis.com/v0/b/tonda-datind.appspot.com/o/dGuPtWkKDYSTQTf380vTqBf2QHr2%2F%D7%A1%D7%92%D7%95%D7%9C.jfif?alt=media&token=83879356-c8de-40ec-a1c3-5cfcffa6dea7");
  background-repeat: no-repeat;
  /*background-position-x: 50%;*/
  background-size: 120%;

}
.imageJP{
  /*background-image: url("https://firebasestorage.googleapis.com/v0/b/tonda-datind.appspot.com/o/dGuPtWkKDYSTQTf380vTqBf2QHr2%2F%D7%A8%D7%A7%20%D7%A1%D7%92%D7%95%D7%9C1.png?alt=media&token=1821a202-d4b4-4486-b7a2-36ed57bc4c6b");*/

  background-image: url("https://firebasestorage.googleapis.com/v0/b/tonda-datind.appspot.com/o/dGuPtWkKDYSTQTf380vTqBf2QHr2%2F%D7%A8%D7%A7%20%D7%A1%D7%92%D7%95%D7%9C.png?alt=media&token=f8bf01cd-9aa3-4e70-963c-3ad14fa702c6");
  background-size: 100%;
  background-repeat: no-repeat;
}
.element {
  background: linear-gradient(
          to top,
          black,
          rgba(25, 0, 0, 0)
  );
}
</style>