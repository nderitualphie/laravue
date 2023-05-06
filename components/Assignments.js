import AssignmentsList from "./AssignmentsList.js"
export default{
    components:{
        AssignmentsList
    },
    template: ` 
   <section class ="space-y-6">
   <assignments-list :assignments ="filters.inProgress" title ="in Progress"></assignments-list>
   <assignments-list :assignments ="filters.completed" title ="completed Assignments"></assignments-list>
   </section>
   
    `, data() {
        return {
            assignments: [
                { name: 'finish project', complete: false },
                { name: 'Read a book', complete: false },
                { name: 'submit project', complete: false }
            ]
        }
    }, computed: {
         filters(){
            return {
                inProgress: this.assignments.filter(assignment => ! assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
            }
        }
    }
}