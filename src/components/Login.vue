<template>
  <article>
    <v-content>
      <v-container v-if="!connected" class="container" :class="{'sign-up-active' : signUp}">
          <div class="overlay-container">
            <div class="overlay">
              <div class="overlay-left">
                <img src="../assets/MajinVegeta.png">
                <h2>Welcome Back!</h2>
                <p>Please login with your personal info</p>
                <button class="invert" id="signIn" @click="signUp = !signUp">Sign In</button>
              </div>
              <div class="overlay-right">
    <img src="../assets/gokuUI.png">
                <h2>Hello, Friend!</h2>
                <p>Please enter your personal details</p>
                <button class="invert" id="signUp" @click="signUp = !signUp">Sign Up</button>
              </div>
            </div>
          </div>
          <form class="sign-up" action="#">
            <h2>Create login</h2>
            <input v-model="name" placeholder="Name" />
            <input v-model="password" type="password" placeholder="Password" />
            <button @click="inscription">Sign Up</button>
          </form>
          <form class="sign-in" action="#">
            <h2>Sign In</h2>
            <div>Use your account</div>
            <input v-model="name" placeholder="Name" />
            <input v-model="password" type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button @click="login">Sign In</button>
          </form>
      </v-container>
    </v-content>
    <v-content>
      <v-btn class="logout_btn" @click="logout" v-if="connected">Log Out</v-btn>
      <v-container class="welcomeContainer" text-center v-if="connected && !playing"  >
        <p>Bienvenue {{name}}</p>
        <p>Cliquez pour jouer</p>
        <button @click="play">JOUER</button>
      </v-container>
    </v-content>
    <v-content>
      <v-container class="playContainer" text-center v-if="connected && playing">
        <p>ouais viens on joue</p>
        <p>ouiiiii</p>
      </v-container>
    </v-content>
  </article>
</template>

<script>
export default {
  data: () => ({
    signUp: false,
    connected: false,
    playing: false,
    name: '',
    password: '',
    server: 'http://localhost:4000/',
    inscrip: false
  }),
  methods: {
    async login () {
      // connecter l'utilisateur
      const resp = await this.axios.post(this.server + 'api/login', {
        username: this.name,
        password: this.password
      })
      console.log(resp)
      this.message = resp.data.message
      if (this.message === 'connected') {
        this.connected = true
      } else {
        alert('name or password are incorrect')
      }
    },
    async inscription () {
    // s'inscrire
      const resp = await this.axios.post(this.server + 'api/inscription', {
        username: this.name,
        password: this.password,
        inscrip: true
      })
      console.log(resp)
    },
    async play () {
      this.playing = true
    },
    async logout () {
      this.axios.post(this.server + 'api/logout', this.connected = false)
      sessionStorage.clear()
      this.playing = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    margin-top: 5%;
    position: relative;
    width: 768px;
    height: 480px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 15px 30px rgba(0, 0, 0, .2),
                0 10px 10px rgba(0, 0, 0, .2);
    background: linear-gradient(to bottom, #efefef, #ccc);
    .overlay-container {
      position: absolute;
      top: 0;
      left: 50%;
      width: 50%;
      height: 100%;
      overflow: hidden;
      transition: transform .5s ease-in-out;
      z-index: 100;
    }
    .overlay {
      position: relative;
      left: -100%;
      height: 100%;
      width: 200%;
      background: linear-gradient(to top right, rgb(247, 93, 93), #930000);
      color: #fff;
      transform: translateX(0);
      transition: transform .5s ease-in-out;
    }
    @mixin overlays($property) {
      position: absolute;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: column;
      padding: 70px 40px;
      width: calc(50%);
      height: calc(100%);
      text-align: center;
      transform: translateX($property);
      transition: transform .5s ease-in-out;
    }
    .overlay-left {
      @include overlays(-20%);
    }
    .overlay-right {
      @include overlays(0);
      right: 0;
    }
  }
  h2 {
    margin: 0;
  }
  p {
    margin: 20px 0 30px;
  }
  a {
    color: #222;
    text-decoration: none;
    margin: 15px 0;
    font-size: 1rem;
  }
  button {
    border-radius: 20px;
    border: 1px solid #930000;
    background-color: #930000;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    padding: 10px 40px;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    transition: transform .1s ease-in;
    &:active {
      transform: scale(.9);
    }
    &:focus {
      outline: none;
    }
  }
  button.invert {
    background-color: transparent;
    border-color: #fff;
  }
  form {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 90px 60px;
    width: calc(50%);
    height: calc(100%);
    text-align: center;
    background: linear-gradient(to bottom, #efefef, #ccc);
    transition: all .5s ease-in-out;

    div {
      font-size: 1rem;
    }

    input {
      background-color: #eee;
      border: none;
      padding: 8px 15px;
      margin: 6px 0;
      width: calc(100%);
      border-radius: 15px;
      border-bottom: 1px solid #ddd;
      box-shadow: inset 0 1px 2px rgba(0, 0, 0, .4),
                        0 -1px 1px #fff,
                        0 1px 0 #fff;
      overflow: hidden;
      &:focus {
        outline: none;
        background-color: #fff;
      }
    }
  }
  .sign-in {
    left: 0;
    z-index: 2;
  }
  .sign-up {
    left: 0;
    z-index: 1;
    opacity: 0;
  }
  .sign-up-active {
    .sign-in {
      transform: translateX(100%);
    }
    .sign-up {
      transform: translateX(100%);
      opacity: 1;
      z-index: 5;
      animation: show .5s;
    }
    .overlay-container {
      transform: translateX(-100%);
    }
    .overlay {
      transform: translateX(50%);
    }
    .overlay-left {
      transform: translateX(0);
    }
    .overlay-right {
      transform: translateX(100%);
    }
  }
  @keyframes show {
    0% {
      opacity: 0;
      z-index: 1;
    }
    49% {
      opacity: 0;
      z-index: 1;
    }
    50% {
      opacity: 1;
      z-index: 10;
    }
  }
  .welcomeContainer {
    width: 384px;
    height: 240px;
    color: #fff;
    background: linear-gradient(to top right, rgb(247, 93, 93), #930000);
     font-size: 1rem;
    font-weight: bold;
    padding: 10px 40px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  .playContainer {
    width: 384px;
    height: 240px;
    color: #fff;
    background: linear-gradient(to top right, rgb(247, 93, 93), #930000);
     font-size: 1rem;
    font-weight: bold;
    padding: 10px 40px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
</style>
