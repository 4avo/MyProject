<script lang="ts">
    import { goto } from "$app/navigation";
    import { Button } from "$lib/components/ui/button";
    export let data;
    $: ({ user, supabase } = data);
    
    async function logout() {
        await supabase.auth.signOut();
        goto("/", { invalidateAll: true})
    }
</script>

{#if user}
<div class="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen flex flex-col items-center justify-start text-center px-4 sm:px-6 relative">
    <!-- Profile Button in Top Right -->
    <Button on:click={logout} class="absolute top-4 right-4 bg-gray-700 hover:bg-gray-600 text-white rounded-full">
        Profile
    </Button>

    <!-- Logo Section -->
    <div class="mb-8 mt-16">
      <h1 class="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
        MatchReady
        <span class="text-green-500 inline-block">+</span>
      </h1>
      <p class="mt-2 text-lg sm:text-xl font-light text-gray-300">
        Your Gateway to Football Insights
      </p>
    </div>
  
    <!-- Hero Section -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
      <!-- Live Match Stats Card -->
      <div class="bg-gray-800/50 backdrop-blur-md p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
        <h2 class="text-2xl font-bold text-green-400 mb-4">Live Match Stats</h2>
        <p class="text-sm text-gray-400">
          Real-time data on player performance, team dynamics, and match flow.
        </p>
      </div>
  
      <!-- Advanced Analytics Card -->
      <div class="bg-gray-800/50 backdrop-blur-md p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
        <h2 class="text-2xl font-bold text-blue-400 mb-4">Advanced Analytics</h2>
        <p class="text-sm text-gray-400">
          Dive deep into advanced metrics and insights that give you the edge.
        </p>
      </div>
      <div class="bg-gray-800/50 backdrop-blur-md p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
        <h2 class="text-2xl font-bold text-yellow-400 mb-4">Team Comparison</h2>
        <p class="text-sm text-gray-400">
          Compare teams' strengths and weaknesses to plan your next move.
        </p>
      </div>
    </div>
</div>
{/if}
