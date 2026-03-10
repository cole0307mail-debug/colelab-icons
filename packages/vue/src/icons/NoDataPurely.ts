// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import NoDataPurelySvg from '@colelab/icons-svg/es/asn/NoDataPurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'NoDataPurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: NoDataPurelySvg }, slots);
  },
});
