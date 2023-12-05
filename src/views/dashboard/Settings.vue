<template>
  <div class="tab">
    <router-link class="mb-3" to="/dashboard/settings/account">Account</router-link>
    <router-link class="mb-3" to="/dashboard/settings/website">Website</router-link>
    <router-link class="mb-3" to="/dashboard/settings/theme">Theme</router-link>

    <router-view></router-view>
  </div>
</template>

<style>
.tab a {
  text-decoration: none;
  padding: 3px 9px;
  display: inline-block;
  color: #000;
  font-size: 18px;
  font-weight: bold;
}

.tab a.router-link-active {
    border-bottom: 3px solid var(--brand-color);
}
</style>
