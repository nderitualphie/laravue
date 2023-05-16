import Assignment from "./Assignment.js"
import AssignmentTags from "./AssignmentTags.js"
import panel from "./panel.js"
export default {
    components:{
        Assignment, AssignmentTags,panel
    },
    template:` 
    <panel v-show="assignments.length" class="w-70 bg-gray-700 p-4 border border-gray-600 rounded-lg">
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
    <template v-slot:footer>
test footer
    </template>
</panel>
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

