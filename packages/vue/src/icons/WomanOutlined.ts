// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import WomanOutlinedSvg from '@colelab/icons-svg/es/asn/WomanOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'WomanOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: WomanOutlinedSvg }, slots);
  },
});
