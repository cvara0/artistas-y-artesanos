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
	new Img('../src/assets/artesania-1.jpg'),
	new Img('../src/assets/arte-1.jpg'),
	new Img('../src/assets/artesania-2.jpg'),
	new Img('../src/assets/arte-2.jpg'),
	new Img('../src/assets/artesania-3.jpg'),
	new Img('../src/assets/arte-3.jpg'),
	new Img('../src/assets/artesania-4.jpg'),
	new Img('../src/assets/arte-4.jpg'),
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



