
// module.exports = {
//     content: ["./src/**/*.{html,js}"],
//     theme: {
//       extend: {},
//     },
//     plugins: [],
//   }
const toggle_btn = document.querySelector("#toggle_btn")
const toggled_div = document.querySelector("#toggled_div")

toggle_btn.addEventListener("click" , ()=>{
    toggled_div.classList.toggle("h-36")
    toggle_btn.classList.toggle("border-4")
    toggle_btn.classList.toggle("border-black")
})