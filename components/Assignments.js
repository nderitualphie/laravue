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
                { name: 'finish project', complete: false,tag: 'math' },
                { name: 'Read a book', complete: false,tag: 'science' },
                { name: 'submit project', complete: false,tag:'math' }
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
    methods: {
        add(name){
               this.assignments.push({
        name: name,
        completed: false,
       
       })
        }
    }  
}