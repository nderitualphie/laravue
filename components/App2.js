import Assignments from "./Assignments.js"
import panel from "./panel.js"
export default{
    components: {
        Assignments,
        panel
    },
   template:`
   <div class ="grid gap-6">
   <assignments></assignments>
   </div>`
}