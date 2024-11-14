<template>
    <div class="container mt-4">
      <div class="table-title">Bảng Thành Phần Dinh Dưỡng</div>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th rowspan="2">Thành Phần</th>
            <th colspan="2">Giá Trị</th>
          </tr>
          <tr>
            <th>Khối Lượng</th>
            <th>% DV*</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in nutritionalData" :key="index">
            <td v-if="row.isHeader" :rowspan="row.rowspan">{{ row.name }}</td>
            <td>{{ row.value }}</td>
            <td>{{ row.percent }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: "Lab2Bai1",
    data() {
      return {
        nutritionalData: [
          { name: "Calories", value: "200 kcal", percent: "20%" },
          { name: "Chất Béo", value: "9 g", percent: "14%" },
          { name: "Chất Béo Bão Hòa", value: "4 g", percent: "20%" },
          { name: "Chất Đạm", value: "8 g", percent: "16%" },
          { name: "Chất Xơ", value: "5 g", percent: "20%" },
          { name: "Đường", value: "12 g", percent: "-" },
          { name: "Vitamin", value: "Vitamin C", percent: "25%", isHeader: true, rowspan: 2 },
          { name: "", value: "Vitamin D", percent: "10%" }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .table-title {
    color: red;
    font-weight: bold;
    text-align: center;
    font-size: 1.5em;
  }
  .table th {
    text-align: center;
    vertical-align: middle;
    background-color: #ffcc00;
  }
  </style>
  