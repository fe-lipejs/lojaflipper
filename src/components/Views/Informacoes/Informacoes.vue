<template>
    <h1>Informações</h1>
    <h1>Informações</h1>
    <h1>Informações</h1> 
    <div class="form">
        <CaixaTextoCadastro classInputName="nome"  placeholder="Nome ou Razão Social"/>
        <CaixaTextoCadastro classInputName="sobre"  placeholder="Sobrenome"/>
        <CaixaTextoCadastro classInputName="cpfOuCnpj"  placeholder="CPF/CNPJ"/>
        <CaixaTextoCadastro classInputName="telefone"  placeholder="Telefone ou Celular"/>
        <ButtonPadrao href="/pagamento" texto="OK"/>
    </div>
</template>

<script>
import ButtonPadrao from '@/components/ButtonPadrao.vue'
import CaixaTextoCadastro from '@/components/caixaTextoCadastro.vue'

export default {
    name: 'Informacoes',
    components:{
        ButtonPadrao,
        CaixaTextoCadastro
    },
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.form{
    margin-top: 36px;
}

</style>