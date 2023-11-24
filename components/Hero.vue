<template>
    <div id="Hero" class="bg-[#1B3764]">
        <div class="max-w-[1300px] mx-auto flex justify-between">
            <div class="pt-[130px]">
                <div class="flex items-center gap-4">
                    <div class="border-b border-b-[#FFCA42] w-[34px]" />
                    <span class="text-white font-normal leading-[154%] italic text-[24px] font-cardo">Welcome to
                        Pages</span>
                </div>
                <div class="max-w-[614px] mt-4">
                    <h1 class="text-white text-[65px] font-cardo font-bold leading-[110%]">Books are uniquely portable magic
                    </h1>
                    <p class="text-[#B4C7E7] text-[18px] font-normal leading-[180%] font-inter max-w-[575px] mt-8">There are
                        many variations of books, but most of them are collected on this site read and get high</p>
                </div>
                <div class="mt-[50px]">
                    <nuxt-link to="/Book">
                        <button
                            class="bg-[#FFCA42] py-[20px] px-[53px] text-[#1B3764] text-[19px] font-medium leading-[125%] hover:bg-[#1B3764] hover:border-[#FFCA42] border border-[#FFCA42] hover:text-[#FFCA42] font-cardo">
                            Book Search
                        </button>
                    </nuxt-link>
                </div>
            </div>
            <div class="pb-[130px]">
                <img src="/BookHero.png" alt="">
            </div>
        </div>
    </div>
</template>