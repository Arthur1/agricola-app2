<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand to="/">Randomizer for Agricola</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/east_india_company" active-class="active">東インド会社</b-nav-item>
          <b-nav-item to="/field_messenger" active-class="active">畑の使者</b-nav-item>
          <b-nav-item to="/contortionist" active-class="active">ヘビ女</b-nav-item>
          <b-nav-item to="/homo_ludens" active-class="active">ホモ・ルーデンス</b-nav-item>
          <b-nav-item to="/veterinarian" active-class="active">獣医</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href='https://buratsuki.work/' target="_blank" rel="noopener">ぶらつき学生ポータル</b-nav-item>
        </b-navbar-nav>
      </b-collapse>      
    </b-navbar>
  </div>
</template>
