// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import NoPersonPurelySvg from '@colelab/icons-svg/es/asn/NoPersonPurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'NoPersonPurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: NoPersonPurelySvg }, slots);
  },
});
