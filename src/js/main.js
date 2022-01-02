import Popover from './Popover';

export default function main() {
  const button = document.querySelector('.btn');
  let popover;

  button.addEventListener('click', () => {
    if (!button.dataset.tooltipVisible) {
      popover = new Popover(button);
      button.dataset.tooltipVisible = 'yes';
    } else {
      popover.delete();
      button.dataset.tooltipVisible = '';
    }
  });
}
