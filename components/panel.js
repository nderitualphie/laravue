export default{
    template:`
    <div class="bg-gray-700 p-4 border border-gray-600 rounded-lg">
    <h2 class="font-bold mb-2" v-if ="$slots.heading">
     <slot name="heading"/> </h2>
    <slot/>
    <slot name="footer"/>
    </div>
    `,
    
}