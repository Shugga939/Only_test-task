let list = document.querySelector('.list')

list.addEventListener('click', (e)=> {
  let currentItem = e.target.closest('.list__item')
  let title = currentItem.querySelector('.list__title')
  let spoiler = currentItem.querySelector('.list__spoiler')
  let state = currentItem.querySelector('.list__state')
  spoiler.classList.toggle('hide')
  state.classList.toggle('list__state--open')
  title.classList.toggle('list__title--open')
})
