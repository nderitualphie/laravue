import Assignment from "./Assignment.js"
import AssignmentTags from "./AssignmentTags.js"
export default {
    components:{
        Assignment, AssignmentTags
    },
    template:` 
    <section v-show="assignments.length" class="w-60">
   <div class = "flex justify-between item-start">
   <h2 class="font-bold mb-2">{{ title }}
   <span>({{ assignments.length }})
   </span></h2>
   <button @click="$emit('toggle')">&times;</button>
   </div>
    <assignment-tags
     :initial-tags="assignments.map(a => a.tag)"
     v-model="currentTag"
    />
    <ul class="border border-gray-200 divide-y mt-6">
 <assignment v-for="assignment in filteredAssignments" :assignment = 'assignment'/>
 
    </ul>
   
    <slot></slot>
</section>
`,
props: {
    assignments: Array,
    title: String,
    canToggle: { type:Boolean, default: false}
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
            currentTag: "all",  
        }
    }
}

