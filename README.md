# Exemplo de site utilizando o SDK do Trakto

# Table of Contents
1. [Introdução](#intro)
2. [Sobre este repositório](#about_repo)
3. [O que é o Trakto ?](#about_trakto)
4. [O que é o Trakto SDK®?](#about_trakto_sdk)
5. [Como este projeto pode ser útil para mim?](#useful)
6. [Como utilizar ?](#howto)

# 1. Sobre este repositório

Este repositório é um exemplo de site com uso do **botão do Trakto, via Trakto® SDK,** para criação de banners, artes para redes sociais, ebooks, etc.

# 2. O que é o Trakto ?

Trakto é uma plataforma de criação de materiais de marketing, vendas e impressos. Com o trakto você consegue criar designs profissionais sem ter experiência com plataformas complexas, como por exemplo o Photoshop e Illustrator.

# 3. O que é o Trakto SDK ?

Trakto SDK é um pacote de desenvolvimento utilizando todos os recursos para criação de materiais de marketing digital, impressos, vendas, etc.

O pacote de desenvolvimento inclui:

1. **Trakto Button®:** uso do editor integrado a sua plataforma;
2. **Trakto API®:** Criação e gestão de materiais criados com o Trakto via Restful API;

#4. Como este projeto pode ser útil para mim ?

Este projeto apresenta uma maneira simples com abordagem enxuta sobre como integrar o botão ao seu site e/ou plataforma.

# 5. Como utilizar ?

Este exemplo já disponibiliza informações e crednciais de uso que podem ser utilizadas como exemplo.

Caso queira customizar com suas credenciais:

1. Identifique seu `API Secret`, `Product Key` e `Email` do usuário que deseja utilizar

```
<script src="https://sdk.trakto.io/trakto-editor.min.js"></script>
<script>
TraktoEditor.init({
          apiSecret: '<SUA API SECRET>',
          productKey: '<SEU PRODUCT KEY>',
          userEmail: '<EMAIL DO USUARIO>',
          buttonClassName: 'trakto-button',
          defaultCallback: data => {},
          listTemplatesCallback: data => {},
          listFormatsCallback: data => {},
          listDocumentsCallback: data => {}
)};
</script>
```

2. Realiza a disponibilização do botão para inicializar o editor

**Criar a partir de um formato de página:**
```
   <button class="<Your Button Class Name>" data-formatid="<Your Format Id>"> 
        Your button title 
   </button>
```
**Criar a partir de um template:**
```
   <button class="<Your Button Class Name>" data-templateid="<Your Format Id>"> 
        Your button title 
   </button>
```
**Continuar a edição de um documento criado anteriormente:**
```
   <button class="<Your Button Class Name>" data-documentid="<Your Format Id>"> 
        Your button title 
   </button>
```
# 6. Links úteis

**Solicite as suas credenciais:** Envie um email para jorge@trakto.io

**Link do Trakto API® e Button®:** [Clique aqui para acessar](https://traktoapi.docs.apiary.io/)

**Veja outros exemplos de uso:** [Ver outros exemplos](https://trakto.design)
