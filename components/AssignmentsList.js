import Assignment from "./Assignment.js"
import AssignmentTags from "./AssignmentTags.js"
export default {
    components:{
        Assignment, AssignmentTags
    },
    template:` 
    <section v-show="assignments.length">
    <h2 class="font-bold mb-2">{{ title }}
    <span>({{ assignments.length }})
    </span></h2>
    <assignment-tags
     :initial-tags="assignments.map(a => a.tag)"
     :current-tag="currentTag"
     @change="currentTag = $event"/>
    <ul class="border border-gray-200 divide-y mt-6">
 <assignment v-for="assignment in filteredAssignments" :assignment = 'assignment'/>
    </ul>
</section>
`,
props: {
    assignments: Array,
    title: String
},
computed: {
    filteredAssignments () {
        if (this.currentTag === "all") {
            return this.assignments
        } 
        return this.assignments.filter(a => a.tag === this.currentTag)
    }
    },data() {
        return {
            currentTag: "all"
        }
    }
}

