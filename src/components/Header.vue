<template>
	<header>
		<p>Dutchwebworks logo</p>
		<nav>
			<ul role="navigation">
				<router-link tag="li" to="/" active-class="is-active" exact-active-class="is-exact" exact><a>Home</a></router-link>
				<router-link tag="li" to="/admin" active-class="is-active" exact-active-class="is-exact"><a>Admin</a></router-link>
			</ul>
		</nav>
		<hr>
	</header>
</template>