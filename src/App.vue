<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
</script>

<template>
  <!-- Navbar Start -->
  <div class="container-fluid bg-light position-relative shadow">
    <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
      <a href="" class="navbar-brand font-weight-bold text-secondary" style="font-size: 50px">
        <i class="flaticon-043-teddy-bear"></i>
        <span class="text-primary">KidKinder</span>
      </a>
      <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
        <div class="navbar-nav font-weight-bold mx-auto py-0">
          <RouterLink tag="li" to="/" class="nav-item nav-link" active-class="active">Home</RouterLink>
          <RouterLink to="/about" class="nav-item nav-link" active-class="active">About</RouterLink>
          <a href="class.html" class="nav-item nav-link">Classes</a>
          <a href="team.html" class="nav-item nav-link">Teachers</a>
          <a href="gallery.html" class="nav-item nav-link">Gallery</a>
          <div class="nav-item dropdown">
            <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
            <div class="dropdown-menu rounded-0 m-0">
              <a href="blog.html" class="dropdown-item">Blog Grid</a>
              <a href="single.html" class="dropdown-item">Blog Detail</a>
            </div>
          </div>
          <a href="contact.html" class="nav-item nav-link">Contact</a>
        </div>
        <a href="" class="btn btn-primary px-4">Join Class</a>
      </div>
    </nav>
  </div>
  <!-- Navbar End -->

  <RouterView />

  <!-- Footer Start -->
  <Footer />
  <!-- Footer End -->


  <!-- Back to Top -->
  <a href="#" class="btn btn-primary p-3 back-to-top"><i class="fa fa-angle-double-up"></i></a>

</template>
