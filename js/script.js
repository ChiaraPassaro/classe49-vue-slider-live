const app = new Vue(
  {
    el: '#app',
    data: {
      counter: null,
      images: [
        // 'image1.jpg',
        // 'image2.jpg',
        // 'image3.jpg',
        // 'image4.jpg',
      ]
    },
    methods: {
      next: function () {
        this.counter += 1;
        if (this.counter > this.images.length - 1) {
          this.counter = 0;
        }
      },
      prev: function () {
        this.counter -= 1;
        if (this.counter < 0) {
          this.counter = this.images.length - 1;
        }
      }
    },
    created() {
      this.images = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        'image4.jpg'
      ];
      this.counter = 0;
    }
  }
);