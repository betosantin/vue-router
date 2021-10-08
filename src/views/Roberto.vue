<template>
    <div>
        <input type="text" name="email" id="email" placeholder="E-mail"><br>
        <input type="text" name="nome" id="nome" placeholder="Nome"><br>
        <button>Testando</button>
        <h4>Parametro: {{parametroRota}}</h4>
    </div>

</template>

<script>
export default {
    created(){
        this.parametroRota = this.$route.params.dado;
    },
    data(){
        return {
            parametroRota: null
        }
    }
}
</script>