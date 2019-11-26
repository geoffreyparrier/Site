<template>
    <main>
        <header>
            <div>You are logged in as: userName</div>
            <nav>
                <inertia-link href="/">Home</inertia-link>
                <inertia-link href="/about">About</inertia-link>
                <inertia-link href="/contact">Contact</inertia-link>
            </nav>
        </header>
        <content>
            <slot />
        </content>
        <footer></footer>
    </main>
</template>
<script>
    export default {
        name: 'NavBar'
    }
</script>
