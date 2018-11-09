export default {
    install(Vue, options) {
        Vue.directive('fancy', {
            bind(el, binding) {
                setTimeout(() => {
                    el.classList.add(binding.value.classname);                    
                }, binding.modifiers['delayed'] ? binding.value.delay : 0);
            }
        });
    }
}