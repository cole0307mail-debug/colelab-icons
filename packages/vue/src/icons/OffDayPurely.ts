// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import OffDayPurelySvg from '@colelab/icons-svg/es/asn/OffDayPurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'OffDayPurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: OffDayPurelySvg }, slots);
  },
});
