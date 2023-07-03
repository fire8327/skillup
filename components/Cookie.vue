<template>
    <div class="fixed bottom-4 w-[90%] left-1/2 -translate-x-1/2 bg-[#EAEAEA] py-2 flex max-md:flex-col gap-6 items-center md:justify-center rounded-[20px] font-semibold z-40 px-6 transition-all duration-500" v-if="cookieShow">
        <p class="text-[#1B275A]">By visiting our website, you accept cookie policy</p>
        <div class="flex items-center gap-4">
            <button @click="cookieShow = false" class="border border-[#FAB437] bg-[#FAB437] transition-all duration-500 hover:bg-transparent px-4 py-2 rounded-[20px]">Ok</button>
            <button @click="cookieShow = false" class="border border-[#FAB437] hover:bg-[#FAB437] transition-all duration-500 bg-transparent px-4 py-2 rounded-[20px]">Cancel</button>
        </div>
    </div>
</template>

<script setup>
    const cookieShow = ref(true)


</script>
