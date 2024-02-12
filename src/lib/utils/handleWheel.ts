import { writable } from 'svelte/store';

export const hide = writable(false);

export const handleWheel = (event: WheelEvent) => {
	const deltaY = event.deltaY;
	if (deltaY > 0) {
		hide.set(true);
	} else if (deltaY < 0) {
		hide.set(false);
	}
};
