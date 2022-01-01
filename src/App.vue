<template>
  <div>
    <Homenav/>
    <Home/>
    <Methodology/>
    <Benefits/>
    <Curriculum/>
    <Subscribe/>
    <Homefooter/>
  </div>
</template>

<script>
  import Homenav from "./components/Homenav.vue"
  import Home from "./components/Home"
  import Methodology from "./components/Methodology.vue"
  import Benefits from "./components/Benefits.vue"
  import Curriculum from "./components/Curriculum.vue"
  import Subscribe from "./components/Subscribe.vue"
  import Homefooter from "./components/Homefooter.vue"

  export default {
    name: "App",
    components: {
      Homenav,
      Home,
      Methodology,
      Benefits,
      Curriculum,
      Subscribe,
      Homefooter
    }
  };

</script>

<style>
</style>