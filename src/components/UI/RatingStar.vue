<script setup>

</script>

<template>
      
      <div class="rating rating2"><!--
          --><a href="#5" title="Give 5 stars">★</a><!--
          --><a href="#4" title="Give 4 stars">★</a><!--
          --><a href="#3" title="Give 3 stars">★</a><!--
          --><a href="#2" title="Give 2 stars">★</a><!--
          --><a href="#1" title="Give 1 star">★</a>
      </div>
</template>



<style scoped>
body {
  		background: #FDFDFD;
			font-family: "Segoe WP","Segoe UI", Helvetica, Arial, sans-serif;
			text-align:center;
		}
		h1, h2 {
			color: #888;
			margin:0;
			font-weight:normal;
		}
		h1{ padding-top: 1.5em; padding-bottom: 2em; } 
		h2 {
			clear:both;
			color: #aaa;
			padding: 2em 0 0.3em
		}
		em {
			display: block;
			margin: .5em auto 2em;
			color: #bbb;
		}

		p, p a { 
			color: #aaa;
			text-decoration: none;
		}
		p a:hover,
		p a:focus {
			text-decoration: underline;
		}
		p + p { color: #bbb; margin-top: 2em;}
		.detail {position: absolute; text-align: right; right: 5px; bottom: 5px; width: 50%;}
		
		a[href*="intent"] {
			display:inline-block;
			margin-top: 0.4em;
		}

		/*  
		 * Rating styles
		 */
		.rating {
			width: 226px;
			margin: 0 auto 1em;
			font-size: 45px;
			overflow:hidden;
		}
.rating input {
  float: right;
  opacity: 0;
  position: absolute;
}
		.rating a,
    .rating label {
			float:right;
			color: #aaa;
			text-decoration: none;
			-webkit-transition: color .4s;
			-moz-transition: color .4s;
			-o-transition: color .4s;
			transition: color .4s;
		}
.rating label:hover ~ label,
.rating input:focus ~ label,
.rating label:hover,
		.rating a:hover,
		.rating a:hover ~ a,
		.rating a:focus,
		.rating a:focus ~ a		{
			color: orange;
			cursor: pointer;
		}
		.rating2 {
			direction: rtl;
		}
		.rating2 a {
			float:none
		}
</style>