<template>
<div class="Methodology">
    <div class="container mx-auto flex px-2 py-8 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div class="Image">
                <img src="../assets/ellipser.png" style="width: 80vh;">
                <div class="Text">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-purple-600">ZugZwang Academy</h1>
                    <h1 class="title-font sm:text-3xl text-2xl mb-4 font-medium text-pink-900">Unique Methodology</h1>
                    <h1 class="title-font sm:text-3xl text-2xl mb-4 font-medium text-pink-900">and Pedagogy</h1>
                    <div class="flex space-x-2">
                        <a href="#benefits"><img class="object-cover object-center rounded" alt="hero" src="../assets/benefits.png" style="width: 150px;"></a>
                        <a href="#curriculum"><img class="object-cover object-center rounded" alt="hero" src="../assets/curriculum.png" style="width: 150px;"></a>      
                    </div>
                </div>
            </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <div class="grid grid-rows-3 grid-flow-col gap-4">
                <div>
                    <img class="object-cover object-center rounded" alt="hero" src="../assets/structuredapproach.png" style="width: 150px;">
                </div>
                <div>
                    <img class="object-cover object-center rounded" alt="hero" src="../assets/topratedcoaches.png" style="width: 150px;">
                </div>
                <div>    
                    <img class="object-cover object-center rounded" alt="hero" src="../assets/worldsbestpedagogy.png" style="width: 150px;">
                </div>
                <div>
                    <img class="object-cover object-center rounded" alt="hero" src="../assets/millionpuzzles.png" style="width: 150px;">
                </div>
                <div>    
                    <img class="object-cover object-center rounded" alt="hero" src="../assets/lifeskills.png" style="width: 150px;">
                </div>
                <div>    
                    <img class="object-cover object-center rounded" alt="hero" src="../assets/chessportals.png" style="width: 150px;">
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default{
        name: 'App'
    }
</script>

<style scoped>
    .Image{
        position: relative;
        
    }
    .Text{
        position: absolute;
        top: 35%;
        left: 20%;
    }
    .Methodology{
        background: url(../assets/childrentransparent.png) no-repeat center center; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
    }

    @media only screen and (max-width: 600px)

    {
        .Image{
            height: 60vh;
        }

        .Text{
            position: absolute;
            top: 15vh;
            left: 5%;
        }
    }

</style>