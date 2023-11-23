<template>
    <div>
        <ContactHead />
        <div id="Contact" class="bg-[#d8e6ff] mt-[100px] py-10 mb-[160px]">
            <div class="max-w-[1300px] mx-auto w-full h-full">
                <div class="text-center">
                    <h2 class="text-[45px] text-[#1B3764] font-cardo font-bold leading-[120%] mb-6">My Github</h2>
                    <div class="border-b-[2px] border-b-[#f8c43e] w-[340px] mx-auto" />
                    <a href="https://github.com/Xenob1na">
                        <button
                            class="bg-[#FFCA42] mt-6 py-[20px] px-[53px] text-[#1B3764] text-[19px] font-medium leading-[125%] hover:bg-[#1B3764] hover:border-[#FFCA42] border border-[#FFCA42] hover:text-[#FFCA42] font-cardo">
                            Go to my github
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'Contact',
})
</script>