# Summary
1. [About this repository](#about_repo)
2. [What is Trakto ?](#about_trakto)
3. [What is Trakto SDK®?](#about_trakto_sdk)
4. [How can this project be useful for you?](#useful)
5. [How to use ?](#howto)
6. [Running on localhost](#localhost)
7. [Links](#links)

<div id='about_repo'/>

# 1. About this repository

This repository is an example of a site using the **Trakto Button®, via Trakto® SDK**, for creating banners, social posts, ebooks, etc.

<div id='about_trakto'/>

# 2. What is Trakto ?


Trakto is a platform for creating marketing materials, sales and print. 

With Trakto you can create professional designs without having experience with complex platforms, for example Photoshop and Illustrator.

See more on: [https://trakto.design](https://trakto.design)

<div id='about_trakto_sdk'/>

# 3. What is Trakto SDK® ?


Trakto SDK® is a development package utilizing all the resources for creating digital marketing materials, print, sales, etc. It's way to integrate the our editor in your site.

The development packages includes:

1. **Trakto Button®:** Integrate the our editor in your site or plataform.
2. **Trakto API®:** Creation and management of documents created with Trakto via Restful API.

<div id='useful'/>

# 4. How can this project be useful for you ?

This project presents a simple way with lean approach on how to integrate the button to your website and/or platform.

<div id='howto'/>

# 5. How to use ?

The project of this repository already provides information and credncial usage that can be used as an example.
If you want to customize with your credentials:

1. Identify your `API Secret`, `Product Key` and `Email`


**Initialize the sdk and starting the editor via Button**
```js 
 <script>
    window.onload = () => {
        (function() {
            TraktoEditor.init({
                apiSecret: '<Your Api Key>',
                productKey: '<Your Product Key>',
                userEmail: 'user@email.com',
                buttonClassName: 'trakto-button', 
                customLoaderImageUrl: '<Loader image URL>',
                customLoaderColor: '<Hexadecimal Loader color>',
                customLoaderBgColor: '<Hexadecimal Background Loader Color>',
                defaultCallback: data => {  },
                listFormatsCallback: (data) => { },
                listTemplatesCallback: (data) => { },
                listDocumentsCallback: (data) => { }
            });
        })();
    };
</script>
```

**Initialize the sdk and starting the editor via JS**
```JS
 <script>
    window.onload = () => {
        (function() {
            TraktoEditor.init({
                apiSecret: '<Your Api Key>',
                productKey: '<Your Product Key>',
                userEmail: 'user@email.com',
                customLoaderImageUrl: '<Loader image URL>',
                customLoaderColor: '<Hexadecimal Loader color>',
                customLoaderBgColor: '<Hexadecimal Background Loader Color>',
                onAuthenticated: traktoEditor => {
                    if (traktoEditor) {
                        traktoEditor.openDocument('<Document ID>', data => console.log('closed editor'));
                        traktoEditor.openFromTemplate('<Template ID>', data => console.log('closed editor'));
                        traktoEditor.openFromFormat('<Format ID>', data => console.log('closed editor'));
                    }
                },
                defaultCallback: data => {  },
                listFormatsCallback: (data) => { },
                listTemplatesCallback: (data) => { },
                listDocumentsCallback: (data) => { }
            });
        })();
    };
</script>
```

2. Make the button available to initialize the editor


**2.1 Initializing via button**

**Create from empty page:**
```
   <button class="<Your Button Class Name>" data-formatid="<Your Format Id>"> 
        Your button title 
   </button>
```
**Create from template:**
```
   <button class="<Your Button Class Name>" data-templateid="<Your Format Id>"> 
        Your button title 
   </button>
```
**Continue editing a previously created document:**
```
   <button class="<Your Button Class Name>" data-documentid="<Your Format Id>"> 
        Your button title 
   </button>
```

**2.2 Initializing via JS Function**

|Function               |Description                                   |
|-----------------------|----------------------------------------------|
|**openDocument**       | Opens the document previously created by user|
|**openFromTemplate**   | Creates the document from a template         |
|**openFromFormat**     | Creates the document from a pages format     |


<div id='links'/>

> [Access official documentation](https://traktoapi.docs.apiary.io) **if you want to know how to receive the template ID's and page formats.**

<div id='localhost'/>

# 6. Running on localhost

When you're testing`localhost`, the Trakto Button® and Sdk® is avaliable only on ports:

|Host                 |
|---------------------|
|http://localhost:3000|
|http://localhost:4000|
|http://localhost:4200|
|http://localhost:5000|
|http://localhost:8000|
|http://localhost:8080|

# 7. Links

**Request your credentials:** Send a email to jorge@trakto.io

**Official Docs - Trakto API® and Button®:** [Click here](https://traktoapi.docs.apiary.io)

**See others avaliables examples:** [Click here](https://trakto.design)
