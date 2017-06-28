<template>
  <section class="gallery" :class="{'is-in_select_mode': isInSelectMode}">
    <div class="gallery-item" v-for="image in images">
      <div @click="myFilter(image)" class="gallery-image" :class="{ 'is-selected': image.isSelected}" :style="{ backgroundImage: 'url(' + image.path + ')' }">
        <span class="checkmark">
          <i class="checkmark_icon fa fa-check" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  </section>

</template>

<script>
  export default {
    name: 'Gallery',
    methods: {
      myFilter: function(obj) {

        obj.isSelected = !obj.isSelected;

        obj.isSelected ? this.counter++ : this.counter--;

        this.isInSelectMode = true;

        if(this.counter === 0) {
          this.isInSelectMode = false;
        }
      }
    },
    data: () => ({
      isInSelectMode: false,
      counter: 0,
      images: [{
        path: require('../assets/images/grid_image-01.png'),
        isSelected: false
      },
      {
        path: require('../assets/images/grid_image-02.png'),
        isSelected: false
      },
      {
        path: require('../assets/images/grid_image-03.png'),
        isSelected: false
      },
      {
        path: require('../assets/images/grid_image-04.png'),
        isSelected: false
      },
      {
        path: require('../assets/images/grid_image-05.png'),
        isSelected: false
      },
      {
        path: require('../assets/images/grid_image-06.png'),
        isSelected: false
      },
      {
        path: require('../assets/images/grid_image-dark-01.png'),
        isSelected: false
      },
      {
        path: require('../assets/images/grid_image-dark-02.png'),
        isSelected: false
      },
      {
        path: require('../assets/images/grid_image-dark-03.png'),
        isSelected: false
      },
      {
        path: require('../assets/images/grid_image-dark-04.png'),
        isSelected: false
      },
      {
        path: require('../assets/images/grid_image-dark-05.png'),
        isSelected: false
      },
      {
        path: require('../assets/images/grid_image-dark-06.png'),
        isSelected: false
      },
    ]
    })
  }
</script>
