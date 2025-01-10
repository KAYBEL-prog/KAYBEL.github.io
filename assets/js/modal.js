// document.addEventListener('DOMContentLoaded', () => {
//   const drawer = document.getElementById('drawer');
//   const openDrawerBtn = document.getElementById('open-drawer-btn');
//   const closeDrawerBtn = document.getElementById('close-drawer-btn');
//   const drawerContent = drawer.querySelector('.relative');

//   // Открыть Drawer
//   openDrawerBtn.addEventListener('click', () => {
//     drawer.classList.remove('hidden');
//     setTimeout(() => {
//       drawerContent.classList.remove('translate-x-full');
//       drawerContent.classList.add('translate-x-0');
//     }, 50); // Для плавного перехода
//   });

//   // Закрыть Drawer
//   closeDrawerBtn.addEventListener('click', () => {
//     drawerContent.classList.remove('translate-x-0');
//     drawerContent.classList.add('translate-x-full');
//     setTimeout(() => {
//       drawer.classList.add('hidden');
//     }, 300); // Убираем через 300 мс, чтобы завершилась анимация
//   });

//   // Закрытие при клике на фон
//   drawer.addEventListener('click', (event) => {
//     if (event.target === drawer) {
//       closeDrawerBtn.click();
//     }
//   });
// });
