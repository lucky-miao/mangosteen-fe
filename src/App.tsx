import { defineComponent,ref } from "vue";

export const App = defineComponent({
  setup() {
    const count = ref(0)
    const clickBtn =()=>{
      count.value+=1
    }
    return ()=> <>
      {/* <div>{count.value}</div>
      <button onClick={clickBtn}>+1</button>
      <RouterLink to="/footer">Go to footer</RouterLink>
      <br />
      <RouterLink to="/bar">Go to bar</RouterLink>
      <br />
      <RouterLink to="/welcome">Go to welcome</RouterLink>
      <br />
      <RouterLink to="/welcome/1">Go to welcome first</RouterLink>
      <br />
      <RouterLink to="/welcome/2">Go to welcome second</RouterLink> */}

      <RouterView />
    </>
  }
})