<script setup>
const optionsObj = { page: 2, height: '500px', pdfOpenParams: { navpanes: 1, view: 'FitH', pagemode: 'thumbs' }};
</script>

<template>
<h1>Testing PDFObject for Vue 3</h1>
<h2>Set up your Vue project</h2>
<pre>npm create vue@latest</pre>

<h2>Install PDFObject and PDFObject-Vue in your project via NPM.</h2>
<pre>
npm install pdfobject
npm install pdfobject-vue
</pre>

<h2>Add PDFObject plugin to main.js</h2>
<pre>
import { createApp } from 'vue';
import App from './App.vue';
import PDFObjectPlugin from 'pdfobject-vue';
const app = createApp(App);
app.use(PDFObjectPlugin);
app.mount('#app');
</pre>

<h2>Add <code>&lt;PDFObject></code> component to your .vue pages as needed</h2>

<div class="example">
<h3>Example 1: Embed using inline <code>:options</code></h3>
<pre>
&lt;script>&lt;/script>
&lt;template>
&lt;PDFObject url="/pdf/sample.pdf" :options="{ height: '500px', pdfOpenParams: { view: 'FitV' }}" />
&lt;/template>
</pre>
<PDFObject url="/pdf/sample.pdf" :options="{ height: '500px', pdfOpenParams: { view: 'FitV' }}" />
</div>

<div class="example">
<h3>Example 2: Embed using externalized <code>:options</code></h3>
<pre>
&lt;script>
const optionsObj = { page: 2, height: '500px', pdfOpenParams: { navpanes: 1, view: 'FitH', pagemode: 'thumbs' }};
&lt;/script>
&lt;template>
&lt;PDFObject url="/pdf/sample-3pp.pdf" :options="optionsObj" />
&lt;/template>
</pre>
<PDFObject url="/pdf/sample-3pp.pdf" :options="optionsObj" />
</div>
</template>

<style>
html { margin: 0; padding: 2rem; }
body { margin: 0; padding: 0; font: 16px sans-serif; color: #555; }
.example { margin: 3rem 0; }
pre { margin: 1rem; padding: 0; }
h1, h2, h3 { line-height: 120%; margin: 2rem 0 1rem; padding: 0; }
</style>