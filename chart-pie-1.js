 // ข้อมูลและการตั้งค่าสำหรับ ApexCharts Pie Chart
 var optionsPie = {
  chart: {
    type: 'donut', // ใช้ donut chart
    height: 350
  },
  series: [55, 30, 15], // ข้อมูลตัวเลข
  labels: ['Direct', 'Social', 'Referral'], // ชื่อหมวดหมู่
  colors: ['#4e73df', '#1cc88a', '#36b9cc'], // สีของกราฟ
  legend: {
    show: true, // แสดง legend
    position: 'bottom' // ตำแหน่ง legend
  },
  tooltip: {
    theme: 'light', // ธีม tooltip
    y: {
      formatter: function (val) {
        return `${val}%`; // เพิ่ม % ใน tooltip
      }
    }
  },
  plotOptions: {
    pie: {
      donut: {
        size: '70%', // กำหนดขนาดพื้นที่ตรงกลาง
      }
    }
  }
};


// สร้างกราฟและแสดงผลใน id "myPieChart"
var chartPie = new ApexCharts(document.querySelector("#myPieChart"), optionsPie);
chartPie.render();