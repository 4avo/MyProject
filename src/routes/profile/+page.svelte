<script lang="ts">
    import { goto } from "$app/navigation";
    import { Button } from "$lib/components/ui/button";
    export let data;
    $: ({ user, supabase } = data);
  
    function navigateBack() {
      goto("/");
    }

    async function logout() {
        await supabase.auth.signOut();
        goto("/", { invalidateAll: true})
    }
  </script>
  
  {#if user}
  <div class="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen flex flex-col items-center justify-start text-center px-4 sm:px-6 relative">
    <!-- Back Button in Top Right -->
    <button 
      on:click={navigateBack} 
      class="absolute top-4 right-4 bg-gray-700 hover:bg-gray-600 text-white rounded-full px-6 py-3 text-lg font-semibold shadow-lg transition duration-300 transform hover:scale-105"
    >
      Home
    </button>
  
    <!-- Profile Section -->
    <div class="mb-8 mt-16">
      <h1 class="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
        Profile
      </h1>
      <p class="mt-2 text-lg sm:text-xl font-light text-gray-300">
        Welcome, {user.name || "User"}!
      </p>
    </div>
  
    <!-- Profile Card -->
    <div class="bg-gray-800/50 backdrop-blur-md p-6 rounded-lg shadow-lg w-full max-w-lg">
      <h2 class="text-2xl font-bold text-gray-100">{user.name || "Unknown User"}</h2>
      <p class="text-gray-400 text-lg mt-2">{user.email || "No email provided"}</p>
      <p class="text-gray-300 mt-4">{user.bio || "No bio available"}</p>
      <Button on:click="{logout}">Log out</Button>
    </div>
    
  </div>

  {:else}
  <div class="text-white min-h-screen flex items-center justify-center">
    <p class="text-lg">No user data found. Please log in.</p>
  </div>
  {/if}
  