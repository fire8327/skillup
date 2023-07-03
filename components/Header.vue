<template>
    <header class="w-full py-6 grid-container relative">
        <div class="flex items-center justify-between">
            <NuxtLink to="/">
                <img src="/images/header/logo.png" alt="">
            </NuxtLink>
            <nav class="flex items-center gap-10 font-semibold text-white text-xl transition-transform duration-500 z-50 max-lg:absolute max-lg:w-full max-lg:left-0 max-lg:flex-col max-lg:border-t-2 border-white max-lg:py-6 max-lg:bg-gradient-to-t from-[#151926] to-[#151E46]" :class="isMenuShow ? 'max-lg:top-full' : 'max-lg:top-0 max-lg:-translate-y-full'">
                <NuxtLink @click="isMenuShow = false" to="#home">Home</NuxtLink>
                <NuxtLink @click="isMenuShow = false" to="#study">Study</NuxtLink>
                <NuxtLink @click="isMenuShow = false" to="#course">Course</NuxtLink>
                <NuxtLink @click="isMenuShow = false" to="#teachers">Teachers</NuxtLink>
                <NuxtLink @click="isMenuShow = false" to="#price">Price</NuxtLink>
                <button class="border border-[#EAEAEA66] py-4 px-7 text-white rounded-2xl text-lg font-medium lg:hidden">Start Learning</button>
            </nav>
            <button class="border border-[#EAEAEA66] py-4 px-7 text-white rounded-2xl text-lg font-medium max-lg:hidden transition-colors duration-500 hover:bg-[#EAEAEA] hover:text-[#1B275A]">Start Learning</button>
            <button class="flex flex-col justify-between w-[26px] transition-[height] ease-linear duration-100 lg:hidden" :class="isMenuShow ? 'h-5' : 'h-3.5'" @click="isMenuShow = !isMenuShow">
                <span :class="{'rotate-45' : isMenuShow}" class="w-full h-0.5 bg-white rounded-[1px] origin-[0] transition-transform ease-linear duration-500"></span>
                <span :class="{'opacity-0' : isMenuShow}" class="w-full h-0.5 bg-white rounded-[1px] transition-opacity ease-linear duration-500"></span>
                <span :class="{'-rotate-45' : isMenuShow}" class="w-full h-0.5 bg-white rounded-[1px] origin-[0] transition-transform ease-linear duration-500"></span>
            </button>
        </div>
    </header>
</template>

<script setup>
    const isMenuShow = ref(false)
</script>
