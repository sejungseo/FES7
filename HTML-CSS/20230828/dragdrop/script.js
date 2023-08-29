const dropTarget = document.querySelector('.drop-target');
const dragItems = document.querySelectorAll('.drag-item');

dragItems.forEach((item) => {
  item.addEventListener('dragstart', () => {
    setTimeout(() => {
      item.classList.add('dragging') // 지연 후 실행하겠다
    }, 0)
  })
  item.addEventListener('dragend', () => item.classList.remove('dragging'))
})

function handleDragOver(e) {
  e.preventDefault();
  const draggingItem = dropTarget.querySelector('.dragging');
  const notDraggingItems = Array.from(dropTarget.querySelectorAll('.drag-item:not(.dragging)'));
  
  const nextItem = notDraggingItems.find((itme) => {
    /*
      clientY: 뷰포트 내 마우스 y좌표
      offsetTop: 뷰포트에서 요소까지의 y좌표
      offsetHeight: 요소의 높이(border 포함)
    */
    console.log('clientY: ', e.clientY)
    console.log('offsetTop: ', e.offsetTop)
    console.log('offsetHeight: ', e.offsetHeight)
  })

}


dropTarget.addEventListener('dragover', handleDragOver)
// dropTarget.addEventListener('dragenter')