/* Sweet Alert */
const Cart = document.getElementById("cart");
const Cart2 = document.getElementById("cart2");
const Shop_now = document.getElementById("shop_now");


Cart.addEventListener('click', () =>{
    Swal.fire({
        title: "Are you sure?",
        text: "Send to cart exactly?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, added to cart!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Shirt added to cart!",
            text: "Check the cart and you will see the Shirt!",
            icon: "success"
          });
        }
      });
      
});

Cart2.addEventListener('click', () =>{
    Swal.fire({
        title: "Are you sure?",
        text: "Send to cart exactly?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, added to cart!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "T-shirts added to cart!",
            text: "Check the cart and you will see the t-shirt!",
            icon: "success"
          });
        }
      });
});

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
      });
    Toast.fire({
        icon: "success",
        title: "Welcome to website!"
      
});

Shop_now.addEventListener("click", () =>{
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Before buying something, you need to register!",
    footer: '<a href="#sing_in.html" >Here is the link for registration</a>'
  });
});