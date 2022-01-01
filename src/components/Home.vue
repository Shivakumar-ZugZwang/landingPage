<template>
<div class="Home">
    <div class="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class=" sm:text-4xl text-3xl mb-4 font-medium text-white">Transform your<b> child's life</b> <br> through<b> Chess </b><br>with <b>Fluid Intelligence</b></h1>
            <p class="mb-8 leading-relaxed text-white">Fluid Intelligence isthe ability to think about & solve complex problems <br> through a systematic and structured approach</p>
                <div class="flex space-x-4 justify-center">
                    <a href="#subscribe"><img class="object-cover object-center rounded" alt="hero" src="../assets/get.png" style="width: 150px;"></a>
                    <a href="#subscribe"><img class="object-cover object-center rounded" alt="hero" src="../assets/buy.png" style="width: 150px;"></a>   
                    
                </div>
        </div>
        <div class="lg:max-w-lg lg:w-full">
            <img class="object-cover object-center rounded" src="../assets/kidpic.png">
        </div>
    </div>
    <img src="../assets/shape.png" alt="footer">
    </div>
</template>


<script>
    export default {
        name: 'App'
    }
</script>

<style scoped>

.Home{
      background: url(../assets/Rectanglepurple.png) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

</style>
