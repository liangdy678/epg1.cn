import { ref, onMounted, onBeforeUnmount } from "vue"


export function useElementSize(el) {
    const width = ref(0)
    const height = ref(0)
    const Observer = new ResizeObserver(entries => {
        const entry = entries.at(0)
        width.value = entry.contentRect.width
        height.value = entry.contentRect.height

    })

    onMounted(() => {
        width.value = el.value.offsetWidth
        height.value = el.value.offsetHeight
        Observer.observe(el.value)
    })

    onBeforeUnmount(() => {
        Observer.disconnect()
    })

    return {
        width,
        height
    }
}



export const usePromise = () => {
    var resolve;
    var reject;
    const promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
    });

    return { promise, resolve, reject };
};