import Vue from 'vue'
import  _ from 'lodash'
import './style.css';

function component() {
    var element = document.createElement('div');
  
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
console.log('webpack');

document.body.appendChild(component());
const app = new Vue({
  el:'#app',
  data:{
    message:'hello webpack!!!!!'
  }
})