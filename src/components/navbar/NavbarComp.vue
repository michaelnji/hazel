<script lang="ts" setup>

</script>

<template>
    <header>
        <div class="nav-container">
            <RouterLink to="/">
                <h2 class="logo">Hazel</h2>
            </RouterLink>
            <nav class="navbar">
                <ul>
                    <RouterLink to="/palettes">
                        <li>
                            <i class="bx bx-palette bx-sm "></i> Palettes
                        </li>
                    </RouterLink>
                    <RouterLink to="/gradients">
                        <li>
                            <i class="bx bx-water bx-sm "></i> Gradients
                        </li>
                    </RouterLink>
                </ul>
            </nav>
            <a target="_blank" href="https://github.com/michaelnji/hazel">
                <div class="btn btn-icon">
                    <i class="bx bxl-github bx-sm "></i>
                </div>
            </a>

            <button class="btn btn-inverse btn-icon ">
                <i class="bx bx-sun bx-sm "></i>
            </button>


        </div>
    </header>
</template>

<style scoped>
@import './navbar.css';
</style>