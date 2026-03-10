// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import VehiclePortraitPurelySvg from '@colelab/icons-svg/es/asn/VehiclePortraitPurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'VehiclePortraitPurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: VehiclePortraitPurelySvg }, slots);
  },
});
