<template>
    <div>
        <NavBar/>
        <createApi/>
    </div>
</template>

<script>

    import NavBar from "../Shared/NavBar";
    import CreateApi from "./CreateApi";

    export default {
        components: {
            NavBar,
            CreateApi,
        },
        props: {
        },
    }
</script>
