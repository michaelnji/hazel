<script lang="ts" setup>
import { palettes } from '@/data/palettes';
import { colorToHex } from '@/scripts/colors';
import { useClipboard } from '@vueuse/core/index.cjs';
import { watch } from 'vue';
import tinycolor from 'tinycolor2';
import { computed, onMounted, ref } from 'vue';
const { copy, copied, isSupported } = useClipboard()
const random = ref(Math.floor(Math.random() * (palettes.length - 1)))
const currentPalette = computed(() => palettes[random.value])
const paletteName = computed(() => {
    return currentPalette.value.name
})
onMounted(() => {
    const swatches: NodeListOf<HTMLElement> = document.querySelectorAll('.swatch')
    const names: NodeListOf<HTMLElement> = document.querySelectorAll('.swatch span')
    const copyButtons: NodeListOf<HTMLElement> = document.querySelectorAll('.swatch p')
    for (let index = 0; index < swatches.length; index++) {
        const element = swatches[index];
        element.style.backgroundColor = colorToHex(currentPalette.value.colors[index].hex)
        names[index].innerText = currentPalette.value.colors[index].hex

        if (tinycolor(currentPalette.value.colors[index].hex).isDark()) {
            names[index].style.backgroundColor = colorToHex(tinycolor(currentPalette.value.colors[index].hex).lighten(10).setAlpha(0.1))
            names[index].style.color = colorToHex(tinycolor(currentPalette.value.colors[index].hex).lighten(60))
            copyButtons[index].style.backgroundColor = colorToHex(tinycolor(currentPalette.value.colors[index].hex).lighten(10).setAlpha(0.1))
            copyButtons[index].style.color = colorToHex(tinycolor(currentPalette.value.colors[index].hex).lighten(60))
        }
        if (tinycolor(currentPalette.value.colors[index].hex).isLight()) {
            names[index].style.backgroundColor = colorToHex(tinycolor(currentPalette.value.colors[index].hex).darken(20).setAlpha(0.1))
            names[index].style.color = colorToHex(tinycolor(currentPalette.value.colors[index].hex).darken(60))
            copyButtons[index].style.backgroundColor = colorToHex(tinycolor(currentPalette.value.colors[index].hex).darken(20).setAlpha(0.1))
            copyButtons[index].style.color = colorToHex(tinycolor(currentPalette.value.colors[index].hex).darken(60))
        }


    }
})

watch(random, () => {
    const swatches: NodeListOf<HTMLElement> = document.querySelectorAll('.swatch')
    const names: NodeListOf<HTMLElement> = document.querySelectorAll('.swatch span')
    const copyButtons: NodeListOf<HTMLElement> = document.querySelectorAll('.swatch p')
    for (let index = 0; index < swatches.length; index++) {
        const element = swatches[index];
        element.style.backgroundColor = colorToHex(currentPalette.value.colors[index].hex)
        names[index].innerText = currentPalette.value.colors[index].hex

        if (tinycolor(currentPalette.value.colors[index].hex).isDark()) {
            names[index].style.backgroundColor = colorToHex(tinycolor(currentPalette.value.colors[index].hex).lighten(10).setAlpha(0.1))
            names[index].style.color = colorToHex(tinycolor(currentPalette.value.colors[index].hex).lighten(60))
            copyButtons[index].style.backgroundColor = colorToHex(tinycolor(currentPalette.value.colors[index].hex).lighten(10).setAlpha(0.1))
            copyButtons[index].style.color = colorToHex(tinycolor(currentPalette.value.colors[index].hex).lighten(60))
        }
        if (tinycolor(currentPalette.value.colors[index].hex).isLight()) {
            names[index].style.backgroundColor = colorToHex(tinycolor(currentPalette.value.colors[index].hex).darken(20).setAlpha(0.1))
            names[index].style.color = colorToHex(tinycolor(currentPalette.value.colors[index].hex).darken(60))
            copyButtons[index].style.backgroundColor = colorToHex(tinycolor(currentPalette.value.colors[index].hex).darken(20).setAlpha(0.1))
            copyButtons[index].style.color = colorToHex(tinycolor(currentPalette.value.colors[index].hex).darken(60))
        }


    }
})


</script>
<template>
    <div class="generator-container">
        <div class="swatches">
            <div class="swatch" v-for="color in currentPalette.colors"><span class="color-name"></span>
                <p v-if="isSupported" @click="copy(colorToHex(color.hex))">
                    <i class="bx bx-copy bx-sm" v-if="!copied"></i>
                    <i class="bx bx-check bx-sm" v-if="copied"></i>
                </p>
            </div>
        </div>
        <div class="controls">

            <p class="theme-name"> <i class="bx bx-sm bx-paint-roll"></i>{{ paletteName }}</p>
            <button @click=" random = Math.floor(Math.random() * (palettes.length - 1))" class="btn btn-icon">
                <i class="bx bx-sm bx-revision"></i>
            </button>
        </div>
    </div>
</template>

<style scoped>
@import './heroPreview.css';
</style>