<template>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <div class="container">

      <!-- Header
      <header class="row bg-warning p-2">Header</header> -->

      <!-- Navbar -->
      <nav class="navbar navbar-expand-sm navbar-dark" style="background-color: gold;">
        <div class="container">
          <a class="navbar-brand" href="Lab3Index.html">
            <img :src="require('../components/images/logo-energy-pilates.png')" style="width: 150px;"/>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link" href="/lab3bai3"><i class="fa-solid fa-list"></i> Bài viết</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="fa-solid fa-film"></i> Video</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="fa-solid fa-circle-info"></i> Giới thiệu</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="fa-solid fa-calendar-days"></i> Sự kiện</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                  <i class="fa-solid fa-user"></i> Tài khoản
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Đăng nhập</a></li>
                  <li><a class="dropdown-item" href="#">Quên mật khẩu</a></li>
                  <li><a class="dropdown-item" href="#">Đăng ký thành viên</a></li>
                </ul>
              </li>
            </ul>
            <ul class="navbar-nav d-flex">
              <li class="nav-item">
                <a class="nav-link">Tiếng Việt</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Tiếng Anh</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../components/images/banner1.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="../components/images/banner2.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="../components/images/banner3.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      
  
      <!-- Main Section -->
      <section class="row">
        <!-- Sidebar -->
        <aside class="col-sm-4">
          <h2 class="text-info mb-3">Về tôi</h2>
          <div class="card blog">
            <img :src="require('../components/images/avatar.png')"/>
            <div class="card-body">
              <h5 class="card-title">Giới thiệu bản thân</h5>
              <p class="card-text">
                TS. Trần Hoàng, Tổ chức tư vấn sức khỏe quốc tế độc lập <br>
                Phạm ngôn: Ta không được chọn nơi mình sinh ra, nhưng ta được chọn cách mình sẽ sống.
              </p>
            </div>
          </div>
          <h3 class="text-info mt-2">Chuyên mục</h3>
          <ul class="list-group">
            <li class="list-group-item active bg-info d-flex justify-content-between align-items-center">
              <a class="nav-link text-white" href="#">Chế độ tập</a>
              <span class="badge bg-primary rounded-pill">12</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <a class="nav-link" href="#">Chế độ dinh dưỡng</a>
              <span class="badge bg-primary rounded-pill">15</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <a class="nav-link" href="#">Cẩm nang cuộc sống</a>
              <span class="badge bg-primary rounded-pill">99</span>
            </li>
          </ul>
        </aside>
  
        <!-- Blog Section -->
        <article class="col-sm-8">
          <h2 class="text-info mb-3">Blog của tôi</h2>
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img :src="require('../components/images/tap-piltes.jpg')" alt="..." style="width: 300px; height: auto;">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Phương pháp tập Pilates giúp phục hồi chấn thương cột sống <span class="badge bg-secondary">16</span></h5>
                  <p class="card-text">
                    Ngoài việc giúp duy trì vóc dáng, cải thiện sự linh hoạt, dẻo dai cho người tập, Pilates giúp cơ bắp và các khớp mềm dẻo hơn, kéo giãn hơn...
                  </p>
                  <a href="#" class="btn btn-primary">Xem thêm</a>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="list-group list-group-flush">
              <a href="#" class="list-group-item list-group-item-action d-flex align-items-center">
                <img :src="require('../components/images/corevalue.jpg')" alt="" class="me-3" style="width: 70px; height: auto; object-fit: cover; border-radius: 10%;">
                Biết ơn đời, đời sẽ thương ta
                <span class="badge bg-primary rounded-pill ms-auto">30</span>              
              </a>
              <a href="#" class="list-group-item list-group-item-action d-flex align-items-center">
                <img :src="require('../components/images/orange_300x300.jpg')" alt="" class="me-3" style="width: 70px; height: auto; object-fit: cover; border-radius: 10%;">
                9 tác dụng tuyệt vời của quả cam
                <span class="badge bg-primary rounded-pill ms-auto">28</span>              
              </a>
              <a href="#" class="list-group-item list-group-item-action d-flex align-items-center">
                <img :src="require('../components/images/sesameoil_300x300.jpg')" alt="" class="me-3" style="width: 70px; height: auto; object-fit: cover; border-radius: 10%;">
                10 công dụng bất ngờ từ dầu dừa
                <span class="badge bg-primary rounded-pill ms-auto">15</span>              
              </a>
              <a href="#" class="list-group-item list-group-item-action d-flex align-items-center">
                <img :src="require('../components/images/spinach_300x300.jpg')" alt="" class="me-3" style="width: 70px; height: auto; object-fit: cover; border-radius: 10%;">
                Lợi ích khi ăn rau mỗi ngày
                <span class="badge bg-primary rounded-pill ms-auto">12</span>              
              </a>
              <!-- Repeat other articles as needed -->
            </div>
          </div>
          <!-- View More Button -->
          <div class="card-body text-center">
            <a href="#" class="btn btn-primary">Xem thêm</a>
          </div>
        </article>
      </section>
  
      <section class="container my-5">
    <div class="row">
        <!-- Phần Đọc nhiều/Xem nhiều bên trái -->
        <div class="col-md-3">
            <h2 class="text-info mb-3">Đọc nhiều</h2>
            <ul class="list-unstyled">
                <li class="mb-3 d-flex align-items-start">
                    <img src="../components/images/corevalue.jpg" alt="Biết ơn đời" class="me-2" style="width: 60px; height: 60px; object-fit: cover;">
                    <a href="#" class="text-decoration-none text-dark">Biết ơn đời, đời sẽ thương ta</a>
                </li>
                <li class="mb-3 d-flex align-items-start">
                    <img src="../components/images/sesameoil_300x300.jpg" alt="Dầu dừa" class="me-2" style="width: 60px; height: 60px; object-fit: cover;">
                    <a href="#" class="text-decoration-none text-dark">10 công dụng bất ngờ từ dầu dừa</a>
                </li>
                <li class="mb-3 d-flex align-items-start">
                    <img src="../components/images/spinach_300x300.jpg" alt="Rau" class="me-2" style="width: 60px; height: 60px; object-fit: cover;">
                    <a href="#" class="text-decoration-none text-dark">Lợi ích khi ăn rau mỗi ngày</a>
                </li>
            </ul>
        </div>

        <!-- Phần Video Đừng bỏ lỡ -->
        <div class="col-md-9">
            <h2 class="text-info mb-3 text-center">VIDEO-ĐỪNG BỎ LỞ</h2>
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div class="card h-100">
                        <img src="../components/images/video1.jpg" class="card-img-top" alt="Video 1">
                        <div class="card-body">
                            <h6 class="card-title">Đi xa hơn để trưởng thành hơn</h6>
                            <p class="card-text">Tuổi trẻ chỉ nghĩ đến những chuyến đi, đợi mong một ngày được bay nhảy trên những phương trời mới lạ...</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="../components/images/video2.jpg" class="card-img-top" alt="Video 2">
                        <div class="card-body">
                            <h6 class="card-title">Chút tâm tư những ngày cuối năm</h6>
                            <p class="card-text">Guồng quay cuộc sống đôi khi khiến chúng ta quên đi những khoảnh khắc...</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="../components/images/video3.jpg" class="card-img-top" alt="Video 3">
                        <div class="card-body">
                            <h6 class="card-title">Ước gì được trở về tuổi thơ</h6>
<p class="card-text">Tuổi trẻ chỉ nghĩ đến những chuyến đi, đợi mong một ngày được bay nhảy trên những phương trời mới lạ...</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="../components/images/video4.jpg" class="card-img-top" alt="Video 4">
                        <div class="card-body">
                            <h6 class="card-title">Ba người thầy vĩ đại</h6>
                            <p class="card-text">Ta xem văn vật là thầy. Tinh thần học hỏi của ta luôn rộng mở hơn tất cả các người...</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Nút Xem thêm -->
            <div class="text-center mt-4">
                <a href="#" class="btn btn-primary">Xem thêm</a>
            </div>
        </div>
    </div>
</section>
      <!-- Footer -->
      <footer class="row bg-dark text-white text-center p-3 mt-3">
        <p>&copy; Copyright by FPT Polytechnic</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: "Lab3_Bai1"
  };
  </script>
  
  <style>
  .nav-item .nav-link{
    color: black;
  }
</style>