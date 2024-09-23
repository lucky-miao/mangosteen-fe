import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import x from "./welcome.module.scss";
// 一定要 .module.scss

export const Welcome = defineComponent({
  setup() {
    return ()=> <div class={x.wapper}>
        {/* <div>66611</div> */}
        <header> header text</header>
        <main> <RouterView></RouterView></main>
        <footer>footer text</footer>
    

    </div>
  }
})