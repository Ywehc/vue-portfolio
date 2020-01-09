<template>
    <div>
        <ul class="nav-list">
            <li>about</li>
            <li>skills</li>
            <li>portfolio</li>
            <li>contact</li>
        </ul>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
    .nav-list {
        list-style-type: none;
        padding-left: 0;
        color: white;
        font-size: 150%;
        display: flex;
        flex-direction: row;
        text-align: center;
        justify-content: center;
        li {
            margin: 250px 50px;
        }
    }

    @media screen and (max-width: 768px) {
        .nav-list {
            li {
                margin: 200px 25px;
            }
        }
    }
</style>
