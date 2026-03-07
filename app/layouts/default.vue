<template>
  <div>
    <NavBar />  <!-- ← just use it, no import needed -->
    <main class="pt-16">  <!-- pt-16 pushes content below fixed navbar -->
      <slot />
    </main>
    <Footer />
  </div>
</template>