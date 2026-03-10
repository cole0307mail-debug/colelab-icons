// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FootTrafficOutlinedSvg from '@colelab/icons-svg/es/asn/FootTrafficOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FootTrafficOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FootTrafficOutlinedSvg }, slots);
  },
});
