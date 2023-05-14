import AssignmentsList from "./AssignmentsList.js"
import AssignmentCreate from "./AssignmentCreate.js"
export default{
    components:{
        AssignmentsList,
        AssignmentCreate
    },
    template: ` 
   <section class ="space-y-6 ">
   <assignments-list :assignments ="filters.inProgress" title ="in Progress"></assignments-list>
   <assignments-list :assignments ="filters.completed" title ="completed Assignments"></assignments-list>
   <assignment-create @add='add'></assignment-create>
   </section>
   
    `, data() {
        return {
            assignments: [
                
            ],   
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