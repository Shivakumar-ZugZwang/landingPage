<template>
<div class="Curriculum" id="curriculum">
    <div class="nav">
        <img src="../assets/shapepurple.png" style="height: 50px; width: 2000px;">
        <div class="navtext">
            <h1 class="text-white items-center">Our Curriculum covers the following topics & challenges :-</h1>
        </div>
    </div>
    <div class="container mx-auto flex md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-20 md:pr-10 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <ul class="sm:text-2xl text-small px-10 mb-10 font-medium text-gray-900">
                    <li class="mb-2"><i class="fas fa-chess-king-alt" style="color: purple; margin-right: 10px;"></i> Basics of Chess - movement & concepts</li>
                    <li class="mb-2"><i class="fas fa-chess-king-alt" style="color: purple; margin-right: 10px;"></i> Checkmate in One</li>
                    <li class="mb-2"><i class="fas fa-chess-king-alt" style="color: purple; margin-right: 10px;"></i> Checkmate in Two</li>
                    <li class="mb-2"><i class="fas fa-chess-king-alt" style="color: purple; margin-right: 10px;"></i> Tactics</li>
                    <li class="mb-2"><i class="fas fa-chess-king-alt" style="color: purple; margin-right: 10px;"></i> Endgame Puzzles</li>
                    <li class="mb-2"><i class="fas fa-chess-king-alt" style="color: purple; margin-right: 10px;"></i> Openings</li>
                    <li class="mb-2"><i class="fas fa-chess-king-alt" style="color: purple; margin-right: 10px;"></i> Basics of Attack</li>
                    <li class="mb-2"><i class="fas fa-chess-king-alt" style="color: purple; margin-right: 10px;"></i> Basics of Positional Chess</li>
                    <li class="mb-2"><i class="fas fa-chess-king-alt" style="color: purple; margin-right: 10px;"></i> Endgame - Basic Mates</li>
                    <li class="mb-2"><i class="fas fa-chess-king-alt" style="color: purple; margin-right: 10px;"></i> Overall Strategic Thinking</li>
                </ul>
            </div>

            <div class=" container lg:max-w-lg lg:w-full">
                <img class="object-cover object-center rounded" src="../assets/chessboard.png" >
            </div>
        </div>

    <div class="Curriculumfooter">
        <img src="../assets/curriculumfooter.png" class="w-2/3">
    </div>
    </div>
</template>

<script>
    export default{
        name: 'App'
    }
</script>

<style scoped>

.Curriculum{
        background: url(../assets/childrentransparent.png) no-repeat center; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
    }

    .nav{
        position: relative;
        
    }
    .navtext{
        position: absolute;
        top: 30%;
        left: 35%;
    }

    @media only screen and (max-width: 600px)

    {

        .navtext{
            position: absolute;
            top: 25%;
            left: 5%;
            font-size: 70%;
        }
    }

</style>


