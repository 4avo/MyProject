<script lang="ts">
    import type { PageData } from "./$types.js";
    import Login from "./Login.svelte";
    export let data: PageData;
</script>

<div class="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
    <div class="absolute inset-0 pointer-events-none">
        <canvas id="backgroundCanvas" class="w-full h-full"></canvas>
    </div>
    <div class="max-w-md w-full space-y-8 bg-gray-900 bg-opacity-80 p-6 rounded-lg shadow-lg relative z-10">
        <h2 class="text-center text-3xl font-extrabold text-white">
            Welcome to MatchPlus
        </h2>
        <p class="mt-2 text-center text-sm text-gray-400">
            Analyze football statistics and create your account below.
        </p>
        <Login data={data.form} />
    </div>
</div>

