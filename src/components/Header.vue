<template>
	<header>
		<p>Dutchwebworks logo</p>
		<nav>
			<ul role="navigation">
				<router-link tag="li" :to="{ name: 'linkHome' }" active-class="is-active" exact-active-class="is-exact" exact><a>Home</a></router-link>
				<router-link tag="li" :to="{ name: 'linkAdmin' }" active-class="is-active" exact-active-class="is-exact"><a>Admin</a></router-link>
			</ul>
		</nav>
		<hr>
	</header>
</template>