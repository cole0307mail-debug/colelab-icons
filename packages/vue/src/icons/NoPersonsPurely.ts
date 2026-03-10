// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import NoPersonsPurelySvg from '@colelab/icons-svg/es/asn/NoPersonsPurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'NoPersonsPurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: NoPersonsPurelySvg }, slots);
  },
});
