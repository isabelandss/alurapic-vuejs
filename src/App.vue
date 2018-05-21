<template>
  <div class="body">
    <nav>
      <h1 class="title">{{ titulo }}</h1>
    </nav>

    <div class="search-form">
      <input type="text" value="" @input="filtro = $event.target.value" placeholder="Pesquisar" class="search-input">
    </div>

    <div class="container">
      <div v-for="foto of fotosComFiltro" :key="foto._id">
        <card :titulo="foto.titulo">
          <img :src="foto.url" :alt="foto.titulo" class="imagem">
        </card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from './components/shared/Card/Card.vue';

export default {
  components: {
    'card': Card
  },

  data() {
    return {
      titulo: 'Alurapic',
      fotos: [],
      filtro: ''
    }
  },

  created() {
    this.$http.get(`http://localhost:3000/v1/fotos`)
      .then(res => res.json())
      .then(fotos => this.fotos = fotos, err => console.log(err));
  },

  computed: { 
    fotosComFiltro() {
      if(this.filtro) {
        let exp = new RegExp(this.filtro.trim(), 'i');
        return this.fotos.filter(foto => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
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

  nav {
    height: 65px;
    background: #fff;
    border-radius: 2px;
    display: inline-block;
    position: relative;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 0 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  }

  .title {
    text-align: center;
    font-family: 'Merriweather', serif;
    font-size: 40px;
    background-color: #fff;
    margin-top: 8px;
  }

  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .imagem {
    width: 280px;
    height: 280px;
    margin: 10px;
    margin-bottom: 0;
  } 

  .search-input {
    position: absolute;
    top: 10px;
    left: 38px;
    font-size: 20px;
    background: none;
    color: #5a6674;
    width: 195px;
    height: 30px;
    border: none;
    outline: none;
    margin: -5px;
  }

  .search-form {
    position: relative;
    top: 50%;
    left: 50%;
    width: 350px;
    height: 40px;
    border-radius: 40px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transform: translate(-50%, -50%);
    background: #fff;
    margin-bottom: -24px;
    margin-top: 29px;
  }
</style>
