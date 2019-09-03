<template>
  <div> {{test}}</div>
</template>

<script>
    const {
      ipcRenderer
    } = require('electron')
  const os = require('os');
  export default {
    name: 'test',
    data() {
      return {
        test: 111
      }
    },
    mounted() {
        ipcRenderer.send('asynchronous-message', 'ping')
        ipcRenderer.on('asynchronous-reply', (event, arg) => {
          console.log(arg) // prints "pong"
        })
    }
  }

</script>
