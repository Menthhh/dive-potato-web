<template>
  <div className="flex flex-col gap-5">
    <ImageSlider/>
    <div className="container mx-auto">
      <BeginnerBanner/>
      <FAQ/>
      <FeaturedProducts/>
      <EquipmentDisplay/>
    </div>
  </div>
</template>

<script>
import ImageSlider from "./components/ImageSlider.vue"
import BeginnerBanner from "./components/BeginnerBanner.vue"
import FAQ from "./components/FAQ.vue"
import FeaturedProducts from "./components/FeaturedProducts.vue"
import EquipmentDisplay from "./components/EquipmentDisplay.vue"

export default {
  components: {
    ImageSlider,
    BeginnerBanner,
    FAQ,
    FeaturedProducts,
    EquipmentDisplay
  },
};
</script>
