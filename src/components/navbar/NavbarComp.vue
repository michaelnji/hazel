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
                    <RouterLink to="/">
                        <li>
                            <i class="bx bx-home-alt bx-sm "></i> Home
                        </li>
                    </RouterLink>
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
                    <RouterLink to="/api">
                        <li>
                            <i class="bx bx-network-chart bx-sm "></i> API
                        </li>
                    </RouterLink>
                </ul>
            </nav>
            <a target="_blank" href="https://github.com/michaelnji/hazel">
                <div class="btn btn-icon btn-inverse">
                    <i class="bx bxl-github bx-sm "></i>
                </div>
            </a>

            <button class="btn btn-inverse btn-icon ">
                <i class="bx bx-sun bx-sm "></i>
            </button>


        </div>
        <div class="nav-container-mobile">
            <RouterLink to="/">
                <h2 class="logo">Hazel</h2>
            </RouterLink>

            <nav class="navbar">
                <div class="nav-head">
                    <button class="btn  btn-icon ">
                        <i class="bx bx-x bx-sm btn-ghost "></i>
                    </button>
                </div>
                <ul>
                    <RouterLink to="/">
                        <li>
                            <i class="bx bx-home-alt bx-sm "></i> Home
                        </li>
                    </RouterLink>
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
                    <RouterLink to="/api">
                        <li>
                            <i class="bx bx-network-chart bx-sm "></i> API
                        </li>
                    </RouterLink>
                </ul>
                <div class="nav-footer">
                    <button class="btn  btn-icon ">
                        <i class="bx bx-sun bx-sm "></i>
                    </button>
                    <p>Built with 💦 & 🖥️</p>
                </div>
            </nav>
            <div class="nav-end">
                <a target="_blank" href="https://github.com/michaelnji/hazel">
                    <div class="btn btn-icon btn-inverse">
                        <i class="bx bxl-github bx-sm "></i>
                    </div>
                </a>
                <button class="btn  btn-icon btn-inverse ">
                    <i class="bx bx-menu bx-sm "></i>
                </button>
            </div>




        </div>
    </header>
</template>

<style scoped>
@import './navbar.css';
</style>