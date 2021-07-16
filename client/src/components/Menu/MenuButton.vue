<template>
    <div id="menu-button" class="z-depth-3"></div>
</template>

<script>

export default {
    name:'menu-button'
}

</script>

<style lang="scss">

#menu-button{
    position: fixed;
    top:15px;
    cursor: pointer;
    z-index: 100;
    background: rgba(0,0,0,0.25);
    transition: 0.5s;
    &:hover{
        background: rgba(0,0,0,0.5);
    }
    &:active{
        box-shadow: none;
    }
    width: 30px;
    height: 30px;
    right: 15px;
    
    @media only screen and (min-width: 601px){
        right: 7.5%;
        width: 35px;
        height: 35px;
    }

    @media only screen and (min-width: 993px){
        right: 15%;
        width: 40px;
        height: 40px;
    }

}

</style>