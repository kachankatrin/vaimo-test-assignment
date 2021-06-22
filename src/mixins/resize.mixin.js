export default {
    data: () => ({
      window: {
        width: 0,
        height: 0,
      },
    }),
    methods: {
      onResize() {
        this.window.width = window.innerWidth;
        this.window.height = window.innerHeight;
      },
    },
    created() {
      window.addEventListener('resize', this.onResize);
      this.onResize();
    },
    updated() {
        window.addEventListener('resize', this.onResize);
        this.onResize();
      },
    destroyed() {
      window.removeEventListener('resize', this.onResize);
    },
  };