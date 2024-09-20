import { defineComponent,ref } from "vue";

export const App = defineComponent({
  setup() {
    const count = ref(0)
    const clickBtn =()=>{
      count.value+=1
    }
    return ()=> <>
      <div>{count.value}</div>
      <button onClick={clickBtn}>+1</button>
      <RouterLink to="/footer">Go to footer</RouterLink>

      <RouterLink to="/bar">Go to bar</RouterLink>
      
      <RouterView />
    </>
  }
})