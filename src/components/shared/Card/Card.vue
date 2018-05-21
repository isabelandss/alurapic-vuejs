<template>
  <div class="card">
    <transition name="card-fade">
      <div v-show="visivel">
        <slot></slot>
      </div>
    </transition>
    <p class="title-photo" @dblclick="visivel = !visivel">{{ titulo }}</p>
  </div>
</template>

<script>
// v-on foi substituido por @ 
export default {
  props: ['titulo'],
  data() {
    return {
      visivel: true
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Satisfy');
  @import url('https://fonts.googleapis.com/css?family=Merriweather');

  * {
    background-color: #f5f2f2;  
    margin: 0;
  }

  .card {
    background: #fff;
    border-radius: 2px;
    display: inline-block;
    height: 350px;
    margin: 1rem;
    position: relative;
    width: 300px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  }

  .card:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }

  .title-photo {
    text-align: center;
    font-family: 'Satisfy', cursive;
    font-size: 23px;
    margin-top: 10px;
    background-color: #fff; 
  }

  .card-fade-enter, .card-fade-leave-active {
    opacity: 0;
  }

  .card-fade-enter-active, .card-fade-leave-active {
    transition: opacity .4s;
  }
</style>
