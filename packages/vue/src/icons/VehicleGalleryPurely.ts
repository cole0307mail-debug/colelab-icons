// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import VehicleGalleryPurelySvg from '@colelab/icons-svg/es/asn/VehicleGalleryPurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'VehicleGalleryPurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: VehicleGalleryPurelySvg }, slots);
  },
});
