import AssignmentsList from "./AssignmentsList.js"
import AssignmentCreate from "./AssignmentCreate.js"
export default{
    components:{
        AssignmentsList,
        AssignmentCreate
    },
    template: ` 
   <section class ="flex gap-8">
   <assignments-list :assignments ="filters.inProgress" title ="in Progress">
   <assignment-create @add='add'/>
   </assignments-list>
   <assignments-list v-if="showCompleted"
   :assignments ="filters.completed" can-toggle @toggle="showCompleted = !showCompleted" title ="Completed"></assignments-list>
   
   </section>
   
    `, data() {
        return {
            assignments: [],   
            showCompleted:true
        }
    }, computed: {
         filters(){
            return {
                inProgress: this.assignments.filter(assignment => ! assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
            }
        }
    },
    created () {
fetch('http://localhost:3001/assignments')
.then(response => response.json())
.then(assignments => {
   this.assignments = assignments
})
    },
    methods: {
        add(name){
               this.assignments.push({
        name: name,
        completed: false,
       
       })
        }
    }  
}