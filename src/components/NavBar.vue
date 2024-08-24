<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/images/bg.png" />
    <nav>
      <ul class="navbar">
        <li v-for="v in navitems" :key="v.title" class="nav-item">
          <RouterLink :to="v.url">
            {{ v.title }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
const navitems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Publication",
    url: "/publication",
  },
  {
    title: "Collaboration",
    url: "/collaboration",
  },
  {
    title: "Funding",
    url: "/funding",
  },
  {
    title: "Link",
    url: "/link",
  },
  {
    title: "A&Q",
    url: "/answer",
  },

  {
    title: "Contact",
    url: "/contact",
  },
];
</script>

<style>
.logo {
  width: 100%;
  height: auto;
  display: block;
}

.navbar {
  list-style: none;
  margin: 0;
  background-color: rgb(30 30 30);
  padding: 0 1.5rem;
  font-size: 1.125rem;
}

.navbar .nav-item {
  display: inline-block;
  position: relative;
}

.navbar .nav-item>a {
  display: block;
  padding: 0.25rem 0.75rem;
  color: #cccccc;
}

.navbar .nav-item>a::after {
  content: "";
  background-color: #ab9981;
  width: 0;
  height: 3px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  -webkit-transition: width 0.5s;
  transition: width 0.5s;
}

.navbar .nav-item>a:hover {
  color: #ffffff;
}

.navbar .nav-item>a:hover::after,
.navbar .nav-item.active>a::after {
  width: 100%;
  color: #ffffff;
}

.navbar .nav-item>a.active {
  color: #ffffff;
}
</style>
