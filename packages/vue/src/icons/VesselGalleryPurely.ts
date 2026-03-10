// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import VesselGalleryPurelySvg from '@colelab/icons-svg/es/asn/VesselGalleryPurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'VesselGalleryPurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: VesselGalleryPurelySvg }, slots);
  },
});
