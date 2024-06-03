<script setup>
 import { ref, shallowReactive } from 'vue';
 import {
	VueFlux,
	FluxCaption,
	FluxControls,
	FluxIndex,
	FluxPagination,
	FluxPreloader,
	Img,
	Book,
	Zip,
	Fade
} from 'vue-flux';
import 'vue-flux/style.css';

const $vueFlux = ref();

const options = shallowReactive({
	allowFullscreen: false,
	allowToSkipTransition: true,
	autohideTime: 2500,
	autoplay: true,
	bindKeys: false,
	delay: 3000,
	enableGestures: false,
	infinite: true,
	lazyLoad: true,
	lazyLoadAfter: 3
});

const rscs = shallowReactive([
	new Img('https://i.ytimg.com/vi/nMr4zBboJ3A/maxresdefault.jpg'),
	new Img('https://i.postimg.cc/V6xttjdk/artesania-2.jpg'),
	new Img('https://i.postimg.cc/bvFkyXPb/artesania-3.jpg'),
	new Img('https://i.postimg.cc/gJXRrMc7/artesania-4.jpg'),
	new Img('https://i.ytimg.com/vi/_Nr9VPY8b-Q/maxresdefault.jpg'),
	new Img('https://lh5.googleusercontent.com/proxy/rqX9WzdCIJ0Z2W_KqUuvVn4nhR5f2Clw7co-pb4855AkLwaWuFhUgwG3c6zAu-0_-2WN00n21HGcqX6YN4JCi1Q2NnW6ksS4EbjnT4J3YD3Rb7Oq3f5_pw'),
	new Img('https://definicion.de/wp-content/uploads/2011/04/artesania-1.jpg'),
	new Img('https://geolupa.blob.core.windows.net/decultura/Images/Articles/Article_21/Original/e91d23db-980a-4fcc-8752-283c1b34fc20.jpg'),
]);

const transitions = shallowReactive([Fade]);
</script>

<template>
	<VueFlux
	:options="options"
	:rscs="rscs"
	:transitions="transitions"
	ref="$vueFlux">

	<template #preloader="preloaderProps">
		<FluxPreloader v-bind="preloaderProps" />
	</template>

	<template #caption="captionProps">
		<FluxCaption v-bind="captionProps" />
	</template>

	<template #controls="controlsProps">
		<FluxControls v-bind="controlsProps" />
	</template>

	<template #pagination="paginationProps">
		<FluxPagination v-bind="paginationProps" />
	</template>

	<template #index="indexProps">
		<FluxIndex v-bind="indexProps" />
	</template>
</VueFlux>
</template>



