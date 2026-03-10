// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import GasSensorPurelySvg from '@colelab/icons-svg/es/asn/GasSensorPurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'GasSensorPurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: GasSensorPurelySvg }, slots);
  },
});
